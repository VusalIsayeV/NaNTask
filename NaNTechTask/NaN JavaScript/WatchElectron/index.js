i = 0
z = 0
y = 0
function vaxt() {
    i += 1
    if (i <= 59) {
        document.querySelector(".Saniye").innerText = i
    }
    if (i >= 59) {
        i = -1
        z += 1
        document.querySelector(".Deqiqe").innerText = z
    }
    if (z <= 59) {
        document.querySelector(".Saat").innerText = y
    }
    if (z >= 59) {
        z = -1
        y += 1
        document.querySelector(".Saat").innetText = y
    }
    if (y>23) {
        y=0
    }

}

setInterval(vaxt, 1000)


