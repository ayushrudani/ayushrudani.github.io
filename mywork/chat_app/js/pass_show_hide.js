const pswrdFileld = document.querySelector(".form  input[type='password']"),
    toggleBtn = document.querySelector(".form .field i");


toggleBtn.addEventListener("click", function() {
    if (pswrdFileld.type === "password") {
        pswrdFileld.type = "text";
        toggleBtn.classList.add("fa-eye-slash");
        toggleBtn.classList.remove("fa-eye");
        toggleBtn.style.color = "#000";
    } else {
        pswrdFileld.type = "password";
        toggleBtn.classList.add("fa-eye");
        toggleBtn.classList.remove("fa-eye-slash");
        toggleBtn.style.color = "#CCC";
    }
});