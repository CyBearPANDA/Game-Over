const arrows = document.querySelectorAll(".arrow");
const gameLists = document.querySelectorAll(".game-list");


arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = gameLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        clickCounter++;
    if (imageItem - (6 + clickCounter) >= 0) { 
        gameLists[i].style.transform = `translateX(${
            gameLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
    } else {
        gameLists[i].style.transform = "translateX(0)";
        clickCounter = 0;
    }
  }); 
});



const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.navbar a,.sidebar,.sidebar i,.toggle,.toggle-ball,.game-list-filter select"
);

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"))
});