<?php
// Optional Composer autoloader if available
$autoload = __DIR__ . '/vendor/autoload.php';
if (file_exists($autoload)) {
    require $autoload;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'error: method not allowed';
    exit;
}

// Support JSON (fetch) and form POST
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data) || empty($data)) {
    $data = $_POST;
}

$sanitize = static function ($value) {
    return is_string($value) ? strip_tags(trim($value)) : '';
};

$name            = isset($data['name']) ? $sanitize($data['name']) : '';
$email           = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$phone           = isset($data['phone']) ? $sanitize($data['phone']) : '';
$service         = isset($data['service']) ? $sanitize($data['service']) : '';
$message         = isset($data['message']) ? $sanitize($data['message']) : '';
$zipCode         = isset($data['zipCode']) ? $sanitize($data['zipCode']) : '';
$waterHeaterType = isset($data['waterHeaterType']) ? $sanitize($data['waterHeaterType']) : '';
$honeypot        = isset($data['website']) ? $sanitize($data['website']) : '';

// Honeypot check: if filled, treat as spam (do not send)
if ($honeypot !== '') {
    // Optionally pretend success to avoid tipping off bots
    echo 'success';
    exit;
}
// Mail configuration via environment (no hardcoded secrets)
$to      = getenv('CONTACT_TO_EMAIL') ?: 'miked@quickprosplumbingandair.com';
$from    = getenv('SMTP_USERNAME') ?: 'no-reply@quickprosplumbingandair.com';
$pass    = getenv('SMTP_PASSWORD') ?: '';
$host    = getenv('SMTP_HOST') ?: 'smtp.gmail.com';
$secure  = getenv('SMTP_SECURE') ?: 'tls'; // 'tls' or 'ssl'
$portEnv = getenv('SMTP_PORT');
$port    = (int)($portEnv !== false && $portEnv !== '' ? $portEnv : ($secure === 'ssl' ? 465 : 587));

$isQuote = $waterHeaterType !== '' || $zipCode !== '';
$subject = $isQuote ? 'New quote received' : 'New contact request';

$lines = [];
if ($name !== '')            $lines[] = "Name: $name";
if ($email !== '')           $lines[] = "Email: $email";
if ($phone !== '')           $lines[] = "Phone: $phone";
if ($service !== '')         $lines[] = "Service: $service";
if ($message !== '')         $lines[] = "Message: $message";
if ($waterHeaterType !== '') $lines[] = "Water Heater Type: $waterHeaterType";
if ($zipCode !== '')         $lines[] = "ZIP Code: $zipCode";

$body = "You have a new website submission:\n\n" . implode("\n", $lines) . "\n";

if (class_exists('\\PHPMailer\\PHPMailer\\PHPMailer')) {
    try {
        $mail = new \PHPMailer\PHPMailer\PHPMailer(true);

        if ($pass !== '') {
            $mail->isSMTP();
            $mail->Host       = $host;
            $mail->SMTPAuth   = true;
            $mail->Username   = $from;
            $mail->Password   = $pass;
            $mail->SMTPSecure = $secure;
            $mail->Port       = $port;
        } else {
            $mail->isMail();
        }

        $mail->setFrom($from, 'QuickPros Website');
        $mail->addAddress($to);
        if (!empty($email)) {
            $mail->addReplyTo($email);
        }

        $mail->Subject = $subject;
        $mail->Body    = $body;

        $mail->send();
        echo 'success';
    } catch (\Exception $e) {
        http_response_code(500);
        echo 'error: mail failed';
    }
} else {
    // Fallback to PHP's mail() if PHPMailer isn't available
    $headers = 'From: ' . $from . "\r\n";
    if (!empty($email)) {
        $headers .= 'Reply-To: ' . $email . "\r\n";
    }
    $ok = @mail($to, $subject, $body, $headers);
    if ($ok) {
        echo 'success';
    } else {
        http_response_code(500);
        echo 'error: mail failed';
    }
}
?>
