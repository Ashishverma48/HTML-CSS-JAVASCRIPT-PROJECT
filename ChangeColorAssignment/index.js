// BLL
var h2  =  document.getElementById('rgb_h2')

function redColorInc(){

    var red = document.getElementById('red');
    var blue = document.getElementById('blue');
    var alpha = document.getElementById('alpha');
    var green = document.getElementById('green');
    var plusNum = red.value;
    red.value  = parseInt(plusNum) +1
    
    if (red.value > 255){
        red.value = '0'
    }
    h2.innerText = `rgba(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`
    changeColor(red.value,green.value,blue.value,alpha.value)
    console.log(red.value);
    
}
function greenColorInc(){
    var red = document.getElementById('red');
    var blue = document.getElementById('blue');
    var alpha = document.getElementById('alpha');
    var green = document.getElementById('green');
    var plusNum = green.value;
    green.value  = parseInt(plusNum) +1
    if (green.value > 255){
        green.value = '0'
    }
    h2.innerText = `rgba(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`
    changeColor(red.value,green.value,blue.value,alpha.value)
    console.log(red.value);
    

}
function blueColorInc(){
    var red = document.getElementById('red');
    var blue = document.getElementById('blue');
    var alpha = document.getElementById('alpha');
    var green = document.getElementById('green');
    var plusNum = blue.value;
    blue.value  = parseInt(plusNum) +1
    if (blue.value > 255){
        blue.value = '0'
    }
    h2.innerText = `rgba(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`
    changeColor(red.value,green.value,blue.value,alpha.value)
    console.log(red.value);

}
function alphaColorInc(){
    var red = document.getElementById('red');
    var blue = document.getElementById('blue');
    var alpha = document.getElementById('alpha');
    var green = document.getElementById('green');
    var plusNum = alpha.value;
    alpha.value  = parseFloat(plusNum) + 0.1
    if (alpha.value > 1){
        alpha.value = '0'
    }

    h2.innerText = `rgba(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`
    changeColor(red.value,green.value,blue.value,alpha.value)
    console.log(red.value);


}

function redColorDec(){

    var red = document.getElementById('red');
    var blue = document.getElementById('blue');
    var alpha = document.getElementById('alpha');
    var green = document.getElementById('green');
    var plusNum = red.value;
    red.value  = parseInt(plusNum) -1
    
    if (red.value < 0){
        red.value = '255'
    }
    h2.innerText = `rgba(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`
    changeColor(red.value,green.value,blue.value,alpha.value)
    console.log(red.value);
    
}
function greenColorDec(){
    var red = document.getElementById('red');
    var blue = document.getElementById('blue');
    var alpha = document.getElementById('alpha');
    var green = document.getElementById('green');
    var plusNum = green.value;
    green.value  = parseInt(plusNum) - 1
    if (green.value < 0){
        green.value = '255'
    }
    h2.innerText = `rgba(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`
    changeColor(red.value,green.value,blue.value,alpha.value)
    console.log(red.value);
    

}
function blueColorDec(){
    var red = document.getElementById('red');
    var blue = document.getElementById('blue');
    var alpha = document.getElementById('alpha');
    var green = document.getElementById('green');
    var plusNum = blue.value;
    blue.value  = parseInt(plusNum)  - 1
    if (blue.value < 0){
        blue.value = '255'
    }
    h2.innerText = `rgba(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`
    changeColor(red.value,green.value,blue.value,alpha.value)
    console.log(red.value);

}
function alphaColorDec(){
    var red = document.getElementById('red');
    var blue = document.getElementById('blue');
    var alpha = document.getElementById('alpha');
    var green = document.getElementById('green');
    var plusNum = alpha.value;
    alpha.value  = plusNum - 0.1
    if (alpha.value < 0){
        alpha.value = '1'
    }

    h2.innerText = `rgba(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`
    changeColor(red.value,green.value,blue.value,alpha.value)
    console.log(red.value);


}



// BLL 


function changeColor(red,green,blue,alpha){
    var bGColor = document.getElementById('h2_div');
    bGColor.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

