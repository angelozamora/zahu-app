let user = document.getElementById('user');
let password = document.getElementById('password');

let datosVacio = document.getElementById('datos-vacio');
let datosError = document.getElementById('datos-error');




function pulsar(e) {

    if (e.keyCode === 13) {
        e.preventDefault();
        login();
    }
}

function login() {

    let userLog = user.value;
    let passLog = password.value;


    if (userLog != '' && passLog != '') {
        if (userLog == 'zahu05' && passLog == 'zahu05') {
            window.location = "home.html"
        } else {
            datosError.style.display = "block"

            setTimeout(function() {
                datosError.style.display = "none"
            }, 3500);
        }

    } else {
        datosVacio.style.display = "block"

        setTimeout(function() {
            datosVacio.style.display = "none"
        }, 3500);
    }

}