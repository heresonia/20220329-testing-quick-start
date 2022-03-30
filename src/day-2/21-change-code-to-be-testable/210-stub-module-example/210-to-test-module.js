import { time } from './210-time-module.js';

export function shoutBannerFor(product, price, calculatedTime = time()) {
  return `Welcome, today's (${calculatedTime}) promotion is: ${product} for ${price}`;
}


console.log(shoutBannerFor('Pizza', 30));
