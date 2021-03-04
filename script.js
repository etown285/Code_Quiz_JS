//creates timer to countdown with start 
//var timer = document.getElementById('timer');
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
} }, 1000); 
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
]


console.log(question);

var currentQuestions = 0;
function getNextQuestion (userChoice) {
    var userQuestions = question[currentQuestions].answer; {
    
        if (userChoice===userQuestions) {
            console.log("Correct!")
        }
        else {
            console.log("Wrong Answer!")
        }
        getNextQuestion++
    }


}

//function showQuestion()
/*
var userQuestions = document.getElementById("questions");
var userAnswers = document.getElementById("answers");
function answersClicks() {
    var a = document.getElementById("answer1");
    var b = document.getElementById("answer2");
    var c = document.getElementById("answer3");
    var d = document.getElementById("answer4");

    a.addEventListener("click", function());
    b.addEventListener("click", function());
    c.addEventListener("click", function());
    d.addEventListener("click", function());
}
*/




//If user selects the correct answer value is True and score is added to the display if user selects wrong answer the value is false and 10 seconds is deducted from the timer 

//When user answers next questions is displayed 

//When all questions are answered the total score is displayed 

//User can log his intials with the high score score