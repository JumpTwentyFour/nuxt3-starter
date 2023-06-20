# Nuxt 3 Starter Template

## Project setup

Make sure to install the dependencies:

```bash
yarn
```

## Development server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

## Linting and testing

Run and view the results of the linter:

```bash
yarn lint
```


Run and view the results of tests:

```bash
yarn test
```

## Features

### [Nuxt 3](https://nuxt.com/)

Nuxt 3 is the next major version of Nuxt.js, the most powerful framework for building modern web applications based on Vue.js.

### [Nuxt 3 Server](https://nuxt.com/docs/guide/directory-structure/server)

The `server` directory contains the server-side code for your application.

Removal steps:
- Remove `server` directory

### [Vitest](https://vitest.dev/)

Vitest is a vite-native testing framework. Vitest provides compatibility with Jest's API that allows you to use it as a drop-in replacement in most projects.

Removal steps:
- Remove any test files
- Remove `vitest.config.ts`
- Remove package.json dependencies: `vitest`

### [Typescript](https://www.typescriptlang.org/)

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

TypeScript can be used simply by adding the `lang="ts"` attribute to the script tag.

This will tell the compiler to use TypeScript instead of JavaScript for that file.

### [Pinia](https://pinia.vuejs.org/)

Pinia is a Vue Store (inspired by Vuex) that uses the composition API.

Removal steps:
- Remove `/stores` directory
- Remove `@pinia/nuxt` from `nuxt.config.ts` plugins
- Remove package.json dependencies: `pinia` and `@pinia/nuxt`

### [ESLint](https://eslint.org/)

ESLint statically analyzes your code to quickly find problems.

### [Prettier](https://prettier.io/)

Prettier is an opinionated code formatter.

### [VueUse](https://vueuse.org/)

Collection of essential Vue Composition Utilities for Vue 3.

Removal steps:
- Remove any references to `@vueuse/core` in your components and composables
- Remove package.json dependency: `@vueuse/core`

### [TailwindCSS](https://tailwindcss.com/)

Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.

Removal steps:
- Remove any references to TailwindCSS in your components and stylesheets
- Remove `@nuxtjs/tailwindcss` from `nuxt.config.ts` modules
- Remove package.json dependency: `@nuxtjs/tailwindcss`

### Overlay system

There is a basic overlay system in place that can be used to display messages or UI to the user.

To use it simply teleport your component to `#overlay`.

There is a basic `OverlayMenu` component that can be used as an example.

```vue
<button @click="menuOpen = true">
  Open menu in overlay
</button>
<Teleport v-if="menuOpen" to="#overlay">
  <OverlayMenu
    class="w-56 h-30 text-center absolute"
    @close="menuOpen = false"
  >
    <p>👋</p>
    <p>Hello, I'm an overlay menu!</p>
  </OverlayMenu>
</Teleport>
```

Removal steps:
- Remove any teleport references to `#overlay` in your components
- Remove `OverlayMenu` component
- Remove `#overlay` styles from `app.vue`
- Remove `<div id="overlay" />` from `app.vue`
