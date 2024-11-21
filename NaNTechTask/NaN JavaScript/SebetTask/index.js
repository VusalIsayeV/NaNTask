var baza = [
    {
        img: "https://kontakt.az/media/catalog/product/cache/f7ddf56c9575d0bd144936c69d08ce67/_/d/_d0_9d_d0_be_d0_b2_d1_8b_d0_b9-_d0_bf_d1_80_d0_be_d0_b5_d0_ba_d1_82-2023-05-10t161206.687_png.png",
        text: "Xiaomi Redmi Note 12S 8/256 GB Onyx Black",
        price: "579,99 ₼",
    },
    {
        img: "https://kontakt.az/media/catalog/product/cache/f7ddf56c9575d0bd144936c69d08ce67/t/m/tm-dg-sbp-1105-sm-2264-22.png",
        text: "Samsung Galaxy A24 (SM-A245) 6/128 GB Black",
        price: "549,99 ₼",
    },
    {
        img: "https://kontakt.az/media/catalog/product/cache/af5adeb2067c0aba1e00926f461cb34e/n/e/new-project-2023-03-31t185109.093-1_png.png",
        text: "Xiaomi Redmi Note 12 6/128 GB Onyx Gray",
        price: "479,99 ₼",
    },
    {
        img: "https://kontakt.az/media/catalog/product/cache/af5adeb2067c0aba1e00926f461cb34e/f/i/file_705_1.png",
        text: "OPPO Reno 8T 5G 8/256 GB Black",
        price: "949,99 ₼"
    },
    {
        img: "https://kontakt.az/media/catalog/product/cache/af5adeb2067c0aba1e00926f461cb34e/_/-/_-_2023-03-31t141442.273_1_.png",
        text: "Samsung Galaxy A14 (SM-A145) 4/128GB Black",
        price: "399,99 ₼"
    }
]

for (let i = 0; i < baza.length; i++) {
    document.querySelector(".body").innerHTML += `
    <div class="Praduct">
        <img id="BodyImg" src="${baza[i].img}" alt="">
        <h3>${baza[i].text}</h3>
        <p id="Qiymet">${baza[i].price}</p>
        <p id="SebeteAt" onclick="SebeteAt(${i})">Sebete At</p>
    </div>`

}

function SebeteAt(i) {
    document.querySelector(".SebetProduct").innerHTML += `
    <div class="Product">
        <img id="SebetImg" src="${baza[i].img}" alt="">
        <h3 id="SebetH3">${baza[i].text}</h3>
        <p id="SebetQiymet">${baza[i].price}</p>
        <p id="Delete" >Delete</p>
    </div>
    `
    SebetSay()

}

function SebetSay() {
    SebetSayQiymet=0
    document.querySelectorAll("#Delete").forEach(x=>{
        SebetSayQiymet++
    })
    document.querySelector(".SebetSay").innerText=SebetSayQiymet
}


document.querySelector(".RemoveAll").addEventListener("click",function () {
    document.querySelector(".SebetProduct").innerHTML=" "
    SebetSay()
})

document.querySelector("#SebetIcon").addEventListener("click", function () {

    if (document.querySelector(".Sebet").style.display == "none") {
        document.querySelector(".Sebet").style.display = "block"
    }
    else {
        document.querySelector(".Sebet").style.display = "none"
    }
})

function FilterSebeteAt(j) {
    document.querySelector(".SebetProduct").innerHTML += `
    <div class="Product">
        <img id="SebetImg" src="${FilterProduct[j].img}" alt="">
        <h3 id="SebetH3">${FilterProduct[j].text}</h3>
        <p id="SebetQiymet">${FilterProduct[j].price}</p>
        <p id="Delete">Delete</p>
    </div>
    `
    SebetSay()
}

document.querySelector("#Axtaris").addEventListener("input",
    function (j) {
        document.querySelector(".AxtarisDiv").innerHTML = ""
        document.querySelector(".body").innerHTML=""
        FilterProduct = baza.filter(Product => {
            return Product.text.toUpperCase().includes((document.querySelector("#Axtaris").value).toUpperCase());
        })
        for (let j = 0; j < FilterProduct.length; j++) {
            document.querySelector(".AxtarisDiv").innerHTML += `
                <div class="AxtarisProduct">
                    <h3 class="AxtarisH3">${FilterProduct[j].text}</h3>
                </div>`;
            if (document.querySelector("#Axtaris").value=="") {
                document.querySelector(".AxtarisDiv").innerHTML=""
            }
            
            document.querySelector(".body").innerHTML += `
                <div class="Praduct">
                    <img id="BodyImg" src="${FilterProduct[j].img}" alt="">
                    <h3>${FilterProduct[j].text}</h3>
                    <p id="Qiymet">${FilterProduct[j].price}</p>
                    <p id="SebeteAt" onclick="FilterSebeteAt(${j})">Sebete At</p>
                </div>`
        }

    })



// $("#Delete").click(function () {
//     alert("salam")
// })
$(".Product").on("click","Delete",function () {
    alert("salam")
})

