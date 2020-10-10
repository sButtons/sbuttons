$(document).ready(function () {
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
          type: "glow",
          label: "Glow",
          classes: "glow-btn",
        },
        {
          type: "key",
          label: "Key",
          classes: "key-btn",
        },
        {
          type: "dashed",
          label: "Dashed Buttons",
          classes: "dashed-btn",
        },
        {
          type: "disable",
          label: "Disabled Buttons",
          classes: "disabled-btn",
        },
        {
          type: "outline",
          label: "Outline Buttons",
          classes: "outline-btn",
        },
        {
          type: "glossy",
          label: "Glossy",
          classes: "glossy-btn",
          text: "Glossy",
          shouldHaveRoundedType: false,
        },
        {
          type: "rounded-bottom",
          label: "Rounded Bottom",
          classes: "rounded-bottom-btn",
          text: "Rounded Bottom",
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
          type: "stack",
          label: "Stack",
          classes: "stack-btn",
          text: "",
        },
      ],
    },
    {
      type: "animated",
      label: "Animated Buttons",
      classes: "",
      children: [
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
          type: "snake",
          label: "Snake Border",
          classes: "snake-btn",
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
          type: "splash",
          label: "Splash",
          classes: "splash-btn",
        },
        {
          type: "transparent",
          label: "Transparent On Hover",
          classes: "transparent-btn",
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
          label: "Base Icon button",
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
          type: "add-to-cart",
          label: "Add To Cart",
          classes: "add-to-cart-btn",
          text: "Add To Cart",
        },
        {
          type: "appstore",
          label: "App Store",
          classes: "appstore-btn",
          variations: [
            {
              classes: "applestore",
              text: "App Store",
            },
            {
              classes: "playstore",
              text: "Google Play",
            },
          ],
        },
        {
          type: "buy-me-coffee",
          label: "Buy Me Coffee",
          classes: "buy-me-coffee-btn",
          text: "Buy me coffee",
        },
        {
          type: "chat",
          label: "Chat Box",
          classes: "chat-btn",
          text: "",
        },
        {
          type: "close",
          label: "Close Button",
          classes: "",
          shouldHaveRoundedType: false,
          shouldHaveBlockType: false,
          variations: [
            {
              classes: "close-btn",
              label: "",
              text: "",
            },
          ],
        },
        {
          type: "download",
          label: "Download",
          classes: "download-btn",
          text: "Download",
        },
        {
          type: "drop-down",
          label: "Dropdown",
          classes: "drop-down-btn",
          text: "Dropdown Button",
        },
        {
          type: "like",
          label: "Like",
          classes: "like-btn",
          text: "",
        },
        {
          type: "play",
          label: "Play",
          classes: "play-btn",
          text: "",
        },
        {
          type: "plus",
          label: "Plus",
          classes: "plus-btn",
          text: "",
        },
        {
          type: "scroll-to-top",
          label: "Scroll-to-Top",
          classes: "scroll-to-top-btn",
          text: "",
        },
        {
          type: "setting",
          label: "Setting",
          classes: "setting-btn",
          text: "",
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
              text: "",
            },
          ],
        },
        {
          type: "thumbs-up",
          label: "Thumbs Up",
          classes: "thumbsup-btn",
          text: "",
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
      ],
      children: [],
    },
    {
      type: "special",
      label: "Special Buttons",
      classes: "",
      children: [
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
          type: "play-game",
          label: "Play game",
          classes: "play-game-btn",
          text: "",
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
          label: "Toggle button (on and off)",
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
      ],
    },
  ];

  var sidebar = $(".sidebar-list"),
    content = $("#content");

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
        button.shouldHaveBlockType;
    if (shouldAddToSidebar) {
      // add link to sidebar
      sidebar.append(getMenuLinkHtml(button.type, button.label, false));
    } else {
      heading = "h3";
    }

    // Create a new section with same id as the button type
    var section = $('<section id="' + button.type + '">');
    // Adding the required heading to the section
    section.append(
      "<" +
        heading +
        ' class="section-header">' +
        button.label +
        "</" +
        heading +
        ">"
    );

    if (button.hasOwnProperty("children") && button.children.length) {
      // Add children buttons to the section concerned
      var submenu = $('<div class="submenu-links">');
      for (var j = 0; j < button.children.length; j++) {
        var childSection = createSection(button.children[j], false);
        childSection.appendTo(section);
        if (j !== 0) {
          childSection.before('<hr class="secondary-hr">');
        }
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

      // Add buttons to the type's button grid
      var normalButtonsGrid = $('<div class="button-grid">'),
        buttonText = button.hasOwnProperty("text") ? button.text : false;

      // If rounded class is allowed for this button, create a button grid for it
      if (roundedClass) {
        var roundedButtonsGrid = $('<div class="button-grid">');
      }
      // If block class is allowed for this button, create a button grid for it
      if (blockClass) {
        var blockButtonsGrid = $('<div class="button-grid">');
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
              `.${totalWrittenClasses} .rounded-btn`,
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
              `.${totalWrittenClasses} .block-btn`,
              thisButtonText,
              true,
              isDisabled
            )
          );
        }
      }
      section.append(normalButtonsGrid);
      roundedClass && roundedButtonsGrid
        ? section.append(roundedButtonsGrid)
        : "";
      blockClass && blockButtonsGrid ? section.append(blockButtonsGrid) : "";
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
