
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Trophy, Clock } from "lucide-react";

const CustomOrdersSection = () => {
  const features = [
    {
      icon: <Users className="w-4 h-4 text-primary" />,
      title: "Large Orders",
      description: "50-5,000 cupcakes"
    },
    {
      icon: <Trophy className="w-4 h-4 text-primary" />,
      title: "Award-Winning",
      description: "Recognized nationwide"
    },
    {
      icon: <Clock className="w-4 h-4 text-primary" />,
      title: "Nationwide",
      description: "All 50 states"
    }
  ];

  return (
    <section className="py-4 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-3">
          <h2 className="font-fredoka text-lg font-bold text-foreground mb-1">
            Custom <span className="text-primary">Order Experts</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-accent/20">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-1 p-2 bg-accent rounded-full">
                  {feature.icon}
                </div>
                <CardTitle className="font-fredoka text-sm font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="font-inter text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="sm" className="font-fredoka text-xs px-4 py-2 rounded-full">
            Get Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomOrdersSection;
