
import { Card, CardContent } from "@/components/ui/card";

const flavors = [
  {
    name: "Strawberry Dream",
    description: "Fresh strawberry with cream cheese",
    color: "bg-gradient-to-br from-pink-200 to-pink-300"
  },
  {
    name: "Chocolate Explosion",
    description: "Rich chocolate with fudge center",
    color: "bg-gradient-to-br from-amber-800 to-amber-900"
  },
  {
    name: "Vanilla Bean Bliss",
    description: "Madagascar vanilla with buttercream",
    color: "bg-gradient-to-br from-yellow-100 to-yellow-200"
  },
  {
    name: "Red Velvet Royalty",
    description: "Classic red velvet with cream cheese",
    color: "bg-gradient-to-br from-red-400 to-red-500"
  },
  {
    name: "Lemon Sunshine",
    description: "Zesty lemon with lemon curd",
    color: "bg-gradient-to-br from-yellow-300 to-yellow-400"
  },
  {
    name: "Funfetti Celebration",
    description: "Rainbow sprinkle with vanilla",
    color: "bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200"
  }
];

const FlavorsSection = () => {
  return (
    <section className="py-4 px-4 bg-cupcake-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-3">
          <h2 className="font-fredoka text-lg font-bold text-foreground mb-1">
            Our Signature <span className="text-primary">Flavors</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {flavors.map((flavor, index) => (
            <Card key={index} className="border-0 overflow-hidden">
              <div className={`h-12 ${flavor.color} relative`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardContent className="p-2">
                <h3 className="font-fredoka text-xs font-semibold text-foreground mb-1">
                  {flavor.name}
                </h3>
                <p className="font-inter text-xs text-muted-foreground">
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
