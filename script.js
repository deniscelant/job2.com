import { jobs, listOfJobs, portfolio } from "./db";

const catalog = document.getElementById("catalog");
const briefingForm = document.getElementById("briefingForm");
const tm_tittle = document.getElementsByClassName("tm_tittle");
const tm_slogan = document.getElementsByClassName("tm_slogan");
const tm_desc = document.getElementsByClassName("tm_desc");
const tm_price = document.getElementsByClassName("tm_price");
const tm_image = document.getElementsByClassName("tm_image")

window.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  // pickJob();
});


function templateModel() {
    Array.from(tm_tittle).forEach((e) => {
      e.textContent = "Tudo bem?";
    });
}

function renderCatalog() {
  jobs.forEach((job) => {
    catalog.innerHTML = `
        <h1>Catálogo</h1>
        <div id="productCatalog">
        <div id="infoProduct">
            <h1>${job.name}</h1>
            <h4>${job.slogan}</h4>
            <p>${job.desc}</p>
            <h3>a partir de R$${job.price}</h3>
            <a href="pagina-produto.html"><button id = "${job.id}">Começar</button></a>
        </div>
        <div id="imgCatalog"></div>
        </div>
            `;
  });
}
