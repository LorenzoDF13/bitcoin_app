import currencyFormat from "./CurrencyFormat";

export default function BtcToUsd(btc, btcPrice) {
  return currencyFormat(btc * btcPrice);
}
