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

function navigation(){
  navButton.classList.add("navButton")
  nav.classList.add("nav")
  text.classList.add("navText")
  navUnder.classList.add("navUnder")
}

//2

let codeButton = document.querySelector("a:nth-of-type(20)")
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
  // for (star of stars) {
  //   star.style.marginLeft = "1rem"
  // }
  stars[0].classList.toggle("stars1")
  stars[1].classList.toggle("stars2")
  stars[2].classList.toggle("stars3")
  stars[3].classList.toggle("stars4")
  stars[4].classList.toggle("stars5")
}
