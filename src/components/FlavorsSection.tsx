import { Card, CardContent } from "@/components/ui/card";

const flavors = [
  {
    name: "Strawberry Dream",
    description: "Fresh strawberry cake with cream cheese frosting",
    color: "bg-gradient-to-br from-pink-200 to-pink-300"
  },
  {
    name: "Chocolate Explosion",
    description: "Rich chocolate cake with fudge center and ganache",
    color: "bg-gradient-to-br from-amber-800 to-amber-900"
  },
  {
    name: "Vanilla Bean Bliss",
    description: "Madagascar vanilla cake with buttercream swirls",
    color: "bg-gradient-to-br from-yellow-100 to-yellow-200"
  },
  {
    name: "Red Velvet Royalty",
    description: "Classic red velvet with signature cream cheese frosting",
    color: "bg-gradient-to-br from-red-400 to-red-500"
  },
  {
    name: "Lemon Sunshine",
    description: "Zesty lemon cake with lemon curd and meringue",
    color: "bg-gradient-to-br from-yellow-300 to-yellow-400"
  },
  {
    name: "Funfetti Celebration",
    description: "Rainbow sprinkle cake with vanilla buttercream",
    color: "bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200"
  }
];

const FlavorsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cupcake-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-fredoka text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Signature <span className="text-primary">Flavors</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            From classic favorites to crazy combinations, we create cupcakes that taste as amazing as they look.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
            >
              <div className={`h-32 ${flavor.color} relative`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60 ml-2 -mt-1"></div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-fredoka text-xl font-semibold text-foreground mb-3">
                  {flavor.name}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {flavor.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;