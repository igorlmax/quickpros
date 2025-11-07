import { useState } from 'react';
import { Calendar, Clock, CheckCircle, Phone, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';

const BookOnline = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    serviceType: '',
    propertyType: '',
    preferredDate: '',
    preferredTime: '',
    description: '',
    emergencyService: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Handle booking submission here
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-[#f8a825]" />,
      title: "Priority Scheduling",
      description: "Online bookings get priority placement in our schedule"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-[#f8a825]" />,
      title: "Text Message Reminders",
      description: "Receive appointment confirmations and reminders via SMS"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#f8a825]" />,
      title: "Special Online Discounts",
      description: "Exclusive savings available only for online bookings"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#004078] mb-4">
            Schedule Your Appointment in 60 Seconds or Less!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book your plumbing or HVAC service online and save time. It's fast, easy, and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#004078] flex items-center">
                  <Calendar className="h-6 w-6 mr-2" />
                  Book Your Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/*<iframe*/}
                {/*    src="https://online-booking.workiz.com/?ac=8f69dba504122e8e9c9a0fcfd2598fcab646d9a9b1a6fb21bf771588cec13a4f"*/}
                {/*    title="Online Booking"*/}
                {/*    width="100%"*/}
                {/*    height="800"*/}
                {/*    frameBorder="0"*/}
                {/*    allowFullScreen*/}
                {/*    className="w-full rounded-lg shadow-lg"*/}
                {/*></iframe>*/}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Need Help */}
            <Card className="bg-[#f8a825] text-[#004078]">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4"/>
                <h3 className="text-xl font-bold mb-2">Need Help Booking?</h3>
                <p className="mb-4">Call us directly and we'll help you schedule your appointment.</p>
                <Button asChild variant="outline" className="text-[#004078] border-[#004078] hover:bg-[#004078] hover:text-white">
                  <a href="tel:9519046660">(951) 904-6660</a>
                </Button>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#004078]">Benefits of Booking Online</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {benefit.icon}
                    <div>
                      <h4 className="font-semibold text-[#004078]">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#004078]">Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">We proudly serve:</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Redlands, CA</p>
                  <p>• Highland, CA</p>
                  <p>• Yucaipa, CA</p>
                  <p>• Mentone, CA</p>
                  <p>• Loma Linda, CA</p>
                  <p>• San Bernardino, CA</p>
                  <p>• And surrounding areas</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOnline;
