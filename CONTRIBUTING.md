# Contributing

If you have a new button style you would like to add or any fixes you want to contribute, be sure to follow this guideline.

You can also join or start [discussions](https://github.com/sButtons/sbuttons/discussions) with the community members if you have any ideas or questions!

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Important Notes

1. Issues that have the label `first-timers-only` is made for beginners who have contributed to less than 5 repositories. This is a way to help people who are new to open source and contributing.
2. Before contributing to an issue, make sure that no one is assigned or has taken that issue. If no one is and you would like to work on the issue, please comment on the issue to let others know that someone is working on the issue.
3. Before creating a pull request, it is **important** that you make sure your branch and repository are up to date with this one. Some conflicts can be resolved, but many are hard to resolve. **Add the upstream** branch and always keep your branch up to date.

# Contents

- [Instructions](#instructions)
  - [Notes on Creating New Buttons](#notes-on-creating-new-buttons)
  - [Button Ideas](#button-ideas)
  - [Create Pull Request](#create-pull-request)
    - [Note on abandoned pull requests](#note-on-abandoned-pull-requests)
  - [Code of Conduct](#code-of-conduct)
    - [Our Pledge](#our-pledge)
    - [Our Standards](#our-standards)
    - [Our Responsibilities](#our-responsibilities)
    - [Scope](#scope)
    - [Enforcement](#enforcement)

# Instructions

1. Fork the repository.

2. To make changes to the existing buttons, or add new ones, all changes should be made in `src/sbuttons.less`.

   1. If you're adding a new button type similar to basic, hover, etc..., create a file in `src/components` with the name preceded by `_`. For example: `_basic.less`. Remember to include the file when you're done in `src/sbuttons.less`.
   2. If you're adding a new button to an existing type (for example: animated), create a file in `src/components/<type_name>` with the name preceded by `_`. For example: `_arrow.less`. Remember to include the file when you're done in `src/components/<type_name>`.

   **Please follow the convention in naming button classes: `new-class-btn` where new-class is the button name. For example, for hover button it's `hover-btn`.**

   **There are Two ways to monitor and implement your changes as a developer.**
   </br>
   **i)Let the scripts do it all for you -**

   ```
   npm run build
   ```

   It does two tasks simultaneously.
   </br>

   a) watch changes in all .less file ,compile the changed files and reflect the necessary changes in dist/sbuttons.css.
   </br>
   b) watch changes in dist/sbuttons.css and minify it into dist/sbuttons.min.css
  </br>
   So you just need to run "npm run build" and rest would be handled by scripts
   </br>
   **ii)I understand what I am doing -**

   Here all the control is in your hands-

   After making any changes, you need to compile the LESS file into CSS. To do that there you can use the following:

   1. Start command:
      ```
      npm start
      ```
      This will watch the updates and changes you make for any of the `.less` files inside `src`, then compile them into `dist/sbuttons.css`.
   2. Compile command:
      ```
      npm run compile
      ```
   3. Minify command:

      ```
      npm run clean-css
      ```

      Make sure to run `npm install` before any of these commands.

      To see how the button looks like after making changes, you'll need to run the website (follow the next steps).

3. To make changes to the website:

   The website uses React and TailwindCSS. All website related files are under the `website` directory. The components and pages that are written under React are in `website/src`.

   You should not make any changes to files in `website/build` directly. Make all changes in files under `website/src`.

   To start the dev server:

   ```
   npm start
   ```

   1. To add new examples, make changes in `website/src/data`

      1. To add new button colors, add them to `button-colors.json` in `data`
      2. To add new button types, add them to `buttons.json` in `data`. It should follow the following format:

         ```
         {
            type,                  //type of button. Will be used for grouping buttons

            label,                 //the title of the button section, which will also be shown in the sidebar menu

            classes,               //the default classes of this section. For example, for basic buttons it's "basic-btn"

            text,                  //the text to show on the button. If this is omitted, the default text will be the name of the button

            shouldHaveRoundedType, //indicates if rounded button type should hidden or not, defaults to true

            shouldHaveBlockType,   //indicates if block button type should hidden or not, defaults to true

            usesColors,            //indicates if the button will be using the default sButton colors for the example, defaults to true

            usesText,              //indicates if the button should have a text inside of it. This is useful for icon buttons for example.
                                   //defaults to true

            variations,            //this is for button types that don't use buttonColors or don't have normal and rounded
                                   // button styling.

            children,              //If the type has subtypes, add them here in an array. The subtypes should
                                   //also follow this same type format
         }
         ```

         `children` can be of the same format above, except it can't have its own children at the moment.

         `variations` can have the following format:

         ```
         {
            label,                 //the title of the variation section in the button example
            classes,               //the classes the button should have in the variation, can be empty string
            text,                  //the text to show on the button. If this is omitted, the default text will be the name of the button
            html,                  //if the button needs HTML to be placed inside instead of text
         }
         ```

         It should be noted that if the parent type has `shouldHaveRoundedType`, `shouldHaveBlockType`, `usesColors` or `usesText`, it will affect the buttons in `children` and `variations`. Buttons in `children` can have those attributes as well.

   2. To submit new projects using sButtons, all projects should be added in `website/src/data/projects.json`. The project object should be of the following format:

   ```
   {
      name,       //name of the project
      about,      //short description of the project
      url,        //URL of the project
      image       //Image of the project. When adding a project, take a screenshot of it or add any
                  //image of it under website/public/images/projects and include the path relative to
                  //public here
   }
   ```

   3. **CSS**: The website uses TailwindCSS, so not a lot of changes is required in the CSS. However, any changes should be added in `website/src/index.css`

## Notes on Creating New Buttons

### Animated Buttons

When adding a new animated button, you need to place the animation or transition that happens on hover in a mixin. Then, you need to call that mixin in the hover state and in an `animated` class nested inside that button, so that when the `animated` class is added to the button the animation runs without needing to hover the button. Depending on your button, the animation should either be continuous (run infinitly) or just once.

### Dark Mode

All buttons need to support dark mode when needed. If your button on dark mode does not look so good (problem with the color, animation, etc...), you need to do the following:

1. add a `dark-mode` class to the button.
2. add support for having a parent with `[data-theme="dark"]`.

## Button Ideas

If you would like to suggest a new button idea, please create a [new discussion](https://github.com/sButtons/sbuttons/discussions/new) with the category "idea".

## Create Pull Request

1. Create a new branch:
   ```
   git branch new-branch
   ```
2. Checkout new branch:
   ```
   git checkout new-branch
   ```
3. Add, commit and push your changes to the new branch
   ```
   git add .
   git commit -m "changes"
   git push origin new-branch
   ```
4. To make sure your forked repository is up to date with this repository. Add this repository as the upstream repository by doing the following:

```
git remote add upstream https://github.com/sButtons/sbuttons.git

```

Then, to fetch from this repository:

```
git fetch upstream
git merge upstream/master master
```

5. Go to your forked repository and press the “New pull request” button.
6. Once the pull request is reviewed and approved, it will be merged.

### Note on abandoned pull requests

If a pull request is left unchanged for a week after changes are requested and the issue was assigned to the person that sent the new pull request, they will be unassigned and someone else will be given the chance to work on it.

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to make participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or
  advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic
  address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at [INSERT EMAIL ADDRESS]. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.
