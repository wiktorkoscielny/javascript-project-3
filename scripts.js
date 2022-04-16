let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");
let btn = document.querySelector(".btn");

// variables
let interval = null;
let playerScore = 0;

// score counter
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`
}

// start game on desktop
window.addEventListener("keydown", (start) => {
    if(start.code == "Space")
        {
            gameOver.style.display = "none";
            block.classList.add("blockActive");
            road.firstElementChild.style.animation = "roadAnimate 1.5 linear infinite";
            cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";
            //score
            let playerScore = 0;
            interval = setInterval(scoreCounter,200);  
        }
})

//start game on mobile / desktop
function handleStart() {
    gameOver.style.display = "none";
    block.classList.add("blockActive");
    road.firstElementChild.style.animation = "roadAnimate 1.5 linear infinite";
    cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";
    //score
    let playerScore = 0;
    interval = setInterval(scoreCounter, 200);
    btn.style.display = "none";
}    


// jump on mobile
window.addEventListener("touchstart", (e) => {
    
         if(dino.classList != "dinoActive")
            {
                dino.classList.add("dinoActive")
                //removing class after 0.5s
                setTimeout(()=>{
                    dino.classList.remove("dinoActive")
                },500);
            }
})

// jump on desktop
window.addEventListener("keydown", (e) => {
    if(e.key == "ArrowUp")
         if(dino.classList != "dinoActive")
            {
                dino.classList.add("dinoActive")
                //removing class after 0.5s
                setTimeout(()=>{
                    dino.classList.remove("dinoActive")
                },500);
            }
        
})

// game over
let result = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
        // console.log("dinoBottom" + dinoBottom);

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
        // console.log("blockLeft" + blockLeft);

        // find the place where dino and block meets
    if(dinoBottom <= 90 && blockLeft >= 5 && blockLeft <= 80){
        // console.log("game over")

        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
        btn.style.removeProperty("display");
    }
}, 10);
