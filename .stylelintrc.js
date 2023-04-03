module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-recess-order"
  ],
  rules: {
    "no-duplicate-selectors": null,
    "no-descending-specificity": null,
    "custom-property-pattern": [
      /** Global Variables */
      "^nes-[a-z0-9-]+$",
      /** Private Variables */
      "^nes_[a-z0-9-]+$"
    ].join('|')
  },
  plugins: [
    "stylelint-order"
  ]
}
