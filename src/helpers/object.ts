export function isEmpty(input: any) {
  if (input === null) return true
  if (input === undefined) return true
  if (typeof input === 'object') {
    return Object.keys(input).length === 0
  }

  return String(input).trim() === ''
}
