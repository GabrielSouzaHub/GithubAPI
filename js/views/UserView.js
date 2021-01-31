class UserView {
    constructor(name,login,avatar,userUrl,repoUrl) {
        let $ = document.querySelector.bind(document);
        this._imgUser = $('#user-img').setAttribute('src', avatar);
        this._pUserName = $('#user-name').innerText = name;
        this._pUserLogin = $('#user-login').innerText = login;
        this._pUserUrl = $('#user-url').setAttribute('href', userUrl);
        $('#user-urlP').classList.remove('invisible');
        this._pUserRepoUrl = $('#userRepo-url').setAttribute('href', repoUrl);
        $('#userRepo-urlP').classList.remove('invisible');
    }
}