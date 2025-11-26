<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // adjust path if needed

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $phone           = isset($data["phone"]) ? strip_tags(trim($data["phone"])) : '';
    $zipCode         = isset($data["zipCode"]) ? strip_tags(trim($data["zipCode"])) : '';
    $waterHeaterType = isset($data["waterHeaterType"]) ? strip_tags(trim($data["waterHeaterType"])) : '';
    $email           = isset($data["email"]) ? filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL) : '';

    $from = "miked@quickprosplumbingandair.com"; // your Google Workspace email
    $to   = "miked@quickprosplumbingandair.com"; // where you want to receive
    $subject = "New quote received";

    // Create the email body
    $body = "You have a new quote request:\n\n";
    $body .= "Water Heater Type: $waterHeaterType\n";
    $body .= "Phone: $phone\n";
    $body .= "ZIP Code: $zipCode\n";
    $body .= "Email: $email\n\n";

    try {
        $mail = new PHPMailer(true);
        $mail->isMail();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = $from;
        $mail->Password   = 'zemgiqrmaxtpstxr'; // replace with Google App Password
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 465;

        // Sender and recipient
        $mail->setFrom($from, 'QuickPros Website');
        $mail->addAddress($to);
        if (!empty($email)) {
            $mail->addReplyTo($email);
        }

        // Email content
        $mail->Subject = $subject;
        $mail->Body    = $body;

        $mail->send();
        echo "success";
    } catch (Exception $e) {
        echo "error: " . $mail->ErrorInfo;
    }
}
?>
