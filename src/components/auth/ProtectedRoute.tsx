
import React, { useState } from 'react';
import { useAuth } from './AuthProvider';
import { AuthModal } from './AuthModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, fallback }) => {
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cupcake-cream via-background to-cupcake-pink/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cupcake-pink mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-cupcake-cream via-background to-cupcake-pink/20 flex items-center justify-center py-12">
        <Card className="max-w-md mx-auto shadow-cupcake border-cupcake-pink/20">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-cupcake-pink/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-cupcake-pink" />
            </div>
            <CardTitle className="text-2xl">Authentication Required</CardTitle>
            <CardDescription>
              Please sign in to access this page and manage your orders
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => setShowAuthModal(true)}
              className="w-full"
            >
              Sign In / Sign Up
            </Button>
          </CardContent>
        </Card>

        <AuthModal 
          open={showAuthModal} 
          onOpenChange={setShowAuthModal} 
        />
      </div>
    );
  }

  return <>{children}</>;
};
