i = 200
j = 200



document.querySelector("#yuxari").addEventListener("click",
    function () {
        i -= 20
        document.querySelector("i").style.top = `${i}px`
        if (i <= 0) {
            i=0
            document.querySelector("body").style.borderTopColor = "red"
        }
        else{
            document.querySelector("body").style.borderTopColor = "blue"
        }
    })
document.querySelector("#sag").addEventListener("click",
    function () {
        j += 20
        document.querySelector("i").style.left = `${j}px`
        console.log(j);
    })

document.querySelector("#asagi").addEventListener("click",
    function () {
        i += 20
        document.querySelector("i").style.top = `${i}px`
        if (i <= 0) {
            
            document.querySelector("body").style.borderTopColor = "red"
        }
        else{
            document.querySelector("body").style.borderTopColor = "blue"
        }
    })

document.querySelector("#sol").addEventListener("click",
    function () {
        j -= 20
        document.querySelector("i").style.left = `${j}px`
        console.log(j);
    })







// window.addEventListener("click",
// function () {
//     console.log(event.clientX);
// })