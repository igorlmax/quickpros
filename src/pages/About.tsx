const About = () => {
  const plumbingServices = [
    'Drain cleaning',
    'Sewer line repair & replacements',
    'Water heater repair & installation',
    'Leak detection',
    'Repipes & water line repair',
    'Fixture installation and repairs',
  ];

  const hvacServices = [
    'AC service, repair, and replacement',
    'Heating & furnace repairs',
    'Heat pumps',
    'Ductwork',
    'Indoor air quality solutions',
    'System tune-ups and seasonal maintenance',
  ];

  return (
    <div className="bg-white">
      <section className="bg-[#004078] text-white py-16">
        <div className="container mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-[#f8a825] mb-2">
            Veteran & family owned
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About QuickPros Plumbing & Air
          </h1>
          <p className="text-lg max-w-3xl text-gray-200">
            QuickPros Plumbing & Air is a veteran-owned, family-owned plumbing and HVAC company proudly
            serving Yucaipa, Redlands, Highland, Mentone, San Bernardino, and the Inland Empire. We built
            our business on honesty, reliability, and unmatched customer service — providing homeowners with
            fast, professional repairs backed by years of hands-on expertise.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Deliver the highest quality plumbing and HVAC services with integrity, transparency, and
              dependable care for every customer, every time. We treat every home as if it were our own,
              and every customer like family.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              QuickPros was founded by experienced trades professionals who saw a need for trustworthy,
              customer-first service in the home-service industry. With decades of combined experience,
              our team set out to create a company where craftsmanship, communication, and consistency
              come first. We’re proud to be the company local families rely on for everything from simple
              repairs to major system installations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Licensed, Bonded & Insured</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>CSLB License: 1145987</li>
              <li>Fully bonded & insured</li>
              <li>Background-checked, skilled technicians</li>
              <li>EPA-certified HVAC professionals</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#004078] mb-3">Plumbing</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {plumbingServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#004078] mb-3">Heating & Cooling</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {hvacServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Our Commitment to You</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Honest, upfront communication</li>
              <li>Fair pricing with no hidden fees</li>
              <li>Respect for your home and property</li>
              <li>Clean, professional technicians</li>
              <li>Real solutions — not temporary fixes</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Your trust means everything to us, and we work hard to earn it with every call.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">Contact Us</h2>
            <div className="space-y-2 text-gray-700">
              <p>QuickPros Plumbing & Air</p>
              <p>Phone: <a href="tel:9519046660" className="text-[#e23b19] font-semibold">(951) 904-6660</a></p>
              <p>Email: <a href="mailto:info@quickprosplumbingandair.com" className="text-[#e23b19] font-semibold">info@quickprosplumbingandair.com</a></p>
              <p>Website: <a href="https://www.quickprosplumbingandair.com" className="text-[#e23b19] font-semibold">www.quickprosplumbingandair.com</a></p>
              <p>
                Service Areas: Redlands, Yucaipa, Highland, Mentone, San Bernardino, and surrounding communities.
              </p>
              <p>Hours: Monday–Saturday, 7am–7pm (Emergency service available)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

