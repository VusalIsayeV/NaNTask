Baza = [
    {
        class: 1,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F15%2F17%2F42%2F13%2Fe15329b1-80f5-4e5d-80d2-6dc4537dc4a5%2F3815_uUpAk24A6_9d_gSkibYICQ.jpg",
        paylanma: null
    },
    {
        class: 2,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F15%2F17%2F42%2F13%2Fa539da7e-2786-4967-acf6-3a41f8a0192e%2F3767_rzovEdh4ZveIvrRpyORBoQ.jpg",
        paylanma: null

    },
    {
        class: 3,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F15%2F17%2F42%2F13%2F535e323f-c2ad-4b50-9bd1-63692be3079f%2F3793_u4SzNr4H8_KffnCyS59X2Q.jpg",
        paylanma: null

    },
    {
        class: 4,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F15%2F17%2F42%2F14%2F63f5395f-e8d4-4545-b4dc-0f05fcc0bad1%2F3809_nGRaeiKsLuhKaLShPzCxTg.jpg",
        paylanma: null

    },
    {
        class: 5,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F15%2F17%2F42%2F13%2F79a1c086-edf3-41b8-8226-aaa8fa1a18a1%2F3806_Z73wWDesOlvKJbxmElHbNQ.jpg",
        paylanma: null
    },
    {
        class: 6,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F11%2F13%2F33%2F42%2Fc7767502-5ad2-4c6c-93b3-ddf7043fd10a%2F3796_dQSCb-PoE-i-yBbMpzMt0g.jpg",
        paylanma: null
    },
    {
        class: 7,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F11%2F13%2F33%2F41%2F25f5493f-1bfa-4282-95f9-c74d56b6e157%2F3776_DSM5oSBlcpKwLIqfEEIA4A.jpg",
        paylanma: null
    },
    {
        class: 8,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F11%2F13%2F33%2F43%2Fe48a4211-0668-41fb-a6fb-96e11aff09da%2F3772_pxVbwe4nuZPkkR62sQxeYw.jpg",
        paylanma: null
    },
    {
        class: 1,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F15%2F17%2F42%2F13%2Fe15329b1-80f5-4e5d-80d2-6dc4537dc4a5%2F3815_uUpAk24A6_9d_gSkibYICQ.jpg",
        paylanma: null

    },
    {
        class: 2,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F15%2F17%2F42%2F13%2Fa539da7e-2786-4967-acf6-3a41f8a0192e%2F3767_rzovEdh4ZveIvrRpyORBoQ.jpg",
        paylanma: null
    },
    {
        class: 3,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F15%2F17%2F42%2F13%2F535e323f-c2ad-4b50-9bd1-63692be3079f%2F3793_u4SzNr4H8_KffnCyS59X2Q.jpg",
        paylanma: null
    },
    {
        class: 4,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F15%2F17%2F42%2F14%2F63f5395f-e8d4-4545-b4dc-0f05fcc0bad1%2F3809_nGRaeiKsLuhKaLShPzCxTg.jpg",
        paylanma: null
    },
    {
        class: 5,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F15%2F17%2F42%2F13%2F79a1c086-edf3-41b8-8226-aaa8fa1a18a1%2F3806_Z73wWDesOlvKJbxmElHbNQ.jpg",
        paylanma: null
    },
    {
        class: 6,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F11%2F13%2F33%2F42%2Fc7767502-5ad2-4c6c-93b3-ddf7043fd10a%2F3796_dQSCb-PoE-i-yBbMpzMt0g.jpg",
        paylanma: null
    },
    {
        class: 7,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F11%2F13%2F33%2F41%2F25f5493f-1bfa-4282-95f9-c74d56b6e157%2F3776_DSM5oSBlcpKwLIqfEEIA4A.jpg",
        paylanma: null
    },
    {
        class: 8,
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F11%2F13%2F33%2F43%2Fe48a4211-0668-41fb-a6fb-96e11aff09da%2F3772_pxVbwe4nuZPkkR62sQxeYw.jpg",
        paylanma: null
    }
]
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
function RandomNum() {
    numbers.sort(function () {
        return (Math.random() - 0.5)     //buranin metiqini tam tuta bilmedim 
    });
}

RandomNum()
console.log(numbers);
for (let z = 0; z < Baza.length; z++) {
    $(".Main").append(`
        <div class="card" BazaYeri="BazaYeri${Baza[numbers[z]].class}" att="${numbers[z]}">
            <img src="${Baza[numbers[z]].img}" alt="">
        </div>
        `)
}

BosMassiv = []
BosAtrMassiv = []
xMassiv = []

document.querySelectorAll(".card").forEach(x => {
    x.addEventListener("click", function () {
        x.querySelector("img").style.display = "block"
        ATTR = x.getAttribute("att")
        BosMassiv.push(Baza[ATTR].class)
        BosAtrMassiv.push(ATTR)
        xMassiv.push(x)
        Baza[ATTR].paylanma = ATTR
        console.log(BosMassiv);
        console.log(BosAtrMassiv);
        setTimeout(Yoxlama, 600);
        // Yoxlama()
    })
})

function Yoxlama() {
    if (BosMassiv.length == 2 && BosMassiv[0] == BosMassiv[1] && BosAtrMassiv[0] != BosAtrMassiv[1]) {
        // alert("eynidir")
        BosMassiv = []
        BosAtrMassiv = []
        xMassiv = []
    }
    else if (BosMassiv.length == 2 && BosMassiv[0] != BosMassiv[1] && BosAtrMassiv[0] != BosAtrMassiv[1]) {
        // alert("eyni deyil")
        xMassiv[1].querySelector("img").style.display = "none"
        xMassiv[0].querySelector("img").style.display = "none"

        BosMassiv = []
        BosAtrMassiv = []
        xMassiv = []

    }
}







