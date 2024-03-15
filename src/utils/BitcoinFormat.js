import { useBitcoinStore } from "../stores/BitcoinStore";

export default function usdToBtc(num, btcPrice, nfixed) {
  const fixed = nfixed || 6;
  return (num / btcPrice).toFixed(fixed) + " BTC";
}
