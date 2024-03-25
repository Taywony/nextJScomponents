import * as React from 'react';

import { cn } from '@/lib/utils';

const PriceBox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex gap-2 items-end', className)} {...props} />
));
PriceBox.displayName = 'PriceBox';

const PriceMonthly = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('font-bold text-4xl', className)} {...props} />
));
PriceMonthly.displayName = 'PriceMonthly';

export { PriceBox, PriceMonthly };
