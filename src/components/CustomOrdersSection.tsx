import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Trophy, Clock } from "lucide-react";

const CustomOrdersSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Large Event Specialists",
      description: "From 50 to 5,000 cupcakes, we handle orders of any size with precision and care."
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Award-Winning Quality",
      description: "Recognized nationwide for our exceptional taste, design, and customer service."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Nationwide Delivery",
      description: "Fresh cupcakes delivered to all 50 states with our specialized shipping process."
    }
  ];

  const orderTypes = [
    "Corporate Events & Meetings",
    "Weddings & Celebrations", 
    "Birthday Parties & Sweet 16s",
    "School Events & Fundraisers",
    "Holiday Parties",
    "Grand Openings & Product Launches"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-fredoka text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Custom <span className="text-primary">Order Experts</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            As America's premier cupcake specialists, we've perfected the art of large custom orders. 
            Whether it's a corporate event for 1,000 or an intimate celebration for 50, we deliver excellence every time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-soft transition-all duration-300 border-accent/20">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-3 bg-accent rounded-full group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="font-fredoka text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-inter text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Types */}
        <div className="bg-accent/30 rounded-2xl p-8 mb-12">
          <h3 className="font-fredoka text-2xl font-semibold text-center mb-8">
            Perfect for Every Occasion
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {orderTypes.map((type, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-inter text-foreground">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="font-fredoka text-3xl font-bold text-foreground mb-4">
            Ready to Place Your Custom Order?
          </h3>
          <p className="font-inter text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free quote for your custom cupcake order. Our team will work with you to create 
            the perfect desserts for your special event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="font-fredoka text-lg px-8 py-6 rounded-full"
            >
              Get Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="font-fredoka text-lg px-8 py-6 rounded-full"
            >
              Call Us: (555) 123-CAKE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrdersSection;