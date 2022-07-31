![sButtons](./website/public/images/logo-colored.png)

Logo made by [Harshit Sharma](https://www.github.com/icoderharshit)

<!-- # sButtons -->

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](./LICENSE)
[![CodeQL](https://github.com/sButtons/sbuttons/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/sButtons/sbuttons/actions/workflows/codeql-analysis.yml) [![npm version](https://badge.fury.io/js/sbuttons.svg)](https://badge.fury.io/js/sbuttons) [![](https://data.jsdelivr.com/v1/package/npm/sbuttons/badge)](https://www.jsdelivr.com/package/npm/sbuttons)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](./CONTRIBUTING.md) [![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](./CONTRIBUTING.md) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-259-orange.svg?style=flat-square)](./CONTRIBUTORS.md)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

:bulb: Simple buttons you can use easily for your next project.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/shahednasser)

# Contents

- [Get started with sButtons](#get-started-with-sbuttons)
  - [Download CSS File](#download-css-file)
  - [CDN](#cdn)
  - [NPM](#npm)
    - [Using in CSS](#using-in-css)
    - [Using in LESS](#using-in-less)
    - [Modify Colors](#modifying-button-colors)
- [Usage](#usage)
  - [Basic Button](#basic-button)
  - [Block Buttons](#block-buttons)
  - [Disabled Buttons](#disabled-buttons)
  - [Only Icon](#only-icon)
    - [Icon Positioned to The Left](#icon-positioned-to-the-left)
    - [Icon Positioned to The Right](#icon-positioned-to-the-right)
  - [Toggle Button](#toggle-button)
    - [Toggle Button as Checkboxes](#toggle-button-as-checkboxes)
    - [Toggle Button as Radio Button](#toggle-button-as-radio-button)
  - [Rounded Buttons](#rounded-buttons)
  - [Animated Buttons](#animated-buttons)  
  - [Dark Mode](#dark-mode)
    - [Using dark-mode Class](#using-dark-mode-class)
    - [Using data-theme attribute](#using-data-theme-attribute)
- [Contribution](#contribution)
  - [Button ideas](#button-ideas)
  - [Projects Using sButtons](#projects-using-sbuttons)
- [Contributors](#contributors)
- [LICENSE](#license)

# Get Started with sButtons

## Download CSS File

You can download the (CSS file)(https://raw.githubusercontent.com/sButtons/sbuttons/master/dist/sbuttons.min.css) and then add it to your HTML file in between the tags.
Download the file and link it as a stylesheet in between your `<head>` tags, as shown below.

```html
<link rel="stylesheet" href="/path/to/sbuttons.min.css" />
```

Make sure to replace `"/path/to/sbuttons.min.css"` with the path you stored it in.

## CDN

Or instead of downloading the file, you can use the CDN.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/sbuttons/dist/sbuttons.min.css"
/>
```

In case of using buttons that have icons in them, make sure to include font awesome's CDN in the `<head>` tag.

```html
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
  integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
  crossorigin="anonymous"
/>
```

## NPM

You can install sButtons using NPM:

```shell
npm i sbuttons
```

## Using in CSS

You can import the CSS file found in `dist/sbuttons.css` or `dist/sbuttons.min.css`:

```css
@import url("~sbuttons/dist/sbuttons.min.css");
```

## Using in LESS

You can also import the less file found in `src/sbuttons.less`:

```css
@import "~sbuttons/src/sbuttons.less";
```

## Modify Colors

To modify button colors, `import src/_variables.less` in your less file, then make changes to the variables after the import.
For example, to change the blue color to a different shade:

```css
@import "/path/to/_variables.less";
@blue: #54a2bd; /* Make it darker */
```

Check out [_variables.less](https://github.com/sButtons/sbuttons/blob/master/src/_variables.less) for the full list of variables.

# Usage

## Basic Button

To use sButtons in your project, just add the classes of sButton you want to either `<button>` or `<a>` tags.

<table>
<tr>
<td> Preview </td><td> Source </td> 
</tr>
<tr>
<td>
  
  <img src="./screen_shots/sbtn basic-btn blue-btn.gif" width="250" height="80"/>
  
</td>
<td> 

```html
<button class="sbtn basic-btn blue-btn">Button</button>
```

</td>
</tr>
</table>

You can find all classes mentioned in our [Examples](https://sbuttons.netlify.app/examples) page.

## Block Buttons

To use sButtons with block display, add the class to either `<button>` or `<a>`.

<table>
<tr>
<td> Preview </td><td> Source </td>
</tr>
<tr>
<td>
  
  <img src="./screen_shots/sbtn basic-btn blue-btn block-btn.gif" width="250" height="80"/>
  
</td>
<td>

```html
<button class="sbtn basic-btn blue-btn block-btn">Button</button>
```

</td>
</tr>
</table>



## Disabled Buttons

To make a `<button>` or `<a>` tag disabled, add `disabled-btn` class as shown below.

<table>
<tr>
<td> Preview </td><td> Source </td> 
</tr>
<tr>
<td>
  
  <img src="./screen_shots/sbtn basic-btn blue-btn disabled-btn.gif" width="250" height="80"/>
  
</td>
<td> 

```html
<button class="sbtn basic-btn blue-btn disabled-btn">Button</button>
```

</td>
</tr>
</table>



## Icon Buttons

The `base-icon-btn` class enables you to have a normal, customizable icon button. Using it, you decide to add any fontawesome icon in it. You can choose to either place it on the left or right side of the button with the available classes.

## Only Icon

The `icon-btn` class alone gives you a default button with no background color and border.

<table>
<tr>
<td> Preview </td><td> Source </td> 
</tr>
<tr>
<td>
  
  <img src="./screen_shots/sbtn icon-btn.gif" width="250" height="80"/>
  
</td>
<td> 

```html
<button class="sbtn icon-btn"><i class="fas fa-book"></i></button>
```
</td>
</tr>
</table>



## Icon Positioned to The Left

Adding the icon-left class to a button makes the icon positioned to the left.

<table>
<tr>
<td> Preview </td><td> Source </td> 
</tr>
<tr>
<td>
  
  <img src="./screen_shots/sbtn base-icon-btn icon-left orange-btn.gif" width="250" height="80"/>
  
</td>
<td> 

```html
<button class="sbtn base-icon-btn icon-left orange-btn">
  <i class="fas fa-book"></i>Read
</button>
```

</td>
</tr>
</table>



## Icon Positioned to The Right

Adding the `icon-right` class to a button makes the icon
positioned to the right.

<table>
<tr>
<td> Preview </td><td> Source </td> 
</tr>
<tr>
<td>
  
  <img src="./screen_shots/sbtn base-icon-btn icon-right orange-btn.gif" width="250" height="80"/>
  
</td>
<td> 

```html
<button class="sbtn base-icon-btn icon-right orange-btn">
  Read<i class="fas fa-book"></i>
</button>
```
</td>
</tr>
</table>


## Toggle Button

The `toggle-btn` class, along with the `toggle-off-btn` / `toggle-on-btn` state class enables you to have a toggle button. Apart from the basic use, it can also be used for checkboxes and radio buttons. While not necessary, you can use the available state classes to choose whether your checkboxes and radio buttons are checked or not.

## Toggle Button as Checkboxes

Adding the `toggle-btn` class to your checkbox inputs converts them to toggle buttons.
For example:

<table>
<tr>
<td> Preview </td><td> Source </td> 
</tr>
<tr>
<td>
  
  <img src="./screen_shots/sbtn toggle-btn checkbox.gif" width="250" height="80"/>
  
</td>
<td> 

```html
<input type="checkbox" class="sbtn toggle-btn" />
```

</td>
</tr>
</table>

## Toggle Button as Radio Buttons

Adding the `toggle-btn` class to your radio inputs converts them to toggle buttons.

<table>
<tr>
<td> Preview </td><td> Source </td> 
</tr>
<tr>
<td>
  
  <img src="./screen_shots/sbtn toggle-btn radio.gif" width="250" height="80"/>
  
</td>
<td> 

```html
<input type="radio" class="sbtn toggle-btn" />
```

</td>
</tr>
</table>

## Rounded buttons 
To add the rounded buttons with a particular radius, you can use various classes like `rounded-x-btn` where x is the radius in pixels which you want. Here x ranges from `5`(border-radius = 5px) to `fully rounded`(border-radius = 50%).

<table>
<tr>
<td> Preview </td><td> Source </td> 
</tr>
<tr>
<td>
  
  <img src="./screen_shots/rounded-5-btn sbtn blue-btn.gif" width="250" height="80"/>
  
</td>
<td> 

```html
<button class="rounded-5-btn sbtn blue-btn">Rounded button </button>
```

</td>
</tr>
</table>

## Animated Buttons

To use Animated sButtons in your project, add the classes of the animated sButton you want to either `<button>` or `<a>` tags.

<table>
<tr>
<td> Preview </td><td> Source </td> 
</tr>
<tr>
<td>
  
  <img src="./screen_shots/animated sbtn atom-btn blue-btn.gif" width="250" height="80"/>
  
</td>
<td> 

```html
<button class="animated sbtn atom-btn blue-btn">Animated Button</button>
```

</td>
</tr>
</table>


Note: Depending on your button, the animation should either run infinitely or just once. 

## Dark Mode

sButtons is compatible with dark mode. It either works by adding dark-mode class to buttons, or by adding data-theme="dark" to a container element.

## Using dark-mode Class

<table>
<tr>
<td> Preview </td><td> Source </td> 
</tr>
<tr>
<td>
  
  <img src="./screen_shots/sbtn dashed-btn black-btn dark-mode.gif" width="250" height="80"/>
  
</td>
<td> 

```html
<button class="sbtn dashed-btn black-btn dark-mode">Dark-Mode</button>
               
```

</td>
</tr>
</table>

## Using data-theme attribute

By adding `data-theme="dark"` to a parent element like the body or a div element, the button will automatically be in dark mode.

```html
<div data-theme="dark">
  <button class="sbtn dashed-btn black-btn">Dark-Mode</button>
</div>
```

Note: `data-theme="dark"` attribute does not give dark mode styling to the container element, you have to do that yourself. It only toggles sButtons to be in dark mode.

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
