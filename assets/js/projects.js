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
    author: "Gleb Patowsky",
    link_to_project: "https://uuid-generator.vercel.app/",
    image: "assets/img/projects/uuid.png",
  },
  {
    name: "example project",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perspiciatis facilis culpa nihil architecto eaque voluptate repellat quos cupiditate. Eius.",
    author: "Gleb Patowsky",
    link_to_project: "https://example.com/",
    image: "assets/img/projects/uuid.png",
  },
  {
    name: "example project",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perspiciatis facilis culpa nihil architecto eaque voluptate repellat quos cupiditate. Eius.",
    author: "Gleb Patowsky",
    link_to_project: "https://example.com/",
    image: "assets/img/projects/uuid.png",
  },
  {
    name: "example project",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perspiciatis facilis culpa nihil architecto eaque voluptate repellat quos cupiditate. Eius.",
    author: "Gleb Patowsky",
    link_to_project: "https://example.com/",
    image: "assets/img/projects/uuid.png",
  },
  {
    name: "example project",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perspiciatis facilis culpa nihil architecto eaque voluptate repellat quos cupiditate. Eius.",
    author: "Gleb Patowsky",
    link_to_project: "https://example.com/",
    image: "assets/img/projects/uuid.png",
  },
  {
    name: "example project",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perspiciatis facilis culpa nihil architecto eaque voluptate repellat quos cupiditate. Eius.",
    author: "Gleb Patowsky",
    link_to_project: "https://example.com/",
    image: "assets/img/projects/uuid.png",
  },
];

// An helper function that maps through the projects array
// and displays the inner html markup.
const mappedProject = projects.map((project, index) => {
  return `<div class="project-card" key=${index}>
            <img src=${project.image} alt="image of a project using sbuttons" class="project-img" />
            <div class="details">
               <p class="project-name">${project.name}</p>
               <p class="about-project">${project.about}</p>
               <p class="project-author">Created by ${project.author}</p>
               <div class="project-links">
                <a href=${project.link_to_project} target="__blank">Demo</a>
                <a href=${project.link_to_project} target="__blank">View on GitHub</a>
               </div>
            </div>
          </div>`;
});

projectArea.innerHTML = mappedProject;
