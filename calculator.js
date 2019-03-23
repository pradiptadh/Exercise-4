function dapetangka(nomer){
    var input_nomer = document.getElementById('input');
    switch(nomer){
        case 1:
            input_nomer.value+='1';
            break;
        case 2:
            input_nomer.value+='2';
            break;
        case 3:
            input_nomer.value+='3';
            break;
        case 4:
            input_nomer.value+='4';
            break;
        case 5:
            input_nomer.value+='5';
            break;
        case 6:
            input_nomer.value+='6';
            break;
        case 7:
            input_nomer.value+='7';
            break;
        case 8:
            input_nomer.value+='8';
            break;
        case 9:
            input_nomer.value+='9';
            break;
        case 0:
            input_nomer.value+='0';
            break;

    }
}

//buat jumlah
function getOperand(operand){
    var input_nomer = document.getElementById('input');
    switch(operand){
        case '+':
        input_nomer.value += '+';
        break;
        case 'x':
        input_nomer.value += '*';
        break;
        case '/':
        input_nomer.value += '/';
        break;
        case '-':
        input_nomer.value += '-';
        break;


    }
}

function clearScreen(){
    document.getElementById('input').value="";
    document.getElementById('answer').value="";
}

function backSpace(){
    var input_nomer = document.getElementById('input');
    var x = input_nomer.value;
        if (x.length >0){
            x = x.substring(0, x.length-1);
            input_nomer.value = x;
        }
}
function compute(){
    var input_nomer = document.getElementById('input');
     jawaban = Math.floor(+eval(input_nomer.value));
    document.getElementById('answer').value = '=' + jawaban;
    if (input_nomer == true){
        document.getElementById('answer').value="";

    }
}
var i = 0 ;
function kurung(){

    var input_nomer = document.getElementById('input');
    if(i==0){
        input_nomer.value +='(';
        i=1;
    }else if(i==1){
        input_nomer.value +=')';
        i=0;

    }
}
