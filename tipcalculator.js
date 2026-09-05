var val1=document.querySelector(".billamount");
var val2=document.querySelector(".tip-per");

const button=document.querySelector(".calculate");

button.addEventListener("click", () =>{
    var number1=parseFloat(val1.value);
    var number2=parseFloat(val2.value);

    var tip=number1*(number2/100);
    var total=number1+tip; 

    document.querySelector(".result").innerText=total;

})