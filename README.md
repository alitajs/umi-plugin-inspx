# inspx with umi

## inspx

![npm](https://img.shields.io/npm/v/umi-plugin-inspx?style=flat&colorA=000000&colorB=000000)

Pixel perfect layout inspection. [inspx](https://github.com/raunofreiberg/inspx) with umi.

## Setup

Install the package:

```sh
npm install umi-plugin-inspx
```

## Usage

Inspect elements by hovering an element and holding <kbd>Option (⌥)</kbd> simultaneously.

![demo](/public/demo.gif)

By default, any element with padding, margin, or width and height is inspectable.

## Configuration

By default, the component will only be enabled in the development environment.

You can configure this behavior with the `disabled` prop:

```tsx
export default {
  inspx: {
    disabled: false,
    margin: true,
    size: true,
    padding: true,
  },
};
```
