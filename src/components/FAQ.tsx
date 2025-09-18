import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Clock, CreditCard, Users, ShieldCheck, Calendar } from "lucide-react";

const faqs = [
  {
    question: "What should I expect during my first visit?",
    answer: "Your first visit includes a personalized consultation to understand your wellness goals, followed by your chosen treatment. We'll provide a tour of our facilities and explain our amenities. Please arrive 15 minutes early to complete intake forms and begin your relaxation journey.",
    icon: Calendar
  },
  {
    question: "How far in advance should I book my appointment?",
    answer: "We recommend booking 1-2 weeks in advance, especially for weekend appointments and our signature treatments. For last-minute bookings, please call us directly as we often have same-day availability.",
    icon: Clock
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and cash. Gift certificates are also available and make perfect presents. We offer flexible payment options for our wellness packages and membership programs.",
    icon: CreditCard
  },
  {
    question: "Do you offer group packages or couples treatments?",
    answer: "Yes! We specialize in couples massages, group spa days, and special event packages. Our private relaxation suites can accommodate groups of 2-8 people. Contact us for custom group pricing and experiences.",
    icon: Users
  },
  {
    question: "What are your safety and hygiene protocols?",
    answer: "Your safety is our priority. We maintain the highest standards of cleanliness with hospital-grade sanitization, single-use linens for every client, and regular deep cleaning of all treatment rooms and equipment.",
    icon: ShieldCheck
  },
  {
    question: "Can I customize my treatment experience?",
    answer: "Absolutely! All our treatments can be personalized based on your preferences, skin type, and wellness goals. Our certified therapists will work with you to create the perfect experience tailored to your needs.",
    icon: HelpCircle
  }
];

const tips = [
  {
    title: "Arrive Early",
    description: "Come 15 minutes before your appointment to complete forms and begin relaxing.",
    icon: Clock
  },
  {
    title: "Hydrate Well",
    description: "Drink plenty of water before and after your treatments for optimal benefits.",
    icon: ShieldCheck
  },
  {
    title: "Communicate",
    description: "Let your therapist know about any preferences, allergies, or areas of concern.",
    icon: HelpCircle
  },
  {
    title: "Disconnect",
    description: "Turn off devices and embrace the digital detox for complete mental relaxation.",
    icon: Users
  }
];

const FAQ = () => {
  return (
    <section className="py-32 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-sf-display font-light text-foreground mb-6 tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground font-sf-text font-light max-w-3xl mx-auto leading-relaxed">
            Everything you need to know for the perfect spa experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* FAQ Section */}
          <div>
            <Card className="spa-shadow-medium border-0 glass-effect">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-sf-display font-medium flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-accent" />
                  Common Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                      <AccordionTrigger className="text-left hover:no-underline group">
                        <div className="flex items-center gap-3">
                          <faq.icon className="w-5 h-5 text-accent group-hover:text-accent-hover spa-transition" />
                          <span className="font-sf-text font-medium">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-sf-text leading-relaxed pt-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Tips Section */}
          <div>
            <Card className="spa-shadow-medium border-0 glass-effect h-full">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-sf-display font-medium flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                  Spa Visit Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {tips.map((tip, index) => (
                  <div key={index} className="flex gap-4 group interactive-hover p-4 rounded-lg hover:bg-secondary/50 spa-transition">
                    <div className="spa-gradient-accent rounded-full p-3 spa-shadow-soft">
                      <tip.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-sf-display font-medium text-foreground mb-2">
                        {tip.title}
                      </h4>
                      <p className="text-muted-foreground font-sf-text leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;