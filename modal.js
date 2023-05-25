const contactModal = document.querySelector(".contact-us-modal-wrapper");
const openModalBtn1 = document.querySelector("#open-modal1");
const openModalBtn2 = document.querySelector("#open-modal2");
const modalCloseImg = document.querySelector('.modal-close');

openModalBtn1.addEventListener('click', () => {
    contactModal.style.display = "block"
})

openModalBtn2.addEventListener('click', () => {
    contactModal.style.display = "block"
})

window.onclick = (e) => {
    if (e.target == contactModal){
        contactModal.style.display = "none";
    }
}

modalCloseImg.addEventListener('click', () => {
    contactModal.style.display = "none";
})

