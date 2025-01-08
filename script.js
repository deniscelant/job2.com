import { jobs } from "./db.js";

const catalog = document.getElementById("catalog");
const briefingForm = document.getElementById("briefingForm");
const tm_tittle = document.getElementsByClassName("tm_tittle");
const tm_slogan = document.getElementsByClassName("tm_slogan");
const tm_desc = document.getElementsByClassName("tm_desc");
const tm_price = document.getElementsByClassName("tm_price");
const tm_image = document.getElementsByClassName("tm_image")
const p_button = document.getElementsByClassName("p_button")

window.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
});

function changeInfo(obj_class, info) {
  Array.from(obj_class).forEach((id) => {
    id.textContent = info
  })
}

Array.from(p_button).forEach((button) => {
  button.onclick = () => {
    let idJobs = jobs.map((e) => e.id)
    const clicked_button = button.id;
    if (clicked_button === idJobs) {
      changeInfo(tm_tittle, clicked_button)
    }
  }
});


function renderCatalog() {
  jobs.forEach((job) => {
    const catalogRender = document.createElement("div")
    catalog.appendChild(catalogRender)

    catalogRender.innerHTML = `
        <div id="productCatalog">
        <div id="infoProduct">
            <h1>${job.name}</h1>
            <h4>${job.slogan}</h4>
            <p>${job.desc}</p>
            <h3>a partir de R$${job.price}</h3>
            <a href="pagina-produto.html"><button class="p_button" id = "${job.id}">Começar</button></a>
        </div>
        <div id="imgCatalog"></div>
        </div>
            `;

  });
}
