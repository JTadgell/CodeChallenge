export class PricingRules {
  // to simplify business logic, each type only supports a single "deal".
  // eg. cannot have 4 for price of 3, and 5 for price of 3.
  classicPrice: number;
  classicDeal: [number, number];
  classicMoreThanDeal: number;
  classicMoreThanDealPrice: number;

  standoutPrice: number;
  standoutDeal: [number, number];
  standoutMoreThanDeal: number;
  standoutMoreThanDealPrice: number;

  premiumPrice: number;
  premiumDeal: [number, number];
  premiumMoreThanDeal: number;
  premiumMoreThanDealPrice: number;

  constructor() {
    // load defaults
    this.classicPrice = 269.99;
    this.classicDeal = [1, 1];
    this.classicMoreThanDeal = 0;
    this.classicMoreThanDealPrice = this.classicPrice;

    this.standoutPrice = 322.99;
    this.standoutDeal = [1, 1];
    this.standoutMoreThanDeal = 0;
    this.standoutMoreThanDealPrice = this.standoutPrice;

    this.premiumPrice = 394.99;
    this.premiumDeal = [1, 1];
    this.premiumMoreThanDeal = 0;
    this.premiumMoreThanDealPrice = this.premiumPrice;
  }
}
