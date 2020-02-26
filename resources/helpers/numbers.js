export const formatNumber = value => {
  const number = Number(value)

  if (!number) return value

  return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ').replace('.', ',')
}

export const getNumberFromFormat = value => {
  return Number(`${value}`.replace(' ', '').replace(',', '.'))
}
