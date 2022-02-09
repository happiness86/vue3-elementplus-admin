module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: 'espree',
      ts: '@typescript-eslint/parser',
      '<template>': 'espree'
    }
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    'generator-star-spacing': 'off',
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/require-default-prop': 'off',
    'no-debugger': 'off',
    'vue/attributes-order': 'off',
    'vue/multi-word-component-names': 'off'
  },
  globals: {
    // setup中编译宏，为避免eslint报错，暂时办法
    defineProps: true,
    defineEmits: true,
    withDefaults: true
  }
}
