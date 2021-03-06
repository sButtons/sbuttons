// global variables
let projectArea = document.getElementById("project-container");

// an array of projects that contains all the
// the examples of projects that makes use of the sbutton
// npm package
const projects = [
  {
    name: "UUID generator",
    about:
      "A web application that generates unique hashed strings once you click a button.",
    author: "Christopher Marques Corrêa",
    link_to_project: "https://uuid-generator.vercel.app/",
    image: "assets/img/projects/uuid.png",
    github: "https://github.com/ChristopherMarques/uuidGenerator",
  },
  {
    name: "Grammarly with ghost",
    about: "An extension that allows Grammarly to work on Ghost's editor",
    author: "Shahed Nasser",
    link_to_project:
      "https://chrome.google.com/webstore/detail/grammarly-with-ghost/iakfoofepmfjafjepidembmheemidbdb?hl=en&authuser=1",
    image: "assets/img/projects/grammarly-ghost.jpg",
    github: "https://github.com/shahednasser/grammarly-ghost",
  },
];

// An helper function that maps through the projects array
// and displays the inner html markup.
$("#project-container")
  .append(
    projects.map((project, index) => {
      return `<div class="project-card" key=${index}>
    <img src=${project.image} alt="image of a project using sbuttons" class="project-img" />
    <div class="details">
       <p class="project-name">${project.name}</p>
       <p class="about-project">${project.about}</p>
       <p class="project-author">Created by ${project.author}</p>
       <div class="project-links">
        <a href=${project.link_to_project} target="__blank">Demo</a>
        <a href=${project.github} target="__blank">View on GitHub</a>
       </div>
    </div>
  </div>`;
    })
  )
  .join();
