import { ReactNode } from 'react';
import { Users, Shield, Clock, DollarSign } from 'lucide-react';

type WhyChooseUsItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

const reasons: WhyChooseUsItem[] = [
  {
    icon: <Users className="h-6 w-6 text-[#f8a825]" />,
    title: 'Family-Owned',
    description:
      "We're a family-owned business proud to serve our community with care and dedication. Our customers are our neighbors, not just numbers.",
  },
  {
    icon: <Shield className="h-6 w-6 text-[#f8a825]" />,
    title: 'Local, Licensed & Insured',
    description:
      'As a fully licensed and insured company based in Redlands, CA, you can trust that your home is in safe, qualified hands.',
  },
  {
    icon: <Clock className="h-6 w-6 text-[#f8a825]" />,
    title: 'Same-Day Service',
    description:
      "We know plumbing and HVAC issues can't wait. That's why QuickPros offers same-day appointments to get your system running again quickly.",
  },
  {
    icon: <DollarSign className="h-6 w-6 text-[#f8a825]" />,
    title: 'Transparent Pricing',
    description: "No surprises—just honest, upfront pricing. You'll always know what to expect before work begins.",
  },
];

const WhyChooseUs = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004078] mb-4">Why Choose QuickPros?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choosing QuickPros means choosing peace of mind. We combine professional expertise with family values to give
          you honest service, upfront pricing, and lasting solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((item, index) => (
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
        <p className="text-gray-600">
          Big repairs don't have to break the bank. We offer flexible financing options so you can get the comfort you
          need now and pay over time.
        </p>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

