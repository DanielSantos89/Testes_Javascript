var circleBtn = document.getElementById("circle");
var count = 0;

function trocaPosicao() {
    circleRight = document.getElementById('circleleft');
    circleLeft = document.getElementById('circleright');

    //console.log(circleRight);
    circleLeft.style.float = "left";
    circleLeft.style.marginRight = "100px;"

    circleRight.style.float = "right";
    circleRight.style.marginLeft = "100px;"
}

circleBtn = addEventListener('click', numeroClicks);

function numeroClicks(){
    document.getElementById("clicks").style.display = "block";
    document.getElementById("circle").innerHTML = count++;
    if (count > 100) {
        alert("Terminou a sua sessão. Vamos começar de novo!");
        count = 0;
        return

    }
    else {
        if (count % 10 == 0) {
            alert("Deu 10 clicks");
        }
    }
    document.getElementById("clicks").innerHTML = count;
}