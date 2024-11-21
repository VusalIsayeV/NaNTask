i = 45 //Top
j = 47.5 //Left



function YuxariFunk() {
    i -= document.querySelector("#yuxariInput").value
    document.querySelector("i").style.top = `${i}%`
    document.querySelector("body").style.borderBottomColor = "blue" //Bottom is Blue
    if (i <= 0) {
        i = 0
        document.querySelector("body").style.borderTopColor = "red"
    }
    else {
        document.querySelector("body").style.borderTopColor = "blue"
    }
}



function SagFunk() {
    j += 5.5
    document.querySelector("i").style.left = `${j}%`
    document.querySelector("body").style.borderLeftColor = "blue"
    if (j >= 95) {
        j = 95 //Niye burda 95 Top Bottomda 90 olur ?
        document.querySelector("body").style.borderRightColor = "red"
    }
    else {
        document.querySelector("body").style.borderRightColor = "blue"
    }
}



function AsagiFunk() {
    i += 5
    document.querySelector("i").style.top = `${i}%`
    document.querySelector("body").style.borderTopColor = "blue" //Top is Blue
    if (i >= 90) {
        i = 90
        document.querySelector("body").style.borderBottomColor = "red"
    }
    else {
        document.querySelector("body").style.borderBottomColor = "blue"
    }
}



function SolFunk() {
    j -= 5.5
    document.querySelector("i").style.left = `${j}%`
    document.querySelector("body").style.borderRightColor = "blue"
    if (j <= 0) {
        j = 0 //Niye burda 95 Top Bottomda 90 olur ?
        document.querySelector("body").style.borderLeftColor = "red"
    }
    else {
        document.querySelector("body").style.borderLeftColor = "blue"
    }
}
function YuxariSag() {
    YuxariFunk();
    SagFunk();
}
function YuxariSol() {
    YuxariFunk();
    SolFunk();
}
function AsagiSag() {
    AsagiFunk();
    SagFunk();
}
function AsagiSol() {
    AsagiFunk();
    SolFunk();
}


document.querySelector("#yuxari").addEventListener("click",
    YuxariFunk)
document.querySelector("#sag").addEventListener("click",
    SagFunk)
document.querySelector("#asagi").addEventListener("click",
    AsagiFunk)
document.querySelector("#sol").addEventListener("click",
    SolFunk)


document.querySelector("#yuxarisag").addEventListener("click",
    YuxariSag)
document.querySelector("#yuxarisol").addEventListener("click",
    YuxariSol)
document.querySelector("#asagisag").addEventListener("click",
    AsagiSag)
document.querySelector("#asagisol").addEventListener("click",
    AsagiSol)



function Restart() {
    i=45
    j=47.5
    document.querySelector("i").style.top=i+"%"
    document.querySelector("i").style.left=j+"%"
    document.querySelector("body").style.borderColor="blue"
}

document.querySelector("#restart").addEventListener("click",
Restart)

document.querySelector("#reng").addEventListener("input",
function () {
    document.querySelector("i").style.color=document.querySelector("#reng").value
}) 