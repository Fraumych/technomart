
let contacts = document.querySelector('.contacts-popup',);
let openContacts = document.querySelector('.button-contacts');
let closeContacts = document.querySelector('.button-close');

openContacts.addEventListener("click", function () {
        contacts.classList.add("contact-popup")
});

closeContacts.addEventListener("click", function () {
        contacts.classList.remove("contact-popup");
});


let maps = document.querySelector('.maps-popup');
let openMap = document.querySelector('.map-open');
let closeMap = document.querySelector('.button-map-close');

openMap.addEventListener("click", function () {
        maps.classList.add("map-popup")
});

closeMap.addEventListener("click", function () {
        maps.classList.remove("map-popup"); 
});


let deliveryButton = document.querySelector('.delivery-button');
let guaranteeButton = document.querySelector('.guarantee-button');
let creditButton = document.querySelector('.credit-button');
let activeServiceButton = document.querySelector('.active');

let infoDelivery = document.querySelector('.service-delivery');
let infoGuarantee = document.querySelector('.service-guarantee');
let infoCredit = document.querySelector('.service-credit');
let infoClose = document.querySelector('.service-info-close');


deliveryButton.addEventListener("click", function () {
    deliveryButton.classList.add("active");
    guaranteeButton.classList.remove("active");
    creditButton.classList.remove("active");

    infoDelivery.classList.remove("service-info-close");
    infoGuarantee.classList.add("service-info-close");
    infoCredit.classList.add("service-info-close");
})

guaranteeButton.addEventListener("click", function () {
    guaranteeButton.classList.add("active");
    deliveryButton.classList.remove("active");
    creditButton.classList.remove("active");

    infoGuarantee.classList.remove("service-info-close");
    infoDelivery.classList.add("service-info-close");
    infoCredit.classList.add("service-info-close");
})

creditButton.addEventListener("click", function () {
    creditButton.classList.add("active");
    deliveryButton.classList.remove("active");
    guaranteeButton.classList.remove("active");

    infoCredit.classList.remove("service-info-close");
    infoGuarantee.classList.add("service-info-close");
    infoDelivery.classList.add("service-info-close");
})

