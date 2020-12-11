const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const product = document.querySelector("#product");

let currentRight = 0;

rightBtn.addEventListener("click", (e)=> {
  e.preventDefault();
})
if (currentRight <1000){
currentRight+=1000;
product.getElementsByClassName.right = `${currentRight}px`;
}

leftBtn.addEventListener("click", (e)=> {
  e.preventDefault();
})

