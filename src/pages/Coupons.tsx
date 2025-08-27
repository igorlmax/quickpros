import { Link } from 'react-router-dom';
import { Phone, Share2, Scissors, DollarSign, Clock, Wrench } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Coupons = () => {
  const coupons = [
    {
      icon: <Wrench className="h-8 w-8 text-[#f8a825]" />,
      title: "$95 HVAC Maintenance Special",
      description: "Complete system tune-up including filter replacement, coil cleaning, and performance check",
      originalPrice: "$150",
      savings: "$55",
      finePrint: "Valid for residential customers only. Cannot be combined with other offers. Expires 60 days from print date."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[#f8a825]" />,
      title: "$50 Off Any Leak Repair",
      description: "Professional leak detection and repair service for pipes, fixtures, and water lines",
      originalPrice: "Regular Price",
      savings: "$50",
      finePrint: "Minimum service charge applies. Valid for leak repairs over $200. Cannot be combined with other offers."
    },
    {
      icon: <Clock className="h-8 w-8 text-[#f8a825]" />,
      title: "$100 Off After Hours HVAC Repair",
      description: "Emergency HVAC service during evenings, weekends, and holidays",
      originalPrice: "Emergency Rate",
      savings: "$100",
      finePrint: "Valid for after-hours service calls only (6PM-8AM, weekends, holidays). Minimum repair amount required."
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#f8a825]" />,
      title: "$400 Off Whole Home Repipe",
      description: "Complete home repiping service with modern PEX or copper piping",
      originalPrice: "Regular Price",
      savings: "$400",
      finePrint: "Valid for whole-home repipe projects only. Cannot be combined with other offers. Financing available."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[#f8a825]" />,
      title: "$250 Off Tankless Water Heaters",
      description: "Professional installation of energy-efficient tankless water heater systems",
      originalPrice: "Regular Price",
      savings: "$250",
      finePrint: "Valid for new tankless water heater installations. Does not include unit cost. Professional installation required."
    },
    {
      icon: <Scissors className="h-8 w-8 text-[#f8a825]" />,
      title: "Free Service Call With Repair",
      description: "No diagnostic fee when you choose QuickPros for your repair service",
      originalPrice: "$89 Service Call",
      savings: "$89",
      finePrint: "Service call fee waived with completed repair. Diagnostic fee applies if repair is declined."
    }
  ];

  const handleShare = (couponTitle: string) => {
    if (navigator.share) {
      navigator.share({
        title: `QuickPros Coupon: ${couponTitle}`,
        text: `Save money with this QuickPros Plumbing & Air coupon: ${couponTitle}`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`Check out this coupon from QuickPros: ${couponTitle} - ${window.location.href}`);
      alert('Coupon link copied to clipboard!');
    }
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#004078] mb-4">
            Save Big with Our Current Deals!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take advantage of these exclusive offers from QuickPros Plumbing & Air. 
            Print this page or mention these coupons when you call to save on your next service.
          </p>
        </div>

        {/* Coupons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coupons.map((coupon, index) => (
            <Card key={index} className="border-2 border-dashed border-[#e23b19] hover:shadow-lg transition-shadow">
              <CardHeader className="bg-[#e23b19] text-white">
                <CardTitle className="flex items-center text-xl">
                  {coupon.icon}
                  <span className="ml-3">{coupon.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-[#004078] mb-2">
                    SAVE {coupon.savings}
                  </div>
                  {coupon.originalPrice !== "Regular Price" && coupon.originalPrice !== "Emergency Rate" && (
                    <div className="text-gray-500 line-through">{coupon.originalPrice}</div>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 text-center">
                  {coupon.description}
                </p>
                
                <div className="border-t pt-4">
                  <p className="text-xs text-gray-500 mb-4">
                    <strong>Fine Print:</strong> {coupon.finePrint}
                  </p>
                  
                  <Button
                    onClick={() => handleShare(coupon.title)}
                    variant="outline"
                    size="sm"
                    className="w-full text-[#004078] border-[#004078] hover:bg-[#004078] hover:text-white"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share This Coupon
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Usage Note */}
        <div className="bg-[#f8a825] rounded-lg p-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-[#004078] mb-4">
            How to Use These Coupons
          </h2>
          <p className="text-[#004078] text-lg mb-6">
            Show this page to your technician or mention the specific coupon when you call to receive your discount.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#004078] hover:bg-[#004078]/90">
              <a href="tel:9519046660">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (951) 904-6660
              </a>
            </Button>
            <Button asChild size="lg" className="bg-[#e23b19] hover:bg-[#e23b19]/90">
              <Link to="/book-online">Book Online & Save</Link>
            </Button>
          </div>
        </div>

        {/* CTA Block */}
        <Card className="bg-gradient-to-r from-[#00589f] to-[#004078] text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need to schedule now?
            </h2>
            <p className="text-lg mb-6">
              Don't wait! These offers won't last forever. Contact QuickPros today to schedule your service and start saving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#004078] hover:bg-gray-100">
                <Link to="/book-online">Book Online Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#004078]">
                <a href="tel:9519046660">Call (951) 904-6660</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Social Sharing Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-[#004078] mb-4">
            Share These Deals with Friends & Family
          </h3>
          <p className="text-gray-600 mb-6">
            Know someone who could use reliable plumbing or HVAC service? Share these coupons and help them save!
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => handleShare("QuickPros Coupons")}
              variant="outline"
              className="text-[#004078] border-[#004078] hover:bg-[#004078] hover:text-white"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share All Coupons
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupons;