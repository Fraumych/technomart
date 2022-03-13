
let close = document.querySelector('.contact-close')
let open = document.querySelector('.button-contacts')

open.addEventListener("click", function () {
    if (close.classList.contains("contact-close")) {
        close.classList.remove("contact-close");
        close.classList.add("contact-popup")
    }
}
)

let back = document.querySelector('.button-close');

back.addEventListener("click", function () {
    if (close.classList.contains("contact-popup")) {
        close.classList.remove("contact-popup");
        close.classList.add("contact-close")
    }
}
)

let closeMap = document.querySelector('.map-close');
let openMap = document.querySelector('.map-open');

openMap.addEventListener("click", function () {
    if (closeMap.classList.contains("map-close")) {
        closeMap.classList.remove("map-close");
        closeMap.classList.add("map-popup")
    }
}
)

let backMap = document.querySelector('.button-map-close');

backMap.addEventListener("click", function () {
    if (closeMap.classList.contains("map-popup")) {
        closeMap.classList.remove("map-popup");
        closeMap.classList.add("map-close")
    }
}
)
