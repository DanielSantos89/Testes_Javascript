let countJogadas = 0;
let pontosA = 0;
let pontosB = 0;
let maxPontos = 0;
function showSquares() {
    for (i = 1; i < 10; i++) {
        const squareA = document.createElement("div");
        squareA.setAttribute("class", "square-a");
        squareA.style.width = "50px";
        squareA.style.height = "50px";
        squareA.style.backgroundColor = "green";
        squareA.style.margin = "10px";
        squareA.style.border= "1px solid black";

        document.getElementById("pontos-a").appendChild(squareA);
        squareA.innerHTML = Math.floor(Math.random() * 20) + 1;
    }
    for (i = 1; i < 10; i++) {
        const squareB = document.createElement("div");
        squareB.setAttribute("class", "square-b");
        squareB.style.width = "50px";
        squareB.style.height = "50px";
        squareB.style.backgroundColor = "red";
        squareB.style.margin = "10px";
        squareB.style.border= "1px solid black";

        document.getElementById("pontos-b").appendChild(squareB);
        squareB.innerHTML = Math.floor(Math.random() * 20) + 1;
    }

    let buttonA = document.createElement("button");
    buttonA.setAttribute('type', 'button');
    buttonA.id = "buttonA";
    buttonA.textContent = "Jogada A";
    buttonA.style.marginRight= "10px";
    document.getElementById("points").appendChild(buttonA);
    buttonA.disabled = false;
    buttonA.onclick = function () {
        let squareB = document.getElementsByClassName("square-b");
        let x = Math.floor(Math.random() * 20) + 1;
        alert(x);
        for (i = 0; i < squareB.length; i++) {
            if (x == squareB[i].innerHTML) {
                pontosA += parseFloat(squareB[i].innerHTML);
                squareB[i].remove();
                document.getElementById("pontosJogA").innerHTML = pontosA;
            }

            /*else if(squareB[i].innerHTML == 13){
                pontosB = parseFloat(squareB[i].innerHTML) * 2;
            }*/

            else if (countJogadas == 30 || squareB.length == 0 && maxPontos > maxPontos) {
                alert('Jogo Terminado!');
                maxPontos = Math.max(pontosA, pontosB);
                document.getElementById("maxpontos").innerHTML = maxPontos;
                document.getElementById("buttonB").disabled = true;
                document.getElementById("buttonA").disabled = true;
                localStorage.setItem("maxPontos", maxPontos);
                return maxPontos
            }


        }
        countJogadas++;
        document.getElementById("buttonA").disabled = true;
        document.getElementById("buttonB").disabled = false;
        document.getElementById("jogos").innerHTML = countJogadas;

    };

    let buttonB = document.createElement("button");
    buttonB.setAttribute('type', 'button');
    buttonB.id = "buttonB";
    buttonB.textContent = "Jogada B";
    buttonB.style.marginLeft= "10px";
    document.getElementById("points").appendChild(buttonB);
    buttonB.disabled = true;
    buttonB.onclick = function () {
        let squareA = document.getElementsByClassName("square-a");
        let x = Math.floor(Math.random() * 20) + 1;
        alert(x);
        for (i = 0; i < squareA.length; i++) {
            if (x == squareA[i].innerHTML) {
                pontosB += parseFloat(squareA[i].innerHTML);
                squareA[i].remove();
                document.getElementById("pontosJogB").innerHTML = pontosB;
            }

            /*else if(squareA[i].innerHTML == 13){
                 pontosA = parseFloat(squareA[i].innerHTML) * 2;
             }*/

            else if (countJogadas == 30 || squareA.length == 0 && maxPontos > maxPontos) {
                alert('Jogo Terminado!');
                maxPontos = Math.max(pontosA, pontosB);
                document.getElementById("maxpontos").innerHTML = maxPontos;
                document.getElementById("buttonB").disabled = true;
                document.getElementById("buttonA").disabled = true;
                localStorage.setItem("maxPontos", maxPontos);
                return maxPontos
            }


        }
        countJogadas++;
        document.getElementById("jogos").innerHTML = countJogadas;
        document.getElementById("buttonB").disabled = true;
        document.getElementById("buttonA").disabled = false;


    }

    document.getElementById("maxpontos").innerHTML = localStorage.getItem("maxPontos", maxPontos);
}
