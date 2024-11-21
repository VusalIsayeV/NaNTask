car=[
    {
        img:"https://turbo.azstatic.com/uploads/full/2023%2F09%2F26%2F16%2F02%2F34%2F82f395f0-dd9d-436c-968e-a38a1b2d7dd7%2F91794_mO5EhABgiY-2n3gtyDwD8Q.jpg",
        h2:"Car Car",
        p:"Jetour X90 plus Bütün Avtomobillərə 6 il və ya 150000km rəsmi Zəmanət!!!! ● Ölçüıəri - 4875*1925*1780 ● Təkər bazası - 2855mm ● Klirens - 210mm ● Yanacaq çəni - 57l"
    },
    {
        img:"https://turbo.azstatic.com/uploads/full/2023%2F05%2F19%2F18%2F30%2F17%2F74054630-d80e-4f9f-bcb2-3be3618d2906%2F81212_PnMjcj6AetAEDzKxPsxkIQ.jpg",
        h2:"Car Car",
        p:"VİN: WBAXG5C57DDY34907 Vuruqsuz gəlib Suda batmış, əzilmiş maşın deyil Xaricə getdiyim üçün təcili satıram Əla vəziyyətdədir Şəxsi istifadə üçün sürülüb"
    },
    {
        img:"https://turbo.azstatic.com/uploads/full/2023%2F10%2F20%2F16%2F38%2F54%2Fae2d657e-796b-4af9-982b-fd26d308f61c%2F3806_gqkm1hvRzGzV8iQ8hG2azA.jpg",
        h2:"Car Car",
        p:"Mercedes-Benz GLE450 Mercedes-Benz in Azərbaycanda rəsmi dileri “Abşeron Avtomobil Mərkəzi” 4 il zəmanət yürüşdən asılı olmayaraq От официального дилера Mercedes-Benz “Absheron Automobile Centre”"
    }
]
for (let i = 0; i < car.length; i++) {
    document.querySelector("body").innerHTML+=`
    <div>
        <img src=${car[i].img}>
        <h2>${car[i].h2}</h2>
        <p>${car[i].p}</p>
    </div>`
    
    
}




// document.querySelector("#img1").src=car1[0]
// document.querySelector("#h2_1").innerText=car1[1]
// document.querySelector("#p1").innerText=car1[2]

// document.querySelector("#img2").src=car2[0]
// document.querySelector("#h2_2").innerText=car2[1]
// document.querySelector("#p2").innerText=car2[2]

// document.querySelector("#img3").src=car3[0]
// document.querySelector("#h2_3").innerText=car3[1]
// document.querySelector("#p3").innerText=car3[2]
