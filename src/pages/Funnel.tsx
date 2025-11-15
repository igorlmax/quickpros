import { useState } from 'react';
import {
    AlertCircle,
    ArrowRight,
    CheckCircle,
    CreditCard,
    MessageSquare,
    Phone,
    Shield,
    Star,
    Users
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';

const Funnel = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [status, setStatus] = useState("");
    const [formData, setFormData] = useState({
        waterHeaterType: '',
        zipCode: '',
        email: '',
        phone: ''
    });

    const handleWaterHeaterSelection = (type: string) => {
        setFormData(prev => ({ ...prev, waterHeaterType: type }));
    };

    const proceedToNextStep = () => {
        setCurrentStep(2);
    };

    const handleZipCodeSubmit = () => {
        if (formData.zipCode.length >= 5) {
            setCurrentStep(3);
        }
    };

    const handleEmailSubmit = () => {
        if (formData.email.includes('@')) {
            setCurrentStep(4);
        }
    };

    const handlePhoneSubmit = async () => {
        if (formData.phone.length >= 10) {
            await handleSubmit({ preventDefault: () => {} });
            // setCurrentStep(5);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("/sendmail.php", {
        method: "POST",
        body: formData ? JSON.stringify(formData) : null,
        headers: {
            'Content-Type': 'application/json'
        },
        })

        const text = await response.text();
        setStatus(text === "success" ? "success" : "error");

        setCurrentStep(5);
    };

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#00589f] via-[#004078] to-[#00589f]">
            {/* Hero Section */}
            {currentStep === 1 && (
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Need a New Water Heater?<br/>
                            <span className="text-[#f8a825]">Get Your Instant Quote Today!</span>
                        </h1>

                        {/* Trust Icons */}
                        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
                            <div
                                className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center space-x-2">
                                <Shield className="h-6 w-6 text-[#f8a825]"/>
                                <span className="font-semibold">Veteran Owned & Operated</span>
                            </div>
                            <div
                                className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center space-x-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-[#f8a825] fill-current"/>
                                    ))}
                                </div>
                                <span className="font-semibold">Google Reviews</span>
                            </div>
                            <div
                                className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center space-x-2">
                                <CreditCard className="h-6 w-6 text-[#f8a825]"/>
                                <span className="font-semibold">Financing Available</span>
                            </div>
                        </div>


                        {/* Step 1 - Choose Water Heater */}
                        <div className="bg-white rounded-2xl p-8 shadow-2xl mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#004078] mb-8">
                                Which type of water heater are you looking for?
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                {/* Tank Style */}
                                <button
                                    onClick={() => handleWaterHeaterSelection('tank')}
                                    className={`group rounded-xl p-6 transition-all duration-300 transform hover:scale-105 border-4 cursor-pointer ${
                                        formData.waterHeaterType === 'tank'
                                            ? 'border-[#e23b19] bg-[#e23b19]/10 shadow-xl'
                                            : 'border-gray-200 hover:border-[#e23b19]/50'
                                    }`}
                                >
                                    {/* Tank Water Heater Image */}
                                    <div className="relative mb-4">
                                        <img
                                            src="/Tank-Style-Water-Heater.jpg"
                                            alt="Tank Style Water Heater"
                                            className="w-full h-80 object-contain rounded-lg"
                                            loading="lazy"
                                        />
                                        {formData.waterHeaterType === 'tank' && (
                                            <div
                                                className="absolute top-4 right-4 bg-[#e23b19] text-white rounded-full p-2">
                                                <CheckCircle className="h-6 w-6"/>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className={`text-2xl font-bold mb-2 ${
                                        formData.waterHeaterType === 'tank' ? 'text-[#e23b19]' : 'text-[#004078]'
                                    }`}>
                                        Tank Style Water Heater
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Traditional, reliable, cost-effective solution for most homes
                                    </p>

                                </button>

                                {/* Tankless Style */}
                                <button
                                    onClick={() => handleWaterHeaterSelection('tankless')}
                                    className={`group rounded-xl p-6 transition-all duration-300 transform hover:scale-105 border-4 cursor-pointer ${
                                        formData.waterHeaterType === 'tankless'
                                            ? 'border-[#004078] bg-[#004078]/10 shadow-xl'
                                            : 'border-gray-200 hover:border-[#004078]/50'
                                    }`}
                                >
                                    {/* Tankless Water Heater Image */}
                                    <div className="relative mb-4">
                                        <img
                                            src="/Tankless.jpg"
                                            alt="Tankless Water Heater"
                                            className="w-full h-80 object-contain rounded-lg"
                                        />
                                        {formData.waterHeaterType === 'tankless' && (
                                            <div
                                                className="absolute top-4 right-4 bg-[#004078] text-white rounded-full p-2">
                                                <CheckCircle className="h-6 w-6"/>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className={`text-2xl font-bold mb-2 ${
                                        formData.waterHeaterType === 'tankless' ? 'text-[#004078]' : 'text-[#004078]'
                                    }`}>
                                        Tankless Water Heater
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Space-saving, energy-efficient, endless hot water on demand
                                    </p>
                                </button>
                            </div>

                            {/* Continue Button - Only shows when selection is made */}
                            {formData.waterHeaterType && (
                                <div className="text-center">
                                    <p className="text-lg text-[#004078] mb-4 font-semibold">
                                        Great choice! {formData.waterHeaterType === 'tank' ? 'Tank' : 'Tankless'} water
                                        heaters are excellent.
                                    </p>
                                    <Button
                                        onClick={proceedToNextStep}
                                        className="bg-[#e23b19] hover:bg-[#e23b19]/90 text-lg py-4 px-8 cursor-pointer"
                                    >
                                        Continue to Get My Quote
                                        <ArrowRight className="h-5 w-5 ml-2"/>
                                    </Button>
                                </div>
                            )}
                            {!formData.waterHeaterType && (
                                <div className="text-center">
                                    <p className="text-lg text-[#004078] mb-4 font-semibold">
                                        Please select one option to proceed.
                                    </p>
                                </div>
                            )}
                        </div>

                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            Tank or Tankless — We've Got You Covered.<br/>
                            Fast installs. Local experts. Guaranteed comfort.
                        </p>

                        <img src="/Quickpros-Complete-Logo.png" alt="QuickPros Complete Logo" className="mx-auto mb-8"
                             loading="lazy"/>

                        {/* Save $250 Section */}
                        <div className="bg-[#f8a825] rounded-2xl p-8 mb-8 shadow-2xl">
                            <div className="text-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#004078] mb-4">
                                    💰 SAVE $250 TODAY! 💰
                                </h2>
                                <p className="text-xl text-[#004078] font-semibold mb-2">
                                    On a New Water Heater Installation
                                </p>
                                <p className="text-[#004078]/80 text-lg">
                                    Limited time offer - Get your quote now to secure this discount!
                                </p>
                            </div>
                        </div>

                        {/* Our Team at Work Section */}
                        <div className="bg-gradient-to-r from-[#004078] to-[#00589f] rounded-2xl p-8 mb-8 shadow-2xl">
                            <div className="text-center mb-8">
                                <div className="flex items-center justify-center mb-4">
                                    <Users className="h-8 w-8 text-[#f8a825] mr-3"/>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                                        Meet Our Expert Team
                                    </h2>
                                </div>
                                <p className="text-white/90 text-lg max-w-2xl mx-auto">
                                    Our certified technicians bring years of experience and dedication to every job.
                                    See why Inland Empire homeowners trust QuickPros for their water heater needs.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="bg-white rounded-lg p-4 mb-4 shadow-lg">
                                        <img
                                            src="/NOAH-QP-4.jpg"
                                            alt="QuickPros Technician at Work"
                                            className="w-full h-72 object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="bg-white rounded-lg p-4 mb-4 shadow-lg">
                                        <img
                                            src="/Noah-QP-5.jpg"
                                            alt="QuickPros Technician Repairing Water Heater"
                                            className="w-full h-72 object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="bg-white rounded-lg p-4 mb-4 shadow-lg">
                                        <img
                                            src="/Noah-QP-6.jpg"
                                            alt="QuickPros Technician Inspecting System"
                                            className="w-full h-72 object-contain"
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="text-center mt-8">
                                <p className="text-white/90 text-lg font-semibold mb-2">
                                    🏆 Licensed • Insured • Background Checked
                                </p>
                                <p className="text-white/80">
                                    Every QuickPros technician is fully certified and committed to delivering
                                    exceptional service to your home.
                                </p>
                            </div>
                        </div>

                        {/* Water Heater Troubles Section */}
                        <div className="bg-[#e23b19] rounded-2xl p-8 mb-8 shadow-2xl">
                            <div className="flex items-center justify-center mb-4">
                                <AlertCircle className="h-8 w-8 text-white mr-3"/>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                    Water Heater Troubles?
                                </h2>
                            </div>
                            <p className="text-white/90 text-lg mb-6">
                                Don't wait for cold showers! Get emergency service now.
                            </p>
                            <Button asChild size="lg"
                                    className="bg-white text-[#e23b19] hover:bg-gray-100 text-xl py-4 px-8 cursor-pointer">
                                <a href="tel:9519046660">
                                    <Phone className="h-6 w-6 mr-3"/>
                                    Call (951) 904-6660
                                </a>
                            </Button>
                        </div>

                        {/* Three Image Placeholders Section */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                            <h2 className="text-2xl font-bold text-white mb-8 text-center">
                                Type of water heaters we install and repair
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="bg-white rounded-lg p-4 mb-4 shadow-lg">
                                        <img
                                            src="/heater_01.jpg"
                                            alt="Water Heater Installation Service"
                                            className="w-full h-80 object-contain"
                                        />
                                    </div>
                                    <h3 className="text-white font-semibold"></h3>
                                </div>
                                <div className="text-center">
                                    <div className="bg-white rounded-lg p-4 mb-4 shadow-lg">
                                        <img
                                            src="/heater_02.jpg"
                                            alt="Water Heater Repair Service"
                                            className="w-full h-80 object-contain"
                                        />
                                    </div>
                                    <h3 className="text-white font-semibold"></h3>
                                </div>
                            </div>
                        </div>

                        {/* Logo Section */}
                        <div className="rounded-2xl p-8 shadow-2xl mb-8">
                            <div className="text-center">
                                <img
                                    src="/Quickpros-Complete-Logo.png"
                                    alt="QuickPros Plumbing & Air Logo"
                                    className="mx-auto max-w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Website Address Section */}
                        <div className="bg-[#004078] rounded-2xl p-6 shadow-2xl">
                            <div className="text-center">
                                <p className="text-white text-lg font-semibold mb-2">
                                    Visit us online for more information:
                                </p>
                                <a
                                    href="https://quickprosplumbingandair.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#f8a825] text-xl font-bold hover:text-white transition-colors underline"
                                >
                                    https://quickprosplumbingandair.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Step 2 - Location Qualifier */}
            {currentStep === 2 && (
                <div className="container mx-auto px-4 py-12 min-h-screen flex items-center">
                    <div className="max-w-2xl mx-auto text-center text-white w-full">
                        <div className="mb-8">
                        <p className="text-[#f8a825] font-semibold mb-2">Step 2 of 4</p>
                            <div className="w-full bg-white/20 rounded-full h-2 mb-8">
                                <div className="bg-[#f8a825] h-2 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                        </div>

                        <Card className="bg-white shadow-2xl">
                            <CardContent className="p-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#004078] mb-2">
                                    Great choice! {formData.waterHeaterType === 'tank' ? 'Tank' : 'Tankless'} water heaters are excellent.
                                </h2>
                                <h3 className="text-xl text-gray-600 mb-8">What's your ZIP Code?</h3>

                                <div className="max-w-md mx-auto">
                                    <Input
                                        name="zipCode"
                                        type="text"
                                        placeholder="Enter ZIP Code (e.g., 92374)"
                                        value={formData.zipCode}
                                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                                        className="text-center text-lg py-4 mb-4"
                                        maxLength={5}
                                    />
                                    <p className="text-sm text-gray-500 mb-6">
                                        We service Redlands, Yucaipa, Inland Empire & Surrounding Areas
                                    </p>
                                    <Button
                                        onClick={handleZipCodeSubmit}
                                        disabled={formData.zipCode.length < 5}
                                        className="w-full bg-[#e23b19] hover:bg-[#e23b19]/90 text-lg py-4 cursor-pointer"
                                    >
                                        Continue to Quote
                                        <ArrowRight className="h-5 w-5 ml-2" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )}

            {/* Step 3 - Email Capture */}
            {currentStep === 3 && (
                <div className="container mx-auto px-4 py-12 min-h-screen flex items-center">
                    <div className="max-w-2xl mx-auto text-center text-white w-full">
                        <div className="mb-8">
                            <p className="text-[#f8a825] font-semibold mb-2">Step 3 of 4</p>
                            <div className="w-full bg-white/20 rounded-full h-2 mb-8">
                                <div className="bg-[#f8a825] h-2 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </div>

                        <Card className="bg-white shadow-2xl">
                            <CardContent className="p-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#004078] mb-8">
                                    Where can we send your detailed quote?
                                </h2>

                                <div className="max-w-md mx-auto">
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="text-center text-lg py-4 mb-4"
                                    />
                                    <p className="text-sm text-gray-500 mb-6 flex items-center justify-center">
                                        <Shield className="h-4 w-4 mr-2 text-green-500" />
                                        We never spam. Just your instant estimate and updates.
                                    </p>
                                    <Button
                                        onClick={handleEmailSubmit}
                                        disabled={!formData.email.includes('@')}
                                        className="w-full bg-[#e23b19] hover:bg-[#e23b19]/90 text-lg py-4 cursor-pointer"
                                    >
                                        Get My Quote
                                        <ArrowRight className="h-5 w-5 ml-2" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )}

            {/* Step 4 - Phone Number Capture */}
            {currentStep === 4 && (
                <div className="container mx-auto px-4 py-12 min-h-screen flex items-center">
                    <div className="max-w-2xl mx-auto text-center text-white w-full">
                        <div className="mb-8">
                            <p className="text-[#f8a825] font-semibold mb-2">Step 4 of 4</p>
                            <div className="w-full bg-white/20 rounded-full h-2 mb-8">
                                <div className="bg-[#f8a825] h-2 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>

                        <Card className="bg-white shadow-2xl">
                            <CardContent className="p-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#004078] mb-8">
                                    What's the best phone number to text your quote to?
                                </h2>

                                <div className="max-w-md mx-auto">
                                    <Input
                                        name="phone"
                                        type="tel"
                                        placeholder="Enter phone number"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="text-center text-lg py-4 mb-4"
                                    />

                                    <div className="flex items-center justify-center space-x-2 mb-6">
                                    </div>

                                    <Button
                                        onClick={handlePhoneSubmit}
                                        disabled={formData.phone.length < 10}
                                        className="w-full bg-[#e23b19] hover:bg-[#e23b19]/90 text-lg py-4 cursor-pointer"
                                    >
                                        Send My Quote Now!
                                        <MessageSquare className="h-5 w-5 ml-2" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )}

            {/* Step 5 - Thank You / Confirmation */}
            {currentStep === 5 && (
                <div className="container mx-auto px-4 py-12 min-h-screen flex items-center">
                    <div className="max-w-3xl mx-auto text-center text-white w-full">
                        {status === "error" && (
                            <Card className="bg-white shadow-2xl">
                                <CardContent className="p-12">
                                    <div className="text-6xl mb-6">❌</div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-[#004078] mb-6">
                                        Something went wrong. Please try again.
                                    </h1>

                                    <div className="space-y-4">
                                        <Button asChild className="w-full bg-[#e23b19] hover:bg-[#e23b19]/90 text-lg py-4 cursor-pointer">
                                            <a href="tel:9519046660">
                                                <Phone className="h-5 w-5 mr-2" />
                                                Need help now? Call us at (951) 904-6660
                                            </a>
                                        </Button>

                                        <Button asChild variant="outline" className="w-full text-[#004078] border-[#004078] hover:bg-[#004078] hover:text-white text-lg py-4 cursor-pointer">
                                            <a href="/book-online">
                                                <CheckCircle className="h-5 w-5 mr-2" />
                                                Book Online Instantly
                                            </a>
                                        </Button>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <p className="text-sm text-gray-500">
                                            QuickPros Plumbing & Air • Licensed, Bonded & Insured<br />
                                            Serving Redlands & the Inland Empire since 2010
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {status === "success" && (
                            <Card className="bg-white shadow-2xl">
                                <CardContent className="p-12">
                                    <div className="text-6xl mb-6">🚀</div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-[#004078] mb-6">
                                        Thanks! Your Quote is On Its Way
                                    </h1>
                                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                        One of our QuickPros experts will review your info and send your estimate shortly.
                                        Keep an eye on your inbox and phone for your instant quote.
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                                        <h3 className="font-semibold text-[#004078] mb-4">Your Selection Summary:</h3>
                                        <div className="text-left max-w-md mx-auto space-y-2">
                                            <div className="flex justify-between">
                                                <span>Water Heater Type:</span>
                                                <span className="font-semibold capitalize">{formData.waterHeaterType}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Service Area:</span>
                                                <span className="font-semibold">{formData.zipCode}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Email:</span>
                                                <span className="font-semibold">{formData.email}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Phone:</span>
                                                <span className="font-semibold">{formData.phone}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <Button asChild className="w-full bg-[#e23b19] hover:bg-[#e23b19]/90 text-lg py-4 cursor-pointer">
                                            <a href="tel:9519046660">
                                                <Phone className="h-5 w-5 mr-2" />
                                                Need help now? Call us at (951) 904-6660
                                            </a>
                                        </Button>

                                        <Button asChild variant="outline" className="w-full text-[#004078] border-[#004078] hover:bg-[#004078] hover:text-white text-lg py-4 cursor-pointer">
                                            <a href="/book-online">
                                                <CheckCircle className="h-5 w-5 mr-2" />
                                                Book Online Instantly
                                            </a>
                                        </Button>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <p className="text-sm text-gray-500">
                                            QuickPros Plumbing & Air • Licensed, Bonded & Insured<br />
                                            Serving Redlands & the Inland Empire since 2010
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Funnel;
