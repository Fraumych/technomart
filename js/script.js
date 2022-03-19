
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
