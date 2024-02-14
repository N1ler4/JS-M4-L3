let cardsContainers = document.querySelectorAll(".cards");

for (let i = 0; i < cardsContainers.length; i++) {
  for (let j = 1; j < 9; j++) {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
          <div class="card-image">
              <img src="./004 1.png" alt="" />
          </div>
          <div class="card-text" style="">
              <div class="text-flex">
                  <div>
                      <span>Pokemons</span>
                      <p>Grass, Poison</p>
                  </div>
                  <button><img src="./Mask.svg" alt="" /></button>
              </div>
              <div class="info">
                  <span>6.9 kg</span>
                  <span>99 age</span>
              </div>
          </div>
      `;

    cardsContainers[i].appendChild(card);
  }
}

let menuCardsContainers = document.querySelectorAll(".menu-cards");

for (let i = 0; i < menuCardsContainers.length; i++) {
  for (let j = 0; j < 2; j++) {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
          <div class="card-image">
              <img src="./004 1.png" alt="" />
          </div>
          <div class="card-text">
              <div class="text-flex">
                  <div>
                      <span>Pokemons</span>
                      <p>Grass, Poison</p>
                  </div>
                  <button><img src="./trash.png" alt="" /></button>
              </div>
              <div class="info">
                  <span>6.9 kg</span>
                  <span>99 age</span>
              </div>
          </div>
      `;

    menuCardsContainers[i].appendChild(card);
  }
}

let menu = document.querySelectorAll(".burger-menu");
let menuTwo = document.querySelector(".menu");
let body = document.querySelectorAll("body");


function menuWork() {
    menu.forEach(item => {
      item.addEventListener("click", () => {
        if (menuTwo.classList.contains("menu-none")) {
          menuTwo.classList.remove("menu-none");
          document.body.style.overflowY = 'hidden';
          document.body.style.overflowX = 'hidden';
          document.body.style.marginRight = '15px';
        } else {
          menuTwo.classList.add("menu-none");
          document.body.style.overflowY = 'auto';
          document.body.style.overflowX = 'auto';
          document.body.style.marginRight = '0';
        }
      });
    });
  }

menuWork();
