class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav id="drawer" class="nav" tabindex="2">
        <ul class="nav__list">
            <li class="nav__item"><a href="/" tabindex="3">Home</a></li>
            <li class="nav__item"><a href="#" tabindex="4">Favorite</a></li>
            <li class="nav__item"><a href="https://github.com/JenabB" tabindex="5" target="_blank" rel="noopener">About Us</a></li>
        </ul>
    </nav>
      `;
  }
}

customElements.define("app-bar", AppBar);
