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
let elem2 = document.getElementById("overlay");

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
        for (let j = 0, k = 0; j < 8 && k < 3; j++) {
            if (elem[wins[j][k]].querySelector('.boxtext').innerHTML == elem[wins[j][k + 1]].querySelector('.boxtext').innerHTML &&
                elem[wins[j][k + 1]].querySelector('.boxtext').innerHTML == elem[wins[j][k + 2]].querySelector('.boxtext').innerHTML && elem[wins[j][k]].querySelector('.boxtext').innerHTML !== "") {
                elem2.style.display = "block";
                if (elem[wins[j][k]].querySelector('.boxtext').innerHTML == "x")
                    elem2.innerHTML = "X has won";
                else elem2.innerHTML = "O has won";
            }
        }
        i++;
    })
}

