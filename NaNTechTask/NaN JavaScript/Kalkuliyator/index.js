document.querySelector("#toplama").addEventListener("click",
    (x, y) => {
        ilkEded = document.querySelector("#firstNumber").value
        ikinciEded = document.querySelector("#twiceNumber").value

        document.querySelector("#sub").value = Number(ilkEded) + Number(ikinciEded)
    }
)
document.querySelector("#cixma").addEventListener("click",
    (x, y) => {
        ilkEded = document.querySelector("#firstNumber").value
        ikinciEded = document.querySelector("#twiceNumber").value

        document.querySelector("#sub").value = Number(ilkEded) - Number(ikinciEded)
    }
)
document.querySelector("#vurma").addEventListener("click",
    (x, y) => {
        ilkEded = document.querySelector("#firstNumber").value
        ikinciEded = document.querySelector("#twiceNumber").value

        document.querySelector("#sub").value = Number(ilkEded) * Number(ikinciEded)
    }
)
document.querySelector("#bolme").addEventListener("click",
    (x, y) => {
        ilkEded = document.querySelector("#firstNumber").value
        ikinciEded = document.querySelector("#twiceNumber").value

        document.querySelector("#sub").value = Number(ilkEded) / Number(ikinciEded)
    }
)





