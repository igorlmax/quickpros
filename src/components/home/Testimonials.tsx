import { Card, CardContent } from '../ui/card';
import { Star } from 'lucide-react';

type Testimonial = {
  name: string;
  location: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Sarah M. — ',
    location: 'Redlands, CA',
    rating: 5,
    text:
      'QuickPros was amazing! Our AC stopped working on one of the hottest days this summer. The technician showed up on time, explained everything clearly, and had our system cooling again within an hour. Super professional and friendly service!',
  },
  {
    name: 'James L.',
    location: 'Yucaipa, CA',
    rating: 5,
    text:
      'I had a water heater issue and QuickPros came out the same day. Fair pricing, no hidden fees, and they treated my home with respect. I’ve already signed up for their maintenance plan because I trust them.',
  },
  {
    name: 'Maria G.',
    location: 'Highland, CA',
    rating: 5,
    text:
      'From the first call to the job completion, the QuickPros team was courteous, knowledgeable, and efficient. They fixed a stubborn drain problem that other companies couldn’t. Highly recommend!',
  },
  {
    name: 'David R.',
    location: 'Loma Linda, CA',
    rating: 5,
    text:
      'QuickPros Plumbing & Air really impressed me. The technician explained my options for a new system without pressure, and the installation went smoothly. Great family-owned company!',
  },
  {
    name: 'Amanda K.',
    location: 'San Bernardino, CA',
    rating: 5,
    text:
      'Professional, fast, and affordable! QuickPros replaced a broken pipe in our home and even cleaned up afterward. It’s rare to find a company that goes the extra mile like this.',
  },
];

const Testimonials = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004078] mb-4">What Our Customers Say</h2>
      </div>
      <div>
        {/* @ts-ignore */}
        <div locationid="11568939440904783508" className="review-widget-carousel" />
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
);

export default Testimonials;

