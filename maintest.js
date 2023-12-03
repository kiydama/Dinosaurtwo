
document.addEventListener("DOMContentLoaded", () => {
    const LoginForm = document.querySelector("#loginfm");
    const signup = document.querySelector("#s-up");

    

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
    e.preventDefault();
    LoginForm.classList.add("login-form--hidden");
    signup.classList.remove("login-form--hidden");
    });

    document.querySelector("#HaveAccount").addEventListener("click", e =>{
    e.preventDefault();
     LoginForm.classList.remove("login-form--hidden");
     signup.classList.add("login-form--hidden");

    });


});