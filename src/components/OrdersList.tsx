import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Users, MapPin, Phone, Mail, DollarSign, Package } from "lucide-react";

interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  event_type: string;
  event_date: string;
  guest_count: number;
  cupcake_flavors: string[];
  special_requirements?: string;
  delivery_address: string;
  total_amount: number;
  payment_status: string;
  order_status: string;
  created_at: string;
}

export default function OrdersList() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast({
        title: "Error",
        description: "Failed to load orders. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'default';
      case 'in_progress':
        return 'secondary';
      case 'completed':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cupcake-cream via-background to-cupcake-pink/20 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cupcake-pink mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">Loading orders...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cupcake-cream via-background to-cupcake-pink/20 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Custom Orders</h1>
          <p className="text-lg text-muted-foreground">
            View all submitted custom cupcake orders
          </p>
        </div>

        {orders.length === 0 ? (
          <Card className="max-w-md mx-auto">
            <CardContent className="text-center py-8">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Orders Found</h3>
              <p className="text-muted-foreground">No custom orders have been submitted yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {orders.map((order) => (
              <Card key={order.id} className="shadow-cupcake border-cupcake-pink/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{order.customer_name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <CalendarDays className="h-4 w-4" />
                        {order.event_type}
                      </CardDescription>
                    </div>
                    <Badge variant={getStatusBadgeVariant(order.order_status)}>
                      {order.order_status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-muted-foreground" />
                      <span>{formatDate(order.event_date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{order.guest_count} guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="truncate">{order.customer_email}</span>
                    </div>
                    {order.customer_phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{order.customer_phone}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Flavors:</h4>
                    <div className="flex flex-wrap gap-1">
                      {order.cupcake_flavors.map((flavor, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {flavor}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {order.special_requirements && (
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Special Requirements:</h4>
                      <p className="text-sm text-muted-foreground">
                        {order.special_requirements}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="truncate">{order.delivery_address}</span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-cupcake-pink" />
                      <span className="font-semibold text-lg">${order.total_amount}</span>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {order.payment_status}
                    </Badge>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    Ordered: {formatDate(order.created_at)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.location.href = '/order'}
          >
            Submit New Order
          </Button>
        </div>
      </div>
    </div>
  );
}