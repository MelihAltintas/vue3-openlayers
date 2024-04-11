# vue3-openlayers

> Web map [Vue](https://vuejs.org/ "Vue Homepage") components with the power of [OpenLayers](https://openlayers.org/ "OpenLayers Homepage")

OpenLayers Useful 3rd party libraries https://openlayers.org/3rd-party/

[![Netlify Status](https://api.netlify.com/api/v1/badges/be6e2e4b-ccfe-4ace-ba27-79d6035370cc/deploy-status)](https://app.netlify.com/sites/vue3openlayers/deploys)
[![NPM version](https://img.shields.io/npm/v/vue3-openlayers.svg)](https://www.npmjs.com/package/vue3-openlayers)
[![NPM Minified Size](https://img.shields.io/bundlephobia/min/vue3-openlayers?label=package%20minified%20size)](https://www.npmjs.com/package/vue3-openlayers)
[![NPM Minzipped Size](https://img.shields.io/bundlephobia/minzip/vue3-openlayers?label=package%20minzipped%20size)](https://www.npmjs.com/package/vue3-openlayers)

[![Downloads](https://img.shields.io/npm/dt/vue3-openlayers)](https://npmcharts.com/compare/vue3-openlayers?minimal=true)
[![Github Open Issiues](https://img.shields.io/github/issues/MelihAltintas/vue3-openlayers)]()
[![Github Closed Issiues](https://img.shields.io/github/issues-closed-raw/melihaltintas/vue3-openlayers)]()
[![GitHub forks](https://img.shields.io/github/forks/MelihAltintas/vue3-openlayers)]()
[![GitHub Stars](https://img.shields.io/github/stars/MelihAltintas/vue3-openlayers)]()

[![Stackblitz Starter Template](https://img.shields.io/badge/Stackblitz-Starter%20Template-green)](https://stackblitz.com/edit/vue3-openlayers-template?file=src%2Fcomponents%2FTheMap.vue)

<p align="center">
  <a href="https://vue3openlayers.netlify.app/" target="_blank" title="Vue OpenLayers Homepage">
    <img width="100" src="https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/docs/public/logo.png" alt=""><br />
  </a>
</p>

## Links

6 hours of debugging can save you 5 minutes of reading documentation :) please read the doc :)

## - [Documentation Netlify](https://vue3openlayers.netlify.app)

## Install

```bash
# install current vue3-openlayers version
npm install vue3-openlayers
or
yarn add vue3-openlayers
```

[![Stargazers repo roster for @MelihAltintas/vue3-openlayers](https://reporoster.com/stars/MelihAltintas/vue3-openlayers)](https://github.com/MelihAltintas/vue3-openlayers/stargazers)

## Overview

**vue3-openlayers** is components library that brings the powerful **OpenLayers API** to the **Vue3** reactive world.
It can display maps with tiled, raster or vector layers loaded from different sources.

![Alt Text](https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/vue3-openlayers.gif)

## Requirements

<!-- auto-generated-peer-dependency-requirements START -->

- **[ol](https://openlayers.org/)**: `^9.1.0`
- **[ol-contextmenu](https://github.com/jonataswalker/ol-contextmenu)**: `^5.4.0`
- **[ol-ext](https://github.com/Viglino/ol-ext#,)**: `^4.0.15`
- **[vue](https://github.com/vuejs/core/tree/main/packages/vue#readme)**: `^3.4.0`

<!-- auto-generated-peer-dependency-requirements END -->

## Run End-to-End Tests with [Playwright](https://playwright.dev)

```bash
# Install browsers for the first run
npx playwright install

# Runs the end-to-end tests
npm run test:e2e

# Runs the end-to-end tests in interactive UI mode (for local development)
npm run test:e2e:ui

# Runs the tests in debug mode
npm run test:e2e:debug

# Runs the tests in trace mode (to time-travel between actions)
npm run test:e2e:trace

# Serve test report (and inspect trace when)
npm run test:e2e:report

# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts

# Run tests and record new screenshots locally using the same image as in CI env
docker compose run screenshot-update
```

### Screenshots

Please note, when recording screenshots locally the may differ from the platform (linux) in CI.
This results in:
- a: a different file name
- b: a slightly different screenshot

So tackle this issue, please always record screenshots locally using the docker compose file which will use the same image/platform as in CI.

```bash
docker compose run screenshot-update
```

## License

**MIT** (c) Melih Altıntaş
