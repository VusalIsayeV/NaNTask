let baza = [
    {
        Baslig: "Dicover",
        li: [
            "Salam1", "Salam2", "Salam3", "Salam4", "Salam5", "Salam6"
        ],
        img: [
            {
                URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3C5vSH1vAlp2r15470i9UrRSBy6AiTCuZ8Cq2Pz49w&s",
                Text:"Text 1"
            },
            {
                URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3C5vSH1vAlp2r15470i9UrRSBy6AiTCuZ8Cq2Pz49w&s",
                Text:"Text 2"
            }
            
        ]
    },
    {
        Baslig: "Brash",
        li: [
            "sagol1", "sagol2", "sagol3", "sagol4", "sagol5", "sagol6"
        ],
        img: [
            {
                URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3C5vSH1vAlp2r15470i9UrRSBy6AiTCuZ8Cq2Pz49w&s",
                Text:"Text 3"
            },
            {
                URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3C5vSH1vAlp2r15470i9UrRSBy6AiTCuZ8Cq2Pz49w&s",
                Text:"Text 4"
            }
            
        ]
    },
    {
        Baslig: "Bootoms",
        li: [
            "Tamam1", "Tamam2", "Tamam3", "Tamam4", "Tamam5", "Tamam6"
        ],
        img: [
            {
                URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3C5vSH1vAlp2r15470i9UrRSBy6AiTCuZ8Cq2Pz49w&s",
                Text:"Text 5"
            }
            
        ]
    }
]




document.querySelectorAll(".NavUl li").forEach((x, i) => {
    x.addEventListener("mouseenter", function () {
        document.querySelector(".About ul").innerHTML = ''
        document.querySelector('.img').innerHTML = ' '
        baza[i].li.forEach(x => {
            console.log(x);
            document.querySelector(".About ul").innerHTML += `<li>${x}</li>`
        })
        baza[i].img.forEach(x => {
            console.log(x);
            document.querySelector('.img').innerHTML += `
            <div class="demo">
                <img src=${x.URL}
                    alt="">
                <div class="Hover">${x.Text}</div>
            </div>`
        })
        

    })
})

