import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-fredoka text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let's Create Something <span className="text-primary">Amazing</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to place your custom order? Our team is here to help bring your cupcake vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="group hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-fredoka text-lg font-semibold text-foreground">
                      Call Us
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      (555) 123-CAKE (2253)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-fredoka text-lg font-semibold text-foreground">
                      Email Us
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      orders@crazycupcakes.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-fredoka text-lg font-semibold text-foreground">
                      Headquarters
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      New York, NY<br />Serving All 50 States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-fredoka text-lg font-semibold text-foreground">
                      Order Hours
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      24/7 Online Orders<br />
                      Phone: Mon-Fri 8AM-8PM EST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Card */}
          <div className="flex items-center">
            <Card className="w-full bg-gradient-to-br from-cupcake-pink/10 via-cupcake-frosting/10 to-cupcake-yellow/10 border-0">
              <CardHeader className="text-center pb-6">
                <CardTitle className="font-fredoka text-3xl font-bold text-foreground">
                  Ready to Order?
                </CardTitle>
                <p className="font-inter text-muted-foreground">
                  Get your free custom quote in less than 24 hours
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="bg-accent/30 rounded-lg p-4">
                  <h4 className="font-fredoka font-semibold text-foreground mb-2">
                    What We Need to Get Started:
                  </h4>
                  <ul className="font-inter text-sm text-muted-foreground space-y-1">
                    <li>• Event date and location</li>
                    <li>• Number of cupcakes needed</li>
                    <li>• Flavor preferences</li>
                    <li>• Any special design requests</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full font-fredoka text-lg py-6 rounded-full"
                    size="lg"
                  >
                    Start My Custom Order
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full font-fredoka text-lg py-6 rounded-full"
                    size="lg"
                  >
                    Download Order Form
                  </Button>
                </div>
                
                <div className="text-center">
                  <p className="font-inter text-sm text-muted-foreground">
                    🚚 <strong>Free shipping</strong> on orders over $500
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;