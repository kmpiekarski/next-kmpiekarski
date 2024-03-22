![workflow](https://github.com/kmpiekarski/react-kmpiekarski/actions/workflows/ci.yml/badge.svg?event=push)
[![Netlify Status](https://api.netlify.com/api/v1/badges/70335938-a96e-4fcb-b416-c0284871169d/deploy-status)](https://app.netlify.com/sites/kmpiekarski/deploys)


# KMPiekarski Portfolio Website

Welcome to my ongoing portfolio project.

This project is built with:

- [Reactjs](https://reactjs.org/)
- [Nextjs](https://nextjs.org/learn/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled components](https://www.styled-components.com/)
- [Contentful](https://contentful.com)

The site is hosted in Netlify on the domain [kmpiekarski.netlify.app](https://kmpiekarski.netlify.app) and utilizes GitHub Actions for CI.

## Staring the App

To run this site on `localhost:3000` follow these steps

```
npm install
npm run build
npm run dev
```

Then you will need to open [localhost:3000](http://localhost:3000) in your browser. Shut this down with `ctrl/control` + `c`.

## Local .ENV file

You will need to create `env.local` in the root directory, where you will set your varables to access the Contentful workspace.

```
CONTENTFUL_SPACE_ID="_________"
CONTENTFUL_PREVIEW_TOKEN="_________"
CONTENTFUL_ACCESS_TOKEN="_________"
CONTENTFUL_MANAGEMENT_TOKEN="_________"
```

Secret keys to authorize its connection with Contentful are set in this GitHub repository as a _repository secret_ in GitHub. This is critical to ensure the CI build will not fail while _linting_. You will have to also [set these in Netlify](https://docs.netlify.com/environment-variables/overview/) or whatever service intend to use.

This site also

Run the development server:

```bash
npm run dev
```

Preview locally at [http://localhost:3000](http://localhost:3000)

## Storybook

```bash
npm run storybook
```

Then access at [http://localhost:6006/](http://localhost:6006/)
