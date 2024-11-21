// $(".SingIn").hide()

$(".Exam").hide()
$(".Test").hide()
$(".FinishDiv").hide();
$(".EnterExam").click(function () {
    if (($(".Password").val() == "Vusal")) {
        $(".SingIn").hide()
        $(".Exam").show()
    }
    else {
        ErrorOne = new Error("Ad ,Soyad ve Parolu duzgun daxil edin");
        alert(ErrorOne)
    }
    $(".p-FirstName").text("First Name:" + $(".FirstName").val());
    $(".p-LastName").text("Last Name:" + $(".LastName").val());
});
$(".StartExam").click(function () {
    $(".Test").show()
});
Baza = [
    {
        Sual: "1.Suallar niye var?",
        Duz: "DuzCavab1",
        Sehv1: "Bilmirem1",
        Sehv2: "Bilmirem1",
        Sehv3: "Bilmirem1",
        ans: null
    },
    {
        Sual: "2.Suallar niye var?",
        Duz: "DuzCavab2",
        Sehv1: "Bilmirem2",
        Sehv2: "Bilmirem2",
        Sehv3: "Bilmirem2",
        ans: null

    },
    {
        Sual: "3.Suallar niye var?",
        Duz: "DuzCavab3",
        Sehv1: "Bilmirem3",
        Sehv2: "Bilmirem3",
        Sehv3: "Bilmirem3",
        ans: null

    },
    {
        Sual: "4.Suallar niye var?",
        Duz: "DuzCavab4",
        Sehv1: "Bilmirem4",
        Sehv2: "Bilmirem4",
        Sehv3: "Bilmirem4",
        ans: null

    },
    {
        Sual: "5.Suallar niye var?",
        Duz: "DuzCavab5",
        Sehv1: "Bilmirem5",
        Sehv2: "Bilmirem5",
        Sehv3: "Bilmirem5",
        ans: null

    },
    {
        Sual: "6.Suallar niye var?",
        Duz: "DuzCavab6",
        Sehv1: "Bilmirem6",
        Sehv2: "Bilmirem6",
        Sehv3: "Bilmirem6",
        ans: null

    },
    {
        Sual: "7.Suallar niye var?",
        Duz: "DuzCavab7",
        Sehv1: "Bilmirem7",
        Sehv2: "Bilmirem7",
        Sehv3: "Bilmirem7",
        ans: null

    },
    {
        Sual: "8.Suallar niye var?",
        Duz: "DuzCavab8",
        Sehv1: "Bilmirem8",
        Sehv2: "Bilmirem8",
        Sehv3: "Bilmirem8",
        ans: null

    },
    {
        Sual: "9.Suallar niye var?",
        Duz: "DuzCavab9",
        Sehv1: "Bilmirem9",
        Sehv2: "Bilmirem9",
        Sehv3: "Bilmirem9",
        ans: null

    },
    {
        Sual: "10.Suallar niye var?",
        Duz: "DuzCavab10",
        Sehv1: "Bilmirem10",
        Sehv2: "Bilmirem10",
        Sehv3: "Bilmirem10",
        ans: null
    }
]

DuzSay = 0
SehvSay = 0

function Evvel() {
    SualIndex -= 1
    if (SualIndex < 0) {
        SualIndex = 0
    }
    $(".Sual").text(`${Baza[SualIndex].Sual}`);
    $("#Cavab1").text(`${Baza[SualIndex].Duz}`);
    $("#Cavab2").text(`${Baza[SualIndex].Sehv1}`);
    $("#Cavab3").text(`${Baza[SualIndex].Sehv2}`);
    $("#Cavab4").text(`${Baza[SualIndex].Sehv3}`);
    $(".Cavab").css("background-color", "white")
}
function Sonra() {
    SualIndex += 1
    if (SualIndex > 9) {
        SualIndex = 9
    }
    $(".Sual").text(`${Baza[SualIndex].Sual}`);
    $("#Cavab1").text(`${Baza[SualIndex].Duz}`);
    $("#Cavab2").text(`${Baza[SualIndex].Sehv1}`);
    $("#Cavab3").text(`${Baza[SualIndex].Sehv2}`);
    $("#Cavab4").text(`${Baza[SualIndex].Sehv3}`);
    $(".Cavab").css("background-color", "white")
}

$(".Test").on("click", ".Evvel", Evvel)
$(".Test").on("click", ".Sonra", Sonra)
$(".Exam").on("click", ".Nomre", function () {
    SualIndex = ($(this).html() - 1)
    if ($(this).text() == "") {
        alert("Bu Testi Artig Islemisiz")
    }
    let a, b, c, d;

    do {
        a = Math.floor((Math.random() * 4) + 1);
        b = Math.floor((Math.random() * 4) + 1);
        c = Math.floor((Math.random() * 4) + 1);
        d = Math.floor((Math.random() * 4) + 1);
    } while (a === b || a === c || a === d || b === c || b === d || c === d);
    $(".Sual").text(`${Baza[SualIndex].Sual}`);
    $(`#Cavab${a}`).text(`${Baza[SualIndex].Duz}`);
    $(`#Cavab${b}`).text(`${Baza[SualIndex].Sehv1}`);
    $(`#Cavab${c}`).text(`${Baza[SualIndex].Sehv2}`);
    $(`#Cavab${d}`).text(`${Baza[SualIndex].Sehv3}`);
    $(".Cavab").css("background-color", "white")
    Nomre = $(this)



})
function Say() {
    if (DuzSay>=7) {
        $(".Netice").html("kecdiniz")
    }
    else if(SehvSay>2){
        Netice()
        $(".Netice").html("Kesildiniz")
    }
    else{
        $(".Netice").html("Kesildiniz")
    }

}
$(".CavabDiv").on("click", ".Cavab", function () {
    if (Baza[SualIndex].ans == null) {
        Baza[SualIndex].ans = $(this).html()
        if (Baza[SualIndex].ans == Baza[SualIndex].Duz) {
            $(this).css("background-color", "green")
            $(`#Nomre${SualIndex + 1}`).css("background-color", "green")
            DuzSay += 1
            Say()
        }
        else {
            $(this).css("background-color", "red")
            $(`#Nomre${SualIndex + 1}`).css("background-color", "red")
            SehvSay += 1
            Say()
        }
    }

})


function Netice() {
    $(".Exam").hide()
    $(".FinishDiv").show();
    $(".DuzSayi").text("Duz Sayi:" + DuzSay);
    $(".SehvSayi").text("Sehv Sayi:" + SehvSay);
}
$(".FinishExam").click(Netice);


i = 60
z = 9
y = 0
function vaxt() {
    i -= 1
    if (i <= 59) {
        document.querySelector("#Saniye").innerText = i
    }
    while (i < 1) {
        i = 60
        z -= 1
        document.querySelector("#Deqiqe").innerText = z
    }
    if (($("#Deqiqe").text() == "0") && ($("#Saniye").text() == "1")) {
        Netice()
    }

}

$(".StartExam").click(function () {
    $("#Deqiqe").text("9");
    setInterval(vaxt, 1000)

});




