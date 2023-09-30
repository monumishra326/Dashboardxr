const { format: formatCurrency } = Intl.NumberFormat("en-EN", {
  style: "currency",
  currency: "USD",
});

export { formatCurrency };
