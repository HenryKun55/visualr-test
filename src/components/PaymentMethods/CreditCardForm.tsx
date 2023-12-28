import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Button } from '../Button';
import { useCartStore } from '@/store/cart';
import {
  maskCreditCardExpirationDate,
  maskCreditCardNumber,
  maskLimitDigits,
} from '@/utils/mask';

export const CreditCardForm = () => {
  const formMethods = useForm();
  const togglePayment = useCartStore((state) => state.togglePayment);
  const total = useCartStore((state) => state.total);

  const onSubmit = () => {
    alert('Made by Flávio for VisualR :)');
  };

  return (
    <FormProvider {...formMethods}>
      <form
        className="flex h-full flex-col"
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <div className="flex flex-1 flex-col gap-4">
          <Input
            label="Cardholder name"
            name="name"
            placeholder="Levi Ackerman"
            size="full"
          />
          <Input
            label="Card Number"
            name="number"
            placeholder="2564 1421 0897 1244"
            mask={maskCreditCardNumber}
            size="full"
          />
          <div className="flex gap-3">
            <Input
              label="Expiration Date"
              name="expiration"
              placeholder="01/2024"
              mask={maskCreditCardExpirationDate}
              size="full"
            />
            <Input
              label="CVV"
              name="cvv"
              placeholder="***"
              size="full"
              mask={maskLimitDigits(3)}
            />
          </div>
          <hr className="border-border" />
          <div className="w-full max-w-[50%] pr-1.5">
            <Input
              label="Table no."
              name="table"
              placeholder="140"
              type="number"
              mask={maskLimitDigits(3)}
              size="full"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="outlined" onClick={() => togglePayment()}>
            Cancel
          </Button>
          <Button shadow type="submit" disabled={total === 0}>
            Confirm Payment
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
