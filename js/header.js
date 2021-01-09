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
    let urlFilter2 = urlFilter.split('-');
    console.log("URL FILTER 2");
    console.log(urlFilter2);

    let url = document.getElementById(`${urlFilter2[0]}`);
    console.log("URL FILTER 0");
    console.log(`${urlFilter2[0]}`);
    let urlMovil = document.getElementById(`${urlFilter2[0]}-movil`)

    url.classList.add('activar');
    urlMovil.classList.add('activar');


}