import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Clock, User, Phone, Mail, MessageCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { id: "facial", name: "Signature Facial", price: 120, duration: "60 min" },
  { id: "massage", name: "Swedish Massage", price: 150, duration: "90 min" },
  { id: "manicure", name: "Luxury Manicure", price: 65, duration: "45 min" },
  { id: "pedicure", name: "Spa Pedicure", price: 75, duration: "60 min" },
  { id: "body-scrub", name: "Body Scrub", price: 90, duration: "45 min" },
  { id: "waxing", name: "Waxing Services", price: 35, duration: "30-60 min" },
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const BookingFlow = () => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const getTotalPrice = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);
  };

  const handleConfirmBooking = async () => {
    setIsProcessing(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const selectedServiceNames = selectedServices.map(id => 
      services.find(s => s.id === id)?.name
    ).join(", ");
    
    const message = `Hi! I'd like to book the following services at Glow Haven Spa:

Services: ${selectedServiceNames}
Total: $${getTotalPrice()}

Customer Details:
Name: ${customerInfo.name}
Phone: ${customerInfo.phone}
Email: ${customerInfo.email}

Preferred Date: ${selectedDate ? format(selectedDate, "PPP") : "Not specified"}
Preferred Time: ${selectedTime}

Thank you!`;
    
    const whatsappUrl = `https://wa.me/+2349046482344?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsProcessing(false);
  };

  const canProceedToStep2 = selectedServices.length > 0;
  const canProceedToStep3 = customerInfo.name && customerInfo.phone && customerInfo.email;
  const canConfirm = selectedDate && selectedTime;

  if (isProcessing) {
    return (
      <section id="booking" className="py-20 px-4 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="spa-shadow-medium">
            <CardContent className="py-12">
              <Loader2 className="w-16 h-16 animate-spin text-froeground mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Processing Your Booking...</h3>
              <p className="text-muted-foreground">Please wait while we prepare your spa experience</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Just a few steps to your perfect spa day
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-semibold",
                  step >= stepNumber 
                    ? "bg-slate-600 text-accent-foreground" 
                    : "bg-muted text-muted-foreground"
                )}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={cn(
                    "w-12 h-1 mx-2",
                    step > stepNumber ? "bg-slate-600" : "bg-muted"
                  )} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="spa-shadow-medium">
          <CardHeader>
            <CardTitle className="text-2xl">
              {step === 1 && "Select Your Services"}
              {step === 2 && "Your Information"}
              {step === 3 && "Choose Date & Time"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Choose one or more services for your spa visit"}
              {step === 2 && "Tell us how to contact you"}
              {step === 3 && "Pick your preferred appointment slot"}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 spa-transition">
                    <Checkbox 
                      id={service.id}
                      checked={selectedServices.includes(service.id)}
                      onCheckedChange={() => handleServiceToggle(service.id)}
                    />
                    <div className="flex-1">
                      <Label htmlFor={service.id} className="font-medium cursor-pointer">
                        {service.name}
                      </Label>
                      <div className="text-sm text-muted-foreground">
                        ${service.price} • {service.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input 
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </Label>
                  <Input 
                    id="phone"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input 
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <Label className="flex items-center gap-2 mb-4">
                    <CalendarIcon className="w-4 h-4" />
                    Select Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="default"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" />
                    Select Time
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "elegant"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                {selectedServices.length > 0 && (
                  <div className="p-4 spa-gradient-default rounded-lg">
                    <h4 className="font-semibold mb-2">Booking Summary</h4>
                    <div className="space-y-1 text-sm">
                      {selectedServices.map(serviceId => {
                        const service = services.find(s => s.id === serviceId);
                        return (
                          <div key={serviceId} className="flex justify-between">
                            <span>{service?.name}</span>
                            <span>${service?.price}</span>
                          </div>
                        );
                      })}
                      <div className="border-t pt-2 font-semibold text-lg text-foreground">
                        Total: ${getTotalPrice()}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-between pt-6">
              {step > 1 && (
                <Button 
                  variant="outline" 
                  onClick={() => setStep(step - 1)}
                >
                  Back
                </Button>
              )}
              
              <div className="ml-auto">
                {step < 3 ? (
                  <Button 
                    variant="outline"
                    onClick={() => setStep(step + 1)}
                    disabled={step === 1 ? !canProceedToStep2 : !canProceedToStep3}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button 
                    variant="outline"
                    onClick={handleConfirmBooking}
                    disabled={!canConfirm}
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Confirm Booking
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingFlow;