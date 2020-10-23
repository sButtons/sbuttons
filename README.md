![sButtons](./assets/img/sbuttons-nav.png)

Logo made by [Harshit Sharma](https://www.github.com/icoderharshit)

<!-- # sButtons -->

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](./LICENSE.md)
 [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](./CONTRIBUTING.md) [![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](./CONTRIBUTING.md) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-151-orange.svg?style=flat-square)](./CONTRIBUTORS.md)
<!-- ALL-CONTRIBUTORS-BADGE:END --> 

:bulb: Simple buttons you can use easily for your next project.

# Participate in Hacktoberfest!

This repository will help people who don't know how to participate in [Hacktoberfest](https://hacktoberfest.digitalocean.com/) or where to start contributing. We will be adding a Hacktoberfest label to help contributors find the issues they can contribute to. If you have any ideas for new issues or ways to help contributors participate in Hacktoberfest, please add them [here](https://github.com/sbuttons/sbuttons/issues/161).

**DO NOT submit any pull request that does no fix based on an issue or an actual bug/fix, as it will be labeled invalid and will not count for your Hacktoberfest participation.**  

**New rules have been added to Hacktoberfest participation regarding which PRs and which repositories will count to your participation. Since our repository has the topic "hacktoberfest" then we have opted in for participation in Hacktoberfest. any PR that gets merged or approved by a Member will count to your participation. No labels need to be added.**

# Contents

