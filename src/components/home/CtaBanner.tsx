import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const CtaBanner = () => (
  <section className="py-12 bg-[#e23b19]">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Schedule Online & Save $25!</h2>
      <p className="text-white/90 mb-6 text-lg">Book your appointment online and receive an instant discount on your service.</p>
      <Button asChild size="lg" className="bg-white text-[#e23b19] hover:bg-gray-100">
        <Link to="/book-online">Book Online Now</Link>
      </Button>
    </div>
  </section>
);

export default CtaBanner;

