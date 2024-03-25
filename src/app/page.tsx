import { Badge } from '@/components/ui/badge';
import { BadgeBox } from '@/components/ui/badge-box';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PriceBox, PriceMonthly } from '@/components/ui/price';
import { Separator } from '@/components/ui/separator';
import { getPricingPlans } from '@/lib/get-pricing-plans';

export default async function Home() {
  const pricingPlans = await getPricingPlans();

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <section className="container grid grid-cols-2 gap-4">
        {pricingPlans.map((plan) => {
          console.log(plan);
          return (
            <Card key={plan.id}>
              <CardHeader>
                <CardTitle>{plan.planName}</CardTitle>
                <BadgeBox>
                  {plan.isPopular && <Badge>popular</Badge>}
                  {plan.isRecommended && <Badge>recommended</Badge>}
                  {plan.isBestValue && <Badge>best value</Badge>}
                </BadgeBox>
              </CardHeader>
              <CardContent>
                <PriceBox>
                  <PriceMonthly>${plan.monthlyDiscountedPrice}</PriceMonthly>
                  <span className="h-auto">/mo</span>
                </PriceBox>
                <Button>Get Started With {plan.planName}</Button>
                <Separator></Separator>
              </CardContent>
              <CardFooter>
                {plan.features.map((item) => {
                  return (
                    <CardDescription key={plan.features.indexOf(item)}>
                      &#183; {item}
                    </CardDescription>
                  );
                })}
              </CardFooter>
            </Card>
          );
        })}
      </section>
    </main>
  );
}
