import React from 'react';
import { PricingSection } from '@/components/ui/pricing';

export default function Pricing() {
  return (
    <div className="flex min-h-screen items-center justify-center py-12">
      <PricingSection
        plans={PLANS}
        heading="Plans that Scale with You"
        description="Whether you're just starting out or growing fast, our flexible pricing has you covered — with no hidden costs."
      />
    </div>
  );
}

const PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    info: 'For most individuals',
    price: {
      monthly: 7,
      yearly: Math.round(7 * 12 * (1 - 0.12)),
    },
    features: [
      { text: 'Up to 3 Blog posts', limit: '100 tags' },
      { text: 'Up to 3 Transcriptions' },
      { text: 'Up to 3 Posts stored' },
      {
        text: 'Markdown support',
        tooltip: 'Export content in Markdown format',
      },
      {
        text: 'Community support',
        tooltip: 'Get answers your questions on discord',
      },
      {
        text: 'AI powered suggestions',
        tooltip: 'Get up to 100 AI powered suggestions',
      },
    ],
    btn: {
      text: 'Start Your Free Trial',
      href: '#',
    },
  },
  {
    highlighted: true,
    id: 'pro',
    name: 'Pro',
    info: 'For small businesses',
    price: {
      monthly: 17.99,
      yearly: Math.round(17.99 * 12 * (1 - 0.12)),
    },
    features: [
      { text: 'Up to 500 Blog Posts', limit: '500 tags' },
      { text: 'Up to 500 Transcriptions' },
      { text: 'Up to 500 Posts stored' },
      {
        text: 'Unlimited Markdown support',
        tooltip: 'Export content in Markdown format',
      },
      { text: 'SEO optimization tools' },
      { text: 'Priority support', tooltip: 'Get 24/7 chat support' },
      {
        text: 'AI powered suggestions',
        tooltip: 'Get up to 500 AI powered suggestions',
      },
    ],
    btn: {
      text: 'Get started',
      href: '#',
    },
  },
  {
    name: 'Business',
    info: 'For large organizations',
    price: {
      monthly: 69.99,
      yearly: Math.round(49.99 * 12 * (1 - 0.12)),
    },
    features: [
      { text: 'Unlimited Blog Posts' },
      { text: 'Unlimited Transcriptions' },
      { text: 'Unlimited Posts stored' },
      { text: 'Unlimited Markdown support' },
      {
        text: 'SEO optimization tools',
        tooltip: 'Advanced SEO optimization tools',
      },
      { text: 'Priority support', tooltip: 'Get 24/7 chat support' },
      {
        text: 'AI powered suggestions',
        tooltip: 'Get up to 500 AI powered suggestions',
      },
    ],
    btn: {
      text: 'Contact team',
      href: '#',
    },
  },
];
