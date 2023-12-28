'use client';

import { useCartStore } from '@/store/cart';
import { PaymentOrder } from './PaymentOrder';
import { PaymentForm } from './PaymentForm';

export const Payment = () => {
  const togglePayment = useCartStore((state) => state.togglePayment);
  return (
    <div className="absolute -left-sidebar flex w-dvw h-dvh bg-black/70">
      <div className="flex-1 h-full z-20" onClick={() => togglePayment()} />
      <PaymentOrder />
      <PaymentForm />
    </div>
  );
};
