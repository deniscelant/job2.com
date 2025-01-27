import { jobs, extra_jobs, forms } from "./db.js";
import * as style from "./style.js";

const catalog = document.getElementById("catalog");
const briefingForm = document.getElementById("briefingForm");
const tm_tittle = document.getElementsByClassName("tm_tittle");
const tm_slogan = document.getElementsByClassName("tm_slogan");
const tm_desc = document.getElementsByClassName("tm_desc");
const tm_price = document.getElementsByClassName("tm_price");
const tm_image = document.getElementsByClassName("tm_image");
const p_button = document.getElementsByClassName("p_button");
let PLUS_JOBS = [];
const listaExtra = document.getElementById("listaExtra");
const portfolioDiv = document.getElementById("portfolioDiv");


if (document.title === "Home") {
  renderCatalog();
}
if (document.title === "Personalizar job") {
  renderExtraJobs();
}
if (document.title != "Home") {
  storageInfo();
}
if (document.title === "Formulário ou contato") {
  renderForm();
}
// if (document.title === "Home") {
//   renderPortfolio();
// }

function renderCatalog() {
  jobs.forEach((job) => {
    const catalogRender = document.createElement("div");
    catalog.appendChild(catalogRender);
    catalogRender.classList.add("catalogRender")

    catalogRender.innerHTML = `
          <div id="productCatalog">
          <div id="infoProduct">
              <h1>${job.name}</h1>
              <h4>${job.slogan}</h4>
              <h3>a partir de R$${job.price}</h3>
              <a href="pagina-produto.html"><button class="p_button" id = "${job.id}">Começar</button></a>
              </div>
              <img id="imgCatalog" src="${job.image}">
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
    id.innerHTML = "a partir de " + localStorage.getItem("job_price");
  });
}

function renderExtraJobs() {
  extra_jobs.forEach((extrajob) => {
    const extrajobRender = document.createElement("div");
    listaExtra.appendChild(extrajobRender);

    extrajobRender.innerHTML = `
        <li class="listaExtraItems">${extrajob.name}</li>
      `;
  });
}

const listaExtraItems = document.getElementsByClassName("listaExtraItems");
Array.from(listaExtraItems).forEach(element => {
    element.classList.add("listUnmarked")
});

for (let list of listaExtraItems) {
  
  list.onclick = () => {

    const listName = list.textContent
    if (list.classList.contains("listUnmarked")) {
      list.classList.replace( "listUnmarked", "listMarked")
      console.log("mudou para marcado")
      PLUS_JOBS.push(listName)
      list.style.display = "none"

    }
    else if (list.classList.contains("listMarked")) {
      list.classList.replace( "listMarked","listUnmarked")
      console.log("mudou para desmarcado")

    }

    const reset = document.createElement("button")

    if (PLUS_JOBS.length == 1 && reset.innerHTML === "") {
      listaExtra.appendChild(reset)
      reset.innerHTML = "Limpar"
      reset.onclick = () => {
        PLUS_JOBS.length = 0;
        reset.remove()
        Array.from(listaExtraItems).forEach(element => {
          element.classList.replace( "listMarked","listUnmarked")
      
      });
      list.style.display = "inherit"

      }
    }
    console.log(PLUS_JOBS)

  };

}

function renderForm(){
  const jobPicked = localStorage.getItem("job_name")
  forms.forEach((form) => {

    if(jobPicked === form.name){
      
      briefingForm.innerHTML = `
      ${form.form}
      `
    }
  })
}

// function renderPortfolio(){
//   portfolio.forEach((job) => {
//     const portfolioJob = document.createElement("img");
//     portfolioJob.classList.add("portfolioImageDiv")
//     portfolioDiv.appendChild(portfolioJob);

//     portfolioJob.src = job;
//   });
// }