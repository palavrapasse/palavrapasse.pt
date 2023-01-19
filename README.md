# palavrapasse.pt

The web frontend that users use to query leaks information.

## Hooks

This repository is configured with client-side Git hooks which you need to install by running the following command:

```bash
./hooks/INSTALL
```

## Development

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev
```

Also, to update the localization files, you will need to run the following command before editing each locale files:

```bash
npm run typesafe-i18n
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
