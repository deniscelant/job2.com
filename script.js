import { jobs } from "./db.js";

const catalog = document.getElementById("catalog");
const briefingForm = document.getElementById("briefingForm");
const tm_tittle = document.getElementsByClassName("tm_tittle");
const tm_slogan = document.getElementsByClassName("tm_slogan");
const tm_desc = document.getElementsByClassName("tm_desc");
const tm_price = document.getElementsByClassName("tm_price");
const tm_image = document.getElementsByClassName("tm_image");
const p_button = document.getElementsByClassName("p_button");

if (document.title === "Home") {
  renderCatalog();
}
if (document.title != "Home") {
  storageInfo();
}

function renderCatalog() {
  jobs.forEach((job) => {
    const catalogRender = document.createElement("div");
    catalog.appendChild(catalogRender);

    catalogRender.innerHTML = `
          <div id="productCatalog">
          <div id="infoProduct">
              <h1>${job.name}</h1>
              <h4>${job.slogan}</h4>
              <h3>a partir de R$${job.price}</h3>
              <a href="pagina-produto.html"><button class="p_button" id = "${job.id}">Começar</button></a>
          </div>
          <div id="imgCatalog"></div>
          </div>
              `;
  });
}

for (let button of p_button) {
  button.onclick = (e) => {
    // e.preventDefault()

    jobs.forEach((job) => {
      if (button.id === job.id) {
        localStorage.setItem("job_name", job.name);
        localStorage.setItem("job_slogan", job.slogan);
        localStorage.setItem("job_desc", job.desc);
        localStorage.setItem("job_price", job.price);
      }
    });
  };
}

function storageInfo() {
  Array.from(tm_tittle).forEach((id) => {
    id.innerHTML = localStorage.getItem("job_name");
  });
  Array.from(tm_slogan).forEach((id) => {
    id.innerHTML = localStorage.getItem("job_slogan");
  });
  Array.from(tm_desc).forEach((id) => {
    id.innerHTML = localStorage.getItem("job_desc");
  });
  Array.from(tm_price).forEach((id) => {
    id.innerHTML = localStorage.getItem("job_price");
  });
}

// for (let button of p_button) {
//   button.onclick = (e) => {
//     const target = e.target.getAttribute("id");
//     const clicked_button = target;

//     let idJobs = jobs.map((job) => job.id);

//     if (clicked_button === idJobs) {
//       changeInfo(tm_tittle, clicked_button);
//     }
//   };
// }
