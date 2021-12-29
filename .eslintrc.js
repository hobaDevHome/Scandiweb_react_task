// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//     commonjs: true,
//     es6: true,
//   },
//   parser: '@typescript-eslint/parser',
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/eslint-recommended',
//     'prettier',
//     'plugin:prettier/recommended',
//     'plugin:@typescript-eslint/recommended',
//   ],
//   parserOptions: {
//     ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
//     project: 'tsconfig.eslint.json',
//     tsconfigRootDir: __dirname,
//     sourceType: 'module', // Allows for the use of imports
//   },
//   plugins: [
//     '@typescript-eslint',
//     '@typescript-eslint/tslint',
//     'import',
//     'unused-imports',
//   ],

//   rules: {
//     quotes: 'off',
//     '@typescript-eslint/no-unused-vars': 'error',
//     'no-unused-vars': 'off',
//     // we want to force semicolons
//     semi: ['error', 'always'],
//     // we use 2 spaces to indent our code
//     indent: 'off',
//     // we want to avoid extraneous spaces
//     'no-multi-spaces': ['error'],
//   },
//   settings: {
//     'import/resolver': {
//       node: {
//         extensions: ['.js', '.jsx', '.ts', '.tsx'],
//         moduleDirectory: ['node_modules', 'src/'],
//       },
//     },
//   },
// };

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ["import"],
  rules: {
    quotes: "off",

    "no-unused-vars": "off",
    // we want to force semicolons
    semi: ["error", "always"],
    // we use 2 spaces to indent our code
    indent: "off",
    // we want to avoid extraneous spaces
    "no-multi-spaces": ["error"],
  },
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React", // Pragma to use, default to "React"
      fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: "0.53", // Flow version
    },

    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" },
      // for rules that check exact prop wrappers
      { property: "forbidExtraProps", exact: true },
    ],
    componentWrapperFunctions: [
      // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
      "observer", // `property`
      { property: "styled" }, // `object` is optional
      { property: "observer", object: "Mobx" },
      { property: "observer", object: "<pragma>" }, // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    formComponents: [
      // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
      "CustomForm",
      { name: "Form", formAttribute: "endpoint" },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      { name: "Link", linkAttribute: "to" },
    ],
  },
};
