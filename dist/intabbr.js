'use strict';

module.exports = intabbr;
function intabbr(num, _ref) {
  var abbreviations = _ref.abbreviations;
  var abs = Math.abs(num);
  var val = num;
  var suf = '';
  if (abs >= Math.pow(10, 12)) {
    // trillion
    suf = clearSuffix(abbreviations.trillion);
    val = Math.round(val / Math.pow(10, 12));
  } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9)) {
    // billion
    suf = clearSuffix(abbreviations.billion);
    val = Math.round(val / Math.pow(10, 9));
  } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6)) {
    // million
    suf = clearSuffix(abbreviations.million);
    val = Math.round(val / Math.pow(10, 6));
  } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3)) {
    // thousand
    suf = clearSuffix(abbreviations.thousand);
    val = Math.round(val / Math.pow(10, 3));
  }
  if (!suf) {
    return val;
  } else if (suf.length === 1) {
    return "".concat(val).concat(toUpper(suf));
  } else {
    return "".concat(val, " ").concat(upperFirst(suf));
  }
}
function toUpper(str) {
  return str.toUpperCase();
}
function upperFirst(str) {
  return toUpper(str[0]) + str.slice(1);
}
function clearSuffix(suf) {
  return suf.replace(/\./g, '').trim();
}