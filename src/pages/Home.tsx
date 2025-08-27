import { Link } from 'react-router-dom';
import { Phone, Wrench, Thermometer, Droplets, Zap, Shield, Clock, DollarSign, Users, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8 text-[#e23b19]" />,
      title: "Plumbing",
      description: "From leaky faucets to full repipes, QuickPros is your trusted plumbing partner. Our licensed plumbers handle everything from fixture installations and water pressure issues to slab leaks and sewer repairs.",
      details: "Residential & commercial service, repiping, fixture replacement, leak detection, sewer line repair, and water filtration."
    },
    {
      icon: <Thermometer className="h-8 w-8 text-[#e23b19]" />,
      title: "Heating",
      description: "Stay cozy through the cold with our reliable heating services. We install, repair, and maintain furnaces, heat pumps, and other heating systems so your home is always comfortable.",
      details: "Furnace repair & replacement, heat pump service, tune-ups, energy-efficient heating options."
    },
    {
      icon: <Zap className="h-8 w-8 text-[#e23b19]" />,
      title: "Air Conditioning",
      description: "Beat the heat with expert cooling solutions from QuickPros. We keep your home comfortable with top-quality AC installation, repair, and preventative maintenance.",
      details: "AC repair, system installation, tune-ups, ductless mini-splits, thermostat upgrades."
    },
    {
      icon: <Droplets className="h-8 w-8 text-[#e23b19]" />,
      title: "Drain Cleaning",
      description: "Slow or clogged drains can cause big problems fast. Our team uses advanced tools to clear blockages and keep your plumbing system running smoothly.",
      details: "Kitchen & bathroom drains, main line stoppages, hydro jetting, camera inspections, root removal."
    },
    {
      icon: <Shield className="h-8 w-8 text-[#e23b19]" />,
      title: "Water Heaters",
      description: "Hot water when you need it most. QuickPros installs and services both traditional and tankless water heaters to ensure efficiency and long-lasting comfort.",
      details: "Tankless water heaters, water heater repair & installation, maintenance, energy efficient upgrades."
    },
    {
      icon: <Clock className="h-8 w-8 text-[#e23b19]" />,
      title: "Emergency Repairs",
      description: "Plumbing or HVAC emergencies don't wait—and neither do we. QuickPros offers fast, dependable 24/7 emergency service to restore your home's comfort and safety.",
      details: "Burst pipes, no-heat/no-cool emergencies, major leaks, backed-up drains, water heater breakdowns."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="h-6 w-6 text-[#f8a825]" />,
      title: "Family-Owned",
      description: "We're a family-owned business proud to serve our community with care and dedication. Our customers are our neighbors, not just numbers."
    },
    {
      icon: <Shield className="h-6 w-6 text-[#f8a825]" />,
      title: "Local, Licensed & Insured",
      description: "As a fully licensed and insured company based in Redlands, CA, you can trust that your home is in safe, qualified hands."
    },
    {
      icon: <Clock className="h-6 w-6 text-[#f8a825]" />,
      title: "Same-Day Service",
      description: "We know plumbing and HVAC issues can't wait. That's why QuickPros offers same-day appointments to get your system running again quickly."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-[#f8a825]" />,
      title: "Transparent Pricing",
      description: "No surprises—just honest, upfront pricing. You'll always know what to expect before work begins."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Redlands, CA",
      rating: 5,
      text: "QuickPros saved the day when our water heater failed on a Sunday morning. They were there within 2 hours and had us back up and running by afternoon. Excellent service!"
    },
    {
      name: "Mike R.",
      location: "Highland, CA", 
      rating: 5,
      text: "Professional, courteous, and fair pricing. They fixed our AC right before the summer heat wave. I'll definitely call them again for any HVAC needs."
    },
    {
      name: "Jennifer L.",
      location: "Yucaipa, CA",
      rating: 5,
      text: "The team at QuickPros is fantastic. They explained everything clearly and completed the plumbing repair quickly. True professionals who care about their customers."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00589f] to-[#004078] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Fast. Friendly. Family-Owned.
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-[#f8a825]">
                That's the QuickPros Way!
              </p>
              <p className="text-lg mb-8 text-gray-200">
                Professional plumbing and HVAC services for Redlands and the Inland Empire. 
                Licensed, insured, and ready to serve you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-[#e23b19] hover:bg-[#e23b19]/90 text-lg px-8">
                  <Link to="/book-online">Book Service Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-[#004078] border-white hover:bg-white/90 hover:text-[#004078] text-lg px-8">
                  <a href="tel:9519046660">
                    <Phone className="h-5 w-5 mr-2" />
                    (951) 904-6660
                  </a>
                </Button>
              </div>
              <p className="text-sm text-gray-300">
                Serving Redlands, Highland, Yucaipa, San Bernardino & surrounding areas
              </p>
            </div>
            <div className="text-center">
              <img
                  src="/logo.png"
                alt="Bucky the Beaver - QuickPros Mascot" 
                className="mx-auto max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004078] mb-4">
              Our Expert Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to routine maintenance, QuickPros has the expertise 
              to keep your home comfortable year-round.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-[#004078] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-sm text-gray-500">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004078] mb-4">
              Why Choose QuickPros?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choosing QuickPros means choosing peace of mind. We combine professional expertise 
              with family values to give you honest service, upfront pricing, and lasting solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#004078] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#004078] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-[#004078] mb-2">Financing Available</p>
            <p className="text-gray-600">Big repairs don't have to break the bank. We offer flexible financing options so you can get the comfort you need now and pay over time.</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004078] mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#f8a825] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-[#004078]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-[#e23b19]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Schedule Online & Save $25!
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Book your appointment online and receive an instant discount on your service.
          </p>
          <Button asChild size="lg" className="bg-white text-[#e23b19] hover:bg-gray-100">
            <Link to="/book-online">Book Online Now</Link>
          </Button>
        </div>
      </section>

      {/* Coupon Teaser */}
      <section className="py-12 bg-[#f8a825]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#004078] mb-4">
            See Our Current Specials!
          </h2>
          <p className="text-[#004078]/80 mb-6 text-lg">
            Save even more with our exclusive deals and seasonal promotions.
          </p>
          <Button asChild size="lg" className="bg-[#004078] text-white hover:bg-[#004078]/90">
            <Link to="/coupons">View All Coupons</Link>
          </Button>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#004078] mb-6">
              Professional Plumbing and HVAC Services in Redlands, CA
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                When you need reliable <strong>plumbing in Redlands</strong> or expert <strong>HVAC in Redlands</strong>, 
                QuickPros Plumbing & Air is your trusted local choice. Our team of <strong>licensed plumbers in Redlands</strong> 
                and certified HVAC technicians provides comprehensive residential and commercial services throughout 
                the Inland Empire.
              </p>
              <p className="text-gray-600 mb-4">
                From emergency <strong>AC repair near me</strong> to complete plumbing system installations, we're your 
                one-stop solution for all home comfort needs. Our <strong>Inland Empire heating and cooling</strong> 
                specialists are available 24/7 for emergency service, ensuring your family stays comfortable 
                no matter what time of day or night problems arise.
              </p>
              <p className="text-gray-600">
                As a family-owned business serving Redlands, Highland, Yucaipa, and surrounding communities, 
                we understand the unique needs of Inland Empire homeowners. Whether you need routine maintenance, 
                emergency repairs, or complete system replacements, QuickPros delivers the quality service 
                and transparent pricing you deserve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
