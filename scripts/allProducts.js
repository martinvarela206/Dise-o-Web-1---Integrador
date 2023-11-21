import { dataJSON } from "./dataJSON.js";

const body = document.querySelector("#products");

dataJSON.forEach((product, i) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("col", "d-flex", "justify-content-center");

  productDiv.innerHTML = `<div class="card shadow-sm my-bgc-primary" style="width: 18rem">
    <img src="assets/product.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h6 class="card-title">
        ${product.name}
      </h6>
      <p class="card-text">$ ${
        product.offer
          ? (1 - product.discount / 100) * product.price
          : product.price
      } ${product.offer?('<span class="oldPrice">($ '+product.price + ')</span>'):""} <span class="badge text-bg-success">${
        product.offer ? ("-"+product.discount+"% descuento!") : ""
      }</span></p>
    </div>
    <div class="card-footer"><a href="#" class="btn rounded-pill btn-warning float-end">Comprar</a></div>
  </div>
  `;

  body.appendChild(productDiv);
});

/*
<div class="col d-flex justify-content-center">
          <div class="card shadow-sm" style="width: 18rem">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                Nombre Producto
                <span class="badge text-bg-success">Oferta!</span>
              </h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary float-end">Comprar</a>
            </div>
          </div>
        </div>

*/
