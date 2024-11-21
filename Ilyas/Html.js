document.querySelectorAll(".item1").forEach( x => {
    x.addEventListener("click",function () {
        document.querySelectorAll(".item1").forEach( x => {
            x.addEventListener("click",function () {
                x.style.backgroundColor = "white"
            })
        x.style.backgroundColor = "red"
    })
});