- [Installation](#installation)
  - [Download CSS File](#download-css-file)
  - [CDN](#cdn)
  - [NPM](#npm)
  - [Modifying Button Colors](#modifying-button-colors)
- [Usage](#usage)
  - [Block Buttons](#block-buttons)
  - [Disabled Buttons](#disabled-buttons)
  - [Icon Buttons](#icon-buttons)
  - [Base Icon Buttons](#base-icon-buttons)
- [Contribution](#contribution)
  - [Button ideas](#button-ideas)
- [Contributors](#contributors)
- [LICENSE](#license)

# Installation

## Download CSS File

You can download the CSS file [here](https://cdn.jsdelivr.net/gh/sButtons/sbuttons/dist/sbuttons.min.css) and then add it to your html file inbetween the `<head>` tags:

```
<link rel="stylesheet" href="/path/to/sbuttons.min.css">
```

## CDN

You can use the [CDN](https://cdn.jsdelivr.net/gh/sButtons/sbuttons/dist/sbuttons.min.css):

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sButtons/sbuttons/dist/sbuttons.min.css">
```

## NPM

You can install sButtons using [NPM](https://www.npmjs.com/package/sbuttons):

```
npm i sbuttons
```

And then you can import the CSS file found in `dist/sbuttons.css` or the LESS file found in `src/sbuttons.less`.

### Modifying Button Colors

To modify button colors, import `src/sbuttons.less` in your Less file, then make changes to the variables after the import.

For example, to change the blue color to a different shade

```
@import '/path/to/sbuttons.less';

@blue: #54a2bd; /* Make it darker */
```

Check out [_variables.less](https://github.com/sButtons/sbuttons/blob/master/src/_variables.less) for the full list of variables.

# Usage

To use sButtons in your project , just add the classes of sButton you want to either `<button>` or `<a>` tags :

```
<button class='sbtn basic-btn blue-btn'>Button</button>
```

Same can be done for `<a>` tag

```
<a href='#' class='sbtn basic-btn blue-btn'>Button</a>
```

You can find all classes and their corresponding sButtons mentioned in our [website](https://sbuttons.github.io/sbuttons/).

## Block Buttons

To use sButtons with block display, add the class to either `<button>` or `<a>` tags

```
<button class="sbtn basic-btn block-btn">Button</button>
```

## Disabled Buttons

To make a `<button>` or `<a>` tag disabled, add disabled-btn class as shown below.

```
<button class="sbtn basic-btn blue-btn disabled-btn">Button</button>
```

```
<a class="sbtn basic-btn blue-btn disabled-btn">Button</a>
```

## Icon Buttons

In case of using buttons that have icons in them, make sure to include font awesome's [CDN](https://use.fontawesome.com/releases/v5.14.0/css/all.css) in the `<head>` tag:

```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
```

## Base Icon Buttons

The `base-icon-btn` class enables you to have a normal, customizable button. Using it, you decide to add any fontawesome icon in it. You can choose to either place it on the left or right side of the button with the available classes which you will see below. For the icon to be positioned well in the button, you should place the button text after the fontawesome icon if you want the icon to be on the left side of the button and vice versa for the right icon too.

**Content**

- [Base icon buttons](#base-icon-button)
  - [Left icon button](#left-icon-base-button)
  - [Right icon button](#right-icon-base-button)
- [Rounded buttons](#rounded-buttons)
  - [Left icon rounded button](#left-icon-rounded-button)
  - [Centered icon rounded button](#icon-center-rounded-button)
  - [Right icon rounded button](#right-icon-rounded-button)
- [Block buttons](#block-icon-buttons)
  - [Left icon block button](#left-icon-block-button)
  - [Centered icon block button](#icon-center-block-button)
  - [Right icon block button](#right-icon-block-button)

### Base icon button 
 The `base-icon-btn` class gives you a default button with no background color and a border. You can choose to style it by adding some of the other available classes, like `btn-orange` to change the background color, and `icon-right` to position the icon in the button. You can make use of it, by copying the snippet below.

```html
<button class="sbtn base-icon-btn">base icon button</button>
```

#### Left icon base button
 Adding the `left-icon` and `orange-btn` class gives you a button with an orange background and an icon that is on the left. Copy the snippet below to try it out.

```html
<button class="sbtn base-icon-btn icon-left orange-btn"><i class="fab fa-github"></i>left icon</button>
```

#### Right icon base button
 Adding the `right-icon` and `orange-btn` class gives you a button with an orange background and an icon that is on the right. Copy the snippet below to try it out.

```html
<button class="sbtn base-icon-btn icon-right orange-btn"><i class="fab fa-github"></i>right icon</button>
```

### Rounded Buttons

To make your button have rounded side, all you need to do is add this `rounded-btn` class to the button element. Check below to see examples of how to use it.

#### Left icon rounded button

 Adding the `left-icon` and `purple-btn` class gives you a button with a purple background and an icon that is on the left. Copy the snippet below to try it out.

```html
<button class="sbtn base-icon-btn icon-left purple-btn rounded-btn"><i class="fab fa-github"></i>left icon</button>
```

#### Icon center rounded button 

The default style of the "base icon button" places any fontawesome icon nested inside the button at the center, so no need of adding any additional classes like `right-icon` or `icon-left` Copy the snippet below to try it out.

```html
<button class="sbtn base-icon-btn purple-btn rounded-btn"><i class="fab fa-github"></i></button>
```

#### Right icon rounded button 
Adding the `right-icon`, `rounded-btn` and `purple-btn` class gives you a round sided button with a purple background and an icon that is on the right. Copy the snippet below to try it out.

```html
<button class="sbtn base-icon-btn icon-right rounded-btn purple-btn"><i class="fab fa-github"></i>right icon</button>
```

### Block Icon Buttons

The `block-btn` class gives you a button whose width takes up the width of the parent element/container. Check below to see examples of how to use it.

#### Left icon block button

 Adding the `left-icon`, `block-btn` and `green-btn` class gives you a button with a green background and an icon that is on the left. Copy the snippet below to try it out.

```html
<button class="sbtn base-icon-btn icon-left green-btn block-btn"><i class="fab fa-github"></i>left icon</button>
```

#### Icon center block button

The default style of the "base icon button" places any fontawesome icon nested inside the button at the center, so no need of adding any additional classes like right-icon or icon-left Copy the snippet below to try it out.

```html
<button class="sbtn base-icon-btn green-btn block-btn"><i class="fab fa-github"></i></button>
```

#### Right icon block button

Adding the `right-icon`, `block-btn` and `green-btn` class gives you a rectangular button with a purple background and an icon that is on the right. Copy the snippet below to try it out.

```html
<button class="sbtn base-icon-btn icon-right block-btn green-btn"><i class="fab fa-github"></i>right icon</button>
```

# Contribution

Please see the [contributing guidelines](./CONTRIBUTING.md) for details.

### Button ideas

If you would like to suggest a new button idea, please create a "New Button Idea" Issue.

# Contributors

Check out our awesome contributors [here](./CONTRIBUTORS.md)!

<!-- # Logo

 Logo made by [Harshit Sharma](https://www.github.com/icoderharshit) -->

# LICENSE

[MIT](./LICENSE)
