# Contributing

If you have a new button style you would like to add or any fixes you want to contribute, be sure to follow this guideline.

Please note we have a code of conduct, please follow it in all your interactions with the project.

# Instructions

1. Fork the repository.

2. To make changes to the existing buttons, or add new ones, all changes should be made in `src/sbuttons.less`.
   1. If you're adding a new button type similar to basic, hover, etc..., create a file in `src/components` with the name preceeded by `_`. For example: `_basic.less`. Remember to include the file when you're done in `src/sbuttons.less`.
   2. If you're adding a new button to an existing type (for example: animated), create a file in `src/components/<type_name>` with the name preceeded by `_`. For example: `_arrow.less`. Remember to include the file when you're done in `src/components/<type_name>`.

    After making any changes, you need to compile the LESS file into CSS. To do that there you can use the following:

    1. Watch command:
        ```
        npm run watch
        ```
        This will update the CSS in `dist/sbuttons.css` and `dist/sbuttons.min.css` as you make changes. Make sure that if you use watch, you use `npm run prettier` before committing the code.
    2. Compile command:
        ```
        npm run compile
        ```
3. To add more examples to the website:
    1. To edit the HTML, make changes in `index.html`
    2. To edit the CSS of the website, make changes in `assets/css/`
    3. To edit the JS of the website, make changes in `assets/js`

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
4. Go to your forked repository and press the “New pull request” button.
5. Once the pull request is reviewed and approved, it will be merged.

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
