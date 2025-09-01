import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Wrench, Droplets, Shield, Zap, Clock, CheckCircle, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Plumbing = () => {
  const services = [
    {
      icon: <Droplets className="h-8 w-8 text-[#e23b19]" />,
      title: "Drain Cleaning in Redlands, CA",
      description: "If your sink, shower, or toilet is draining slowly, it could mean a blockage in your plumbing system. Our expert plumbers provide professional drain cleaning services in Redlands and the Inland Empire, using advanced equipment like hydro jetting and drain snakes to clear tough clogs and prevent future backups."
    },
    {
      icon: <Zap className="h-8 w-8 text-[#e23b19]" />,
      title: "Leak Detection & Repair in Redlands",
      description: "Hidden water leaks can waste thousands of gallons of water and cause expensive property damage. We offer accurate leak detection services in Redlands, Highland, and Yucaipa using advanced technology to pinpoint leaks in pipes, walls, ceilings, and slabs. Once found, our skilled plumbers provide fast and reliable leak repairs."
    },
    {
      icon: <Shield className="h-8 w-8 text-[#e23b19]" />,
      title: "Water Heater Repair & Installation in the Inland Empire",
      description: "Hot water is essential for comfort and daily living. QuickPros specializes in water heater repair and installation in Redlands, CA and nearby cities. From traditional tank water heaters to energy-efficient tankless systems, we install, maintain, and repair all makes and models to keep your hot water running smoothly."
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#e23b19]" />,
      title: "Pipe Replacements & Re-Piping in Redlands",
      description: "Old, corroded, or leaking pipes can cause low water pressure and plumbing emergencies. We provide whole-home repiping services in Redlands and the Inland Empire, replacing outdated piping systems with durable materials like PEX or copper for long-lasting performance."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#e23b19]" />,
      title: "Sewer Inspections & Repairs",
      description: "If you're experiencing frequent drain backups, it may be a sewer line issue. QuickPros offers sewer camera inspections in Redlands, Highland, and San Bernardino to identify root intrusion, cracks, and blockages. Once diagnosed, our team provides expert sewer line repair or replacement."
    },
    {
      icon: <Clock className="h-8 w-8 text-[#e23b19]" />,
      title: "Emergency Plumbing Services in Redlands, CA",
      description: "Plumbing disasters can strike at any time—burst pipes, overflowing toilets, or major leaks. That's why QuickPros provides 24/7 emergency plumbing services in Redlands and the Inland Empire. Our rapid-response plumbers are ready to restore your comfort and protect your property."
    }
  ];

  const trustBadges = [
    { icon: <Shield className="h-6 w-6 text-[#004078]" />, text: "Licensed" },
    { icon: <CheckCircle className="h-6 w-6 text-[#004078]" />, text: "Bonded" },
    { icon: <Shield className="h-6 w-6 text-[#004078]" />, text: "Insured" },
    { icon: <Star className="h-6 w-6 text-[#004078]" />, text: "5-Star Rated" }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* SEO-Optimized Intro */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#004078] mb-6">
            Professional Plumbing Services in Redlands & the Inland Empire
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Looking for reliable plumbing in Redlands or the Inland Empire? QuickPros Plumbing & Air is your trusted local choice.
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              QuickPros Plumbing & Air is your trusted local plumbing company serving Redlands, Highland, Yucaipa, Mentone, Loma Linda, San Bernardino, and surrounding Inland Empire communities. Our licensed, insured plumbers provide fast, same-day service for both residential and commercial plumbing needs. Whether it's a clogged drain, broken water heater, or emergency plumbing issue, QuickPros has you covered.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[#004078]">
                  {service.icon}
                  <span className="ml-3">{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#004078]">
                  Commercial Plumbing Services in Redlands & the Inland Empire
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Businesses can't afford plumbing problems. QuickPros delivers commercial plumbing services for Redlands businesses, including restaurants, offices, retail spaces, and industrial facilities. From restroom repairs to water line replacements, we handle it all—on time and on budget.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#004078]">
                  Water Filtration Systems in Redlands, CA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy clean, great-tasting water with our water filtration system installation in Redlands and surrounding areas. We offer whole-home water filtration, reverse osmosis systems, and under sink filters to remove contaminants and provide safer, healthier water for your family or business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Block */}
        <div className="bg-[#e23b19] text-white rounded-lg p-8 text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a plumber now?
          </h2>
          <p className="text-lg mb-6">
            Call QuickPros Plumbing & Air today for expert plumbing services in Redlands, Highland, Yucaipa, and the entire Inland Empire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#e23b19] hover:bg-gray-100">
              <a href="tel:9519046660">
                <Phone className="h-5 w-5 mr-2" />
                (951) 904-6660
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white hover:bg-white text-[#e23b19]">
              <Link to="/book-online">Book Online</Link>
            </Button>
          </div>
        </div>

        {/* Our Services Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#004078] text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'hvac1.jpg',
              'hvac2.jpg',
              'hvac3.jpg',
              'hvac5.jpg',
              'hvac6.jpg',
              'Plumbing1.jpg',
              'Plumbing2.jpg',
              'Plumbing3.jpg'
            ].map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-white">
                  <img
                      src={`/services/${img}`}
                      alt={img.replace(/[-_]/g, ' ').replace('.jpg', '').replace('.png', '')}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                  />
                  <div className="text-center text-sm font-medium text-[#004078]">

                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#004078] text-center mb-8">Why Choose QuickPros?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#f8a825] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  {badge.icon}
                </div>
                <p className="font-semibold text-[#004078]">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Local Keyword Text Block */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#004078] mb-6">
            Plumbing Services in Redlands, CA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#004078] mb-3">Emergency Plumbing in Yucaipa and Surrounding Cities</h3>
              <p className="text-gray-600">
                When plumbing emergencies strike in Yucaipa, Highland, or anywhere in the Inland Empire, QuickPros responds fast. Our emergency plumbers are available 24/7 to handle burst pipes, sewer backups, and water heater failures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#004078] mb-3">Licensed Plumbers Serving the Inland Empire</h3>
              <p className="text-gray-600">
                All QuickPros plumbers are fully licensed, bonded, and insured. We serve residential and commercial customers throughout Redlands, San Bernardino, Loma Linda, Colton, and the greater Inland Empire with professional, reliable service.
              </p>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
};

export default Plumbing;
