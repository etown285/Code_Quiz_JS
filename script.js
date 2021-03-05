//creates timer to countdown with start 
//var timer = document.getElementById('timer');
var count = 60; 
var timer = document.getElementById('timer'); 
var startTimer = document.querySelector('#startquiz')
var answers = document.querySelectorAll('#answers li')

startTimer.addEventListener("click",function(){
  userQuestions();
    var interval = setInterval(function(){   
        document.getElementById('timer').innerHTML=count;   
        count--;   
        if (count === 0){     
            clearInterval(interval);     
            document.getElementById('timer').innerHTML='Done';     
            // or...    
            alert("You're out of time!");   
        } 
    }, 1000); 
})
//displays questions to the HTML 

function userQuestions (){
    document.getElementById("questions").innerHTML = question[0].title;
         for (var i = 0; i < question[0].choices.length; i++){
        answers[i].textContent = question[0].choices[i]
    }
}

//Created array for questions and answers for variables.
var questionsEl = document.querySelector("#questions");

let question = [
    {
        title : "When was Javascript created?", 
        choices: ["1992","1993","2000","1995"],
        answer: "1995"
    },
    {
        title : "When was Javascript created?", 
        choices: ["1992","1993","2000","1995"],
        answer: "1995"
    },
    {
        title : "When was Javascript created?", 
        choices: ["1992","1993","2000","1995"],
        answer: "1995"
    },
    {
        title : "When was Javascript created?", 
        choices: ["1992","1993","2000","1995"],
        answer: "1995"
    },
    {
        title : "When was Javascript created?", 
        choices: ["1992","1993","2000","1995"],
        answer: "1995"
    },
]


startTimer.addEventListener("click",function(){

});