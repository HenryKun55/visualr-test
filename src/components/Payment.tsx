'use client'

import { CreditCardIcon } from "@/assets/icons/CreditCard"
import { useCartStore } from "@/store/cart"
import { cn } from "@/utils/classnames"
import { ComponentPropsWithoutRef } from "react"
import { VariantProps, tv } from "tailwind-variants"
import { Button } from "./Button"
import { Input } from "./Input"
import { CheckMarkIcon } from "@/assets/icons/CheckMark"
import { customOrangeSecondaryColor } from "@/utils/colors"
import { PaypalIcon } from "@/assets/icons/Paypal"
import { CashIcon } from "@/assets/icons/Cash"

type PaymentProps = {
  name: string
  icon: JSX.Element
}

const paymentMethod = tv({
  slots: {
    base: [
      "relative group flex flex-col justify-center items-center px-4 py-[10px] cursor-pointer",
      "text-custom-gray-light border border-border rounded-lg bg-background-secondary",
      "hover:bg-background-primary"
    ],
    checkmark: 'absolute top-[6px] right-[6px] rounded-full',
    text: "text-sm font-medium"
  },
  variants: {
    size: {
      flexOne: 'flex-1'
    },
    selected: {
      true: "text-white group-hover:text-white hover:bg-background-secondary"
    }
  },
  compoundVariants: [
    {
      selected: true,
      className: {
        base: "border-white",
        text: "text-white"
      }
    }
  ],
  defaultVariants: {
    size: 'flexOne',
    selected: false,
  }
})


interface PaymentMethodProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof paymentMethod> {
  method: PaymentProps
}

const PaymentMethod = ({ method, selected, className, size, ...props }: PaymentMethodProps) => {
  const { base, checkmark, text } = paymentMethod({ selected, size, className })
  return (
    <div className={cn(base())} {...props}>
      {selected &&
        <div className={checkmark()}>
          <CheckMarkIcon color={customOrangeSecondaryColor} />
        </div>
      }
      {method.icon}
      <span className={text()}>{method.name}</span>
    </div>
  )
}
// ------------------------------------------------------------------------

export const Payment = () => {
  const { methodSelected, handleMethod, togglePayment } = useCartStore(state => state)

  const methods: PaymentProps[] = [
    {
      name: 'Credit Card',
      icon: <CreditCardIcon />
    },
    {
      name: 'Paypal',
      icon: <PaypalIcon />
    },
    {
      name: 'Cash',
      icon: <CashIcon />
    },
  ]

  return (
    <section className="text-white w-full h-full flex flex-col p-6 bg-background-secondary border-l border-border md:min-w-[409px]">
      <div className="flex flex-col pt-9">
        <div className="flex flex-col gap-2">
          <h1 className="text-[28px] font-semibold text-white">Payment</h1>
          <h3 className="text-base font-normal text-custom-gray-light">3 payment methods</h3>
        </div>
      </div>
      <ul className="w-full h-full flex flex-col gap-6 overflow-auto my-6 py-6 border-y border-border">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-white">Payment Method</h1>
        </div>
        <div className="flex gap-2">
          {methods.map(method => (
            <PaymentMethod
              method={method}
              selected={methodSelected === method.name}
              onClick={() => handleMethod(method.name)}
            />
          ))}
        </div>
        <Input name="card-holder" label="CardHolder Name" placeholder="Levi" />
        <Input name="card-holder" label="CardHolder Name" placeholder="Levi" />
        <Input name="card-holder" label="CardHolder Name" placeholder="Levi" />
        <Input name="card-holder" label="CardHolder Name" placeholder="Levi" />
        <Input name="card-holder" label="CardHolder Name" placeholder="Levi" />
        <Input name="card-holder" label="CardHolder Name" placeholder="Levi" />
        <Input name="card-holder" label="CardHolder Name" placeholder="Levi" />
        <Input name="card-holder" label="CardHolder Name" placeholder="Levi" />
        <Input name="card-holder" label="CardHolder Name" placeholder="Levi" />
      </ul>
      <div className="flex gap-2">
        <Button variant="outlined" size="full" onClick={() => togglePayment()}>Cancel</Button>
        <Button size="full">Confirm Payment</Button>
      </div>
    </section>
  )
}

