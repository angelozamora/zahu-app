var modalId = document.querySelector('.modal-body');

var momentsContent = document.getElementById('moments-content');

eventListener();

function eventListener() {

    momentsContent.addEventListener('click', iniciarModal);

}

function iniciarModal(e) {
    e.preventDefault();

    if (e.target.classList.contains('imagen')) {
        let img = e.target.getAttribute('src');
        modalId.innerHTML = `
        <div class="modal-body-div">
            <img src="${img}" alt="" class="imagen-modal">
        </div>`;
    }
}