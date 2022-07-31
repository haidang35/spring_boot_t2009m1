
export const CURRENCY = {
    VIETNAM: 'VND',
    US: 'USD'
}
export const formatCurrency = (amount, currency) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  });
  return formatter.format(amount);
};

export const formatCurrencyDefault = (amount) => {
    return formatCurrency(amount, CURRENCY.VIETNAM);
}
