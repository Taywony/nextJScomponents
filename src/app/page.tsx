import { getPricingPlans } from '@/lib/get-pricing-plans';

export default async function Home() {
  const pricingPlans = await getPricingPlans();

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <section className="container grid grid-cols-2 gap-4">
        {pricingPlans.map((plan) => {
          return <div key={plan.id}>{plan.planName}</div>;
        })}
      </section>
    </main>
  );
}
