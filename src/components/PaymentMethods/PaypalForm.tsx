import { FormProvider, useForm } from "react-hook-form"
import { Button } from "../Button"
import { useCartStore } from "@/store/cart"

export const PaypalForm = () => {
  const formMethods = useForm()
  const togglePayment = useCartStore(state => state.togglePayment)
  const total = useCartStore(state => state.total)

  const onSubmit = () => {
    alert('Made by Flávio for VisualR :)')
  }

  return (
    <FormProvider {...formMethods}>
      <form className="flex h-full flex-col justify-end" onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div className="flex gap-3">
          <Button variant="outlined" onClick={() => togglePayment()}>Cancel</Button>
          <Button shadow type="submit" disabled={total === 0} >Continue to Paypal</Button>
        </div>
      </form>
    </FormProvider>
  )
}


