
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cupcakes.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
      
      {/* Content - more compact spacing */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-fredoka text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight lg:text-7xl">
          America's <span className="text-cupcake-yellow">Craziest</span>
          <br />
          Cupcake Creators
        </h1>
        
        <p className="font-inter text-base sm:text-lg lg:text-xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
          The best custom cupcakes in the United States. 
          Specializing in large orders that bring your wildest dessert dreams to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <Button variant="hero" size="lg" className="font-fredoka text-base px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" onClick={() => window.location.href = '/order'}>
            Order Custom Cupcakes
          </Button>
          
          <Button variant="outline" size="lg" className="font-fredoka text-base px-6 py-4 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300" onClick={() => window.location.href = '/orders'}>
            View Orders
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
          <div className="text-center">
            <div className="font-fredoka text-2xl font-bold text-cupcake-yellow">500+</div>
            <div className="font-inter text-sm text-white/80">Custom Orders Completed</div>
          </div>
          <div className="text-center">
            <div className="font-fredoka text-2xl font-bold text-cupcake-yellow">50</div>
            <div className="font-inter text-sm text-white/80">States Served</div>
          </div>
          <div className="text-center">
            <div className="font-fredoka text-2xl font-bold text-cupcake-yellow">24/7</div>
            <div className="font-inter text-sm text-white/80">Order Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
