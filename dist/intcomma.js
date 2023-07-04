'use strict';

module.exports = intcomma;
function intcomma(input, _ref) {
  var delimiters = _ref.delimiters;
  var decimalSeparator = delimiters.decimal;
  var thousandSeparator = delimiters.thousands;
  var thousandsSize = delimiters.thousandsSize || 3;
  var characteristic = input.toString().split('.')[0];
  var mantissa = input.toString().split('.')[1];
  var hasNegativeSign = input < 0 && characteristic.indexOf('-') === 0;
  if (hasNegativeSign) {
    // Remove the negative sign
    characteristic = characteristic.slice(1);
  }
  var indexesToInsertThousandDelimiters = indexesOfGroupSpaces(characteristic.length, thousandsSize);
  indexesToInsertThousandDelimiters.forEach(function (position, index) {
    characteristic = characteristic.slice(0, position + index) + thousandSeparator + characteristic.slice(position + index);
  });
  if (hasNegativeSign) {
    // Add back the negative sign
    characteristic = "-".concat(characteristic);
  }
  if (!mantissa) {
    return characteristic;
  } else {
    return characteristic + decimalSeparator + mantissa;
  }
}
function indexesOfGroupSpaces(totalLength, groupSize) {
  var result = [];
  var counter = 0;
  for (var i = totalLength; i > 0; i--) {
    if (counter === groupSize) {
      result.unshift(i);
      counter = 0;
    }
    counter++;
  }
  return result;
}