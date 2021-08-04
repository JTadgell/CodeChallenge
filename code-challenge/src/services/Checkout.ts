import { Item } from "../models/Item";
import { PricingRules } from "../models/PricingRules";

export class Checkout {
  private _items: Item[];
  private _pricingRules: PricingRules;

  constructor(pricingRules?: PricingRules) {
    this._items = [];
    if (pricingRules) {
      this._pricingRules = pricingRules;
    } else {
      this._pricingRules = new PricingRules();
    }
  }

  add(item: Item) {
    this._items.push(item);
  }

  total() {
    // classic ad price
    let classicAds = this._items.filter(function (item) {
      return item === Item.ClassicAd;
    });
    let classicAdsPrice = getClassicPrice(
      this._pricingRules,
      classicAds.length
    );

    // stanout ad price
    let standoutAds = this._items.filter(function (item) {
      return item === Item.StandoutAd;
    });
    let standoutAdsPrice = getPrice(
      standoutAds.length,
      this._pricingRules.standoutDeal,
      this._pricingRules.standoutPrice
    );

    // premium ad price
    let premiumAds = this._items.filter(function (item) {
      return item === Item.PremiumAd;
    });
    let premiumAdPrice = getPrice(
      premiumAds.length,
      this._pricingRules.premiumDeal,
      this._pricingRules.premiumPrice
    );

    return classicAdsPrice + standoutAdsPrice + premiumAdPrice;
  }
}

function getPrice(quantity: number, deal: [number, number], price: number) {
  let withDealQuantity = Math.floor(quantity / deal[0]);
  let withDealPrice = price * withDealQuantity * deal[1];

  let withoutDealQuantity = Math.floor(quantity % deal[0]);
  let withoutDealPrice = price * withoutDealQuantity;

  return withDealPrice + withoutDealPrice;
}

export function getClassicPrice(
  pricingRules: PricingRules,
  quantity: number
): number {
  let appliedPrice = pricingRules.classicPrice;
  if (quantity > pricingRules.classicMoreThanDeal) {
    appliedPrice = Math.min(
      pricingRules.classicPrice,
      pricingRules.classicMoreThanDealPrice
    );
  }

  let withDealQuantity = Math.floor(quantity / pricingRules.classicDeal[0]);
  let withDealPrice =
    appliedPrice * withDealQuantity * pricingRules.classicDeal[1];

  let withoutDealQuantity = Math.floor(quantity % pricingRules.classicDeal[0]);
  let withoutDealPrice = appliedPrice * withoutDealQuantity;

  return withDealPrice + withoutDealPrice;
}
