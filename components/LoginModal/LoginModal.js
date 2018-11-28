'use strict'
const currentDocument = document.currentScript.ownerDocument;


class LoginModal extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    const template = currentDocument.querySelector('#login-modal-template');
    const instance = template.content.cloneNode(true);
    shadowRoot.appendChild(instance);

    let openerElem = this.shadowRoot.querySelector('.login-modal-opener');
    openerElem.addEventListener('click', e => {
      this.openModal();
    });

    let backgroundElem = this.shadowRoot.querySelector('.login-modal-popup-background');
    backgroundElem.addEventListener('click', e => {
      e.stopPropagation();
      this.closeModal();
    });

    let popupElem = this.shadowRoot.querySelector('.login-modal-popup');
    popupElem.addEventListener('click', e => {
      e.stopPropagation();
    });

  }
  openModal() {
    let backgroundElem = this.shadowRoot.querySelector('.login-modal-popup-background');
    if(backgroundElem.classList.contains('hidden')){
      backgroundElem.classList.remove('hidden');
    }
  }
  closeModal() {
    let backgroundElem = this.shadowRoot.querySelector('.login-modal-popup-background');
    if(!backgroundElem.classList.contains('hidden')){
      backgroundElem.classList.add('hidden');
    }
  }
}
customElements.define('login-modal', LoginModal);