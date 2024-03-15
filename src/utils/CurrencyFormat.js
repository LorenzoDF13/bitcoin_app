let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export default function currencyFormat(num) {
  return USDollar.format(num);
}
