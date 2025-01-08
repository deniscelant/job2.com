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
    job.innerHTML = `
        <h1>Catálogo</h1>
        <div id="productCatalog">
        <div id="infoProduct">
            <h1>Nome do produto</h1>
            <h4>Descrição do produto</h4>
            <h3>a partir de R$--- </h3>
            <a href="pagina-produto.html"><button>Começar</button></a>
        </div>
        <div id="imgCatalog"></div>
        </div>
            `;
  });
}
