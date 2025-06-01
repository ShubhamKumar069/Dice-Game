let pl1 = document.querySelector('.img1')
let pl2 = document.querySelector('.img2')
let result = document.querySelector('h1')

let player1 = Math.floor(Math.random() * 7)
if(player1 === 0){
    player1 = 1
}

let player2 = Math.floor(Math.random() * 7)
if(player2 === 0){
    player2 = 1
}

if(player1 === 1){
    pl1.src = "./images/dice1.png"
} else if(player1 === 2){
    pl1.src = "./images/dice2.png"
} else if(player1 === 3){
    pl1.src = "./images/dice3.png"
} else if(player1 === 4){
    pl1.src = "./images/dice4.png"
} else if(player1 === 5){
    pl1.src = "./images/dice5.png"
} else if(player1 === 6){
    pl1.src = "./images/dice6.png"
}

if(player2 === 1){
    pl2.src = "./images/dice1.png"
} else if(player2 === 2){
    pl2.src = "./images/dice2.png"
} else if(player2 === 3){
    pl2.src = "./images/dice3.png"
} else if(player2 === 4){
    pl2.src = "./images/dice4.png"
} else if(player2 === 5){
    pl2.src = "./images/dice5.png"
} else if(player2 === 6){
    pl2.src = "./images/dice6.png"
}

if(player1 > player2){
    result.innerHTML = "Player 1 WINS! 🚩"
} else if(player2 > player1){
    result.innerHTML = "Player 2 WINS! 🚩"
} else{
    result.innerHTML = "It is a Tie ⭕"
}