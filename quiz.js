var quiz=document.querySelector('#quiz-form')
var submitbtn=document.querySelector('#submit-btn')
var out=document.querySelector('#output-score')

const correct = ["90°" , "right angled" , "3" , "80°" ,"scalene"];


submitbtn.addEventListener('click',submit)

function submit(){
    let sum=0
    var results=new FormData(quizz)
    for(let i of results.values()){
        
        if(correct.includes(i)){
            sum++

        }
    }
    out.innerHTML=`You have given ${sum} correct answers`
}