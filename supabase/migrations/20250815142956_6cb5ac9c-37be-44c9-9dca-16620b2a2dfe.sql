-- Drop the existing overly permissive policy
DROP POLICY IF EXISTS "Anyone can view orders" ON public.orders;

-- Create a more secure policy that only allows authenticated users to view orders
-- This could be further restricted based on business needs (e.g., only order owners or admin roles)
CREATE POLICY "Authenticated users can view orders" 
ON public.orders 
FOR SELECT 
TO authenticated
USING (true);

-- Optionally, if you want to restrict to order owners only, you would need to add a user_id column
-- and use: USING (auth.uid() = user_id)
-- For now, this requires authentication which is much more secure than public access