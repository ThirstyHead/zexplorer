window.customElements.define('ze-header',
  class ZeHeader extends HTMLElement{
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
          display: flex;
          flex-flow: row wrap;
          align-items: flex-end;
          padding: 1em;
          background-color: var(--page-header-background-color);
          color: var(--page-header-color);
          border-bottom: 1px solid var(--divider-color);
        }

        a{
          color: var(--page-header-color);
          text-decoration: none;
        }

        a:hover{
          border-bottom: 2px solid var(--accent-color);
        }

        nav{
          margin-left: auto;
        }

        ul{
          list-style-type: none;
          margin: 0;
        }

        li{
          display: inline-block;
          padding-left: 3em;
          font-family: sans-serif;
          font-size: 1em;
          text-transform: lowercase;
        }

        .accent{
          color: var(--accent-color);
        }

        .brand{
          font-family: sans-serif;
          font-size: 1em;
          text-transform: lowercase;
        }
      `;
      return style;
    }

    get content(){
      let header = document.createElement('header');
      header.innerHTML = `
        <div class="brand">
          <a href="/">ZExplorer</a>
        </div>

        <nav>
          <ul>
            <li><a href="/v1">v1</a></li>
            <li><a href="/v2">v2</a></li>
          </ul>
        </nav>
      `;
      return header;
    }
  }
);
