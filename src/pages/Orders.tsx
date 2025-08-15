
import OrdersList from "@/components/OrdersList";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

export default function Orders() {
  return (
    <ProtectedRoute>
      <OrdersList />
    </ProtectedRoute>
  );
}
