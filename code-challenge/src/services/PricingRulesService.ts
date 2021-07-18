import { PricingRules } from "../models/PricingRules";

export interface PricingRulesService {
  getPricingRulesById(customerId: number): PricingRules;
}
