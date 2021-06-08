import restaurant from "../../DATA.json";
const restaurantMenu = restaurant.restaurants;

const mainContent = document.createElement("main-content");
mainContent.restaurants = restaurantMenu;

const body = document.getElementById("main-content");
body.appendChild(mainContent);
console.log(restaurantMenu[1].id);
class MainContent extends HTMLElement {
  set restaurants(restaurant) {
    this.restaurants = restaurant;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.restaurants.forEach((restaurant, index) => {
      this.innerHTML += `
            <div class="card" tabindex="7">
            <img src=${restaurant.pictureId} alt=${restaurant.name} />
            <div class="card-meta">
            <div>
            <h1>${restaurant.name}</h1>
            <h2>${restaurant.city}</h2>
            </div>
               
                <div class="rating">
                <img src="/images/star.png" alt="star" />
                <h3>${restaurant.rating}</h3>
                </div>
               
                <p class="truncate">${restaurant.description.slice(
                  0,
                  100
                )}...</p>
            </div>   
            </div>
            `;
    });
  }
}

customElements.define("main-content", MainContent);
