
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cupcakes.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[25vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - smaller and positioned */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-75 opacity-60" 
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.4)'
        }} 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cupcake-pink/30 via-transparent to-cupcake-yellow/30" />
      
      {/* Content - very compact */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-fredoka text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
          America's <span className="text-cupcake-yellow">Craziest</span> Cupcake Creators
        </h1>
        
        <p className="font-inter text-xs sm:text-sm text-white/90 mb-2 max-w-lg mx-auto">
          The best custom cupcakes in the United States. Specializing in large orders.
        </p>
        
        <div className="flex gap-2 justify-center items-center mb-2">
          <Button variant="hero" size="sm" className="font-fredoka text-xs px-3 py-1.5 rounded-full" onClick={() => window.location.href = '/order'}>
            Order Now
          </Button>
          <Button variant="outline" size="sm" className="font-fredoka text-xs px-3 py-1.5 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => window.location.href = '/orders'}>
            View Orders
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-white text-xs">
          <div className="text-center">
            <div className="font-fredoka text-sm font-bold text-cupcake-yellow">500+</div>
            <div className="font-inter text-xs text-white/80">Orders</div>
          </div>
          <div className="text-center">
            <div className="font-fredoka text-sm font-bold text-cupcake-yellow">50</div>
            <div className="font-inter text-xs text-white/80">States</div>
          </div>
          <div className="text-center">
            <div className="font-fredoka text-sm font-bold text-cupcake-yellow">24/7</div>
            <div className="font-inter text-xs text-white/80">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
