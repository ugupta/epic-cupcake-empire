
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/auth/AuthModal";
import { UserMenu } from "@/components/auth/UserMenu";
import { useAuth } from "@/components/auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Star, Clock, Award } from "lucide-react";

const HeroSection = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleOrderNow = () => {
    if (user) {
      navigate('/order');
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-cupcake-cream via-background to-cupcake-pink/10 py-4">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-cupcake-pink to-cupcake-yellow rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">🧁</span>
          </div>
          <h1 className="font-fredoka text-lg font-bold text-cupcake-pink">Sweet Delights</h1>
        </div>
        
        <div className="flex items-center gap-2">
          {user ? (
            <UserMenu />
          ) : (
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => setShowAuthModal(true)}
              className="text-xs px-3 py-1 h-8"
            >
              Sign In
            </Button>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="px-4 grid md:grid-cols-2 gap-4 items-center max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="space-y-3">
          <div className="space-y-2">
            <h2 className="font-fredoka text-2xl md:text-3xl font-bold text-foreground leading-tight">
              Artisanal Cupcakes for Every <span className="text-cupcake-pink">Special Moment</span>
            </h2>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed">
              Handcrafted with premium ingredients and decorated with love. From birthdays to weddings, 
              we create sweet memories that taste as beautiful as they look.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-2 py-2">
            <div className="flex items-center gap-1 text-xs">
              <Star className="h-3 w-3 text-cupcake-yellow fill-current" />
              <span className="font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <Clock className="h-3 w-3 text-cupcake-pink" />
              <span className="font-medium">Fresh Daily</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <Award className="h-3 w-3 text-cupcake-yellow" />
              <span className="font-medium">Award Winning</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <ShoppingCart className="h-3 w-3 text-cupcake-pink" />
              <span className="font-medium">Custom Orders</span>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button 
              variant="hero" 
              size="sm" 
              onClick={handleOrderNow}
              className="flex-1 text-sm py-2 h-10"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Order Now
            </Button>
            {user && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/orders')}
                className="px-4 text-sm py-2 h-10 border-cupcake-pink/30 text-cupcake-pink hover:bg-cupcake-pink/5"
              >
                My Orders
              </Button>
            )}
          </div>
        </div>

        {/* Right Column - Hero Image */}
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-cupcake-pink/20 to-cupcake-yellow/20 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
            <img
              src="/assets/hero-cupcakes.jpg"
              alt="Delicious artisanal cupcakes"
              className="w-full h-full object-cover rounded-2xl"
              onError={(e) => {
                // Fallback to a gradient background with emoji if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="text-6xl animate-pulse">🧁</div>
                  <div class="absolute inset-0 bg-gradient-to-br from-cupcake-pink/30 to-cupcake-yellow/30 rounded-2xl"></div>
                `;
              }}
            />
          </div>
        </div>
      </div>

      <AuthModal 
        open={showAuthModal} 
        onOpenChange={setShowAuthModal} 
      />
    </section>
  );
};

export default HeroSection;
