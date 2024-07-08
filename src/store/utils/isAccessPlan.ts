import { Plan } from '../plan';

export const isAccessPlan = (plans: Plan[], userPlan: Plan) => {
  return plans.some((plan) => plan === userPlan);
};
