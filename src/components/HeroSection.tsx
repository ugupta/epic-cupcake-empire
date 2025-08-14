import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cupcakes.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cupcake-pink/30 via-transparent to-cupcake-yellow/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-fredoka text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          America's <span className="text-cupcake-yellow">Craziest</span>
          <br />
          Cupcake Creators
        </h1>
        
        <p className="font-inter text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          The best custom cupcakes in the United States. 
          Specializing in large orders that bring your wildest dessert dreams to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            className="font-fredoka text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Order Custom Cupcakes
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="font-fredoka text-lg px-8 py-6 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
          >
            View Our Flavors
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="text-center">
            <div className="font-fredoka text-3xl font-bold text-cupcake-yellow">500+</div>
            <div className="font-inter text-white/80">Custom Orders Completed</div>
          </div>
          <div className="text-center">
            <div className="font-fredoka text-3xl font-bold text-cupcake-yellow">50</div>
            <div className="font-inter text-white/80">States Served</div>
          </div>
          <div className="text-center">
            <div className="font-fredoka text-3xl font-bold text-cupcake-yellow">24/7</div>
            <div className="font-inter text-white/80">Order Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;