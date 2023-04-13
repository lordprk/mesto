export default class UserInfo{
    constructor({name, info}){
        this._name = document.querySelector(name);
        this._info = document.querySelector(info);
    }
//возвращает объект с данными пользователя. 
// Этот метод пригодится когда данные пользователя нужно 
//будет подставить в форму при открытии.
    getUserInfo(){
        this._userInfo = {};
        this._userInfo.name = this._name.textContent;
        this._userInfo.info = this._info.textContent;

        return this._userInfo
    }

//принимает новыые данные пользователя и добавляет
//их на страницу
    setUserInfo({name, caption}){
        this._name.textContent = name;
        this._info.textContent = caption
    }
}