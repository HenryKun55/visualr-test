import { cn } from '@/utils/classnames';
import type {
  ComponentPropsWithoutRef,
  ReactNode,
  ChangeEventHandler,
} from 'react';
import { useFormContext } from 'react-hook-form';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

const input = tv({
  base: [
    'p-3.5 rounded-lg transition-all',
    'bg-[#2D303E] border border-border',
    'hover:bg-[#373A48] hover:border-border',
    'focus:outline-none focus:bg-[#1F1D2B] focus:border-custom-gray-light',
    'text-sm font-normal text-custom-gray-lighter  placeholder:text-[#898989] caret-white',
  ],
  variants: {
    size: {
      sm: 'w-12',
      md: 'w-[220px]',
      lg: 'w-[297px]',
      full: 'w-full',
    },
    iconPosition: {
      left: 'pl-10',
      right: 'pr-10',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
    textCenter: {
      true: 'text-center',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const iconVariants = tv({
  base: 'absolute top-1/2 -translate-y-1/2',
  variants: {
    iconPosition: {
      left: 'left-4',
      right: 'right-4',
    },
  },
  defaultVariants: {
    iconPosition: 'left',
  },
});

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size'>,
    VariantProps<typeof input> {
  inputClassName?: string;
  icon?: ReactNode;
  name: string;
  label?: string;
  mask?: (value: string) => string;
}

export const Input = ({
  name,
  label,
  icon,
  iconPosition,
  inputClassName,
  className,
  textCenter,
  disabled,
  onChange,
  size,
  mask,
  ...props
}: InputProps) => {
  const { register } = useFormContext();

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (mask) {
      event.target.value = mask(event.target.value);
    }
    onChange?.(event);
  };

  return (
    <div className={cn('relative', className, size === 'full' && 'w-full')}>
      {icon && <div className={iconVariants({ iconPosition })}>{icon}</div>}
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm font-medium text-white" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          className={cn(
            input({ iconPosition, textCenter, disabled, size }),
            inputClassName
          )}
          type="text"
          disabled={disabled}
          {...props}
          {...register(name, { onChange: handleOnChange })}
        />
      </div>
    </div>
  );
};

Input.displayName = 'Input';
