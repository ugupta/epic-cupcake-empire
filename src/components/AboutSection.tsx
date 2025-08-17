
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Truck } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-4 px-4 bg-cupcake-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div>
            <h2 className="font-fredoka text-lg font-bold text-foreground mb-2">
              America's Most <span className="text-primary">Trusted</span> Cupcake Company
            </h2>
            
            <p className="font-inter text-xs text-muted-foreground mb-3">
              Over a decade creating smiles across the United States with extraordinary cupcakes. 
              Master bakers and cake artists working around the clock.
            </p>

            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div className="font-fredoka text-sm font-bold text-foreground">10+</div>
                <div className="font-inter text-xs text-muted-foreground">Years</div>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <div className="font-fredoka text-sm font-bold text-foreground">50K+</div>
                <div className="font-inter text-xs text-muted-foreground">Customers</div>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">
                  <Truck className="w-4 h-4 text-primary" />
                </div>
                <div className="font-fredoka text-sm font-bold text-foreground">100%</div>
                <div className="font-inter text-xs text-muted-foreground">Fresh</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Card className="bg-gradient-to-br from-cupcake-pink/20 to-cupcake-yellow/20 border-0">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                  <div className="font-fredoka text-lg font-bold text-primary">#1</div>
                  <div>
                    <h3 className="font-fredoka text-xs font-semibold text-foreground">Rated Best in USA</h3>
                    <p className="font-inter text-xs text-muted-foreground">National Dessert Association</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cupcake-yellow/20 to-cupcake-frosting/20 border-0">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                  <div className="font-fredoka text-lg font-bold text-primary">500K+</div>
                  <div>
                    <h3 className="font-fredoka text-xs font-semibold text-foreground">Cupcakes Delivered</h3>
                    <p className="font-inter text-xs text-muted-foreground">All 50 states this year</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
