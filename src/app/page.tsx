import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getPricingPlans } from '@/lib/get-pricing-plans';

export default async function Home() {
  const pricingPlans = await getPricingPlans();

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <section className="container grid grid-cols-2 gap-4">
        {pricingPlans.map((plan) => {
          return (
            <Card key={plan.id}>
              <CardTitle>{plan.planName}</CardTitle>
              <CardContent>
                <CardHeader>
                  <p className="font-bold text-4xl">
                    ${plan.monthlyOriginalPrice}
                  </p>
                  <p className="h-auto">/mo</p>
                </CardHeader>
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
