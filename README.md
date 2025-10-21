# Expectations of this project.
My goal for this projects is to set up a multi-route app, which combines multiple reusable components to form a site.
When the user visits this app, there is a mock login screen which accepts a user/pass combination into a form.
If the combo is correct, the userLoggedIn state is updated, 
then they are forwarded to a mock dashboard.
On that dash, they have the option to pick from a few different feature options. 
One being a to-do list, which grabs data from an endpoint and joins the user submitted tasks to a new list. 

Pages/Routes: Login -> Home Dashboard w Nav: [ToDo, Settings]

# Steps
1. initiate project with Vite & dependencies
2. set up project directories & pages
3. Create Authentication flow
4. Create dashboard route w components NavBar & Greeting
5. Create toDo route with toDoList component and addItem form

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
