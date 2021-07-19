import { Checkout } from "./services/Checkout";
import { Item } from "./models/Item";
import { LocalPricingRulesService } from "./services/LocalPricingRulesService";

// Run for default customer
let defaultCheckOut = new Checkout();
defaultCheckOut.add(Item.ClassicAd);
defaultCheckOut.add(Item.StandoutAd);
defaultCheckOut.add(Item.PremiumAd);

console.log(`Default scenario total: $${defaultCheckOut.total()}`);

var pricingRulesService = new LocalPricingRulesService();

// Run for second bite
let secondBiteRules = pricingRulesService.getPricingRulesById(1);
let secondBiteCheckout = new Checkout(secondBiteRules);
secondBiteCheckout.add(Item.ClassicAd);
secondBiteCheckout.add(Item.ClassicAd);
secondBiteCheckout.add(Item.ClassicAd);
secondBiteCheckout.add(Item.PremiumAd);

console.log(`SecondBite scenario total: $${secondBiteCheckout.total()}`);

// Run for axil coffee roasters
let axilRules = pricingRulesService.getPricingRulesById(2);
let axilCheckout = new Checkout(axilRules);
axilCheckout.add(Item.StandoutAd);
axilCheckout.add(Item.StandoutAd);
axilCheckout.add(Item.StandoutAd);
axilCheckout.add(Item.PremiumAd);

console.log(`Axil Coffee Roasters scenario total: $${axilCheckout.total()}`);
