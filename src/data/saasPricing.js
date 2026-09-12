/**
 * Fallback copy of backend/lib/saasPricing.js for SEO and API-down states.
 * Live prices come from GET /api/saas-billing/pricing.
 */
export const ANNUAL_DISCOUNT_PERCENT = 20
export const TRIAL_DAYS = 14
export const CURRENCY = 'INR'

export const FALLBACK_PRICING = {
  currency: CURRENCY,
  trialDays: TRIAL_DAYS,
  annualDiscountPercent: ANNUAL_DISCOUNT_PERCENT,
  trial: {
    id: 'trial',
    name: 'Free Trial',
    paid: false,
    price: 0,
    monthlyPrice: 0,
    annualPrice: 0,
    durationDays: TRIAL_DAYS,
    billingCycle: 'trial',
    currency: CURRENCY,
    inheritsPlan: 'starter',
    description: 'Starter features. No card needed.',
    features: [
      'Gaming café sessions & rates',
      'Restaurant counter POS',
      'Inventory + low-stock alerts',
      'Billing history & receipts',
      'Staff management (basic)',
      'White-label branding',
    ],
    cta: 'Start 14-Day Free Trial',
  },
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      paid: true,
      monthlyPrice: 1999,
      annualPrice: 19190,
      annualDiscountPercent: ANNUAL_DISCOUNT_PERCENT,
      currency: CURRENCY,
      description: 'One lounge. Sessions, POS, and receipts.',
      features: [
        'Gaming café sessions & rates',
        'Restaurant counter POS',
        'Inventory + low-stock alerts',
        'Billing history & receipts',
        'Staff management (basic)',
        'White-label branding',
      ],
      cta: 'Choose Starter',
    },
    {
      id: 'pro',
      name: 'Pro',
      paid: true,
      monthlyPrice: 3999,
      annualPrice: 38390,
      annualDiscountPercent: ANNUAL_DISCOUNT_PERCENT,
      currency: CURRENCY,
      description: 'Analytics, expenses, and memberships.',
      features: [
        'Everything in Starter',
        'Full analytics & reports',
        'Expense ledger',
        'Vendor / district sessions',
        'Membership & prepaid packs',
        'Priority onboarding',
      ],
      cta: 'Choose Pro',
    },
    {
      id: 'business',
      name: 'Business',
      paid: true,
      monthlyPrice: 4999,
      annualPrice: 47990,
      annualDiscountPercent: ANNUAL_DISCOUNT_PERCENT,
      currency: CURRENCY,
      description: 'Bookings, events, and multi-location tools.',
      features: [
        'Everything in Pro',
        'Lounge slot bookings & events',
        'Public events management',
        'Expansion inquiry CRM',
        'Feature flags per tenant',
        'Dedicated success support',
      ],
      cta: 'Choose Business',
    },
  ],
}

export function posApiBase() {
  if (import.meta.env.VITE_POS_API_BASE) {
    return String(import.meta.env.VITE_POS_API_BASE).replace(/\/$/, '')
  }
  if (import.meta.env.DEV) return 'http://127.0.0.1:7777/api'
  return 'https://pos-api.loftsixtyfour.com/api'
}

export function formatInr(amount) {
  return `₹${Number(amount).toLocaleString('en-IN')}`
}

export function razorpayKeyId() {
  const key = String(import.meta.env.VITE_RAZORPAY_KEY_ID || '').trim()
  if (!key || /x{4,}/i.test(key) || key.endsWith('_xxxxxxxx')) return ''
  if (!/^rzp_(test|live)_[A-Za-z0-9]+$/.test(key)) return ''
  return key
}
