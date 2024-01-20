let elList = document.querySelector(".products__list");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => fnRender(data));
function fnRender(data) {
  data.map((item) => {
    let newLi = document.createElement("li");
    newLi.classList = "products__item";
    newLi.innerHTML = ` <div class="card" style="width: 18rem">
                        <img src="${item.image}"
                            class="card-img-top card__img " alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">${item.title.slice(
                              0,
                              10
                            )}</h5>
                            <p class="card-text">
                              ${item.description.slice(0, 48)}
                            </p>
                            <div class="d-flex justify-content-between mt-2"><span class="card__see"><i
                                        class="bi bi-eye"></i> ${
                                          item.rating.count
                                        }</span>
                                <span>
                                ${
                                  item.rating.rate - 1 > 0
                                    ? '<i class="bi bi-star-fill"></i>'
                                    : item.rating.rate - 0 > 0
                                    ? '<i class="bi bi-star-half"></i>'
                                    : ' <i class="bi bi-star"></i>'
                                }
                                ${
                                  item.rating.rate - 2 > 0
                                    ? '<i class="bi bi-star-fill"></i>'
                                    : item.rating.rate - 1 > 0
                                    ? '<i class="bi bi-star-half"></i>'
                                    : ' <i class="bi bi-star"></i>'
                                }
                                ${
                                  item.rating.rate - 3 > 0
                                    ? '<i class="bi bi-star-fill"></i>'
                                    : item.rating.rate - 2 > 0
                                    ? '<i class="bi bi-star-half"></i>'
                                    : ' <i class="bi bi-star"></i>'
                                }
                                ${
                                  item.rating.rate - 4 > 0
                                    ? '<i class="bi bi-star-fill"></i>'
                                    : item.rating.rate - 3 > 0
                                    ? '<i class="bi bi-star-half"></i>'
                                    : ' <i class="bi bi-star"></i>'
                                }
                                ${
                                  item.rating.rate - 5 > 0
                                    ? '<i class="bi bi-star-fill"></i>'
                                    : item.rating.rate - 4 > 0
                                    ? '<i class="bi bi-star-half"></i>'
                                    : ' <i class="bi bi-star"></i>'
                                }
                                ${item.rating.rate}
                                </span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-2">
                                <button class="btn btn-primary">Buy a product</button>
                                <p class="fs-5 fw-bold">$${item.price}</p>
                            </div>
                        </div>
                    </div>`;
    elList.appendChild(newLi);
  });
}
function search_animal() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("products__item");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}
