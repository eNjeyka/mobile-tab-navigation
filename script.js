let imgs = document.querySelectorAll("img");
let nav = document.querySelectorAll("li");

nav.forEach((elem, i) => {
    elem.addEventListener('click', () => {
        clearShow()
        imgs[i].classList.add('show')
        elem.classList.add('active')
    })
});

function clearShow () {
    imgs.forEach(img => {
        img.classList.remove("show")
    })

    nav.forEach(elem => {
        elem.classList.remove("active")
    })
}