import * as React from 'react';

import { cn } from '@/lib/utils';

const BadgeBox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('absolute top-0 right-0 flex gap-2', className)}
    {...props}
  />
));
BadgeBox.displayName = 'BadgeBox';

export { BadgeBox };
