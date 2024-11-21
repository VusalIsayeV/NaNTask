document.querySelector("#width").addEventListener("input",
    function width() {
        document.querySelector("div").style.width=document.querySelector("#width").value+"px"
    }
)
document.querySelector("#height").addEventListener("input",
    function heigth() {
        document.querySelector("div").style.height=document.querySelector("#height").value+"px"
    }
)
document.querySelector("#bgColor").addEventListener("input",
    function bgColor() {
        document.querySelector("div").style.backgroundColor=document.querySelector("#bgColor").value
    }
)
document.querySelector("#borderRadius").addEventListener("input",
    function borderRadius() {
        document.querySelector("div").style.borderRadius=document.querySelector("#borderRadius").value+"px"
    }
)