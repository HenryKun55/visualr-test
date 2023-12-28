export const maskCurrency = (value?: string | number | null) =>
  value && value !== 'R$'
    ? `R$ ${String(value)
      .replace(/\D/g, '')
      .replace(/(\d)(\d{2})$/, '$1.$2')
      .replace(/(?=(\d{3})+(\D))\B/g, ',')}`
    : ''

export const maskNumber = (value: string) => value.replace(/\D/g, '')

export const maskLimitDigits = (limit: number) => (value: string) => {
  const numericValue = value.replace(/\D/g, '');
  const firstDigits = numericValue.slice(0, limit)

  const result = parseInt(firstDigits, 10);
  if (Number.isNaN(result) || result <= 0) {
    return '';
  }

  return String(result);
};

export const removeMaskCurrency = (value: string) =>
  Number(value.replace(/[^0-9.-]+/g, ''))


export const maskCreditCardNumber = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/^(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})\d+?$/, '$1')

export const maskCreditCardExpirationDate = (value: string) => {
  const numericValue = value.replace(/\D/g, '');
  const formattedDate = numericValue
    .replace(/^(\d{2})(\d{0,4})/, '$1/$2') 
    .substring(0, 7); 
  return formattedDate;
};
