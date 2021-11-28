const loginForm = document.querySelector("#login-form");
const loginFormInput = document.querySelector("#login-form input");
const button = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function btnClick(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginFormInput.value;
    localStorage.setItem("username", username);
    paintGreetings(username);
}


function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Today is good day, ${username}`;
}

const savedUsername = localStorage.getItem("username");

if(savedUsername == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    button.addEventListener("click", btnClick);
}

else{
    paintGreetings(savedUsername);
}
