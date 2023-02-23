var  users = Helper.getUsersFromLocalStorage();

function logiUser(){
    let user = document.getElementById('email');
    let pass = document.getElementById('password');

    let user1 = new User(user.value, pass.value);
    let login = user1.login(users)
    if( login != true){
        alert(login);
    }else{
        window.location.href ="register.html";
    }
    
}