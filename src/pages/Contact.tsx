import { useState } from 'react';
import { Clock, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    website: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');
    try {
      const response = await fetch('/sendmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const text = await response.text();
      if (text.trim() === 'success') {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#004078] mb-4">
            We're Here to Help — Let's Talk!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to solve your plumbing or HVAC needs? Get in touch with our friendly team today.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-[#004078]">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden from real users) */}
                <div style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
                  <label>
                    Do not fill this field
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#004078] mb-1">Name</label>
                    <Input
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#004078] mb-1">Email</label>
                    <Input
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#004078] mb-1">Phone</label>
                    <Input
                      required
                      type="tel"
                      placeholder="(951) 904-6660"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#004078] mb-1">Service</label>
                    <Select
                      value={formData.service}
                      onValueChange={(v) => handleInputChange('service', v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plumbing">Plumbing</SelectItem>
                        <SelectItem value="hvac">HVAC</SelectItem>
                        <SelectItem value="drain">Drain Cleaning</SelectItem>
                        <SelectItem value="water-heater">Water Heater</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#004078] mb-1">How can we help?</label>
                  <Textarea
                    required
                    placeholder="Tell us a bit about your issue..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Button type="submit" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  {status === 'success' && (
                    <span className="text-green-600">Thanks! We received your message.</span>
                  )}
                  {status === 'error' && (
                    <span className="text-red-600">Something went wrong. Please try again.</span>
                  )}
                </div>
              </form>

              <div className="bg-gray-50 rounded-lg p-6 mt-8 shadow-inner">
                <h3 className="text-xl font-semibold text-[#004078] mb-2">Why Contact Us?</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Fast response times for all service requests</li>
                  <li>Licensed and experienced technicians</li>
                  <li>Upfront, honest pricing</li>
                  <li>Comprehensive plumbing and HVAC solutions</li>
                  <li>Emergency services available 24/7</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  Our team is ready to answer your questions and provide the help you need. Reach out today and
                  experience our commitment to quality service!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#004078]">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#e23b19] mt-1"/>
                  <div>
                    <h3 className="font-semibold text-[#004078]">Phone</h3>
                    <a href="tel:9519046660" className="text-lg text-gray-600 hover:text-[#e23b19]">
                      (951) 904-6660
                    </a>
                    <p className="text-sm text-gray-500">Click to call on mobile</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#e23b19] mt-1"/>
                  <div>
                    <h3 className="font-semibold text-[#004078]">Address</h3>
                    <a
                        href="https://maps.google.com/?q=100+W.+Stuart+Ave.,+Redlands,+CA+92374"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#e23b19]"
                    >
                      1255 w Colton ave.<br/>
                      Redlands, CA 92374
                    </a>
                    <br/>
                    <br/>
                    <a
                        href="https://maps.google.com/?q=100+W.+Stuart+Ave.,+Redlands,+CA+92374"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#e23b19]"
                    >
                      33075 Yucaipa Blvd.<br/>
                      Yucaipa, CA 92399
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#e23b19] mt-1"/>
                  <div>
                    <h3 className="font-semibold text-[#004078]">Email</h3>
                    <a href="mailto:info@quickprosplumbingandair.com" className="text-gray-600 hover:text-[#e23b19]">
                      info@quickprosplumbingandair.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-[#e23b19] mt-1"/>
                  <div>
                    <h3 className="font-semibold text-[#004078]">Hours of Operation</h3>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                      <p>Saturday: 8:00 AM - 5:00 PM</p>
                      <p>Sunday: Emergency Service Only</p>
                      <p className="text-[#e23b19] font-semibold mt-2">24/7 Emergency Service Available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Callout */}
            <Card className="bg-[#e23b19] text-white">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold mb-2">Emergency? Call Us 24/7!</h3>
                <p className="mb-4">Plumbing and HVAC emergencies don't wait for business hours.</p>
                <Button asChild variant="outline" className="text-[#e23b19] border-white hover:bg-white">
                  <a href="tel:9519046660">(951) 904-6660</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#004078] mb-6 text-center">Find Us at Two Locations</h2>

          <div className="mt-16">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <iframe
                  title="Google Map"
                  width="100%"
                  height="100%"
                  className="rounded-lg border-0 w-full h-96"
                  style={{ minHeight: 424 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6808.555740007674!2d-117.20433038874742!3d34.06204661710083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcaa4399844dcb%3A0x71cc122837cd0b88!2s1255%20W%20Colton%20Ave%2C%20Redlands%2C%20CA%2092374%2C%20USA!5e1!3m2!1sen!2sch!4v1759097454777!5m2!1sen!2sch"
              />
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <iframe
                  title="Google Map"
                  width="100%"
                  height="100%"
                  className="rounded-lg border-0 w-full h-96"
                  style={{ minHeight: 424 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.733571309649!2d-117.18729332428317!3d34.059768373154185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcaa72a4927d9f%3A0xfe64ebe2a3ee4c32!2s100%20W%20Stuart%20Ave%2C%20Redlands%2C%20CA%2092374%2C%20USA!5e1!3m2!1sen!2shr!4v1763243108021!5m2!1sen!2shr"
              />
            </div>
          </div>

        </div>
        </div>
    </div>
  );
};

export default Contact;
