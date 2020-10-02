![sButtons](./assets/img/sbuttons-nav.png)

 Logo made by [Harshit Sharma](https://www.github.com/icoderharshit)
<!-- # sButtons -->
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](./LICENSE.md)
 [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](./CONTRIBUTING.md) [![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](./CONTRIBUTING.md) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-93-orange.svg?style=flat-square)](./CONTRIBUTORS.md)
<!-- ALL-CONTRIBUTORS-BADGE:END --> 
  
:bulb: Simple buttons you can use easily for your next project.

# Particpate in Hacktoberfest!

This repository will help people who don't know how to participate in [Hacktoberfest](https://hacktoberfest.digitalocean.com/) or where to start contributing. We will be adding a Hacktoberfest label to help contributors find the issues they can contribute to. If you have any ideas for new issues or ways to help contributors participate in Hacktoberfest, please add them [here](https://github.com/shahednasser/sbuttons/issues/161).

**DO NOT submit any pull request that does no fix based on an issue or an actual bug/fix, as it will be labeled invalid and will not count for your Hacktoberfest participation**

# Installation

## Download CSS File

You can download the CSS file [here](https://cdn.statically.io/gh/shahednasser/sbuttons/c135f5f7/dist/sbuttons.min.css) and then add it to your html file inbetween the `<head>` tags:

```
<link rel="stylesheet" href="/path/to/sbuttons.min.css">
```

## CDN

You can use the [CDN](https://cdn.statically.io/gh/shahednasser/sbuttons/c135f5f7/dist/sbuttons.min.css):

```
<link rel="stylesheet" href="https://cdn.statically.io/gh/shahednasser/sbuttons/c135f5f7/dist/sbuttons.min.css">
```

## NPM

You can install sButtons using NPM:

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
Check out [sbuttons.less](https://github.com/shahednasser/sbuttons/blob/master/src/sbuttons.less) for the full list of variables.

# Usage

To use sButtons in your project , just add the classes of sButton you want to either  `<button>` or `<a>` tags :

```
<button class='sbtn basic-btn blue-btn'>Button</button>
```

Same can be done for `<a>` tag

```
<a href='#' class='sbtn basic-btn blue-btn'>Button</a>
```

You can find all classes and their corresponding sButtons mentioned in our [website](https://shahednasser.github.io/sbuttons/). 

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

# Contribution

Please see the [contributing guidelines](./CONTRIBUTING.md) for details.

### Button ideas

If you have ideas for buttons, please submit a new issue for it. If you would also like to work on this idea as well, please indicate so in the issue to be assigned to it.

If you would like to check new button ideas, please look at issues with the label [button-idea](https://github.com/shahednasser/sbuttons/labels/button-idea)

# Contributors

Check out our awesome contributors [here](./CONTRIBUTORS.md)!

<!-- # Logo

 Logo made by [Harshit Sharma](https://www.github.com/icoderharshit) -->
 
# LICENSE

[MIT](./LICENSE)
