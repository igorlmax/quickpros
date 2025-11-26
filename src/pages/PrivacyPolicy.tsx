const LAST_UPDATED = 'November 26, 2025';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#004078] text-white py-16">
        <div className="container mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-[#f8a825] mb-2">Privacy Policy</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Protecting Your Personal Information</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            QuickPros Plumbing & Air (“we,” “our,” or “us”) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your information when you visit our
            website, submit a service request, or interact with us online.
          </p>
          <p className="text-sm mt-4 text-gray-200">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-10 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">By Using Our Website</h2>
            <p>
              By using our website, you agree to the terms described in this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-[#004078] mb-2">Personal Information</h3>
            <p className="mb-2">When you contact us, request service, or complete a form, we may collect:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Address or service location</li>
              <li>Details about your plumbing or HVAC needs</li>
            </ul>
            <h3 className="text-xl font-semibold text-[#004078] mb-2 mt-6">Automatically Collected Data</h3>
            <p className="mb-2">
              Like most websites, we use cookies and tracking tools to improve performance. This may include:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited on our site</li>
              <li>Referral source</li>
              <li>Time spent on site</li>
            </ul>
            <p className="mt-2">
              This data helps us improve our website, measure advertising performance, and better understand customer needs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Schedule appointments</li>
              <li>Provide service quotes</li>
              <li>Communicate with you about your service</li>
              <li>Respond to questions or support requests</li>
              <li>Improve website functionality</li>
              <li>Send service reminders or promotional updates</li>
              <li>Analyze website traffic and advertising performance</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Information Sharing</h2>
            <p className="mb-2">
              We do not sell, rent, or trade personal information. We may share your information only with trusted third-party
              partners who help us operate our business:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Google Ads &amp; Google Analytics</li>
              <li>CRM platforms (e.g., Workiz)</li>
              <li>Email marketing tools</li>
              <li>Website hosting companies</li>
            </ul>
            <p className="mt-2">
              These companies are required to protect your data and use it only as necessary to support our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Cookies &amp; Tracking</h2>
            <p className="mb-2">We may use:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Google Ads remarketing</li>
              <li>Google Analytics</li>
              <li>Meta/Facebook Pixel</li>
              <li>Conversion tracking</li>
              <li>Session cookies</li>
            </ul>
            <p className="mt-2">
              You may opt out of Google’s tracking cookies here:{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout/"
                className="text-[#e23b19] font-semibold underline"
                target="_blank"
                rel="noreferrer"
              >
                https://tools.google.com/dlpage/gaoptout/
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Data Protection</h2>
            <p>
              We take reasonable administrative and technical measures to protect your information from unauthorized access, loss,
              or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Third-Party Links</h2>
            <p>
              Our website may contain links to external sites. We are not responsible for their content or privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Children’s Privacy</h2>
            <p>
              Our website is not intended for children under 13, and we do not knowingly collect information from minors.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Your Choices &amp; Data Requests</h2>
            <p className="mb-2">
              You may request to update, correct, or delete any personal information we have collected by contacting us at:
            </p>
            <p>
              <a href="mailto:privacy@quickprosplumbingandair.com" className="text-[#e23b19] font-semibold">
                privacy@quickprosplumbingandair.com
              </a>{' '}
              or <a href="tel:9519046660" className="text-[#e23b19] font-semibold">(951) 904-6660</a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated date.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

