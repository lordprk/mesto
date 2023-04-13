import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super (popupSelector)
        this._popupImageShowPicture = this._popup.querySelector('.popup-image__foto');
        this._popupImageShowText = this._popup.querySelector('.popup-image__sign');
    }
    open (title, src) {
        super.open();
        this._popupImageShowPicture.src = src;
        this._popupImageShowPicture.alt = title;
        this._popupImageShowText.textContent = title;
    }
}

