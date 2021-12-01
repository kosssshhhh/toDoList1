const loginForm = document.querySelector("#login-form");
const loginFormInput = document.querySelector("#login-form input");
const button = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector(".logout-button");


const HIDDEN_CLASSNAME = "hidden";

function btnClick(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginFormInput.value;
    localStorage.setItem("username", username);
    paintGreetings(username);
}

function logoutBtnClick(){

}


function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Today is good day, ${username}`;
    logoutButton.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem("username");

if(savedUsername == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    button.addEventListener("click", btnClick);
}

else{
    paintGreetings(savedUsername);
}

logoutButton.addEventListener("click", logoutBtnClick);
