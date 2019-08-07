'use strict'

class LoginModal extends HTMLDivElement {
  constructor() {
    super(); 
  }
  connectedCallback() {
    let shadowRoot = this.attachShadow({mode: 'open'})
    this.initTemplate(shadowRoot);
    let openerElem = shadowRoot.querySelector('.login-modal-opener');
    openerElem.addEventListener('click', e => {
      this.openModal(shadowRoot);
    });

    let backgroundElem = shadowRoot.querySelector('.login-modal-popup-background');
    backgroundElem.addEventListener('click', e => {
      e.stopPropagation();
      this.closeModal(shadowRoot);
    });

    let popupElem = shadowRoot.querySelector('.login-modal-popup');
    popupElem.addEventListener('click', e => {
      e.stopPropagation();
    });

  }
  openModal(shadowRoot) {
    let backgroundElem = shadowRoot.querySelector('.login-modal-popup-background');
    if(backgroundElem.classList.contains('hidden')){
      backgroundElem.classList.remove('hidden');
    }
  }
  closeModal(shadowRoot) {
    let backgroundElem = shadowRoot.querySelector('.login-modal-popup-background');
    if(!backgroundElem.classList.contains('hidden')){
      backgroundElem.classList.add('hidden');
    }
  }

  initTemplate(shadowRoot) {
    let template = document.createElement('template');
    template.innerHTML = `
                          <link rel="stylesheet" href="/components/LoginModal/LoginModal.css">
                          <link rel="stylesheet" href="common.css">

                          <p class="login-modal-opener">Click here to login</p>
                          <div class="dark-shadow cover-screen hidden login-modal-popup-background ">
                              <div class="login-modal-popup">
                                      <h1 class="login-modal-header">Login to "Demo Shop"</h1>
                                      <form class="login-modal-form">
                                          <div class="login-modal-login-wrapper">
                                              <label for="login" class="login-modal-label">Your Login:</label>
                                              <input class="login-modal-login standart-input" id="login" placeholder="Enter your Login..." required maxlength="10" minlength="3" type="text">
                                          </div>
                                          <div class="login-modal-password-wrapper">
                                              <label for="password" class="login-modal-label">Your Password:</label>
                                              <input class="login-modal-password standart-input" id="password" placeholder="Enter your Password..." required minlength="5" type="password">
                                          </div>                    
                                          <div class="login-modal-submit-wrapper">
                                              <input class="login-modal-submit rectangle-button" type="submit" onclick="return false;" value="Submit">
                                          </div>
                                      </form>     
                              </div>
                          </div>  
                        `;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('login-modal', LoginModal, {extends: "div"});