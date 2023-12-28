'use client';

import { CashIcon } from '@/assets/icons/Cash';
import { CheckMarkIcon } from '@/assets/icons/CheckMark';
import { CreditCardIcon } from '@/assets/icons/CreditCard';
import { PaypalIcon } from '@/assets/icons/Paypal';
import { PaymentFormProps, useCartStore } from '@/store/cart';
import { cn } from '@/utils/classnames';
import { ComponentPropsWithoutRef, useEffect } from 'react';
import { VariantProps, tv } from 'tailwind-variants';
import { CreditCardForm } from './PaymentMethods/CreditCardForm';
import { CashForm } from './PaymentMethods/CashForm';
import { PaypalForm } from './PaymentMethods/PaypalForm';

const paymentMethod = tv({
  slots: {
    base: [
      'relative group flex flex-col justify-center items-center px-4 py-2.5 cursor-pointer',
      'text-custom-gray-light border border-border rounded-lg bg-background-secondary',
      'hover:bg-background-primary',
    ],
    checkmark: 'absolute top-1.5 right-1.5 rounded-full',
    text: 'text-sm font-medium',
  },
  variants: {
    size: {
      flexOne: 'flex-1',
    },
    selected: {
      true: 'text-white group-hover:text-white hover:bg-background-secondary',
    },
  },
  compoundVariants: [
    {
      selected: true,
      className: {
        base: 'border-white',
        text: 'text-white',
      },
    },
  ],
  defaultVariants: {
    size: 'flexOne',
    selected: false,
  },
});

interface PaymentMethodProps
  extends ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof paymentMethod> {
  paymentForm: PaymentFormProps;
}

const PaymentMethod = ({
  paymentForm: method,
  selected,
  className,
  size,
  disabled,
  ...props
}: PaymentMethodProps) => {
  const { base, checkmark, text } = paymentMethod({
    selected,
    size,
    className,
  });
  return (
    <button className={cn(base())} type="button" {...props}>
      {selected && (
        <div className={checkmark()}>
          <CheckMarkIcon className="text-custom-orange-primary" />
        </div>
      )}
      {method.icon}
      <span className={text()}>{method.name}</span>
    </button>
  );
};

// ------------------------------------------------------------------------

export const PaymentForm = () => {
  const paymentForm = useCartStore((state) => state.paymentForm);
  const handleMethod = useCartStore((state) => state.handleMethod);

  const paymentMethods: PaymentFormProps[] = [
    {
      name: 'Credit Card',
      icon: <CreditCardIcon />,
      form: <CreditCardForm />,
    },
    {
      name: 'Paypal',
      icon: <PaypalIcon />,
      form: <PaypalForm />,
    },
    {
      name: 'Cash',
      icon: <CashIcon />,
      form: <CashForm />,
    },
  ];

  useEffect(() => handleMethod(paymentMethods[0]), []);

  return (
    <section className="text-white w-payment h-full flex flex-col p-6 bg-background-secondary border-l border-border">
      <div className="flex flex-col pt-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-[28px] font-semibold text-white">Payment</h1>
          <h3 className="text-base font-normal text-custom-gray-light">
            3 payment methods available
          </h3>
        </div>
      </div>
      <hr className="border-border mt-6" />
      <div className="w-full h-full flex flex-col gap-6 pt-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-white">Payment Method</h1>
        </div>
        <div className="flex gap-2">
          {paymentMethods.map((paymentMethod) => (
            <PaymentMethod
              key={paymentMethod.name}
              paymentForm={paymentMethod}
              selected={paymentForm?.name === paymentMethod.name}
              onClick={() => handleMethod(paymentMethod)}
            />
          ))}
        </div>
        {paymentForm?.form}
      </div>
    </section>
  );
};
