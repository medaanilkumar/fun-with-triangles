// var inp1=document.querySelector('#inp1')
// var inp2=document.querySelector('#inp2').value
// var btn=document.querySelector('#btn')
// var out=document.querySelector('#output')
// console.log(typeof inp2.value)
// // btn.addEventListener('click',hypo)

// // function hypo(){
// //     console.log(final)
// //     out.innerText=final
// // }


var num1=document.getElementById('num1')
var num2=document.getElementById('num2')
var btn=document.querySelector('#btn')
var out=document.querySelector('#output')
btn.addEventListener('click',btnfun)



function btnfun(){
    var finalresult=Math.sqrt((Number(num1.value)*Number(num1.value))+(Number(num2.value)*Number(num2.value)))
    out.innerText=finalresult
   
}