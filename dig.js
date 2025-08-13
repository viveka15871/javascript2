let firstNumber="";
let secondNumber="";
let operator="";

function append(number){
    if(operator===""){
        firstNumber+=number;
        document.getElementById('res').value=firstNumber;
    }
    else{
        secondNumber+=number;
        document.getElementById('res').value=firstNumber+operator+secondNumber;
    }
}

function operate(op){
    operator=op;
    document.getElementById('res').value=firstNumber+operator;
}

function calculator(){
    let result;
    switch(operator){
        case'+':
        result=parseInt(firstNumber)+parseInt(secondNumber);
        break;
         case'-':
        result=parseInt(firstNumber)-parseInt(secondNumber);
        break;
         case'*':
        result=parseInt(firstNumber)*parseInt(secondNumber);
        break;
         case'/':
        result=parseInt(firstNumber)/parseInt(secondNumber);
        break;
    }
    document.getElementById('res').value=result;
}

let outputscreen = document.getElementById("output-screen");
function display(num){
    outputscreen.value += num;
}

function calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err)
    {
        alert("invalid")
    }
}
    function clear(){
        outputscreen.value=("");
    }

    function del(){
        outputscreen.value=outputscreen.value.slice("");
    }

    
        
    

 function clearresult() {
    firstNumber="";
   secondNumber="";
    operator="";
    document.getElementById('res').value="";

}