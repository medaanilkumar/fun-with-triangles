var num1=document.getElementById('num1')
var num2=document.getElementById('num2')
var btn=document.querySelector('#btn')
var out=document.querySelector('#output')
btn.addEventListener('click',btnfun)



function btnfun(){
   // var finalresult=Math.sqrt((Number(num1.value)*Number(num1.value))+(Number(num2.value)*Number(num2.value)))
   var finalresult=(Number(num1.value)*Number(num2.value))/2;
   out.style.backgroundColor='grey'
    out.innerText=`The area of the triangle is ${finalresult}`
   
}