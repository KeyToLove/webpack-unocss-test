const { defineConfig, presetAttributify, presetUno } = require('unocss')
const transformerAttributifyJsx = require('@unocss/transformer-attributify-jsx')
module.exports = defineConfig({
  presets: [presetAttributify(), presetUno()],
  rules: [[/^bg-(.+)$/, ([, d]) => ({ 'background-color': d })]],
  transformers: [transformerAttributifyJsx()],
})
