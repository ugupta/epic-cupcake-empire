
import OrderForm from "@/components/OrderForm";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

export default function OrderFormPage() {
  return (
    <ProtectedRoute>
      <OrderForm />
    </ProtectedRoute>
  );
}
