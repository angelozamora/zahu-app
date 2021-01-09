let header = document.getElementById('header-content');

eventListener();

function eventListener() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
}

function iniciarApp(e) {
    e.preventDefault();


    var dato = window.location.pathname;
    let idUrl = window.location.pathname.substring(1, dato.length - 5);
    let urlFilter = idUrl.split('-');

    let url = document.getElementById(`${urlFilter[0]}`);
    let urlMovil = document.getElementById(`${urlFilter[0]}-movil`)

    url.classList.add('activar');
    urlMovil.classList.add('activar');


}