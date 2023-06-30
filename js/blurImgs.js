const blurDivs = document.querySelectorAll(".blur-load");

blurDivs.forEach(div => {
    const img = div.querySelector(".loadOpt")

    function loaded(){
        div.classList.add("loaded")
    }

    if (img.complete){
        loaded()
    } else {
        img.addEventListener("load", loaded)
    }
});