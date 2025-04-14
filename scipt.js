// script.js
function showProject(projectId) {
    const projects = {
      project1: {
        title: "Flood Risk GIS Classifier",
        image: "assets/project2.png",
        description: "Unsupervised clustering of environmental datasets to detect flood-prone farmland in Ireland using GIS tools.",
        link: "https://github.com/kevin-collinss/waterlogging-risk-assessor"
      }
    };
  
    const project = projects[projectId];
    const display = document.getElementById("project-display");
  
    display.innerHTML = `
      <div class="project">
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" />
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View on GitHub</a>
      </div>
    `;
  }
  