import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const CouponTeaser = () => (
  <section className="py-12 bg-[#f8a825]">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#004078] mb-4">See Our Current Specials!</h2>
      <p className="text-[#004078]/80 mb-6 text-lg">Save even more with our exclusive deals and seasonal promotions.</p>
      <Button asChild size="lg" className="bg-[#004078] text-white hover:bg-[#004078]/90">
        <Link to="/coupons">View All Coupons</Link>
      </Button>
    </div>
  </section>
);

export default CouponTeaser;

