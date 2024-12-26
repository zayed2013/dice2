//  Player 1
let randomNum1 = Math.floor(Math.random() * 6) + 1


let randomImg1 = 'dice' + randomNum1 + '.png'


let randomImgSrc1 = 'images/' + randomImg1


document.querySelectorAll("img")[0].src = randomImgSrc1




// Player 2
let randomNum2 = Math.floor(Math.random() * 6) + 1


let randomImg2 = 'dice' + randomNum2 + '.png'


let randomImgSrc2 = 'images/' + randomImg2


document.querySelectorAll("img")[1].src = randomImgSrc2

if (randomNum1 > randomNum2) {
 document.querySelector("h1").innerHTML = "🚩 player 1 Wins! "
}   

else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = " player 2 Wins!🚩 "
   }   

else if (randomNum1 = randomNum2) {
    document.querySelector("h1").innerHTML = " Draw! 🤝"
   }   

document.querySelector("button").addEventListener("click", function () {
    location.reload()
})














































