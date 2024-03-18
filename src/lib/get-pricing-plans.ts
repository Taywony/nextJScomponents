import { cache } from 'react';

import { type PricingPlan } from '@/types/pricing';

const pricingPlans: PricingPlan[] = [
  {
    id: 'free-001',
    planType: 'free',
    planName: 'Starter Free',
    monthlyOriginalPrice: 0,
    monthlyDiscountedPrice: 0,
    annuallyOriginalPrice: 0,
    annuallyDiscountedPrice: 0,
    features: ['Basic support', '5 projects', 'Community forums'],
    isPopular: false,
    isRecommended: false,
    isBestValue: false,
  },
  {
    id: 'pro-001',
    planType: 'pro',
    planName: 'Professional Growth',
    monthlyOriginalPrice: 25,
    monthlyDiscountedPrice: 20,
    annuallyOriginalPrice: 250,
    annuallyDiscountedPrice: 200,
    features: ['Priority support', 'Unlimited projects', 'Advanced analytics'],
    isPopular: true,
    isRecommended: true,
    isBestValue: false,
  },
  {
    id: 'enterprise-001',
    planType: 'enterprise',
    planName: 'Enterprise Power',
    monthlyOriginalPrice: 50,
    monthlyDiscountedPrice: 45,
    annuallyOriginalPrice: 500,
    annuallyDiscountedPrice: 450,
    features: ['Dedicated support', 'Custom integrations', 'Enhanced security'],
    isPopular: false,
    isRecommended: false,
    isBestValue: true,
  },
  {
    id: 'custom-001',
    planType: 'custom',
    planName: 'Custom Solutions',
    monthlyOriginalPrice: 80,
    monthlyDiscountedPrice: 70,
    annuallyOriginalPrice: 800,
    annuallyDiscountedPrice: 700,
    features: ['Personal account manager', 'Tailored solutions'],
    customFeatures: [
      'Custom feature A',
      'Custom feature B',
      'Custom feature C',
    ],
    isPopular: false,
    isRecommended: true,
    isBestValue: false,
  },
];

export const getPricingPlans = cache(async (): Promise<PricingPlan[]> => {
  return Promise.resolve(pricingPlans);
});
