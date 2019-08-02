'use strict'

module.exports = intcomma

function intcomma(input, { delimiters }) {
  const decimalSeparator = delimiters.decimal
  const thousandSeparator = delimiters.thousands
  const thousandsSize = delimiters.thousandsSize || 3

  let characteristic = input.toString().split('.')[0]
  const mantissa = input.toString().split('.')[1]
  const hasNegativeSign = input < 0 && characteristic.indexOf('-') === 0

  if (hasNegativeSign) {
    // Remove the negative sign
    characteristic = characteristic.slice(1)
  }

  const indexesToInsertThousandDelimiters = indexesOfGroupSpaces(characteristic.length, thousandsSize)
  indexesToInsertThousandDelimiters.forEach((position, index) => {
    characteristic = characteristic.slice(0, position + index) + thousandSeparator + characteristic.slice(position + index)
  })

  if (hasNegativeSign) {
    // Add back the negative sign
    characteristic = `-${characteristic}`
  }

  if (!mantissa) {
    return characteristic
  } else {
    return characteristic + decimalSeparator + mantissa
  }
}

function indexesOfGroupSpaces(totalLength, groupSize) {
  const result = []
  let counter = 0
  for (let i = totalLength; i > 0; i--) {
    if (counter === groupSize) {
      result.unshift(i)
      counter = 0
    }
    counter++
  }

  return result
}
