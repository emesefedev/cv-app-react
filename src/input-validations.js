const validEmail = "[a-z|A-Z|0-9]+@[a-z]+.[a-z]+"
const validPhone = "[0-9]+"

export function hasLengthBiggerThan(input, minLength) {
  return input.length >= minLength
}

export function isEmpty(input) {
  return input === ""
}

export function isValidEmail(input) {
  return input.match(validEmail)
}

export function isValidPhone(input) {
  return input.match(validPhone)
}