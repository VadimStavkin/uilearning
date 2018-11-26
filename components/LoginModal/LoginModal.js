'use strict'
const currentDocument = document.currentScript.ownerDocument;

const loginDefaultClass = 'login-modal-login-icon-inactive';
const loginInvalidClass = 'login-modal-login-icon-invalid';
const loginActiveClass = 'login-modal-login-icon-active';

const passwordDefaultClass = 'login-modal-password-icon-inactive';
const passwordInvalidClass = 'login-modal-password-icon-invalid';
const passwordActiveClass = 'login-modal-password-icon-active';


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

    let loginElem = this.shadowRoot.querySelector('.login-modal-login');
    loginElem.addEventListener('click', e =>{
      this.setLoginIconInvalid();
      e.stopPropagation();
    });
    loginElem.addEventListener('keypress', e =>{
      this.setLoginIconInvalid();
    });
    loginElem.addEventListener('focus', e =>{
      this.setLoginIconOnFocus();
    });
    loginElem.addEventListener('blur', e =>{
      this.setLoginIconOnBlur();
    });

    let passwordElem = this.shadowRoot.querySelector('.login-modal-password');
    passwordElem.addEventListener('click', e =>{
      this.setPasswordIconInvalid();
      e.stopPropagation();
    });
    passwordElem.addEventListener('keypress', e =>{
      this.setPasswordIconInvalid();
    });
    passwordElem.addEventListener('focus', e =>{
      this.setPasswordIconOnFocus();
    });
    passwordElem.addEventListener('blur', e =>{
      this.setPasswordIconOnBlur();
    });

  }
  setLoginIconInvalid() {
    let loginElem = this.shadowRoot.querySelector('.login-modal-login');
    let loginIconElem = this.shadowRoot.querySelector('.login-modal-login-icon');

    if(loginElem.checkValidity() === false){
      loginIconElem.classList.add(loginInvalidClass);
    }
    else{
      loginIconElem.classList.remove(loginInvalidClass);
    }
  }
  setLoginIconOnFocus(){
    let loginElem = this.shadowRoot.querySelector('.login-modal-login');
    let loginIconElem = this.shadowRoot.querySelector('.login-modal-login-icon');

    if(loginElem.checkValidity() === false){
      loginIconElem.classList.add(loginInvalidClass);
    }
    else{
      loginIconElem.classList.remove(loginInvalidClass);
    }

    loginIconElem.classList.add(loginActiveClass);
    loginIconElem.classList.remove(loginDefaultClass);
  }
  setLoginIconOnBlur(){
    let loginElem = this.shadowRoot.querySelector('.login-modal-login');
    let loginIconElem = this.shadowRoot.querySelector('.login-modal-login-icon');

    loginIconElem.classList.remove(loginInvalidClass);

    loginIconElem.classList.add(loginDefaultClass);
    loginIconElem.classList.remove(loginActiveClass);
  }

  setPasswordIconInvalid() {
    let passwordElem = this.shadowRoot.querySelector('.login-modal-password');
    let passwordIconElem = this.shadowRoot.querySelector('.login-modal-password-icon');

    if(passwordElem.checkValidity() === false){
      passwordIconElem.classList.add(passwordInvalidClass);
    }
    else{
      passwordIconElem.classList.remove(passwordInvalidClass);
    }
  }
  setPasswordIconOnFocus(){
    let passwordElem = this.shadowRoot.querySelector('.login-modal-password');
    let passwordIconElem = this.shadowRoot.querySelector('.login-modal-password-icon');

    if(passwordElem.checkValidity() === false){
      passwordIconElem.classList.add(passwordInvalidClass);
    }
    else{
      passwordIconElem.classList.remove(passwordInvalidClass);
    }

    passwordIconElem.classList.add(passwordActiveClass);
    passwordIconElem.classList.remove(passwordDefaultClass);
  }
  setPasswordIconOnBlur(){
    let passwordElem = this.shadowRoot.querySelector('.login-modal-password');
    let passwordIconElem = this.shadowRoot.querySelector('.login-modal-password-icon');

    passwordIconElem.classList.remove(passwordInvalidClass);

    passwordIconElem.classList.add(passwordDefaultClass);
    passwordIconElem.classList.remove(passwordActiveClass);
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