import { Link } from 'react-router-dom';
import { Phone, Share2, Scissors, DollarSign, Clock, Wrench } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Coupons = () => {

  const couponImages = [
    "quickpros_coupon_50_off_leak_repair.png",
    "quickpros_coupon_95_hvac_maintenance.png",
    "quickpros_coupon_100_off_after_hours_hvac.png",
    "quickpros_coupon_250_off_tankless.png",
    "quickpros_coupon_400_off_repipe.png",
    "quickpros_coupon_free_service_call_with_repair.png"
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
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          onClick={() => window.location.href = '/book-online'}
          style={{ cursor: 'pointer' }}
        >
          {couponImages.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={`/coupons/${src}`}
                alt={`Coupon ${index + 1}`}
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
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
              <Button asChild size="lg" variant="outline" className="border-white bg-white text-[#004078]">
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
