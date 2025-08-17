
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-4 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-3">
          <h2 className="font-fredoka text-lg font-bold text-foreground mb-1">
            Let's Create Something <span className="text-primary">Amazing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-2">
            <Card>
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Phone className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-fredoka text-xs font-semibold text-foreground">Call Us</h3>
                    <p className="font-inter text-xs text-muted-foreground">(555) 123-CAKE</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Mail className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-fredoka text-xs font-semibold text-foreground">Email</h3>
                    <p className="font-inter text-xs text-muted-foreground">orders@crazy.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                  <div className="bg-primary/10 rounded-full p-2">
                    <MapPin className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-fredoka text-xs font-semibold text-foreground">Location</h3>
                    <p className="font-inter text-xs text-muted-foreground">New York, NY</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Clock className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-fredoka text-xs font-semibold text-foreground">Hours</h3>
                    <p className="font-inter text-xs text-muted-foreground">24/7 Online</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-cupcake-pink/10 via-cupcake-frosting/10 to-cupcake-yellow/10 border-0">
            <CardContent className="p-4 text-center">
              <h3 className="font-fredoka text-sm font-bold text-foreground mb-2">Ready to Order?</h3>
              <p className="font-inter text-xs text-muted-foreground mb-3">Free quote in 24 hours</p>
              <Button size="sm" className="font-fredoka text-xs px-4 py-2 rounded-full mb-2">
                Start Custom Order
              </Button>
              <p className="font-inter text-xs text-muted-foreground">🚚 Free shipping over $500</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
