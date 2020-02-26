import upperCase from 'lodash/upperCase'

export const capitalizeFirstLetter = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const toUpperCaseSnakeCase = (s) => {
  if (typeof s !== 'string') return ''
  return upperCase(s).replace(/[ ]/g, '_')
}
