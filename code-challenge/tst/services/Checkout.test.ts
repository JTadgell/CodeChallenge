import { PricingRules } from "../../src/models/PricingRules";
import { Checkout } from "../../src/services/Checkout";
import { Item } from "../../src/models/Item";

describe("checkoutAds", () => {
  let samplePricingRules = new PricingRules();
  let co = new Checkout(samplePricingRules);

  it("returns $0 after with no ads", () => {
    expect(co.total()).toEqual(0);
  });
});

describe("checkoutAds", () => {
  let samplePricingRules = new PricingRules();

  let co = new Checkout(samplePricingRules);
  co.add(Item.ClassicAd);
  co.add(Item.StandoutAd);
  co.add(Item.PremiumAd);

  it("default scenario with sample ads", () => {
    expect(co.total()).toEqual(987.97);
  });
});

describe("checkoutAds", () => {
  let samplePricingRules = new PricingRules();
  samplePricingRules.classicDeal = [3, 2];

  let co = new Checkout(samplePricingRules);
  co.add(Item.ClassicAd);
  co.add(Item.ClassicAd);
  co.add(Item.ClassicAd);
  co.add(Item.PremiumAd);

  it("SecondBite scenario with negotiated deal and sample ads", () => {
    expect(co.total()).toEqual(934.97);
  });
});

describe("checkoutAds", () => {
  let samplePricingRules = new PricingRules();
  samplePricingRules.standoutPrice = 299.99;

  let co = new Checkout(samplePricingRules);
  co.add(Item.StandoutAd);
  co.add(Item.StandoutAd);
  co.add(Item.StandoutAd);
  co.add(Item.PremiumAd);

  it("Axil Coffee Roasters scenario with negotiated price and sample ads", () => {
    expect(co.total()).toEqual(1294.96);
  });
});
