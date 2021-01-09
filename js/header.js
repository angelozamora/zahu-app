let header = document.getElementById('header-content');

eventListener();

function eventListener() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
}

function iniciarApp(e) {
    e.preventDefault();


    var dato = window.location.pathname;
    console.log("PATHNAME");
    console.log(dato);
    let idUrl = window.location.pathname.substring(1, dato.length - 5);
    console.log("ID URL");
    console.log(idUrl);
    let urlFilter = idUrl.split('/');
    console.log("URL FILTER");
    console.log(urlFilter);

    let url = document.getElementById(`${urlFilter[1]}`);
    console.log("URL FILTER 1");
    console.log(`${urlFilter[1]}`);
    let urlMovil = document.getElementById(`${urlFilter[1]}-movil`)

    url.classList.add('activar');
    urlMovil.classList.add('activar');


}