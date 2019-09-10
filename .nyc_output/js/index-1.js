window.customElements.define('gw-header',
  class GwHeader extends HTMLElement{
    constructor(){
      super();
    }

    connectedCallback(){
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(this.style);
      shadowRoot.appendChild(this.content);
    }

    get style(){
      let style = document.createElement('style');
      style.innerHTML = `
        header{
          background-color: green;
          color: white;
          padding: 1em;
          font-size: 2em;
          font-family: sans-serif;
        }

        .logo-first{
          font-weight: bolder;
        }

        .logo-second{
          font-weight: lighter;
          font-style: italic;
          color: #ccc;
        }
      `;
      return style;
    }

    get content(){
      let header = document.createElement('header');
      header.innerHTML = `
        <span class="logo-first">Grocery</span>
        <span class="logo-second">Works</span>
      `;
      return header;
    }
  }
);
