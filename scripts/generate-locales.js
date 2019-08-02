#!/usr/bin/env node

'use strict'

const _ = require('lodash')
const fs = require('fs')
const path = require('path')

require('numeral/locales')
require('../vendor/numeral-ar')
const numeral = require('numeral')
const numeralLocales = _.pick(numeral.locales, 'vi', 'ar')

const numbro = require('numbro')
const numbroLocales = require('numbro/dist/languages.min')
const numbroEnUsLocale = numbro.languages()

const allLocales = _.merge(numeralLocales, numbroLocales, numbroEnUsLocale)
const targetKeys = [ 'delimiters', 'abbreviations' ]
const outputDir = path.resolve(__dirname, '../locales')
const entries = _.map(allLocales, (locale, name) => ({
  name: path.resolve(outputDir, `${name}.json`),
  text: JSON.stringify(_.pick(locale, targetKeys))
}))

fs.mkdirSync(outputDir, { recursive: true })
entries.forEach(({ name, text }) => {
  fs.writeFileSync(name, text)
})
