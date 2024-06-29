export const PLAN = {
  premium: '💎 Premium',
  free: 'Free',
} as const;

type ValueOf<T> = T[keyof T];

export type Plan = ValueOf<typeof PLAN>;
