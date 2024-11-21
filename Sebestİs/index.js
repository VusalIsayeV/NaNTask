function Hesablama(Deyer, Ehtimal) {
    if (Deyer.length !== Ehtimal.length) {
        throw new Error("Dəyər və Ehtimal Massivi eynu uzunluga malik olmalıdır.");
    }

    let GozlemeDeyeri = 0;

    for (let i = 0; i < Deyer.length; i++) {
        GozlemeDeyeri += Deyer[i] * Ehtimal[i];
    }

    return GozlemeDeyeri;
}
const Deyer = [0, 0, 0, 0, 0];
const Ehtimal = [0, 0, 0, 0, 0];
$("button").click(function () {
    if ($("#Ehtimal1").val() <= 1 & $("#Ehtimal1").val() >= 0 &
    $("#Ehtimal2").val() <= 1 & $("#Ehtimal2").val() >= 0 &
    $("#Ehtimal3").val() <= 1 & $("#Ehtimal3").val() >= 0 &
    $("#Ehtimal4").val() <= 1 & $("#Ehtimal4").val() >= 0
    
    
    ) {
        Deyer[0] = $("#Eded1").val()
        Deyer[1] = $("#Eded2").val()
        Deyer[2] = $("#Eded3").val()
        Deyer[3] = $("#Eded4").val()

        Ehtimal[0] = $("#Ehtimal1").val()
        Ehtimal[1] = $("#Ehtimal2").val()
        Ehtimal[2] = $("#Ehtimal3").val()
        Ehtimal[3] = $("#Ehtimal4").val()
    }
    else {
        alert("Ehtimal 0 ve 1 arasinda qiymetler alamalidir")
    }

    result = Hesablama(Deyer, Ehtimal);
    console.log("Gözləmə Dəyəri", result);
    $("#Netice").val(result)
})
