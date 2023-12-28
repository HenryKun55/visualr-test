import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Button } from '../Button';
import { useCartStore } from '@/store/cart';
import { maskCurrency } from '@/utils/mask';

export const CashForm = () => {
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
            label="Change"
            name="number"
            placeholder="$ 0"
            mask={maskCurrency}
            size="full"
          />
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
