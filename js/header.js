let header = document.getElementById('header-content');

eventListener();

function eventListener() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
}

function iniciarApp(e) {
    e.preventDefault();


    var dato = window.location.pathname;

    let idUrl = window.location.pathname.substring(1, dato.length - 5);
    let urlFilter = idUrl.split('/');
    let urlFilter2 = urlFilter[1].split('-');


    let url = document.getElementById(`${urlFilter2[0]}`);
    let urlMovil = document.getElementById(`${urlFilter2[0]}-movil`)

    url.classList.add('activar');
    urlMovil.classList.add('activar');


}