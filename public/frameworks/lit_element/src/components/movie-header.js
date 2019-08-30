import {LitElement, css} from "lit-element";
import {html} from "lit-html";

class MovieHeader extends LitElement {
    static get styles() {
        return css`
    :host {
        margin-bottom: 10px;
        background: red;
        display: block;
      }

      :host(.red) ::slotted(h1) {
        color: white;
      }

      ::slotted(nav) {
        display: flex;
        flex-flow: row;
        align-content: center;
      }

      .header__wrapper {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 10px;
        max-width: 87.4375em;
        margin: 0 auto;
      }
      
      .header__navigation {
        display: flex;
        flex-flow: row;
        align-items: center;
    }
    
    .header__navigation li {
        margin-right: 10px;
    }
    
    .header__navigation a {
        color: white;
        text-decoration: none;
        font-size: 1.2em;
    }
    a {
        color: white;
        text-decoration:none;
    }
    .header__logo {
        margin: 0px;
    }
    `;
    }

    render() {
        return html`<header>
            <div class="header__wrapper">
                <a href="/"><slot name="logo"><h1 >Placeholder logo</h1></slot></a>
                <slot name="nav"></slot>
            </div>
        </header>`;
    }
}

customElements.define('movie-header', MovieHeader);
