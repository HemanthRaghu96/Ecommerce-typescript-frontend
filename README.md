# Ecommerce(typescript) Frontend

An E-commerce (typescript)Application is nothing but an e-commerce store where a person gets items from a vendor for low prices and sells items for the customers for profit. \
In this application I have used my own API for Users, Items, Users, Items, Customers, Admin, Product, and Orders. \
For all the individual APIs I made CRUD operations like add, edit, view selected data, and delete in the UI. \
I have used ReactJS,react-bootstrap, Axios,react-router-dom, and redux.
Kindly view the API documentation for more details.

Frontend Server link: https://hrets.netlify.app/
API documentation :https://documenter.getpostman.com/view/32014275/2sA3XV7yyw

This project is open source, 🚀 Give a Star ⭐️ & Fork to this project ... Happy coding! 🤩
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
