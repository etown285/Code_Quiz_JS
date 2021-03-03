//set timer interval to 60 and add eventlistenr to start ont he click 
var count = 60;
var timer = document.getElementById('timer');
var startTimer = document.querySelector('#startquiz')
startTimer.addEventListener("click",function(){
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
} )

//Created array for questions and answers for vairables. 
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
    {
        title : "When was Javascript created?", 
        choices: ["1992","1993","2000","1995"],
        answer: "1995"
    },
]

console.log(question);