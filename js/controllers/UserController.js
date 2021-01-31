class UserController {
    searchUser(user) {
        let userModel = new UserModel();
        userModel.searchInfoUser(user, () => new UserView(userModel._userName,userModel._userLogin,userModel._userAvatar,userModel._userUrl,userModel._reposUrl))
    }
}

let button = document.querySelector('#searchUserButton');
button.addEventListener("click", () => {
    let user = document.querySelector('#searchUser').value;
    let userController = new UserController();
    userController.searchUser(user);
});