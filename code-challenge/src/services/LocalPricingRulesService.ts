import { default as pricingRulesData } from "../data/PricingRules.json";
import { PricingRulesService } from "./PricingRulesService";
import { PricingRules } from "../models/PricingRules";

export class LocalPricingRulesService implements PricingRulesService {
  getPricingRulesById(customerId: number) {
    let customerRules = pricingRulesData.find(
      (customer) => customer.customerId === customerId
    );

    console.log(customerRules);

    if (customerRules) {
      customerRules = pricingRulesData.find(
        (customer) => customer.customerId === 0
      );
    }

    let pricingRules = new PricingRules();

    pricingRules = this.getAdPrice(customerRules, pricingRules);
    pricingRules = this.getAdDeals(customerRules, pricingRules);
    pricingRules = this.getAdMoreThanDeals(customerRules, pricingRules);

    return pricingRules;
  }

  getAdPrice(customerRules: any, pricingRules: PricingRules): PricingRules {
    if (customerRules?.adPrices?.classic) {
      pricingRules.classicPrice = customerRules?.adPrices?.classic;
    }

    if (customerRules?.adPrices?.standout) {
      pricingRules.standoutPrice = customerRules?.adPrices?.standout;
    }

    if (customerRules?.adPrices?.premium) {
      pricingRules.premiumPrice = customerRules?.adPrices?.premium;
    }

    return pricingRules;
  }

  getAdDeals(customerRules: any, pricingRules: PricingRules): PricingRules {
    if (customerRules?.adDeals?.classic) {
      pricingRules.classicDeal[0] = customerRules?.adDeals?.classic?.amount;
      pricingRules.classicDeal[1] = customerRules?.adDeals?.classic?.for;
    }
    if (customerRules?.adDeals?.standout) {
      pricingRules.standoutDeal[0] = customerRules?.adDeals?.standout?.amount;
      pricingRules.standoutDeal[1] = customerRules?.adDeals?.standout?.for;
    }
    if (customerRules?.adDeals?.premium) {
      pricingRules.premiumDeal[0] = customerRules?.adDeals?.premium?.amount;
      pricingRules.premiumDeal[1] = customerRules?.adDeals?.premium?.for;
    }

    return pricingRules;
  }

  getAdMoreThanDeals(
    customerRules: any,
    pricingRules: PricingRules
  ): PricingRules {
    if (customerRules?.adMoreThanDeals?.classic) {
      pricingRules.classicMoreThanDeal =
        customerRules?.adMoreThanDeals?.classic?.amount;
      pricingRules.classicMoreThanDealPrice =
        customerRules?.adMoreThanDeals?.classic?.price;
    }

    return pricingRules;
  }
}
