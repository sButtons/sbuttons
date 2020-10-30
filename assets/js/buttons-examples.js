$(document).ready(function () {
  var sidebar = $(".sidebar-list");
  var content = $("#content");
  if (!sidebar.length || !content.length) {
    return;
  }

  //default button class
  var defaultClass = "sbtn";
  //button color variations
  var buttonColors = [
    "blue-btn",
    "pink-btn",
    "red-btn",
    "green-btn",
    "yellow-btn",
    "orange-btn",
    "purple-btn",
    "black-btn",
    "white-btn",
  ];
  /**buttons is a list of button type objects tht will be rendered on the page load
   * with their respective class names, labels, children and types.
   *
   * properties with [] are optional
   * @property {string} type  - denotes the type of button and used as the id of the section of that type
   * @property {string} label - denotes the title of the button section, which will also be shown in the sidebar menu
   * @property {string} [classes] - denotes the class that will be assigned to the button on render
   * @property {list} [children] - contains the list of sub-types of a certain type
   * @property {string} [text] - denotes the text to be shown on the button, defaults to default text
   * @property {list} [variations] - contains the button types that don't use buttonColors or don't have normal and rounded button styling
   * @property {boolean} [shouldHaveRoundedType] - indicates if rounded button type should hidden or not, defaults to true
   * @property {boolean} [shouldHaveBlockType] - indicates if block button type should hidden or not, defaults to true
   */
  var buttons = [
    {
      type: "basic",
      label: "Basic Buttons",
      classes: "basic-btn",
      children: [],
      shouldHaveRoundedType: true,
    },
    {
      type: "styles",
      label: "Button Styles",
      classes: "",
      children: [
        {
          type: "click",
          label: "Click",
          classes: "click-btn",
        },
        {
          type: "dashed",
          label: "Dashed",
          classes: "dashed-btn",
        },
        {
          type: "disable",
          label: "Disabled",
          classes: "disabled-btn",
        },
        {
          type: "gradient",
          label: "Gradient",
          classes: "gradient-btn",
        },

        {
          type: "xsmall",
          label: "Extra-small",
          classes: "xsmall-btn",
          text: "Extra-small",
        },
        {
          type: "xlarge",
          label: "Extra-large",
          classes: "xlarge-btn",
          text: "Extra-large",
        },
        {
          type: "glossy",
          label: "Glossy",
          classes: "glossy-btn",
          text: "Glossy",
          shouldHaveRoundedType: false,
        },
        {
          type: "glow",
          label: "Glow",
          classes: "glow-btn",
        },
        {
          type: "key",
          label: "Key",
          classes: "key-btn",
          text: "START",
        },
        {
          type: "neon-border",
          label: "Neon Border",
          text: "button",
          classes: "neon-border-btn",
          shouldHaveRoundedType: false,
        },
        {
          type: "outline",
          label: "Outline",
          classes: "outline-btn",
        },
        {
          type: "rounded-bottom",
          label: "Rounded Bottom",
          classes: "rounded-bottom-btn",
          text: "Rounded Bottom",
          shouldHaveRoundedType: false,
        },
        {
          type: "rounded-diagonal-tl",
          label: "Rounded Diagonal (Top Left)",
          classes: "rounded-diagonal-tl-btn",
          text: "TopLeft-BottomRight",
          shouldHaveRoundedType: false,
        },
        {
          type: "rounded-diagonal-tr",
          label: "Rounded Diagonal (Top Right)",
          classes: "rounded-diagonal-tr-btn",
          text: "TopRight-BottomLeft",
          shouldHaveRoundedType: false,
        },
        {
          type: "rounded-top",
          label: "Rounded Top",
          classes: "rounded-top-btn",
          text: "Rounded Top",
          shouldHaveRoundedType: false,
        },
        {
          type: "stack",
          label: "Stack",
          classes: "stack-btn",
          text: "Button",
        },
        {
          type: "striped",
          label: "Striped",
          classes: "striped-btn",
        },
      ],
    },
    {
      type: "animated",
      label: "Animated Buttons",
      classes: "",
      children: [
        {
          type: "atom",
          label: "Atom",
          classes: "atom-btn",
          shouldHaveRoundedType: false,
          shouldHaveBlockType: false,
        },
        {
          type: "aura-pulse",
          label: "Aura Pulse",
          classes: "aurapulse-btn",
        },
        {
          type: "bounce",
          label: "Bounce",
          classes: "bouncy-btn",
        },
        {
          type: "diagonalHover",
          label: "Diagonal Background on Hover",
          classes: "diag-btn",
        },
        {
          type: "expanding",
          label: "Expanding Border",
          classes: "expanding-btn",
        },
        {
          type: "fill-color-down",
          label: "Fill Color - Down",
          classes: "fill-color-btn down-fill",
        },
        {
          type: "fill-color-left",
          label: "Fill Color - Left",
          classes: "fill-color-btn",
        },
        {
          type: "fill-color-right",
          label: "Fill Color - Right",
          classes: "fill-color-btn right-fill",
        },
        {
          type: "fill-color-up",
          label: "Fill Color - Up",
          classes: "fill-color-btn up-fill",
        },
        {
          type: "fill-color-sideways",
          label: "Fill Color - Sideways",
          classes: "fill-color-btn sideways-fill",
        },
        {
          type: "flash",
          label: "Flash",
          classes: "flash-btn",
        },
        {
          type: "hinge",
          label: "Hinge",
          classes: "hinge-btn",
        },
        {
          type: "invert",
          label: "Invert",
          classes: "invert-btn",
        },
        {
          type: "liquid",
          label: "Liquid",
          classes: "liquid-btn",
        },
        {
          type: "loading",
          label: "Loading",
          classes: "loading-btn",
          variations: [
            {
              text: "loading left",
              classes: "spin left purple-btn",
            },
            {
              text: "loading right",
              classes: "spin right green-btn",
            },
            {
              text: "loading right",
              classes: "bounce right red-btn",
            },
            {
              text: "loading right",
              classes: "bounce left pink-btn",
            },
            {
              text: "loading right",
              classes: "heart-beat left blue-btn",
            },
            {
              text: "loading right",
              classes: "heart-beat right yellow-btn",
            },
            {
              text: "loading right",
              classes: "slide right black-btn",
            },
            {
              text: "loading right",
              classes: "slide left orange-btn",
            },
          ],
          shouldHaveRoundedType: false,
          shouldHaveBlockType: false,
        },
        {
          type: "neon",
          label: "Neon",
          classes: "neon-btn",
        },
        {
          type: "next",
          label: "Next",
          classes: "next-arrow-btn",
        },
        {
          type: "nudge",
          label: "Nudge",
          classes: "nudge-btn",
        },
        {
          type: "papercurl",
          label: "Paper Curl",
          classes: "papercurl-btn",
        },
        {
          type: "previous",
          label: "Previous",
          classes: "previous-arrow-btn",
        },
        {
          type: "pudding",
          label: "Pudding",
          classes: "pudding-btn",
        },
        {
          type: "pulse",
          label: "Pulse",
          classes: "pulse-btn",
        },
        {
          type: "rainbow",
          label: "Rainbow",
          classes: "rainbow-btn",
        },
        {
          type: "ripple",
          label: "Ripple",
          classes: "ripple-btn",
        },
        {
          type: "scale",
          label: "Scale",
          classes: "scale-btn",
        },
        {
          type: "shake",
          label: "Shake",
          classes: "shake-btn",
        },
        {
          type: "shine",
          label: "Shine",
          classes: "shine-btn",
        },
        {
          type: "skew",
          label: "Skew",
          classes: "skew-btn",
        },
        {
          type: "snake",
          label: "Snake Border",
          classes: "snake-btn",
        },
        {
          type: "splash",
          label: "Splash",
          classes: "splash-btn",
        },
        {
          type: "spring",
          label: "Spring",
          classes: "spring-btn",
        },
        {
          type: "transparent",
          label: "Transparent On Hover",
          classes: "transparent-btn",
        },
        {
          type: "vibrate",
          label: "Vibrate",
          classes: "vibrate-btn",
        },
      ],
    },
    {
      type: "hover",
      label: "Hover Buttons",
      classes: "hover-btn",
      children: [],
    },
    {
      type: "icon",
      label: "Icon Buttons",
      classes: "",
      children: [
        {
          type: "base-icon",
          label: "Base Icon",
          classes: "base-icon-btn",
          variations: [
            {
              classes: "icon-right purple-btn",
              text: "base icon button <i class='fas fa-book'></i>",
            },
            {
              text: "<i class='fab fa-apple'></i>",
            },
            {
              classes: "icon-left green-btn",
              text: "<i class='fas fa-pen'></i> base icon button",
            },
          ],
          shouldHaveRoundedType: false,
          shouldHaveBlockType: false,
        },
        {
          type: "star",
          label: "Star",
          classes: "star-btn",
          text: "",
          shouldHaveRoundedType: false,
          shouldHaveBlockType: false,
          variations: [
            {
              classes: "",
              text: "Star (Inactive)",
            },
            {
              classes: "active",
              text: "Star (Active)",
            },
          ],
        },
        {
          type: "grow",
          label: "Grow",
          classes: "grow-btn",
          text: "",

          shouldHaveRoundedType: false,
          shouldHaveBlockType: false,
        },
        {
          type: "hatch",
          label: "Hatch",
          classes: "hatch-btn",
          shouldHaveRoundedType: false,
          shouldHaveBlockType: false,
          variations: [
            {
              classes: "",
              text: "<i class='fas fa-camera'></i>",
            },
            {
              classes: "",
              text: "<i class='fas fa-book'></i>",
            },
          ],
        },
      ],
    },
    {
      type: "social",
      label: "Social Buttons",
      classes: "social-btn",
      variations: [
        {
          classes: "apple",
          text: "Login with Apple",
        },
        {
          classes: "bitbucket",
          text: "Login with Bitbucket",
        },
        {
          classes: "discord",
          text: "Login with Discord",
        },
        {
          classes: "facebook",
          text: "Login with Facebook",
        },
        {
          classes: "flickr",
          text: "Login with Flickr",
        },
        {
          classes: "github",
          text: "Login with Github",
        },
        {
          classes: "gitlab",
          text: "Login with GitLab",
        },
        {
          classes: "google",
          text: "Login with Google",
        },
        {
          classes: "instagram",
          text: "Login with Instagram",
        },
        {
          classes: "linkedin",
          text: "Login with LinkedIn",
        },
        {
          classes: "microsoft",
          text: "Login with Microsoft",
        },
        {
          classes: "reddit",
          text: "Login with Reddit",
        },
        {
          classes: "snapchat",
          text: "Login with Snapchat",
        },
        {
          classes: "steam",
          text: "Login with Steam",
        },
        {
          classes: "twitter",
          text: "Login with Twitter",
        },
        {
          classes: "tumblr",
          text: "Login with Tumblr",
        },
        {
          classes: "weibo",
          text: "Login with Weibo",
        },
        {
          classes: "whatsapp",
          text: "Login with Whatsapp",
        },
      ],
      children: [],
    },
    {
      type: "special",
      label: "Special Buttons",
      classes: "",
      children: [
        {
          type: "code-btn",
          label: "Code",
          classes: "code-btn",
          variations: [
            {
              text: "Code",
            },
          ],
        },
        {
          type: "handwritten-btn",
          label: "Handwritten",
          classes: "handwritten-btn",
          variations: [
            {
              text: "Handwritten",
            },
          ],
        },
        {
          type: "neu-btn",
          label: "Neumorphic",
          classes: "neu-btn",
        },
        {
          type: "play-game",
          label: "Play game",
          classes: "play-game-btn",
          text: "",
        },
        {
          type: "rainbow-border",
          label: "Rainbow Border",
          classes: "rainbow-border-btn",
          shouldHaveRoundedType: false,
          variations: [
            {
              text: "Rainbow",
            },
          ],
        },
        {
          type: "retro",
          label: "Retro",
          classes: "retro-btn",
          variations: [
            {
              classes: "",
              text: "Continue",
            },
            {
              classes: "retro-btn-proceed",
              text: "Proceed",
            },
            {
              classes: "retro-btn-reset",
              text: "Reset",
            },
          ],
        },
        {
          type: "toggle",
          label: "Toggle (on and off)",
          classes: "toggle-btn",
          shouldHaveRoundedType: false,
          shouldHaveBlockType: false,
          variations: [
            {
              classes: "toggle-on-btn",
              text: "",
            },
            {
              classes: "toggle-off-btn",
              text: "",
            },
          ],
        },
        {
          type: "win95-btn",
          label: "Windows 95",
          classes: "win95-btn",
          variations: [
            {
              classes: "",
              text: "Yes",
            },
            {
              classes: "",
              text: "No",
            },
          ],
        },
        {
          type: "western",
          label: "Western",
          classes: "western-btn",
          variations: [
            {
              classes: "denim",
              text: "Howdy",
            },
            {
              classes: "choco",
              text: "Howdy",
            },
            {
              classes: "charcoal",
              text: "Howdy",
            },
            {
              classes: "sand",
              text: "Howdy",
            },
          ],
        },
      ],
    },
  ];

  /**
   * getButttonHtml generates the required html for each button to be rendered
   *
   * @param {string} classes - refers to the class applied to the button element
   * @param {string} textClasses - refers to the text written below each button
   * @param {string} buttonText - refers to text written in each button
   * @param {boolean} isBlock - indicates if it should be a block button or not
   * @param {boolean} isDisabled - indicates if the button is diplayed as disabled or not
   *
   * @returns {string} - the required button item's html
   */
  function getButtonHtml(
    classes,
    textClasses,
    buttonText,
    isBlock,
    isDisabled
  ) {
    if (buttonText === false) {
      buttonText = "Button";
    }
    return `
            <div class="button-container">
                <button class="${classes}" role="Button"
                  ${isDisabled ? 'aria-disabled="true" tabindex="-1"' : ""}
                  >${buttonText}</button>
                ${!isBlock ? "<br>" : ""}
                <small class="button-caption-sub">${textClasses}</small><br>
            </div>
        `;
  }
  /**
   * getMenuLinkHtml generates each link inside the sidebar menu
   *
   * @param {string} type - refers to the type of button and section's ID it links to
   * @param {string} label - refers to the text written in the link
   * @param {boolean} isSubMenu - indicates if the link is a subLink to any other link
   *
   * @returns {string} - the required menu item's html for sidebar
   */
  function getMenuLinkHtml(type, label, isSubMenu) {
    return (
      '<a href="#' +
      type +
      '" ' +
      (isSubMenu ? 'class="submenu-link" ' : "") +
      ">" +
      label +
      "</a>"
    );
  }

  /**
   * createSection seperates each type of button from others by creating a section
   * and adds those types of buttons to it
   *
   * @param {object} button - the button object section of which has to be created
   * @param {boolean} shouldAddToSidebar - indicates if it will be added to the sidebar or not
   *
   * @returns {string} - the required section's html with all the buttons
   */
  function createSection(button, shouldAddToSidebar) {
    var heading = "h1",
      //if shouldHaveRoundedType is set set the value to it, else by default show rounded buttons
      roundedClass =
        !button.hasOwnProperty("shouldHaveRoundedType") ||
        button.shouldHaveRoundedType,
      //if shouldHaveBlockType is set set the value to it, else by default show block buttons
      blockClass =
        !button.hasOwnProperty("shouldHaveBlockType") ||
        button.shouldHaveBlockType,
      headerClass = "section-header";
    if (shouldAddToSidebar) {
      // add link to sidebar
      sidebar.append(getMenuLinkHtml(button.type, button.label, false));
    } else {
      heading = "h3";
      headerClass = "section-sub-header";
    }

    // Create a new section with same id as the button type
    var section = $('<section id="' + button.type + '">');
    // Adding the required heading to the section
    section.append(
      `<${heading} class=${headerClass}>${button.label}</${heading}`
    );

    if (button.hasOwnProperty("children") && button.children.length) {
      // Add children buttons to the section concerned
      var submenu = $('<div class="submenu-links">');
      for (var j = 0; j < button.children.length; j++) {
        var childSection = createSection(button.children[j], false);
        childSection.appendTo(section);
        submenu.append(
          getMenuLinkHtml(
            button.children[j].type,
            button.children[j].label,
            true
          )
        );
      }
      sidebar.append(submenu);
    } else {
      var buttonArr = buttonColors;
      var isDisabled = false;
      if (button.hasOwnProperty("variations")) {
        buttonArr = button.variations;
      } else {
        if (button.type === "disable") {
          isDisabled = true;
        }
      }

      let navUl = $('<ul class="nav nav-tabs" id="myTab" role="tablist">'),
        tabCont = $('<div class="tab-content" id="myTabContent">');

      // Add buttons to the type's button grid
      var normalButtonsGrid = $(
          `<div class=" tab-pane fade show active button-grid" id="${button.type}_basicNav" role="tabpanel" aria-labelledby="basic-tab">`
        ),
        buttonText = button.hasOwnProperty("text") ? button.text : false,
        basicNav = $('<li class="nav-item" role="presentation">');
      basicNav.append(
        `<a class="nav-link active" id="basic-tab" data-toggle="tab" href="#${button.type}_basicNav" role="tab" aria-controls="${button.type}_basicNav" aria-selected="true">Basic</a>`
      );
      navUl.append(basicNav);
      tabCont.append(normalButtonsGrid);

      // If rounded class is allowed for this button, create a button grid for it
      if (roundedClass) {
        var roundedButtonsGrid = $(
            `<div class="button-grid tab-pane fade" id="${button.type}_rounded" role="tabpanel" aria-labelledby="rounded-tab">`
          ),
          roundNav = $('<li class="nav-item" role="presentation">');
        roundNav.append(
          `<a class="nav-link" id="rounded-tab" data-toggle="tab" href="#${button.type}_rounded" role="tab" aria-controls="${button.type}_rounded" aria-selected="true">Rounded</a>`
        );
        navUl.append(roundNav);
        tabCont.append(roundedButtonsGrid);
      }
      // If block class is allowed for this button, create a button grid for it
      if (blockClass) {
        var blockButtonsGrid = $(
            `<div class="button-grid tab-pane fade" id="${button.type}_block" role="tabpanel" aria-labelledby="block-tab">`
          ),
          blockNav = $('<li class="nav-item" role="presentation">');
        blockNav.append(
          `<a class="nav-link" id="block-tab" data-toggle="tab" href="#${button.type}_block" role="tab" aria-controls="${button.type}_block" aria-selected="true">Block</a>`
        );
        navUl.append(blockNav);
        tabCont.append(blockButtonsGrid);
      }

      for (var j = 0; j < buttonArr.length; j++) {
        var thisButtonText =
          buttonText !== false
            ? buttonText
            : buttonArr[j].hasOwnProperty("text")
            ? buttonArr[j].text
            : false;
        var thisButtonClasses = buttonArr[j].hasOwnProperty("classes")
          ? buttonArr[j].classes
          : buttonArr[j];

        var totalClasses = `${defaultClass} ${button.classes}`,
          totalWrittenClasses = `.${defaultClass} .${button.classes}`;
        if (thisButtonClasses.length) {
          totalClasses += ` ${thisButtonClasses}`;
          totalWrittenClasses += ` .${thisButtonClasses}`;
        }

        // add normal button grid for button
        normalButtonsGrid.append(
          getButtonHtml(
            totalClasses,
            totalWrittenClasses,
            thisButtonText,
            false,
            isDisabled
          )
        );
        if (roundedButtonsGrid) {
          //add rounded button grid if enabled for button
          roundedButtonsGrid.append(
            getButtonHtml(
              `${totalClasses} rounded-btn`,
              `${totalWrittenClasses} .rounded-btn`,
              thisButtonText,
              false,
              isDisabled
            )
          );
        }
        if (blockButtonsGrid) {
          //add block button grid if enabled for button
          blockButtonsGrid.append(
            getButtonHtml(
              `${totalClasses} block-btn`,
              `${totalWrittenClasses} .block-btn`,
              thisButtonText,
              true,
              isDisabled
            )
          );
        }
      }
      section.append(navUl).append(tabCont);
    }
    return section;
  }

  // Main loop that creates all the section and buttons
  for (var i = 0; i < buttons.length; i++) {
    var section = createSection(buttons[i], true);
    // Append all the button sections to the main body
    section.appendTo(content);
  }
  $("#loading_wheel").remove();
});
