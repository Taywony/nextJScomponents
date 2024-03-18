export type PricingPlan = FreePlan | ProPlan | EnterprisePlan | CustomPlan;

export type FreePlan = {
  id: string;
  planType: 'free';
  planName: string;
  monthlyOriginalPrice: number;
  monthlyDiscountedPrice: number;
  annuallyOriginalPrice: number;
  annuallyDiscountedPrice: number;
  features: string[];
  isPopular?: boolean;
  isRecommended?: boolean;
  isBestValue?: boolean;
};

export type ProPlan = {
  id: string;
  planType: 'pro';
  planName: string;
  monthlyOriginalPrice: number;
  monthlyDiscountedPrice: number;
  annuallyOriginalPrice: number;
  annuallyDiscountedPrice: number;
  features: string[];
  isPopular?: boolean;
  isRecommended?: boolean;
  isBestValue?: boolean;
};

export type EnterprisePlan = {
  id: string;
  planType: 'enterprise';
  planName: string;
  monthlyOriginalPrice: number;
  monthlyDiscountedPrice: number;
  annuallyOriginalPrice: number;
  annuallyDiscountedPrice: number;
  features: string[];
  isPopular?: boolean;
  isRecommended?: boolean;
  isBestValue?: boolean;
};

export type CustomPlan = {
  id: string;
  planType: 'custom';
  planName: string;
  monthlyOriginalPrice: number;
  monthlyDiscountedPrice: number;
  annuallyOriginalPrice: number;
  annuallyDiscountedPrice: number;
  features: string[];
  isPopular?: boolean;
  isRecommended?: boolean;
  isBestValue?: boolean;
  customFeatures: string[];
};
