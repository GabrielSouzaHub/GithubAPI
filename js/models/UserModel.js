class UserModel {
    constructor() {
        this._userName = "";
        this._userLogin = "";
        this._userAvatar = "";
        this._userUrl = "";
        this._reposUrl = "";
        this._reposModelUrl = "";
    }
    searchInfoUser(user,callback) {
        let request = new XMLHttpRequest();
        request.open("GET", `https://api.github.com/users/${user}`);
        request.addEventListener("load", ()=>{
            if(request.status==200){
                let response = JSON.parse(request.responseText);
                this._userName = response.name;
                this._userLogin = user;
                this._userAvatar = response.avatar_url;
                this._userUrl = response.html_url;
                this._reposUrl = `https://github.com/${user}?tab=repositories`;
                this._reposModelUrl = response.repos_url;
                callback();
            }else if(request.status==404){
                alert("Usuário inválido!");
            }
        })
        request.send();
    }
}