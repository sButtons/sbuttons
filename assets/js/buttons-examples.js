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
          type: "buy-me-coffee",
          label: "Buy Me Coffee Button",
          classes: "buy-me-coffee-btn",
          text: "Buy me coffee",
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
          classes: "facebook",
          text: "Login with Facebook",
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
          classes: "twitter",
          text: "Login with Twitter",
        },
        {
          classes: "weibo",
          text: "Login with Weibo",
        },
      ],
      children: [],
    },
  ];

  var sidebar = $(".sidebar-list"),
    content = $("#content");

  function getButtonHtml(classes, textClasses, buttonText) {
    if (buttonText === false) {
      buttonText = "Button";
    }
    return `
            <div class="button-container">
                <button class="${classes}" role="Button">${buttonText}</button><br>
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
    if (button.hasOwnProperty("variations")) {
      var buttonGrid = $('<div class="button-grid">');
      for (var j = 0; j < button.variations.length; j++) {
        buttonGrid.append(
          getButtonHtml(
            `${defaultClass} ${button.classes} ${button.variations[j].classes}`,
            `.${defaultClass} .${button.classes} .${button.variations[j].classes}`,
            button.variations[j].hasOwnProperty("text")
              ? button.variations[j].text
              : false
          )
        );
      }
      section.append(buttonGrid);
    } else {
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
        //add type buttons
        var normalButtonsGrid = $('<div class="button-grid">'),
          roundedButtonsGrid = $('<div class="button-grid">'),
          buttonText = button.hasOwnProperty("text") ? button.text : false;
        for (var j = 0; j < buttonColors.length; j++) {
          normalButtonsGrid.append(
            getButtonHtml(
              `${defaultClass} ${button.classes} ${buttonColors[j]}`,
              `.${defaultClass} .${button.classes} .${buttonColors[j]}`,
              buttonText
            )
          );
          roundedButtonsGrid.append(
            getButtonHtml(
              `${defaultClass} ${button.classes} btn-rounded ${buttonColors[j]}`,
              `.${defaultClass} .${button.classes} .btn-rounded .${buttonColors[j]}`,
              buttonText
            )
          );
        }
        section.append(normalButtonsGrid);
        section.append(roundedButtonsGrid);
      }
    }
    return section;
  }

  for (var i = 0; i < buttons.length; i++) {
    var section = createSection(buttons[i], true);
    section.appendTo(content).before('<hr class="secondary-hr">');
  }
});
