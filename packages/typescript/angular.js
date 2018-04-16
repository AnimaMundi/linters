module.exports = {
  "extends": [
    "./index.js"
  ],
  "rulesDirectory": [
    "codelyzer"
  ],
  "rules": {
    "import-destructuring-spacing": true,
    "no-attribute-parameter-decorator": true,
    "no-forward-ref": true,
    "no-shadowed-variable": true,
    "directive-selector": [
      true,
      "attribute",
      "app",
      "camelCase"
    ],
    "component-selector": [
      true,
      "element",
      "app",
      "kebab-case"
    ],
    "use-input-property-decorator": true,
    "use-output-property-decorator": true,
    "use-host-property-decorator": true,
    "no-input-rename": true,
    "no-output-rename": true,
    "use-life-cycle-interface": true,
    "use-pipe-transform-interface": true,
    "component-class-suffix": true,
    "directive-class-suffix": true,
    "no-access-missing-member": true,
    "templates-use-public": true,
    "invoke-injectable": true,
    "deprecation": {
      "severity": "warn"
    }
  }
};
