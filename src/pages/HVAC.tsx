import { Link } from 'react-router-dom';
import { Phone, Thermometer, Snowflake, Wind, Settings, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const HVAC = () => {
  const services = [
    {
      icon: <Snowflake className="h-8 w-8 text-[#e23b19]" />,
      title: "AC Repair & Maintenance",
      description: "Keep your home cool and comfortable with our comprehensive air conditioning services. We repair all makes and models, perform seasonal tune-ups, and provide preventative maintenance to extend your system's life."
    },
    {
      icon: <Thermometer className="h-8 w-8 text-[#e23b19]" />,
      title: "Furnace Repair & Installation",
      description: "Stay warm through the coldest months with reliable furnace services. Our certified technicians install, repair, and maintain gas and electric furnaces to keep your home comfortable year-round."
    },
    {
      icon: <Settings className="h-8 w-8 text-[#e23b19]" />,
      title: "New System Installations",
      description: "Upgrade to a more efficient HVAC system with professional installation services. We help you choose the right system for your home and budget, ensuring optimal performance and energy savings."
    },
    {
      icon: <Settings className="h-8 w-8 text-[#e23b19]" />,
      title: "Thermostat Upgrades",
      description: "Modernize your home comfort with smart thermostat installation. Programmable and WiFi-enabled thermostats help you save energy and maintain perfect temperatures automatically."
    },
    {
      icon: <Wind className="h-8 w-8 text-[#e23b19]" />,
      title: "Indoor Air Quality",
      description: "Breathe easier with our indoor air quality solutions. We install air purifiers, humidifiers, dehumidifiers, and advanced filtration systems to improve your home's air quality."
    },
    {
      icon: <Shield className="h-8 w-8 text-[#e23b19]" />,
      title: "Commercial HVAC",
      description: "Keep your business comfortable with commercial HVAC services. We service office buildings, retail spaces, restaurants, and industrial facilities with reliable, efficient solutions."
    },
    {
      icon: <Snowflake className="h-8 w-8 text-[#e23b19]" />,
      title: "Ductless Systems",
      description: "Enjoy zone-controlled comfort with ductless mini-split systems. Perfect for room additions, older homes without ductwork, or areas needing independent temperature control."
    },
    {
      icon: <Thermometer className="h-8 w-8 text-[#e23b19]" />,
      title: "Heat Pumps",
      description: "Experience year-round comfort with energy-efficient heat pump systems. These versatile units provide both heating and cooling, making them perfect for our Inland Empire climate."
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* SEO-Optimized Intro */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#004078] mb-6">
            Expert HVAC Services in Redlands & the Inland Empire
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            QuickPros Plumbing & Air is your local HVAC specialist for heating and air conditioning in Redlands and surrounding cities.
          </p>
        </div>

        {/* Hero Image with Bucky */}
        <div className="text-center mb-16">
          <img
            src="/logo.webp"
            alt="Bucky the Beaver with HVAC Tools" 
            className="mx-auto max-w-md w-full rounded-lg"
            loading="lazy"
            decoding="async"
            width={240}
            height={240}
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-[#004078]">
                  {service.icon}
                  <span className="ml-3">{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seasonal CTA */}
        <div className="bg-gradient-to-r from-[#00589f] to-[#004078] text-white rounded-lg p-8 text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get Your System Ready Before Summer or Winter Hits!
          </h2>
          <p className="text-lg mb-6">
            Don't wait for extreme weather to test your HVAC system. Schedule preventative maintenance today and avoid costly emergency repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#e23b19] hover:bg-[#e23b19]/90">
              <Link to="/book-online">Schedule Maintenance</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white hover:bg-white text-[#004078]">
              <a href="tel:9519046660">
                <Phone className="h-5 w-5 mr-2" />
                (951) 904-6660
              </a>
            </Button>
          </div>
        </div>

        {/* Maintenance Membership Highlight */}
        <Card className="mb-16 border-[#f8a825] border-2">
          <CardContent className="p-8 text-center">
            <div className="bg-[#f8a825] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-[#004078]" />
            </div>
            <h2 className="text-2xl font-bold text-[#004078] mb-4">
              Ask About Our Maintenance Membership Plans
            </h2>
            <Button asChild className="bg-[#004078] hover:bg-[#004078]/90">
              <Link to="/contact">Learn More About Membership</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Before/After Placeholder */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#004078] text-center mb-8">Our Work Speaks for Itself</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#004078] text-center">Before</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <picture>
                    <source srcSet="/before.webp" type="image/webp" />
                    <img
                      src="/before.jpg"
                      alt="HVAC system before service"
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                      decoding="async"
                      width="540"
                      height="360"
                    />
                  </picture>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#004078] text-center">After</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <picture>
                    <source srcSet="/after.webp" type="image/webp" />
                    <img
                      src="/after.jpg"
                      alt="HVAC system after service"
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                      decoding="async"
                      width="540"
                      height="360"
                    />
                  </picture>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HVAC;
