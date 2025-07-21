# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Version

dependencies:

- @primeuix/themes 1.2.1
- nuxt 3.17.7
- primevue 4.2.5
- vue 3.5.17
- vue-router 4.5.1

devDependencies:

- @primevue/nuxt-module

## colorMode setting

install

```
pnpm add primeicons
npx nuxi module add color-mode
```

The colorMode setting is set to `system` by default. This means that the color mode will be automatically set based on the user's system preferences. If the user has not set a preference, the color mode will default to `light`.

### use PrimeVue theme

If you want to set the color mode to `dark` or `light` by PrimeVue, you can set the `primevue.theme.darkModeSelector` property is `.dark` in the `nuxt.config.ts` file to the desired value. But this is overrided by the tailWind css color config.

### use tailWind css color config

The tailwind css color config is set to `light` by default. If you want to set the color mode to `dark` or `light` by tailwind css, you can set the `colorMode` property is `dark` or `light` in the `nuxt.config.ts` file. you must set the `primevue.theme.darkModeSelector` property is `system ` in the `nuxt.config.ts` or hidden the `primevue.theme.darkModeSelector` property in the `nuxt.config.ts` file.;

### use PrimeVue theme and tailWind css color config

`primevue.theme.darkModeSelector` setting `.dark` in `nuxt.config.ts` `darkMode: ['class', '.dark']` setting in `tailwind.config.js`

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
