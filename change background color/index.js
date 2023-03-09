const btn = document.querySelector('button');
const changeColor = document.querySelector('.change-color');
const body = document.body;

function randomColorGenrate (){
   
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomColor = `rgb(${red},${green},${blue})`;
    console.log(randomColor);
    return randomColor;
}



btn.addEventListener('click',()=>{
  const randomColor = randomColorGenrate();
  changeColor.textContent= randomColor;
  body.style.backgroundColor=randomColor;
  })


