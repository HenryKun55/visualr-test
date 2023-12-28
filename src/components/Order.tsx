'use client';

import { useCartStore } from '@/store/cart';
import { Button } from './Button';
import { OrderList } from './OrderList';
import { faker } from '@faker-js/faker';
import { useMemo } from 'react';

export const Order = () => {
  const togglePayment = useCartStore((state) => state.togglePayment);
  const order = useMemo(
    () => `Order ${faker.number.int({ min: 1000, max: 9999 })}`,
    []
  );

  return (
    <section className="text-white w-full h-full flex flex-col p-6 bg-background-secondary rounded-l-2xl md:min-w-order md:max-w-max">
      <h2 className="text-xl pb-12">{order}</h2>
      <OrderList />
      <Button shadow size="full" onClick={() => togglePayment()}>
        Continue to Payment
      </Button>
    </section>
  );
};
