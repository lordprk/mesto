(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._popupCloseBtn=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var n,r;return n=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),window.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),window.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_addPopupCloser",value:function(){var e=this;this._popupCloseBtn.addEventListener("click",(function(){e.close()}))}},{key:"_addEmptySpaceCloser",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}},{key:"setEventListeners",value:function(){this._addPopupCloser(),this._addEmptySpaceCloser()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(){return o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=i(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},o.apply(this,arguments)}function i(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function s(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(f,e);var t,n,i,u,l=(i=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=c(i);if(u){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=l.call(this,e))._popupImageShowPicture=t._popup.querySelector(".popup__image"),t._popupImageShowText=t._popup.querySelector(".popup__text"),t}return t=f,(n=[{key:"open",value:function(e,t){o(c(f.prototype),"open",this).call(this),this._popupImageShowPicture.src=e,this._popupImageShowPicture.alt="место в ".concat(t),this._popupImageShowText.textContent=t}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(t);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function d(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._submitButton=t._popup.querySelector(".popup__button"),t}return t=a,(n=[{key:"getSubmitter",value:function(e){this._submitter=e}},{key:"setEventListeners",value:function(){var e=this;p(_(a.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener("click",(function(){console.log("Da"),e._submitter()}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(t);function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._token=t.headers.authorization,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"patchUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"postNewCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"removeMyCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"increaseLike",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers,body:JSON.stringify({likes:t})}).then(this._checkResponse)}},{key:"decreaseLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"setAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._checkResponse)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._about=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._name.textContent,e.about=this._about.textContent,e}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._name.textContent=t,this._about.textContent=n}},{key:"setAvatarSrc",value:function(e){var t=e.avatar;this._avatar.src=t}},{key:"getUserId",value:function(){return this._id}},{key:"setUserId",value:function(e){var t=e._id;this._id=t}}],n&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){var n=t._renderer(e);t.addItem(n)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this.submitButtonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"disableBtn",value:function(){this.submitButtonElement.classList.add(this._inactiveButtonClass),this.submitButtonElement.setAttribute("disabled","disabled")}},{key:"_activateBtn",value:function(){this.submitButtonElement.classList.remove(this._inactiveButtonClass),this.submitButtonElement.removeAttribute("disabled")}},{key:"_isValid",value:function(){return this._inputList.every((function(e){return e.validity.valid}))}},{key:"_showInputError",value:function(e){document.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage,e.classList.add(this._inputErrorClass),this.disableBtn()}},{key:"_hideInputError",value:function(e){document.querySelector("#".concat(e.id,"-error")).textContent="",e.classList.remove(this._inputErrorClass),this._isValid()&&this._activateBtn()}},{key:"_handleInput",value:function(e){e.validity.valid&&this._hideInputError(e),e.validity.valid||this._showInputError(e)}},{key:"_setValidation",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._handleInput(t)}))}))}},{key:"enableValidation",value:function(){this._setValidation()}},{key:"resetValidation",value:function(){var e=this;this.disableBtn(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function I(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupForm=n._popup.querySelector(".popup__form"),n._submitter=t,n._popupFormInputs=Array.from(n._popup.querySelectorAll(".popup__input")),n._submitButton=n._popup.querySelector(".popup__button"),n}return t=a,(n=[{key:"changeText",value:function(e){this._submitButton.textContent=e}},{key:"getNewSubmitter",value:function(e){this._submitter=e}},{key:"getInputValues",value:function(){var e=this;return this._formValues={},this._popupFormInputs.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._popupFormInputs.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;j(R(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitter()}))}},{key:"close",value:function(){j(R(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(t);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t,n,r,o,i,a,s){var c=t.name,u=t.link,l=t.likes,f=t._id,p=t.owner;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=c,this._link=u,this._likes=l.length,this._likesArr=l,this._id=f,this._ownerId=p._id,this._myId=r,this._card=document.querySelector(n).content.querySelector(".cards-list__card-container").cloneNode(!0),this._image=this._card.querySelector(".cards-list__card-image"),this._subname=this._card.querySelector(".cards-list__name"),this._likeBtn=this._card.querySelector(".cards-list__like"),this._trashBtn=this._card.querySelector(".cards-list__card-bin"),this._likesElement=this._card.querySelector(".cards-list__like-counter"),this._handleCardClick=o,this._handleDeleteClick=i,this._plusLikeClick=a,this._minusLikeClick=s}var t,n;return t=e,(n=[{key:"_setImageClickListener",value:function(){this._image.addEventListener("click",this._handleCardClick)}},{key:"_setTrashBtnListener",value:function(){var e=this;this._trashBtn.addEventListener("click",(function(){e._handleDeleteClick(e._id)}))}},{key:"_setLikeBtnListener",value:function(){var e=this;this._likeBtn.addEventListener("click",(function(){e._likeBtn.classList.contains("cards-list__like_active")?e._likeBtn.classList.contains("cards-list__like_active")&&e._minusLikeClick(e._id):e._plusLikeClick(e._id)}))}},{key:"_setEventListeners",value:function(){this._setImageClickListener(),this._setTrashBtnListener(),this._setLikeBtnListener()}},{key:"toggleLikeBtn",value:function(){this._likeBtn.classList.toggle("cards-list__like_active")}},{key:"removeCard",value:function(){this._card.remove(),this._card=null}},{key:"_handleDeleteBtnState",value:function(){this._ownerId!==this._myId&&this._trashBtn.classList.add("cards-list__card-bin_hidden")}},{key:"setLikes",value:function(e){this._likes=e.length,this._likesElement.textContent=this._likes}},{key:"_checkLikes",value:function(){var e=this;this._likesArr.forEach((function(t){t._id===e._myId&&e._likeBtn.classList.add("cards-list__like_active")}))}},{key:"formCard",value:function(){return this._image.src=this._link,this._subname.textContent=this._name,this._image.alt="Изображение места в ".concat(this._name),this._likesElement.textContent=this._likes,this._checkLikes(),this._handleDeleteBtnState(),this._setEventListeners(),this._card}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e){var t=new x(e,"#card",D.getUserId(),(function(t){A.open(e.link,e.name)}),(function(e){z.open(),z.getSubmitter((function(){V.removeMyCard(e).then((function(e){t.removeCard(),z.close()})).catch((function(e){console.log(e)}))}))}),(function(n){V.increaseLike(n,e.likes).then((function(e){t.setLikes(e.likes),t.toggleLikeBtn()})).catch((function(e){console.log(e)}))}),(function(e){V.decreaseLike(e).then((function(e){t.setLikes(e.likes),t.toggleLikeBtn()})).catch((function(e){console.log(e)}))}));return t.formCard()}var A=new u(".popup_type_show-image"),V=new m({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-63",headers:{authorization:"671d21ec-3690-46e2-9f78-45e9461232b9","Content-Type":"application/json"}}),D=new g(".profile__person",".profile__job",".profile__avatar"),N=new E({items:[],renderer:function(e){return U(e)}},".cards-list"),F=new T(".popup_type_card-add",(function(){F.changeText("Сохранение...");var e=F.getInputValues();V.postNewCard(e).then((function(e){var t=U(e);N.addItem(t),F.close()})).catch((function(e){console.log(e)})).finally((function(){F.changeText("Сохранить")}))})),J=new T(".popup_type_profile-edit",(function(e){J.changeText("Сохранение...");var t=J.getInputValues();V.patchUserInfo(t).then((function(e){D.setUserInfo(e),J.close()})).catch((function(e){console.log(e)})).finally((function(){J.changeText("Сохранить")}))})),M=new T(".popup_type_avatar-save",(function(e){M.changeText("Сохранение...");var t=M.getInputValues();V.setAvatar(t).then((function(e){D.setAvatarSrc(e),M.close()})).catch((function(e){console.log(e)})).finally((function(){M.changeText("Сохранить")}))})),z=new v(".popup_type_confirm"),H={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_error"},$=document.querySelector(".popup_type_card-add .popup__form"),G=document.querySelector(".popup_type_profile-edit .popup__form"),K=document.querySelector(".popup_type_avatar-save .popup__form"),Q=new O(H,G),W=new O(H,$),X=new O(H,K),Y=document.querySelector(".profile__edit"),Z=document.querySelector(".profile__add-button"),ee=document.querySelector(".profile__avatar-update");function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}A.setEventListeners(),J.setEventListeners(),F.setEventListeners(),z.setEventListeners(),M.setEventListeners(),Z.addEventListener("click",(function(){F.open(),W.resetValidation()})),Y.addEventListener("click",(function(){J.open();var e=D.getUserInfo();J.setInputValues(e)})),ee.addEventListener("click",(function(){M.open(),X.resetValidation()})),Q.enableValidation(),W.enableValidation(),X.enableValidation(),Promise.all([V.getProfile(),V.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];D.setUserInfo(o),D.setAvatarSrc(o),D.setUserId(o),N.renderItems(i)})).catch((function(e){console.log(e)}))})();