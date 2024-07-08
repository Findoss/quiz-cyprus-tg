export const PLAN = {
  premium: '💎 Premium',
  free: 'Free',
} as const;

export type Plan = (typeof PLAN)[keyof typeof PLAN];
