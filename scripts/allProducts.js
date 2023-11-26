import { dataJSON } from "./dataJSONconImg.js";

const body = document.querySelector("#products");

dataJSON.forEach((product, i) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("col", "d-flex", "justify-content-center","mt-3", "mb-3");

  productDiv.innerHTML = `<div class="card shadow p-3 my-gradient-color">
  <div class="circleImgContainer my-border-color"><img src="assets/products/${product.image}" class="card-img-top" alt='${product.name}' /></div>
    <div class="card-body mt-3">
      <h6 class="card-title">
        ${product.name}
      </h6>
      <p class="card-text">$ ${
        product.offer
          ? (1 - product.discount / 100) * product.price
          : product.price
      } ${product.offer?('<span class="oldPrice">($ '+product.price + ')</span>'):""} <span class="badge no-btn text-bg-success">${
        product.offer ? ("-"+product.discount+"% descuento!") : ""
      }</span></p>
    </div>
    <div class="card-footer"><a href="#" class="btn btn-leaf btn-buy float-end">Comprar</a></div>
  </div>
  `;

  body.appendChild(productDiv);
});
