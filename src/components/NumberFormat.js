export const NumberFormat = value =>
  new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB'
  }).format(value)
