class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer tabindex="8">
          <ul>
            <li><span>Copyright © 2021 Ziva Restaurant</span></li>
            <li><span>Yogi Surya Pranata</span></li>
          </ul>
        </footer>
      `;
  }
}

customElements.define("footer-custom", Footer);
