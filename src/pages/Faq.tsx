import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown, ChevronUp, Wrench, Thermometer, Snowflake, Users, Shield, Clock, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
const FAQ = () => {
    const [openSection, setOpenSection] = useState<string | null>('about');
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);
    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
        setOpenQuestion(null); // Close any open questions when switching sections
    };
    const toggleQuestion = (questionId: string) => {
        setOpenQuestion(openQuestion === questionId ? null : questionId);
    };
    const faqSections = [
        {
            id: 'about',
            title: 'About QuickPros',
            icon: <Users className="h-6 w-6 text-[#f8a825]" />,
            questions: [
                {
                    id: 'about-1',
                    question: 'Who is QuickPros Plumbing & Air?',
                    answer: "We're a veteran- and family-owned company serving the Inland Empire with expert plumbing, heating, and AC repair services. Our mission is simple: provide honest, reliable service backed by decades of experience."
                },
                {
                    id: 'about-2',
                    question: 'Are you licensed and insured?',
                    answer: 'Yes, QuickPros is fully licensed and insured. Our certified technicians provide peace of mind for every job, from sewer line repair to AC installation in Redlands.'
                },
                {
                    id: 'about-3',
                    question: 'What areas do you service?',
                    answer: 'We proudly serve Redlands, Yucaipa, Highland, Loma Linda, San Bernardino, and surrounding Inland Empire communities.'
                },
                {
                    id: 'about-4',
                    question: 'Do you offer emergency services?',
                    answer: 'Yes! Our team is available 24/7 for emergency plumbing repair, furnace repair, and AC service.'
                },
                {
                    id: 'about-5',
                    question: 'How long have you been in business?',
                    answer: 'While QuickPros is a fast-growing local company, our team brings more than 30 years of hands-on industry expertise in plumbing and HVAC in the Inland Empire.'
                },
                {
                    id: 'about-6',
                    question: 'Do you offer financing or "Buy Now, Pay Later" options?',
                    answer: 'Absolutely. We offer EZ financing for plumbing and HVAC installations, including Buy Now, Pay Later options with a 90% approval rate. You can even pre-qualify online with no hard credit check.'
                }
            ]
        },
        {
            id: 'plumbing',
            title: 'Plumbing FAQs',
            icon: <Wrench className="h-6 w-6 text-[#f8a825]" />,
            questions: [
                {
                    id: 'plumbing-1',
                    question: 'What should I do if I have a water leak in my home?',
                    answer: 'Shut off your main water supply and call QuickPros right away. Our team provides fast leak detection and plumbing repair in Redlands and Yucaipa.'
                },
                {
                    id: 'plumbing-2',
                    question: 'How can I tell if I need a new water heater or just a repair?',
                    answer: 'If your water heater is leaking, making noises, or not producing consistent hot water, it may be time for a replacement. We specialize in water heater repair and water heater installation in the Inland Empire.'
                },
                {
                    id: 'plumbing-3',
                    question: 'What is the average lifespan of a water heater?',
                    answer: 'Tank water heaters last 8–12 years, while tankless systems can last up to 20 years. Regular water heater maintenance can extend their life.'
                },
                {
                    id: 'plumbing-4',
                    question: 'Do you offer drain cleaning services, and how often should drains be cleaned?',
                    answer: 'Yes — our drain cleaning and hydro-jetting services in Redlands and Highland clear clogs and prevent backups. We recommend annual cleaning for problem drains.'
                },
                {
                    id: 'plumbing-5',
                    question: 'What are the signs I may need a whole-home re-pipe?',
                    answer: 'Rusty water, low pressure, frequent leaks, or old galvanized pipes are strong indicators. We provide affordable whole-home re-piping in the Inland Empire.'
                },
                {
                    id: 'plumbing-6',
                    question: 'Do you install water filtration or water softener systems?',
                    answer: 'Yes! We install whole-home water filtration systems and water softeners to give you cleaner, healthier water while protecting your plumbing.'
                }
            ]
        },
        {
            id: 'heating',
            title: 'Heating FAQs',
            icon: <Thermometer className="h-6 w-6 text-[#f8a825]" />,
            questions: [
                {
                    id: 'heating-1',
                    question: 'How often should my furnace be serviced?',
                    answer: 'Your furnace should be inspected once a year before winter. QuickPros offers furnace tune-ups in Redlands and Yucaipa to keep your system running efficiently.'
                },
                {
                    id: 'heating-2',
                    question: 'What are the signs my heater needs repair or replacement?',
                    answer: 'Signs include uneven heating, unusual noises, rising bills, or frequent breakdowns. We provide expert heater repair and replacement in the Inland Empire.'
                },
                {
                    id: 'heating-3',
                    question: 'Do you install energy-efficient heat pumps?',
                    answer: 'Yes! Heat pumps are a cost-effective way to heat and cool your home. Ask about our heat pump installation in Redlands and surrounding areas.'
                },
                {
                    id: 'heating-4',
                    question: "What's the difference between a furnace and a heat pump?",
                    answer: "A furnace generates heat, while a heat pump transfers heat. Heat pumps are highly energy-efficient and ideal for California's mild climate."
                }
            ]
        },
        {
            id: 'ac',
            title: 'Air Conditioning FAQs',
            icon: <Snowflake className="h-6 w-6 text-[#f8a825]" />,
            questions: [
                {
                    id: 'ac-1',
                    question: 'How often should I schedule AC maintenance?',
                    answer: 'Once a year, preferably in the spring. We offer professional AC maintenance in Redlands and Yucaipa to maximize comfort and reduce energy bills.'
                },
                {
                    id: 'ac-2',
                    question: 'What are the signs I may need to replace my AC unit?',
                    answer: 'Warm air, weak airflow, frequent repairs, or a system older than 12–15 years often means replacement. We specialize in AC replacement in the Inland Empire.'
                },
                {
                    id: 'ac-3',
                    question: 'Do you offer indoor air quality solutions (like air purifiers or filters)?',
                    answer: 'Yes — QuickPros installs whole-home air purification systems, HEPA filters, and humidity control to improve your indoor air quality.'
                },
                {
                    id: 'ac-4',
                    question: 'How can I lower my energy bills while running my AC?',
                    answer: 'Schedule regular maintenance, seal ducts, and consider an energy-efficient AC upgrade. Installing a programmable thermostat also helps cut costs.'
                }
            ]
        }
    ];
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#004078] mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                        At QuickPros Plumbing & Air, we're proud to be the trusted plumber in Redlands, Yucaipa, and the Inland Empire for all your plumbing, heating, and air conditioning needs. Whether you're dealing with a water heater issue, need reliable drain cleaning in Highland, or want an energy-efficient AC system, our licensed experts are here to help.
                    </p>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        Below you'll find answers to the most common questions about our services and how we keep your home safe, comfortable, and efficient year-round.
                    </p>
                </div>
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    <div className="text-center bg-[#004078] text-white rounded-lg p-6">
                        <Shield className="h-8 w-8 mx-auto mb-3 text-[#f8a825]" />
                        <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
                        <p className="text-sm text-white/80">Fully certified technicians</p>
                    </div>
                    <div className="text-center bg-[#e23b19] text-white rounded-lg p-6">
                        <Clock className="h-8 w-8 mx-auto mb-3 text-white" />
                        <h3 className="font-bold text-lg mb-2">24/7 Emergency</h3>
                        <p className="text-sm text-white/80">Always here when you need us</p>
                    </div>
                    <div className="text-center bg-[#f8a825] text-[#004078] rounded-lg p-6">
                        <Users className="h-8 w-8 mx-auto mb-3 text-[#004078]" />
                        <h3 className="font-bold text-lg mb-2">Family Owned</h3>
                        <p className="text-sm text-[#004078]/80">Veteran & family operated</p>
                    </div>
                    <div className="text-center bg-[#00589f] text-white rounded-lg p-6">
                        <MapPin className="h-8 w-8 mx-auto mb-3 text-[#f8a825]" />
                        <h3 className="font-bold text-lg mb-2">Local Experts</h3>
                        <p className="text-sm text-white/80">Serving the Inland Empire</p>
                    </div>
                </div>
                {/* FAQ Sections */}
                <div className="max-w-4xl mx-auto">
                    {faqSections.map((section) => (
                        <Card key={section.id} className="mb-6">
                            <CardHeader>
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className="flex items-center justify-between w-full text-left"
                                >
                                    <CardTitle className="flex items-center text-2xl text-[#004078]">
                                        <div className="bg-[#004078] rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                            {section.icon}
                                        </div>
                                        {section.title}
                                    </CardTitle>
                                    {openSection === section.id ? (
                                        <ChevronUp className="h-6 w-6 text-[#004078]" />
                                    ) : (
                                        <ChevronDown className="h-6 w-6 text-[#004078]" />
                                    )}
                                </button>
                            </CardHeader>
                            {openSection === section.id && (
                                <CardContent className="pt-0">
                                    <div className="space-y-4">
                                        {section.questions.map((faq) => (
                                            <div key={faq.id} className="border-l-4 border-[#f8a825] pl-4">
                                                <button
                                                    onClick={() => toggleQuestion(faq.id)}
                                                    className="flex items-center justify-between w-full text-left py-3"
                                                >
                                                    <h3 className="text-lg font-semibold text-[#004078] pr-4">
                                                        {faq.question}
                                                    </h3>
                                                    {openQuestion === faq.id ? (
                                                        <ChevronUp className="h-5 w-5 text-[#004078] flex-shrink-0" />
                                                    ) : (
                                                        <ChevronDown className="h-5 w-5 text-[#004078] flex-shrink-0" />
                                                    )}
                                                </button>
                                                {openQuestion === faq.id && (
                                                    <div className="pb-4">
                                                        <p className="text-gray-600 leading-relaxed">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            )}
                        </Card>
                    ))}
                </div>
                {/* Contact CTA */}
                <div className="bg-gradient-to-r from-[#004078] to-[#00589f] rounded-2xl p-12 text-center text-white mt-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Still Have Questions?
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        QuickPros Plumbing & Air is here to make home comfort easy. From plumbing repair in Redlands to AC installation in Yucaipa and furnace service in the Inland Empire, we're the local experts you can count on.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Button asChild size="lg" className="bg-[#e23b19] hover:bg-[#e23b19]/90 text-lg px-8">
                            <a href="tel:9519046660">
                                <Phone className="h-6 w-6 mr-3" />
                                Call us today at (951) 904-6660
                            </a>
                        </Button>
                        <Button asChild size="lg" className="bg-white text-[#004078] hover:bg-gray-100 text-lg px-8">
                            <Link to="/book-online">
                                Book Online at QuickProsPlumbingandAir.com
                            </Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="text-center">
                            <Wrench className="h-8 w-8 mx-auto mb-3 text-[#f8a825]" />
                            <h3 className="font-semibold mb-2">Expert Plumbing</h3>
                            <p className="text-white/80 text-sm">Water heaters, leak repair, drain cleaning & more</p>
                        </div>
                        <div className="text-center">
                            <Thermometer className="h-8 w-8 mx-auto mb-3 text-[#f8a825]" />
                            <h3 className="font-semibold mb-2">Heating Services</h3>
                            <p className="text-white/80 text-sm">Furnace repair, heat pumps & maintenance</p>
                        </div>
                        <div className="text-center">
                            <Snowflake className="h-8 w-8 mx-auto mb-3 text-[#f8a825]" />
                            <h3 className="font-semibold mb-2">Air Conditioning</h3>
                            <p className="text-white/80 text-sm">AC repair, installation & indoor air quality</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FAQ;
