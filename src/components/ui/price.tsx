import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const priceVariants = cva('', {
  variants: {
    variant: {
      origin: 'font-bold text-3xl line-through',
      discount: 'font-bold text-4xl',
    },
  },

  defaultVariants: {
    variant: 'discount',
  },
});

export interface PriceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof priceVariants> {}

const PriceBox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex gap-2 items-end', className)} {...props} />
));
PriceBox.displayName = 'PriceBox';

const PriceMonthly = ({ className, variant, ...props }: PriceProps) => {
  return <p className={cn(priceVariants({ variant }), className)} {...props} />;
};

export { PriceBox, PriceMonthly };
