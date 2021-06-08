class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div>
       <div class="container">
        <h1 class="hero__title">Ziva Restaurant</h1>
          <p class="hero__tagline">various kinds of restaurant catalogs from various places</p>
          <a href="#main-content" class="btn" tabindex="6">Let's Check!</a>
       </div>
        </div>
      `;
  }
}

customElements.define("hero-custom", Hero);
