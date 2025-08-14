const Footer = () => {
  return <footer className="bg-foreground text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-fredoka text-2xl font-bold text-cupcake-yellow mb-4">
              Crazy Cupcakes
            </h3>
            <p className="font-inter text-white/80 leading-relaxed mb-4">
              America's premier cupcake specialists, delivering happiness one cupcake at a time. 
              From small celebrations to massive events, we make every moment sweeter.
            </p>
            <p className="font-inter text-cupcake-yellow font-semibold">
              🏆 #1 Rated Cupcake Company in the USA
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-fredoka text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="font-inter space-y-2">
              <li><a href="#flavors" className="text-white/80 hover:text-cupcake-yellow transition-colors">Our Flavors</a></li>
              <li><a href="#custom-orders" className="text-white/80 hover:text-cupcake-yellow transition-colors">Custom Orders</a></li>
              <li><a href="#about" className="text-white/80 hover:text-cupcake-yellow transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-cupcake-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-fredoka text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="font-inter space-y-2 text-white/80">
              <li>(555) 123-CAKE</li>
              <li>orders@crazycupcakes.com</li>
              <li>New York, NY</li>
              <li className="text-cupcake-yellow">24/7 Online Orders</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-inter text-white/60">© 2025 Crazy Cupcakes. All rights reserved. | Bringing sweetness to all 50 states.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;