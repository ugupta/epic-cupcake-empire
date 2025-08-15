import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/auth/AuthProvider";
import { CalendarDays, Users, MapPin, DollarSign, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UserMenu } from "@/components/auth/UserMenu";

const orderSchema = z.object({
  customer_name: z.string().min(2, "Name must be at least 2 characters"),
  customer_email: z.string().email("Please enter a valid email"),
  customer_phone: z.string().optional(),
  event_type: z.string().min(1, "Please select an event type"),
  event_date: z.string().min(1, "Please select an event date"),
  guest_count: z.coerce.number().min(1, "Guest count must be at least 1"),
  cupcake_flavors: z.array(z.string()).min(1, "Please select at least one flavor"),
  special_requirements: z.string().optional(),
  delivery_address: z.string().min(5, "Please enter a delivery address"),
  total_amount: z.coerce.number().min(1, "Total amount must be greater than 0"),
});

type OrderForm = z.infer<typeof orderSchema>;

const availableFlavors = [
  "Chocolate Explosion",
  "Vanilla Dream",
  "Red Velvet Royale",
  "Lemon Zest",
  "Strawberry Fields",
  "Cookies & Cream",
  "Salted Caramel",
  "Rainbow Funfetti"
];

const eventTypes = [
  "Corporate Event",
  "Wedding",
  "Birthday Party",
  "Anniversary",
  "Graduation",
  "Baby Shower",
  "Holiday Celebration",
  "Other"
];

export default function OrderForm() {
  const { toast } = useToast();
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<OrderForm>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      customer_name: profile?.full_name || "",
      customer_email: profile?.email || "",
      customer_phone: "",
      event_type: "",
      event_date: "",
      guest_count: 1,
      cupcake_flavors: [],
      special_requirements: "",
      delivery_address: "",
      total_amount: 0,
    },
  });

  const onSubmit = async (values: OrderForm) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be signed in to submit an order.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const orderData = {
        user_id: user.id,
        customer_name: values.customer_name,
        customer_email: values.customer_email,
        customer_phone: values.customer_phone || null,
        event_type: values.event_type,
        event_date: values.event_date,
        guest_count: values.guest_count,
        cupcake_flavors: values.cupcake_flavors,
        special_requirements: values.special_requirements || null,
        delivery_address: values.delivery_address,
        total_amount: values.total_amount,
      };

      const { error } = await supabase
        .from('orders')
        .insert([orderData]);

      if (error) throw error;

      toast({
        title: "Order Submitted Successfully!",
        description: "Your custom cupcake order has been received. We'll contact you soon with confirmation details.",
      });

      form.reset();
      navigate('/orders');
    } catch (error) {
      console.error('Error submitting order:', error);
      toast({
        title: "Error",
        description: "Failed to submit order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cupcake-cream via-background to-cupcake-pink/20 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header with navigation and user menu */}
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <UserMenu />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Submit Your Custom Order</h1>
          <p className="text-lg text-muted-foreground">
            Create your perfect cupcake experience for any occasion
          </p>
        </div>

        <Card className="shadow-cupcake border-cupcake-pink/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-cupcake-pink" />
              Post-Paid Custom Order Form
            </CardTitle>
            <CardDescription>
              Fill out the details below for your custom cupcake order. Payment has already been processed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Customer Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="customer_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="customer_email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="customer_phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Event Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="event_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4" />
                          Event Type
                        </FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option value="">Select event type</option>
                            {eventTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="event_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="guest_count"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Guest Count
                        </FormLabel>
                        <FormControl>
                          <Input type="number" min="1" placeholder="50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Cupcake Flavors */}
                <FormField
                  control={form.control}
                  name="cupcake_flavors"
                  render={() => (
                    <FormItem>
                      <FormLabel>Cupcake Flavors</FormLabel>
                      <FormDescription>
                        Select all the flavors you'd like for your order
                      </FormDescription>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {availableFlavors.map((flavor) => (
                          <FormField
                            key={flavor}
                            control={form.control}
                            name="cupcake_flavors"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={flavor}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(flavor)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, flavor])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== flavor
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">
                                    {flavor}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="special_requirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requirements</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any special dietary restrictions, decorating requests, or other requirements..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="delivery_address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Delivery Address
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter complete delivery address..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="total_amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Amount (USD)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="0.00"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Enter the total amount that was already paid for this order
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting Order..." : "Submit Custom Order"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
