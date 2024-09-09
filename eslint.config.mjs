import globals from 'globals'
import js from '@eslint/js'

// export default [
//   { files: ['**/*.{js,mjs,cjs,jsx}'] },
//   { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
//   { languageOptions: { globals: globals.browser } },
//   pluginReact.configs.flat.recommended,
// ]

export default [
  js.configs.recommended,
  {
    files: ['./**/*.{js,jsx}'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
      ecmaVersion: 'latest',
    },
  },
]
