import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from '../components/ui/button';

const FeaturedServices = lazy(() => import('../components/home/FeaturedServices'));
const WhyChooseUs = lazy(() => import('../components/home/WhyChooseUs'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const CtaBanner = lazy(() => import('../components/home/CtaBanner'));
const CouponTeaser = lazy(() => import('../components/home/CouponTeaser'));
const SeoContent = lazy(() => import('../components/home/SeoContent'));

const SectionFallback = () => (
  <div className="py-16 text-center">
    <p className="text-[#004078]">Loading section...</p>
  </div>
);

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00589f] to-[#004078] text-white py-8 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-xl md:text-5xl font-bold mb-3">
                Plumber in Redlands, CA | QuickPros Plumbing & Air
              </h1>
              <h2 className="text-lg md:text-2xl font-semibold text-[#f8a825] mb-2">
                HVAC Contractor, Heating Repair & Drain Cleaning Experts
              </h2>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                Comprehensive plumbing, HVAC, heating, cooling, drain, and water heater services
              </h3>
              <p className="text-lg text-gray-200">
                CSLB 1145987
              </p>
              <p className="text-xl md:text-2xl mb-6 text-[#f8a825]">
                Redlands & Inland Empire's Trusted Home Comfort Experts
              </p>
              <p className="text-lg mb-8 text-gray-200">
                Licensed, insured, and family-owned. We provide fast, reliable service for all your plumbing and HVAC
                needs with transparent pricing and same-day appointments.
              </p>

              <div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-2 mb-8 w-full items-stretch sm:items-center justify-center sm:justify-start">
                <Button
                    asChild
                    size="lg"
                    className="bg-[#e23b19] hover:bg-[#e23b19]/90 text-lg px-8 w-full sm:w-auto"
                >
                  <Link to="/book-online" className="w-full flex justify-center sm:justify-start">Book Service
                    Now</Link>
                </Button>

                <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="bg-[#f8a825] hover:bg-[#f8a825]/90 text-[#004078] font-semibold text-lg px-8 w-full sm:w-auto flex items-center justify-center"
                >
                  <Link to="/financing" className="flex items-center w-full justify-center sm:justify-start">
                    <div className="flex items-center bg-white rounded-full h-8 w-8 mr-3 justify-center">
                      <svg className="h-5 w-5 text-[#004078]" fill="none" stroke="currentColor" strokeWidth="2"
                           viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span>Financing <span className="lg:hidden">available</span></span>
                  </Link>
                </Button>

                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-[#004078] border-white hover:bg-white/90 hover:text-[#004078] text-lg px-8 w-full sm:w-auto flex items-center justify-center"
                >
                  <a href="tel:9519046660" className="flex items-center w-full justify-center sm:justify-start">
                    <Phone className="h-5 w-5 mr-2"/>
                    (951) 904-6660
                  </a>
                </Button>

                <div className="flex justify-center sm:justify-start w-full sm:w-auto">
                  <img src="/Owned-Badge.webp" alt="QuickPros Logo" className="h-full lg:h-20 w-auto" loading="lazy"/>
                </div>
              </div>


              <p className="xl:text:lg text-gray-300">
                Serving Redlands, Highland, Yucaipa, San Bernardino & surrounding areas
              </p>
            </div>
            <div className="flex items-center justify-center h-full w-full">
            <img
                  src="/van-taransparent.png"
                  alt="Bucky the Beaver - QuickPros Mascot"
                  className="object-contain h-full w-full"
                  loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <Suspense fallback={<SectionFallback />}>
        <FeaturedServices />
      </Suspense>

      {/* Why Choose Us */}
      <Suspense fallback={<SectionFallback />}>
        <WhyChooseUs />
      </Suspense>

      {/* Customer Testimonials */}
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>

      {/* CTA Banner */}
      <Suspense fallback={<SectionFallback />}>
        <CtaBanner />
      </Suspense>

      {/* Coupon Teaser */}
      <Suspense fallback={<SectionFallback />}>
        <CouponTeaser />
      </Suspense>

      {/* SEO Content Block */}
      <Suspense fallback={<SectionFallback />}>
        <SeoContent />
      </Suspense>
    </div>
  );
};

export default Home;
