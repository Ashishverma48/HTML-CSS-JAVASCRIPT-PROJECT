function btnCheckEvenOdd(){
    var txt_num= document.getElementById('txt_no');
    var txt_res = document.getElementById('result');
    if (txt_num.value === ""){
        alert('ENTER NUMBER')
    }else{
       
       var num = parseInt(txt_num.value);
       console.log(num);
       var result = checkEvenOdd(num);
       if(result){
     txt_res.value = 'EVEN NUMBER'
     }
     else txt_res.value = 'ODD NUMBER'
     }
}

function checkEvenOdd(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}


    