# numeral-light

This package is based on two great projects https://github.com/BenjaminVanRyseghem/numbro and https://github.com/adamwdraper/Numeral-js.

It provides two very simple helpers that accept number and locale and return a formatted string:


```js
const locale = require('numeral-light/locales/en-US')
const { intabbr, intcomma } = require('numeral-light')

console.assert('1K' === intabbr(1234, locale))
console.assert('1,234' === intcomma(1234, locale))
```
