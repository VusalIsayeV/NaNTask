i=0
z=0
y=0
    function vaxt() {
        i+=6
        document.querySelector(".Saniye").style.transform= `rotate(${i}deg)`
        console.log(i);
        if (i%360==0) {
            z+=6
            document.querySelector(".Deqiqe").style.transform= `rotate(${z}deg)`;
        }
        if (i%(360*60)==0) {
            y+=6
            document.querySelector(".Eqreb").style.transform= `rotate(${y}deg)`;
        }
    }

setInterval(vaxt,1000)

