var count = 0;
let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let elem = document.getElementsByClassName("box");
console.log(elem)
let elem2 = document.getElementsByClassName("overlay");
let elem3 = document.getElementById("won");
console.log(elem2);
let elem4 = document.getElementById("reset1");
let elem5 = document.getElementById("reset2");
var Iswon=0;

for (let i = 0; i < 9; i++) {
    elem[i].addEventListener("click", function () {
        if (count % 2 == 0) {
            elem[i].querySelector('.boxtext').innerHTML = "x";
            document.querySelector('.info').innerHTML = "Turn for O";
        }
        else {
            elem[i].querySelector('.boxtext').innerHTML = "o";
            document.querySelector('.info').innerHTML = "Turn for X";
        }
        count++;
        for (let j = 0, k = 0; j < 8; j++) {
            if (elem[wins[j][k]].querySelector('.boxtext').innerHTML == elem[wins[j][k + 1]].querySelector('.boxtext').innerHTML &&
                elem[wins[j][k + 1]].querySelector('.boxtext').innerHTML == elem[wins[j][k + 2]].querySelector('.boxtext').innerHTML && elem[wins[j][k]].querySelector('.boxtext').innerHTML !== "") {
                elem2[0].style.display = "block";
                Iswon = 1;
                if (elem[wins[j][k]].querySelector('.boxtext').innerHTML == "x")
                    elem3.innerHTML = "X has won";
                else elem3.innerHTML = "O has won";
                console.log(elem[3].querySelector('.boxtext').innerHTML);
            }
        }   
        if(elem[0].querySelector('.boxtext').innerHTML !== "" && elem[1].querySelector('.boxtext').innerHTML !== "" && elem[2].querySelector('.boxtext').innerHTML !== "" && elem[3].querySelector('.boxtext').innerHTML !== "" && elem[4].querySelector('.boxtext').innerHTML !== "" && elem[5].querySelector('.boxtext').innerHTML !== "" && elem[6].querySelector('.boxtext').innerHTML !== "" && elem[7].querySelector('.boxtext').innerHTML !== "" && elem[8].querySelector('.boxtext').innerHTML !=="" && Iswon == 0) {
            elem2[0].style.display = "block";
            elem3.innerHTML = "Match Draw";
        } 
    })
}

elem4.addEventListener("click", function () {
    elem2[0].style.display = "none";
    for (let l = 0; l < 9; l++) {
        elem[l].querySelector('.boxtext').innerHTML = "";
        count = 0;
        i=0;
    }
})
elem5.addEventListener("click", function () {
    elem2[0].style.display = "none";
    for (let l = 0; l < 9; l++) {
        elem[l].querySelector('.boxtext').innerHTML = "";
        count = 0;
        i=0;
    }
})