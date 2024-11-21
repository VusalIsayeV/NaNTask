Baza = [
    {
        img: "https://turbo.azstatic.com/uploads/full/2023%2F10%2F26%2F10%2F37%2F41%2Fd5b8b9da-d9ce-4211-99f2-9bd55fd7d3b4%2F88119_INNmfxX0Sf-RJ9aJg3obRA.jpg",
        Marka: "Mercedes",
        Haqqinda: "lorem dcscds dsc ds ds  sf  f  d f sd  cd sc  sd  s sdc d  dc s  s dc  dc  sc "
    },
    {
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F21%2F15%2F07%2F28%2F4b9a6faf-a9b4-4f4e-9093-94223bc1ec7a%2F3634__4i2g5YJWL1-zaJqTqC8gA.jpg",
        Marka: "BMW",
        Haqqinda: "lorem dcscds dsc ds ds  sf  f  d f sd  cd sc  sd  s sdc d  dc s  s dc  dc  sc "
    },
    {
        img: "https://turbo.azstatic.com/uploads/full/2023%2F07%2F22%2F13%2F30%2F38%2F9e0d224c-4b4e-4e20-9c61-bf4dc49c7e38%2F35496_EajKXpvTGEVMqQ8LY5BLcA.jpg",
        Marka: "Mercedes",
        Haqqinda: "lorem dcscds dsc ds ds  sf  f  d f sd  cd sc  sd  s sdc d  dc s  s dc  dc  sc "
    },
    {
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F20%2F12%2F05%2F29%2F7049d7f5-f1c2-48e2-90ba-7a0a52b07e5f%2F3804_vPGAu-haYHqU_lShSE44WQ.jpg",
        Marka: "Audi",
        Haqqinda: "lorem dcscds dsc ds ds  sf  f  d f sd  cd sc  sd  s sdc d  dc s  s dc  dc  sc "
    },
    {
        img: "https://turbo.azstatic.com/uploads/full/2023%2F11%2F27%2F21%2F11%2F12%2Feb25699b-6c03-478b-a899-1743a60f7ff4%2F3807_EqjYwU8RNyUSwnlA9Mon0w.jpg",
        Marka: "BMW",
        Haqqinda: "lorem dcscds dsc ds ds  sf  f  d f sd  cd sc  sd  s sdc d  dc s  s dc  dc  sc "
    },
    {
        img: "https://turbo.azstatic.com/uploads/full/2023%2F08%2F09%2F13%2F54%2F27%2Fba546204-3a4e-47fb-856f-8e436c10d229%2F82081_JeOhFrKBd6Cf0SPlhdCu3w.jpg",
        Marka: "Mercedes",
        Haqqinda: "lorem dcscds dsc ds ds  sf  f  d f sd  cd sc  sd  s sdc d  dc s  s dc  dc  sc "
    }
]
for (let i = 0; i < Baza.length; i++) {
    $("#Products").append(
        `<div class="card col-3 my-2" >
            <img class="card-img-top"
                src="${Baza[i].img}"
                alt="Card image">
            <div class="card-body">
                <h4 class="card-title Marka">${Baza[i].Marka}</h4>
            </div>
        </div>`
    );

}

$("#Car").click(function () { 
    Baza.filter(function () {
        $(".Product").append($(".Marka").text().includes("BMW"))
    });
    console.log(Baza);
    
});