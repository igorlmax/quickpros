import { Link } from 'react-router-dom';
import { Phone, CheckCircle, CreditCard, Clock, Shield, Users, Star, DollarSign, FileText, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
const Financing = () => {
    const whyFinancePoints = [
        {
            icon: <Zap className="h-6 w-6 text-[#f8a825]" />,
            title: "Fast, simple application process",
            description: "Get started in minutes with our streamlined online application"
        },
        {
            icon: <Shield className="h-6 w-6 text-[#f8a825]" />,
            title: "No hard credit check to see if you qualify",
            description: "Check your eligibility without impacting your credit score"
        },
        {
            icon: <CheckCircle className="h-6 w-6 text-[#f8a825]" />,
            title: "High approval rates",
            description: "Most customers get approved for the financing they need"
        },
        {
            icon: <DollarSign className="h-6 w-6 text-[#f8a825]" />,
            title: "Affordable monthly payments",
            description: "Choose payment plans that fit comfortably in your budget"
        },
        {
            icon: <Star className="h-6 w-6 text-[#f8a825]" />,
            title: "Trusted partner financing powered by Sunbit",
            description: "Backed by a reputable financing company you can trust"
        }
    ];
    const howItWorksSteps = [
        {
            step: "1",
            title: "Apply Online",
            description: "Click the \"Pre-Qualify\" button above.",
            icon: <FileText className="h-8 w-8 text-[#e23b19]" />
        },
        {
            step: "2",
            title: "Get Approved Quickly",
            description: "Most customers are approved in just minutes.",
            icon: <Clock className="h-8 w-8 text-[#e23b19]" />
        },
        {
            step: "3",
            title: "Choose Your Plan",
            description: "Select flexible monthly payments that fit your budget.",
            icon: <CreditCard className="h-8 w-8 text-[#e23b19]" />
        },
        {
            step: "4",
            title: "Enjoy Peace of Mind",
            description: "Get your plumbing, heating, or air project done right away.",
            icon: <CheckCircle className="h-8 w-8 text-[#e23b19]" />
        }
    ];
    const financingOptions = [
        {
            icon: <div className="w-12 h-12 bg-[#004078] rounded-full flex items-center justify-center text-white font-bold">🔧</div>,
            title: "Plumbing Repairs & Upgrades",
            description: "Leak fixes, water heaters, repipes, and more"
        },
        {
            icon: <div className="w-12 h-12 bg-[#e23b19] rounded-full flex items-center justify-center text-white font-bold">❄️</div>,
            title: "HVAC Installations & Replacements",
            description: "New heating and cooling systems for your home"
        },
        {
            icon: <div className="w-12 h-12 bg-[#f8a825] rounded-full flex items-center justify-center text-white font-bold">⚙️</div>,
            title: "Routine Maintenance & Membership Plans",
            description: "Keep your systems running efficiently year-round"
        },
        {
            icon: <div className="w-12 h-12 bg-[#00589f] rounded-full flex items-center justify-center text-white font-bold">🏠</div>,
            title: "Larger Home Comfort Projects",
            description: "Major upgrades that improve your home's comfort"
        }
    ];
    const faqs = [
        {
            question: "Will this affect my credit score?",
            answer: "No — checking to see if you qualify will not affect your credit score."
        },
        {
            question: "How long does approval take?",
            answer: "Most decisions are made in just minutes."
        },
        {
            question: "Can I finance small jobs?",
            answer: "Yes! Whether it's a quick repair or a bigger project, financing is available."
        }
    ];
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16 bg-gradient-to-b from-[#1a2636] via-[#22304a] to-[#2d3e5e] rounded-2xl p-10 shadow-lg">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow">
                        Flexible Financing Options for Plumbing, Heating &amp; Air Services
                    </h1>
                    <p className="text-xl text-[#c7d2e0] max-w-3xl mx-auto mb-8">
                        Get the repairs or upgrades you need today, and pay over time with financing through our trusted partner.
                    </p>
                    <div className="mb-6">
                        <Button asChild size="lg" className="bg-[#f8a825] hover:bg-[#e89c1a] text-xl py-4 px-8 text-[#1a2636] font-bold shadow-md">
                            <a href="https://apply.sunbit.com/QUICKPROSPlumbingAir" target="_blank" rel="noopener noreferrer">
                                <CreditCard className="h-6 w-6 mr-3" />
                                See if You Pre-Qualify
                            </a>
                        </Button>
                    </div>
                    <p className="text-sm text-[#b6c3d6] flex items-center justify-center">
                        <Shield className="h-4 w-4 mr-2 text-[#4ade80]" />
                        Checking eligibility takes just minutes and won&apos;t affect your credit score.
                    </p>
                </div>
                {/* Why Finance with QuickPros */}
                <section className="mb-16 bg-gradient-to-br from-[#f8fafc] via-[#eaf3fa] to-[#e3eaf6] rounded-2xl p-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">
                            Why Finance with QuickPros?
                        </h2>
                        <p className="text-lg text-[#36506c] max-w-3xl mx-auto">
                            QuickPros is built on honesty, integrity, and family values. Financing makes it easier for customers to stay comfortable without financial stress.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyFinancePoints.map((point, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="bg-[#003366] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        {point.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#003366] mb-3">{point.title}</h3>
                                    <p className="text-[#36506c] text-sm">{point.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                {/* How It Works */}
                <section className="mb-16 bg-gray-50 rounded-2xl p-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#004078] mb-4">
                            How It Works
                        </h2>
                        <p className="text-lg text-gray-600">
                            Getting financing for your home comfort needs is simple and straightforward.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {howItWorksSteps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    {step.icon}
                                </div>
                                <div className="bg-[#f8a825] text-[#004078] rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold text-[#004078] mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* What Can Be Financed */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#004078] mb-4">
                            What Can Be Financed
                        </h2>
                        <p className="text-lg text-gray-600">
                            From small repairs to major installations, we offer financing for all your home comfort needs.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {financingOptions.map((option, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 flex items-start space-x-4">
                                    {option.icon}
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#004078] mb-2">{option.title}</h3>
                                        <p className="text-gray-600">{option.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                {/* Why QuickPros */}
                <section className="mb-16 bg-[#004078] rounded-2xl p-8 text-white">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Why QuickPros?
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-[#f8a825] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-[#004078]" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Veteran & Family Owned</h3>
                            <p className="text-white/80 text-sm">Proudly serving our local community</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-[#f8a825] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Star className="h-8 w-8 text-[#004078]" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">30+ Years Experience</h3>
                            <p className="text-white/80 text-sm">Over 30 years of industry experience</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-[#f8a825] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-[#004078]" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Customer-First Service</h3>
                            <p className="text-white/80 text-sm">Fast response times when you need us</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-[#f8a825] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-[#004078]" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Honest Pricing</h3>
                            <p className="text-white/80 text-sm">Trusted by homeowners across the Inland Empire</p>
                        </div>
                    </div>
                </section>
                {/* FAQs */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#004078] mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {faqs.map((faq, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="text-xl text-[#004078]">{faq.question}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                {/* Final Call-to-Action */}
                <section className="bg-[#e23b19] rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Don't Wait on Comfort
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Get the service you need today and pay over time. Your family's comfort shouldn't wait for your budget.
                    </p>
                    <div className="space-y-4">
                        <Button asChild size="lg" className="bg-white text-[#e23b19] hover:bg-gray-100 text-xl py-4 px-8">
                            <a href="https://apply.sunbit.com/QUICKPROSPlumbingAir" target="_blank" rel="noopener noreferrer">
                                <CreditCard className="h-6 w-6 mr-3" />
                                Pre-Qualify Now
                            </a>
                        </Button>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                            <Button asChild variant="outline" size="lg" className="border-white text-[#e23b19] hover:bg-white hover:text-[#e23b19]">
                                <a href="tel:9519046660">
                                    <Phone className="h-5 w-5 mr-2" />
                                    Call (951) 904-6660
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white text-[#e23b19] hover:bg-white hover:text-[#e23b19]">
                                <Link to="/book-online">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    Book Service Online
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <p className="text-white/80 text-sm mt-6">
                        Licensed, Bonded & Insured • Serving Redlands & the Inland Empire
                    </p>
                </section>
            </div>
        </div>
    );
};
export default Financing;
