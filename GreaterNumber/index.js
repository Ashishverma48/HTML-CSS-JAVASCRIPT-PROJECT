function checkGreaterNumber(){
    let num1 = parseInt(document.getElementById('first_num').value);
    let num2 = parseInt(document.getElementById('second_num').value);
    let num3 = parseInt(document.getElementById('third_num').value);
    let num4 = parseInt(document.getElementById('fourth_num').value);
    let num5 = parseInt(document.getElementById('fiveth_num').value);
    
    
    greaterNumber(num1,num2,num3,num4,num5);
    smallerNumber(num1,num2,num3,num4,num5);
}

function greaterNumber(num1,num2,num3,num4,num5){
    let greater_txt = document.getElementById('greater');
    if(num1>num2 && num1>num3 && num1>num4 && num1>num5){
        greater_txt.value = `FIRST NUMBER :  ${num1} IS GREATER`
    }
    else if(num2>num1 && num2>num3 && num2>num4 && num2>num5){
        greater_txt.value = `SECOND NUMBER : ${num2} IS GREATER`
    }
    else if(num3>num1 && num3>num2 && num3>num4 && num3>num5){
        greater_txt.value = `THIRD NUMBER : ${num3} IS GREATER`
    }
    else if(num4>num1 && num4>num3 && num4>num2 && num4>num5){
        greater_txt.value = `FOURTH NUMBER : ${num4} IS GREATER`
    }
    else{
        greater_txt.value = `FIVETH NUMBER : ${num5} IS GREATER`

    }
    
}

function smallerNumber(num1,num2,num3,num4,num5){
    let smaller_txt = document.getElementById('smaller');
    if(num1<num2 && num1<num3 && num1<num4 && num1<num5){
        smaller_txt.value = `FIRST NUMBER : ${num1} IS SMALLER`
    }
    else if(num2<num1 && num2<num3 && num2<num4 && num2<num5){
        smaller_txt.value = `SECOND NUMBER : ${num2} IS SMALLER`
    }
    else if(num3<num1 && num3<num2 && num3<num4 && num3<num5){
        smaller_txt.value = `THIRD NUMBER : ${num3} IS SMALLER`
    }
    else if(num4<num1 && num4<num3 && num4<num2 && num4<num5){
        smaller_txt.value = `FOURTH NUMBER : ${num4} IS SMALLER`
    }
    else{
        smaller_txt.value = `FIVETH NUMBER : ${num5} IS SMALLER`

    }
}