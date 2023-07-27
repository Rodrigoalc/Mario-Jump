const Mario = document.querySelector(".Mario")
const pipe = document.querySelector(".pipe")

const Jump = () => {
  Mario.classList.add("Jump")

  setTimeout(() => {
    Mario.classList.remove("Jump")
  }, 500)
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft
  const MarioPosition = +window.getComputedStyle(Mario).bottom.replace("px", "")

  if (pipePosition <= 125 && pipePosition > 0 && MarioPosition < 80) {
    pipe.style.animation = "none"
    pipe.style.left = `${pipePosition}px`

    Mario.style.animation = "none"
    Mario.style.bottom = `${MarioPosition}px`

    Mario.src = "./assets/game-over.png"
    Mario.style.width = "75px"
    Mario.style.marginLeft = "50px"

    clearInterval(loop)
  }
}, 10)

document.addEventListener("keydown", Jump)
