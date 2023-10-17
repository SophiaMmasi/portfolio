var form = document.querySelector(".form");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.loginForm.name.value;
    var password = document.loginForm.password.value;

    if(name == 0) {
        alert("Must put your name");
    } else if (password.length < 4 ) {
        alert("weak password");
    } else {
        // document.writeln("Successefull");
        // Redirect to a new page
    window.location.href = "http://127.0.0.1:5501/success.html";

    }
})


