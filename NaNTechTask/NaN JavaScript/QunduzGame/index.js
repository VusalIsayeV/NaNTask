var i;
var j = 0

function Qunduz() {
    document.querySelectorAll("img").forEach(x => {
        x.style.display = "none"
    });
    i = Math.floor(Math.random() * 6);
    document.querySelectorAll(".img img")[i].style.display = "block"

}
setInterval(Qunduz, 1000)




document.querySelectorAll(".img img").forEach(x => {
    x.addEventListener("click", function () {
        j++
        document.querySelector(".Score").innerText = j
        console.log(j);
    if (j>=10) {
        document.querySelector("body").innerHTML = `
        <div class="Win">
            <p>Qazandiz</p>
        </div>`

    }
    })
    
})
