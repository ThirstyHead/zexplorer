window.customElements.define('ze-hue-v1-sidebar',
  class ZeHueV1Sidebar extends HTMLElement{
    constructor(){
      super();
    }

    connectedCallback(){
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(this.style);
      shadowRoot.appendChild(this.content);

      //set open sidebar topic
      if(this.open){
        this.openSidebar(this.open);
      }
    }

    get baseUrl(){
      return '/hue-v1';
    }

    get open(){
      return this.getAttribute('open');
    }

    set open(liNumber){
      this.setAttribute('open', liNumber);
    }

    openSidebar(liNumber){
      let lis = this.shadowRoot.querySelectorAll('ol li');
      let index = liNumber - 1;
      console.log(index);
      lis[index].querySelector('details').setAttribute('open', '');
    }
    
    
    get style(){
      let style = document.createElement('style');
      style.innerHTML = `
        .lesson{
          padding-left: 2em;
        }
      `;
      return style;
    }

    get content(){
      let section = document.createElement('section');
      section.classList.add('sidebar');
      section.innerHTML = `
        <ol>
          <li>
            <details>
              <summary>Reference</summary>
                <div class="lesson">
                  <a href='https://developers.meethue.com/develop/get-started-2/'>Getting Started</a><br>
                </div>
                <div class="lesson">
                  <a href='https://developers.meethue.com/develop/hue-api/'>Hue v1 Docs</a><br>
                </div>
              </details>
          </li>
          <li>
            <details>
              <summary>Examples</summary>
                <div class="lesson">
                  <a href='${this.baseUrl}/examples/bridges'>Bridges</a><br>
                </div>
                <div class="lesson">
                  <a href='${this.baseUrl}/examples/rooms'>Rooms</a><br>
                </div>
                <div class="lesson">
                  <a href='${this.baseUrl}/examples/lights'>Lights</a><br>
                </div>
              </details>
          </li>


        </ol>

      `;
      return section;
    }
  }
);
