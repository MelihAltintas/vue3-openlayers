# ol-printdialog-control

> A print dialog to print the current map canvas content.

[[toc]]

## Demo

<script setup>
import PrintdialogControlDemo from "@demos/PrintdialogControlDemo.vue"
</script>
<ClientOnly>
<PrintdialogControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage               |           Explicit Import            |
|----------------------------|:------------------------------------:|
| `<ol-printdialog-control>` | `<MapControls.OlPrintdialogControl>` |

::: code-group

<<< ../../../../src/demos/PrintdialogControlDemo.vue

:::

## Properties

The properties are reflected 1:1 from [ol-ext/control/PrintDialog](https://viglino.github.io/ol-ext/doc/doc-pages/ol.control.PrintDialog.html).

### lang

control language, default en

- **Type**: `String`
- **Default**: `en`

### title

button title

- **Type**: `String`

### className

class of the control

- **Type**: `String`

### imageType

string indicating the image format, default image/jpeg

- **Type**: `String`
- **Default**: `image/jpeg`

### quality

number between 0 and 1 indicating the image quality to use for image formats that use lossy compression such as image/jpeg and image/webp.

- **Type**: `Number`

### orientation

Page orientation (`'landscape'` / `'portrait'`), default guest the best one

- **Type**: `String`

### immediate

force print even if render is not complete, default false

- **Type**: `Boolean`
- **Default**: `false`

### openWindow

open the file in a new window on print

- **Type**: `Boolean`
- **Default**: `false`

### copy

add a copy select option

- **Type**: `Boolean`
- **Default**: `true`

### print

add a print select option

- **Type**: `Boolean`
- **Default**: `true`

### pdf

add a pdf select option

- **Type**: `Boolean`
- **Default**: `true`

### saveAs

a function to save the image as blob

- **Type**: `Function`

### jsPDF

[jsPDF](https://www.npmjs.com/package/jspdf) object to save map as pdf

- **Type**: `Object`
