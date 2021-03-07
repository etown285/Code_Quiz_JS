// html ids
var timer = document.getElementById('timer'); 
var startQuizId = document.querySelector('#startquiz');
var userScore = document.getElementById('score')
var questionId = document.getElementById('question');
const choiceAId = document.getElementById('choice1');
const choiceBId = document.getElementById('choice2');
const choiceCId = document.getElementById('choice3');
const choiceDId = document.getElementById('choice4');
var intials = document.getElementById("intials")
var scores = document.getElementById("userhighscores")
var submitHs = document.querySelector('#submit');
var userIntials = document.querySelector('userintials')


/* List of questions for the user
var question1 = "When was Javascript created?"; 
var question1Answers = {
    a:"1992",
    b:"1993",
    c:"2000",
    d:"1995",
};
var question1AnswerKey = "d";
*/

//new datastructure
var data = [
     {
        question: "When was Javascript created?",
        answers: {
            a:"1992",
            b:"1993",
            c:"2000",
            d:"1995",
        },
        key: "d",
    },
     {
        question: "What are JavaScript variables?",
        answers: {
            a:"Containers for storing data values.",
            b:"A plugin in Javascript.",
            c:"Stores values in local storage.",
            d:"A block of code designed to perform a particular task.",
        },
        key: "a",
    },
    {
        question: "What is an example of a Boolean value?",
        answers: {
            a:"WHERE/WHEN",
            b:"WHY/AM",
            c:"TRUE/FALSE",
            d:"1995",
        },
        key: "c",
    },
    {
        question: "What is the extension of a JavaScript",
        answers: {
            a:".Java",
            b:".Js",
            c:".javascript",
            d:".xml",
        },
        key: "b",
    },
    {
        question: "How to add JavaScript to HTML?",
        answers: {
            a:"<html = script.js>",
            b:"<js src=script.js><js>",
            c:"<script src=script.js><script>",
            d:"<stylesheet.js><stylesheet.js>",
        },
        key: "c",
    },
]
var score = 0; 
var reward = 20; 
var punish = 10;
var timerInterval;
var count = 0; 
var timeLimit = 60;
var expired = false; 
var dataIndex = 0;

//timer display for user 
function myTimer() {
    if (count==timeLimit){
        expired = true; 
        timer.innerHTML = "times up!"; 
    }
    if (expired) {
        endQuiz();
    }
    count++;
    timer.innerHTML = timeLimit-count; 
}

function endQuiz (){
    alert("times up!");
    clearInterval(timerInterval);
}

//displays questions

function PromptQuestion(){
    questionId.innerHTML = data[dataIndex].question;
    choiceAId.innerHTML = "A. " + data[dataIndex].answers["a"];
    choiceBId.innerHTML = "B. " + data[dataIndex].answers["b"];
    choiceCId.innerHTML = "C. " + data[dataIndex].answers["c"];
    choiceDId.innerHTML = "D. " +data[dataIndex].answers["d"];
}

function AnswerQuestion(key){
    //When user selects right answer 20 points is added 
    if(data[dataIndex].key == key){
        alert("correct");
        score += reward;
    }
    //When user selects wrong answer timer subtracts 15 seconds
    else{
        alert("wrong");
        count += punish; 
    }
    //Displays user score when timer starts 
    userScore.innerHTML = score;
    dataIndex++;
    if(dataIndex < data.length){
        PromptQuestion();
    }
    //When user answers all questions or timer equals zero 
    else {
        alert("Quiz Complete!");
        clearInterval(timerInterval);
        //create logic for end of the game 
    }
}


//event listners to display questions and timer
startQuizId.addEventListener("click", function(){
    timerInterval = setInterval(myTimer, 1000);
    PromptQuestion();
});

choiceAId.addEventListener("click", function(){
    AnswerQuestion("a");
});

choiceBId.addEventListener("click", function(){
    AnswerQuestion("b");
});

choiceCId.addEventListener("click", function(){
    AnswerQuestion("c");
});

choiceDId.addEventListener("click", function(){
    AnswerQuestion("d");
});

//User can save his intials and score in local storage

function submit(){
    //var u = userIntials.value.trim();
        localStorage.setItem("userhighscores",JSON.stringify(score));
        score.innerHTML=score;
    console.log(score)
    
}
/*
submitHs.addEventListener("click",function(){
    submit();
});


function storeUserIntials(){
    localStorage.setItem("userhigscore",JSON.stringify(scores))
}
*/















