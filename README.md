![sButtons](./assets/img/sbuttons-nav.png)

Logo made by [Harshit Sharma](https://www.github.com/icoderharshit)

<!-- # sButtons -->

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](./LICENSE.md)
 [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](./CONTRIBUTING.md) [![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](./CONTRIBUTING.md) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-218-orange.svg?style=flat-square)](./CONTRIBUTORS.md)
<!-- ALL-CONTRIBUTORS-BADGE:END --> 

:bulb: Simple buttons you can use easily for your next project.

# Contents

- [Installation](#installation)
  - [Download CSS File](#download-css-file)
  - [CDN](#cdn)
  - [NPM](#npm)
    - [CSS](#css)
    - [Less](#less)
    - [Modifying Button Colors](#modifying-button-colors)
- [Usage](#usage)
  - [Block Buttons](#block-buttons)
  - [Disabled Buttons](#disabled-buttons)
  - [Icon Buttons](#icon-buttons)
  - [Base Icon Buttons](#base-icon-buttons)
    - [Icon With No Background](#icon-with-no-background)
    - [Icon Positioned to The Left](#icon-positioned-to-the-left)
    - [Icon Positioned to The Right](#icon-positioned-to-the-right)
  - [Toggle Button](#toggle-button)
    - [Toggle Button as Checkboxes](#toggle-button-as-checkboxes)
    - [Toggle Button as Radio Button](#toggle-button-as-radio-button)  
  - [Dark-Mode Button](#dark-mode-button)
    - [Adding dark-mode as a class](#Adding-dark-mode-as-a-class)
    - [Adding dark-mode as an attribute](#Adding-dark-mode-as-an-attribute)
- [Contribution](#contribution)
  - [Button ideas](#button-ideas)
  - [Projects Using sButtons](#projects-using-sbuttons)
- [Contributors](#contributors)
- [LICENSE](#license)

# Installation

## Download CSS File

You can download the CSS file [here](https://cdn.jsdelivr.net/gh/sButtons/sbuttons/dist/sbuttons.min.css) and then add it to your html file inbetween the `<head>` tags:

```html
<link rel="stylesheet" href="/path/to/sbuttons.min.css">
```

## CDN

You can use the [CDN](https://cdn.jsdelivr.net/npm/sbuttons/dist/sbuttons.min.css):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sbuttons/dist/sbuttons.min.css">
```

## NPM

You can install sButtons using [NPM](https://www.npmjs.com/package/sbuttons):

```bash
npm i sbuttons
```
### CSS

You can import the CSS file found in `dist/sbuttons.css` or `dist/sbuttons.min.css`:

```CSS
@import url('~sbuttons/dist/sbuttons.min.css');
```
### LESS

you can also import the LESS file found in `src/sbuttons.less`:

```less
@import '~sbuttons/src/sbuttons.less';
```

### Modifying Button Colors

To modify button colors, import `src/sbuttons.less` in your Less file, then make changes to the variables after the import.

For example, to change the blue color to a different shade

```css
@import '/path/to/sbuttons.less';

@blue: #54a2bd; /* Make it darker */
```

Check out [_variables.less](https://github.com/sButtons/sbuttons/blob/master/src/_variables.less) for the full list of variables.

# Usage

To use sButtons in your project , just add the classes of sButton you want to either `<button>` or `<a>` tags :

```html
<button class='sbtn basic-btn blue-btn'>Button</button>
```

Same can be done for `<a>` tag

```html
<a href='#' class='sbtn basic-btn blue-btn'>Button</a>
```

You can find all classes and their corresponding sButtons mentioned in our [website](https://sbuttons.github.io/sbuttons/).

## Block Buttons

To use sButtons with block display, add the class to either `<button>` or `<a>` tags

```html
<button class="sbtn basic-btn block-btn">Button</button>
```

## Disabled Buttons

To make a `<button>` or `<a>` tag disabled, add disabled-btn class as shown below.

```html
<button class="sbtn basic-btn blue-btn disabled-btn">Button</button>
```

```html
<a class="sbtn basic-btn blue-btn disabled-btn">Button</a>
```

## Icon Buttons

In case of using buttons that have icons in them, make sure to include font awesome's [CDN](https://use.fontawesome.com/releases/v5.14.0/css/all.css) in the `<head>` tag:

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
```

## Base Icon Buttons

The `base-icon-btn` class enables you to have a normal, customizable button. Using it, you decide to add any fontawesome icon in it. You can choose to either place it on the left or right side of the button with the available classes.

### Icon With No Background

The `base-icon-btn` class gives you a default button with no background color and a border.

```html
<button class="sbtn base-icon-btn">base icon button</button>
```

### Icon Positioned to The Left

Adding the `left-icon` class to a button makes the icon positioned to the left. For example:

```html
<button class="sbtn base-icon-btn icon-left orange-btn"><i class="fab fa-github"></i>left icon</button>
```

### Icon Positioned to The Right

Adding the `right-icon` class to a button makes the icon positioned to the right. For example:

```html
<button class="sbtn base-icon-btn icon-right orange-btn"><i class="fab fa-github"></i>right icon</button>
```

## Toggle Button

The `toggle-btn` class along with the `toggle-off-btn` / `toggle-on-btn` state class enables you to have a toggle button. Apart from the basic use, it can also be used for checkboxes and radio buttons. While not necessary, you can use the available state classes to choose whether your checkboxes and radio buttons are checked or not.

### Toggle Button as Checkboxes

Adding the `toggle-btn` class to your checkbox inputs converts them to toggle buttons. For example:

```html
<input type="checkbox" class="sbtn toggle-btn"/>
```

### Toggle Button as Radio Button

Adding the `toggle-btn` class to your radio inputs converts them to toggle buttons. For example:

```html
<input type="radio" class="sbtn toggle-btn"/>
```

## Dark-Mode Button

The `dark-mode` class enables you to have a dark mode for a button by adding `dark-mode` class to the button or by adding `data-theme="dark"` to a container element like the body element. 

### Adding dark-mode as a class

Adding the `dark-mode` class will make the button work in dark mode.For example:

```html
<button class="sbtn dashed-btn white-btn dark-mode">Dark Mode</button>
```


### Adding dark-mode as an attribute

Adding the `data-theme="dark"` as an attribute to a body element .It can be added to any container element of the button.For example:

```html
<body data-theme="dark"><button class="sbtn dashed-btn orange-btn">Dark-Mode</button></body>
```

# Contribution

Please see the [contributing guidelines](./CONTRIBUTING.md) for details.

You can also join or start [discussions](https://github.com/sButtons/sbuttons/discussions) with the community members if you have any ideas or questions!

### Button ideas

If you would like to suggest a new button idea, please create a [new discussion](https://github.com/sButtons/sbuttons/discussions/new) with the category "idea".

### Projects Using sButtons

If your project uses sButtons, please submit it [here](https://github.com/sButtons/sbuttons/issues/1255) to be added to the list of the websites using it!

# Contributors

Check out our awesome contributors [here](./CONTRIBUTORS.md)!

<!-- # Logo

 Logo made by [Harshit Sharma](https://www.github.com/icoderharshit) -->

# LICENSE

[MIT](./LICENSE)
