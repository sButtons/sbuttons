# Contributing

If you have a new button style you would like to add or any fixes you want to contribute, be sure to follow this guideline.

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Important Notes

1. Issues that have the label `first-timers-only` is made for beginners who have contributed to less than 5 repositories. This is a way to help people who are new to open source and contributing.
2. Before contributing to an issue, make sure that no one is assigned or has taken that issue. If no one is and you would like to work on the issue, please comment on the issue to let others know that someone is working on the issue.
3. Before creating a pull request, it is **important** that you make sure your branch and repository is up to date with this one. Some conflicts can be resolved, but many are hard to resolve. **Add the upstream** branch and always keep your branch up to date.

# Instructions

1. Fork the repository.

2. To make changes to the existing buttons, or add new ones, all changes should be made in `src/sbuttons.less`.
   1. If you're adding a new button type similar to basic, hover, etc..., create a file in `src/components` with the name preceeded by `_`. For example: `_basic.less`. Remember to include the file when you're done in `src/sbuttons.less`.
   2. If you're adding a new button to an existing type (for example: animated), create a file in `src/components/<type_name>` with the name preceeded by `_`. For example: `_arrow.less`. Remember to include the file when you're done in `src/components/<type_name>`.
   
   **Please follow the convention in naming button classes: `new-class-btn` where new-class is the button name. For example, for hover button it's `hover-btn`.**

    After making any changes, you need to compile the LESS file into CSS. To do that there you can use the following:

    1. Start command:
        ```
        npm start
        ```
        This will run sbuttons on a lite server as well as update the CSS in `dist/sbuttons.css` as you make changes.
    2. Compile command:
        ```
        npm run compile
        ```
    Make sure to run `npm install` before any of these commands.
3. To make changes to the website:
   1. To add new examples, make changes in `assets/js/buttons-examples.js`.
      1. To add new button colors, add them to the variable `buttonColors`
      2. To add new button types, add them to the variable `buttons`. It should follow the following format:
         ```
         {
            type,       //type of button. Will be used for the id of the section

            label,      //the title of the button section, which will also be shown in the sidebar menu

            classes,    //the default classes of this section. For example, for basic buttons it's "basic-btn"

            children,   //optional. If the type has subtypes, add them here in an array. The subtypes should
                        //also follow this same type format

            text,       //the text to show on the button. If this is omitted, the default text will be Button

            variations  //this is for button types that don't use buttonColors or don't have normat and rounded
                        // button styling. Look at social buttons for example on how to use this
         }
         ```
    3. To edit the HTML, make changes in `index.html`
    4. To edit the CSS of the website, make changes in `assets/css/`
    5. To edit the JS of the website, make changes in `assets/js`

## Button Ideas

You can find on [Button Ideas](./BUTTON_IDEAS.md) a list of ideas in a table for buttons that can be implemented. Make sure to pick an idea that isn't checked off.
Once you implement your idea, make sure to check it off in that page by using this unicode character `&#9745;` and place this symbol `~~` before and after the button name in the `status` column on the table, and make sure to add a link to your github profile 😎.

Here's an example of how you can add the link to your profile when you've implemented the button idea of your choice.

`[you can add any name here](https://thelinktoyourprofile)`

> PS:- we used the unicode character to represent ideas that have and haven't been checked 'cause the normal markdown syntax doesn't work in tables... This one `- []` && `- [x]`

Here's an example of how the syntax looks in markdown format...
```markdown
|status  | Button name    | Description      | Submitted by |
|--------|----------------|------------------|--------------|
| &#9745;| ~~**Skew Button**~~| A button that skews on hover. |[who did this](https://exampleuser.com) | 

```
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
git remote add upstream https://github.com/shahednasser/sbuttons.git

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
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
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
