let root = document.querySelector(":root")
function changeRoot(originalColor, color){
  root.style.setProperty(originalColor, color)
}



// let interaction = document.querySelector('a:nth-of-type(12)')

// interaction.addEventListener('click', jumpHandler)
// interaction.addEventListener('animationend', jumpHandler)

// function jumpHandler() {
//   interaction.classList.toggle('jump')
// }


//1

let navButton = document.querySelector("a:nth-of-type(1)")
let nav = document.querySelector("nav")
let navUnder = document.querySelector("nav:nth-of-type(2)")
let text = document.querySelector("ul")

navButton.addEventListener("click", navigation)
navClicked = 0

function navigation(){
  navButton.classList.add("navButton")
  nav.classList.add("nav")
  text.classList.add("navText")
  navUnder.classList.add("navUnder")
  navClicked = navClicked + 1
}

//2

let codeButton = document.querySelector("a:nth-of-type(19)")
let code = document.querySelector("span:nth-of-type(1)")
let codeTag = document.querySelector("span:nth-of-type(2)")

codeButton.addEventListener("click", typing)

function typing(){
  code.classList.toggle("code")
  codeTag.classList.toggle("codeTag")
}


//3
let flowButton = document.querySelector("a:nth-of-type(9)")
flowButton.addEventListener("click", gradient)

function gradient(){
  flowButton.classList.toggle("gradient")
}

//4

let sprintButton = document.querySelector("a:nth-of-type(6)")
let numbers = document.querySelector("#ulNumbers")
sprintButton.addEventListener("click", counting)

function counting(){
  numbers.classList.toggle("counting")
}



//5
let stars = document.querySelectorAll("img")
let feedbackButton = document.querySelector("a:nth-of-type(16)")
feedbackButton.addEventListener("click", starsFunction)

function starsFunction(){
  stars[0].classList.toggle("stars1")
  stars[1].classList.toggle("stars2")
  stars[2].classList.toggle("stars3")
  stars[3].classList.toggle("stars4")
  stars[4].classList.toggle("stars5")
}


//6
let statesButton = document.querySelector("a:nth-of-type(21)")
statesButton.addEventListener("click", colorChange)
let statesButtonPink = document.querySelector("a:nth-of-type(20)")
statesButtonPink.addEventListener("click", colorChangeEnd)

function colorChange(){
  statesButton.classList.toggle("statesAnimation")
}

function colorChangeEnd(){
  statesButton.classList.remove("statesAnimation")
}


//7

let frontendButton = document.querySelector("a:nth-of-type(2)")
let frontendBackend = document.querySelectorAll("p")
frontendButton.addEventListener("click", swipe)

// function swipe(){
//     // if(! frontendBackend[0].classList.contains("leftToRight")){
//       frontendBackend[0].style.animation = "frontend 4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forward"
//       frontendBackend[1].style.animation = "frontend 4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forward"
//     // } else if(! frontendBackend[0].classList.contains("rightToLeft")){

//     // }
//   }


function swipe(){
  frontendBackend[0].classList.toggle('leftToRight')
  frontendBackend[1].classList.toggle('leftToRight')
}



//8

let developmentButton = document.querySelector("a:nth-of-type(5)")
let back = document.querySelector(".back")
developmentButton.addEventListener("click", bigContainer)
// developmentButton.addEventListener("animationend", bigContainer)
back.addEventListener("click", smallContainer)
// back.addEventListener("animationend", smallContainer)

function bigContainer(){
  // if(developmentButton.style.height == "4.1rem"){
    if(navClicked >= 1){
      developmentButton.classList.add("bigContainerNav")
    } else{
      developmentButton.classList.add("bigContainer")
      back.classList.add("backAnimation")
    }
  // }
}

function smallContainer(){
  developmentButton.classList.replace("bigContainer", "bigContainer2")
  back.classList.replace("backAnimation", "backAnimation2")
}



//9

let theButton = document.querySelector(".the")
theButton.addEventListener("dragend", spin)

function spin(){
  console.log("hello")
  theButton.classList.toggle("spinning")
}



//10

const userButton = document.querySelector("a:nth-of-type(10)")
const body = document.body
const user = userButton.classList
userButton.addEventListener("wheel", colorScroll)

let scrollCount = 0
let colorCount = 0

function colorScroll(){
  scrollCount = ++scrollCount
  if(scrollCount == 1){
    user.add("color1")
    user.remove("color6")
  } else if(scrollCount == 2){
    user.add("color2")
    user.remove("color1")
  } else if(scrollCount == 3){
    user.add("color3")
    user.remove("color2")
  } else if(scrollCount == 4){
    user.add("color4")
    user.remove("color3")
  } else if(scrollCount == 5){
    user.add("color5")
    user.remove("color4")
  } else if(scrollCount == 6){
    user.add("color6")
    user.remove("color5")
    scrollCount = 0

    colorCount = ++colorCount
    if(colorCount == 1){
      body.className = "colorPurple"
    } else if(colorCount == 2){
      body.className = "colorBlue"
    } else if(colorCount == 3){
      body.className = "colorGreen"
    } else if(colorCount == 4){
      body.className = "colorYellow"
    } else if(colorCount == 5){
      body.className = "colorOrange"
    } else if(colorCount == 6){
      body.className = "colorAqua"
    } else if(colorCount == 7){
      body.className = ""
      colorCount = 0
    }
  } 
}