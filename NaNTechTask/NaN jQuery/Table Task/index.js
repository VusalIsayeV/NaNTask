$(document).ready(function () {
    $("#Add").click(function () {
        $("table").append(
            `<tr>
            <td class="AdTable">${$("#Ad").val()}</td>
            <td class="SoyadTable">${$("#Soyad").val()}</td>
            <td class="YasTable">${$("#Yas").val()}</td>
            <td class="Edit"><button>Edit</button></td>
            <td class="Delete"><button id="bir">Delete</button></td>
        </tr>`
        );;
    });
    $("tbody").on("click", ".Delete button", function () {
        $(this).parent().parent().remove();
    })

    var setir;
    $("tbody").on("click", ".Edit button", function () {
        setir = $(this).parents("tr")
        $(".EditMain").show()
        $("#AdEdit").val($(this).parent().parent().children().eq(0).text())
        $("#SoyadEdit").val($(this).parent().parent().children().eq(1).text())
        $("#YasEdit").val($(this).parent().parent().children().eq(2).text())

    })

    $(".Save").click(function () {
        setir.children().eq(0).text($("#AdEdit").val())
        setir.children().eq(1).text($("#SoyadEdit").val())
        setir.children().eq(2).text($("#YasEdit").val())
        $(".EditMain").hide()
        console.log("Salam");
    })




    $(".section3").on("click", ".Exit", function () {
        $(".EditMain").hide();
    })

    // Umumi Filtir

    $(".section2").on("input", "#Axtaris", function () {
        var AxtarisValue = $(this).val().toLowerCase()
        $("tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().includes(AxtarisValue))
        });
    }) 


    // Tek Ad
    // $(".section2").on("input", "#Axtaris", function () {
    //     var AxtarisValue = $(this).val().toLowerCase()
    //     $(".AdTable").filter(function () {
    //         $("tbody tr").toggle($(this).text().toLowerCase().includes(AxtarisValue))
    //     });
    // })
});




document.querySelector('.sumo_make .options').addEventListener('click', function () {
    let markalar = [];
    document.querySelectorAll('.sumo_make .options li').forEach(function(x) {
        if(x.classList.contains('selected')){
            markalar.push(x.querySelector('label').innerText.replaceAll('\n','').replaceAll('\t', '').toLowerCase())
        }
    })
    
    document.querySelectorAll('#id_model option').forEach(function(x, index) {   
        if(markalar.includes(x.value.split('-')[0].toLowerCase())){
            document.querySelectorAll('.sumo_model .options li')[index].style.display = "block"
        }else{
            document.querySelectorAll('.sumo_model .options li')[index].style.display = "none"
        }
    })
})