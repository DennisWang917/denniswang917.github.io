const body = document.body;
let lastscroll = 0;

window.addEventListener('scroll', ()=>{
    const cunrrentscroll = window.pageYOffset

    if (cunrrentscroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (cunrrentscroll > lastscroll && !body.classList.contains("scroll-down")){
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (cunrrentscroll < lastscroll && body.classList.contains("scroll-down")){
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastscroll = cunrrentscroll;

})