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
  //list of button types
  var buttons = [
    {
      type: "basic",
      label: "Basic Buttons",
      classes: "basic-btn",
      children: [],
    },
    {
      type: "animated",
      label: "Animated Buttons",
      classes: "",
      children: [
        {
          type: "bounce",
          label: "Bounce",
          classes: "bouncy-btn",
        },
        {
          type: "click",
          label: "Click",
          classes: "click-btn",
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
          type: "neon",
          label: "Neon",
          classes: "neon-btn",
        },
        {
          type: "next",
          label: "Next Button",
          classes: "next-arrow-btn",
        },
        {
          type: "nudge",
          label: "Nudge",
          classes: "nudge-btn",
        },
        {
          type: "previous",
          label: "Previous Button",
          classes: "previous-arrow-btn",
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
      ],
    },
    {
      type: "dashed",
      label: "Dashed Buttons",
      classes: "dashed-btn",
      children: [],
    },
    {
      type: "disable",
      classes: "disabled-btn",
      label: "Disabled Buttons",
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
          type: "add-to-cart",
          label: "Add To Cart Button",
          classes: "add-to-cart-btn",
          text: "Add To Cart",
        },

        {
          type: "buy-me-coffee",
          label: "Buy Me Coffee Button",
          classes: "buy-me-coffee-btn",
          text: "Buy me coffee",
        },
        {
          type: "chat",
          label: "Chat Box Button",
          classes: "chat-btn",
          text: "",
        },
        {
          type: "download",
          label: "Download Button",
          classes: "download-btn",
          text: "Download",
        },
        {
          type: "like",
          label: "Like Button",
          classes: "like-btn",
          text: "",
        },
        {
          type: "play",
          label: "Play Button",
          classes: "play-btn",
          text: "",
        },
        {
          type: "plus",
          label: "Plus Button",
          classes: "plus-btn",
          text: "",
        },
        {
          type: "scroll-to-top",
          label: "Scroll-to-Top Button",
          classes: "scroll-to-top-btn",
          text: "",
        },
      ],
    },
    {
      type: "outline",
      label: "Outline Buttons",
      classes: "outline-btn",
      children: [],
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
          type: "play-game",
          label: "Play game Button",
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
      ],
    },
  ];

  var sidebar = $(".sidebar-list"),
    content = $("#content");

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

  function createSection(button, shouldAddToSidebar) {
    var heading = "h1";
    if (shouldAddToSidebar) {
      // add link to sidebar
      sidebar.append(getMenuLinkHtml(button.type, button.label, false));
    } else {
      heading = "h3";
    }
    var section = $('<section id="' + button.type + '">');

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
      //add children buttons
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

      //add type buttons
      var normalButtonsGrid = $('<div class="button-grid">'),
        roundedButtonsGrid = $('<div class="button-grid">'),
        blockButtonsGrid = $('<div class="button-grid">'),
        buttonText = button.hasOwnProperty("text") ? button.text : false;
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
        normalButtonsGrid.append(
          getButtonHtml(
            `${defaultClass} ${button.classes} ${thisButtonClasses}`,
            `.${defaultClass} .${button.classes} .${thisButtonClasses}`,
            thisButtonText,
            false,
            isDisabled
          )
        );
        roundedButtonsGrid.append(
          getButtonHtml(
            `${defaultClass} ${button.classes} rounded-btn ${thisButtonClasses}`,
            `.${defaultClass} .${button.classes} .rounded-btn .${thisButtonClasses}`,
            thisButtonText,
            false,
            isDisabled
          )
        );
        blockButtonsGrid.append(
          getButtonHtml(
            `${defaultClass} ${button.classes} block-btn ${thisButtonClasses}`,
            `.${defaultClass} .${button.classes} .block-btn .${thisButtonClasses}`,
            thisButtonText,
            true,
            isDisabled
          )
        );
      }
      section.append(normalButtonsGrid);
      section.append(roundedButtonsGrid);
      section.append(blockButtonsGrid);
    }
    return section;
  }
  for (var i = 0; i < buttons.length; i++) {
    var section = createSection(buttons[i], true);
    section.appendTo(content);
  }
  $("#loading_wheel").remove();
});
