import { dataJSON } from "./dataJSON.js";

const body = document.querySelector("#products");

dataJSON.forEach((product, i) => {
  if (product.offer) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("col", "d-flex", "justify-content-center");

    productDiv.innerHTML = `<div class="card shadow-sm" style="width: 18rem">
      <div class="circleImgContainer"><img src="assets/product.png" class="card-img-top" alt="..." /></div>
      <div class="card-body">
        <h6 class="card-title">
          ${product.name}
        </h6>
        <p class="card-text">$ ${
          product.offer
            ? (1 - product.discount / 100) * product.price
            : product.price
        } <span class="badge text-bg-success">${
          product.offer ? "Oferta!" : ""
        }</span></p>
        <a href="#" class="btn rounded-pill btn-warning float-end">Comprar</a>
      </div>
    </div>
    `;

    body.appendChild(productDiv);
  }
});
