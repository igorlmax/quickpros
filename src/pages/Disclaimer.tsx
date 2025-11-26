const LAST_UPDATED = 'November 26, 2025';

const Disclaimer = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#004078] text-white py-16">
        <div className="container mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-[#f8a825] mb-2">Disclaimer</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Important Website Information</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            Please review this disclaimer carefully before using the QuickPros Plumbing & Air website. By
            visiting our site, you acknowledge and agree to the statements below.
          </p>
          <p className="text-sm mt-4 text-gray-200">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-10 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">General Information</h2>
            <p>
              The information on this website is provided for general informational purposes only. While we strive to keep all
              information accurate and up to date, QuickPros Plumbing & Air makes no guarantees regarding completeness, accuracy,
              or reliability.
            </p>
            <p className="mt-4">
              Nothing on this website constitutes professional plumbing or HVAC advice. For accurate diagnosis, a licensed
              technician must evaluate your system in person.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Service Availability</h2>
            <p>
              Services, pricing, promotions, and availability may vary by location and may change without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">No Professional Advice</h2>
            <p>
              Any troubleshooting, tips, or recommendations provided on this site are for educational purposes only and are not a
              substitute for professional service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">External Links</h2>
            <p>
              Our site may contain links to third-party websites. We do not control these websites and assume no responsibility
              for their content, accuracy, or practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Testimonials</h2>
            <p>
              Customer reviews and testimonials reflect individual experiences and results may vary. They are not guaranteed or
              typical outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Promotional Offers</h2>
            <p className="mb-2">Any discounts or promotions listed on our website:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Must be mentioned at the time of booking</li>
              <li>Cannot always be combined with other offers</li>
              <li>May have exclusions or expiration dates</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Limitation of Liability</h2>
            <p>
              QuickPros Plumbing & Air is not liable for any losses or damages arising from the use of our website, errors in
              content, or reliance on information provided here.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Contact</h2>
            <p>For questions about this Disclaimer, contact us at:</p>
            <p className="mt-2">QuickPros Plumbing & Air</p>
            <p>
              Phone:{' '}
              <a href="tel:9519046660" className="text-[#e23b19] font-semibold">
                (951) 904-6660
              </a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:info@quickprosplumbingandair.com" className="text-[#e23b19] font-semibold">
                info@quickprosplumbingandair.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;

