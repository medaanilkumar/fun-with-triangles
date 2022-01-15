var tr1=document.getElementById('tr1')
var tr2=document.getElementById('tr2')
var tr3=document.getElementById('tr3')
var sub=document.querySelector('#mySubmit')
var form=document.querySelector('.tr-form')
var count=0
form.addEventListener('submit',submit)





function submit(e){
   e.preventDefault()
   count++;
   var total=parseInt(tr1.value)+parseInt(tr2.value)+parseInt(tr3.value)
   console.log(total)
   if(total===180 && count==1){
       var final=document.createElement('h2')
      final.appendChild(document.createTextNode("Oh Oh! The angle form a triangle"))
      final.style.display='block';
      final.style.textAlign='center';
      document.body.appendChild(final)
      form.reset()
   }
   else{
    var final=document.createElement('h2')
    final.appendChild(document.createTextNode("Oh Oh! The no angle doesn't form a triangle"))
    final.style.display='block';
    final.style.textAlign='center';
    document.body.appendChild(final)
   }
}