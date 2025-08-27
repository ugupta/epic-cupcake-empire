import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Truck } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cupcake-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-fredoka text-4xl sm:text-5xl font-bold text-foreground mb-6">
              America's Most <span className="text-primary">Trusted</span> Cupcake Company
            </h2>
            
            <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
              For over a decade, we've been creating smiles across the United States with our 
              extraordinary cupcakes. What started as a small bakery has grown into the nation's 
              premier custom cupcake specialists.
            </p>
            
            <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of master bakers and cake artists work around the clock to ensure every 
              order exceeds expectations. From the finest ingredients to innovative designs, 
              we're committed to making your celebrations unforgettable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="font-fredoka text-2xl font-bold text-foreground">10+</div>
                <div className="font-inter text-sm text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div className="font-fredoka text-2xl font-bold text-foreground">50K+</div>
                <div className="font-inter text-sm text-muted-foreground">Happy Customers</div>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <div className="font-fredoka text-2xl font-bold text-foreground">100%</div>
                <div className="font-inter text-sm text-muted-foreground">Fresh Guarantee</div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-cupcake-pink/20 to-cupcake-yellow/20 border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="font-fredoka text-4xl font-bold text-primary">
                    #1
                  </div>
                  <div>
                    <h3 className="font-fredoka text-xl font-semibold text-foreground">
                      Rated Best in USA
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      By National Dessert Association 2023
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cupcake-yellow/20 to-cupcake-frosting/20 border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="font-fredoka text-4xl font-bold text-primary">
                    500K+
                  </div>
                  <div>
                    <h3 className="font-fredoka text-xl font-semibold text-foreground">
                      Cupcakes Delivered
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      Across all 50 states this year alone
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cupcake-frosting/20 to-cupcake-pink/20 border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="font-fredoka text-4xl font-bold text-primary">
                    24hr
                  </div>
                  <div>
                    <h3 className="font-fredoka text-xl font-semibold text-foreground">
                      Fresh Promise
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      Made fresh daily, delivered nationwide
                    </p>
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