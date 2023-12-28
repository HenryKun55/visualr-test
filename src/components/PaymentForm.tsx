'use client'

import { CreditCardIcon } from "@/assets/icons/CreditCard"
import { useCartStore } from "@/store/cart"
import { cn } from "@/utils/classnames"
import { ComponentPropsWithoutRef } from "react"
import { VariantProps, tv } from "tailwind-variants"
import { CheckMarkIcon } from "@/assets/icons/CheckMark"
import { PaypalIcon } from "@/assets/icons/Paypal"
import { CashIcon } from "@/assets/icons/Cash"
import { CreditCardForm } from "./PaymentMethods/CreditCardForm"

type PaymentProps = {
  name: string
  icon: JSX.Element
  disabled: boolean
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
    },
    disabled: {
      true: "cursor-not-allowed"
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


interface PaymentMethodProps extends ComponentPropsWithoutRef<'button'>, VariantProps<typeof paymentMethod> {
  method: PaymentProps
}

const PaymentMethod = ({ method, selected, className, size, disabled, ...props }: PaymentMethodProps) => {
  const { base, checkmark, text } = paymentMethod({ selected, size, className, disabled })
  return (
    <button className={cn(base())} type='button' disabled={disabled} {...props}>
      {selected &&
        <div className={checkmark()}>
          <CheckMarkIcon className="text-custom-orange-primary" />
        </div>
      }
      {method.icon}
      <span className={text()}>{method.name}</span>
    </button>
  )
}

// ------------------------------------------------------------------------

export const PaymentForm = () => {
  const methodSelected = useCartStore(state => state.methodSelected)
  const handleMethod = useCartStore(state => state.handleMethod)

  const methods: PaymentProps[] = [
    {
      name: 'Credit Card',
      icon: <CreditCardIcon />,
      disabled: false,
    },
    {
      name: 'Paypal',
      icon: <PaypalIcon />,
      disabled: true,
    },
    {
      name: 'Cash',
      icon: <CashIcon />,
      disabled: true,
    },
  ]

  return (
    <section className="text-white w-[409px] h-full flex flex-col p-6 bg-background-secondary border-l border-border">
      <div className="flex flex-col pt-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-[28px] font-semibold text-white">Payment</h1>
          <h3 className="text-base font-normal text-custom-gray-light">3 payment methods available</h3>
        </div>
      </div>
      <hr className="border-border mt-6"/>
      <div className="w-full h-full flex flex-col gap-6 pt-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-white">Payment Method</h1>
        </div>
        <div className="flex gap-2">
          {methods.map(method => (
            <PaymentMethod
              key={method.name}
              method={method}
              disabled={method.disabled}
              selected={methodSelected === method.name}
              onClick={() => handleMethod(method.name)}
            />
          ))}
        </div>
        <CreditCardForm />
      </div>
    </section>
  )
}


