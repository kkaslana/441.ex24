function calc(func){
    var result = document.getElementById('result');
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    if(isNaN(num1) || isNaN(num2)){
        alert('please enter a number');
        return false;
    }
    result.value = func(num1,num2);
}
//The input in the above paragraph is not digital feedback
function add(num1,num2){
    return num1+num2;
}


 
