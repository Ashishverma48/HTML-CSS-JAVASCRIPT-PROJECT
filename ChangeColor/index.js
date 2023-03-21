// PLL 
function onChangeBGColor(){
    
    var redColor = document.getElementById('red').value;
    var greenColor = document.getElementById('green').value;
    var blueColor = document.getElementById('blue').value;
    var alphaColor =  document.getElementById('alpha').value;
    var h2 = document.getElementById('rgb_h2');
    h2.innerText= 'rgba('+redColor+','+greenColor+','+blueColor+','+alphaColor+')';
    document.getElementById('red_val').innerText = ''+redColor+'';
    document.getElementById('green_val').innerText = ''+greenColor+'';
    document.getElementById('blue_val').innerText = ''+blueColor+'';
    document.getElementById('alpha_val').innerText = ''+alphaColor+'';
    changeColor(redColor,greenColor,blueColor,alphaColor);
    
}


// BLL 
function changeColor(red,green,blue,alpha){
    var bGColor = document.getElementById('h2_div');
    bGColor.style.backgroundColor= 'rgba('+red+','+green+','+blue+','+alpha+')'   
}