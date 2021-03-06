// html ids
var timer = document.getElementById('timer'); 
var startQuizId = document.querySelector('#startquiz');
var userScore = document.getElementById('score')
var questionId = document.getElementById('question');
const choiceAId = document.getElementById('choice1');
const choiceBId = document.getElementById('choice2');
const choiceCId = document.getElementById('choice3');
const choiceDId = document.getElementById('choice4');

// List of questions for the user
var question1 = "When was Javascript created?"; 
var question1Answers = {
    a:"1992",
    b:"1993",
    c:"2000",
    d:"1995",
};
var question1AnswerKey = "d";

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
        question: "2 was Javascript created?",
        answers: {
            a:"1992",
            b:"1993",
            c:"2000",
            d:"1995",
        },
        key: "d",
    },
]
var score = 0; 
var reward = 25; 
var punish = 10;
var timerInterval;
var count = 0; 
var timeLimit = 60;
var expired = false; 
var dataIndex = 0;
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

function PromptQuestion(){
    questionId.innerHTML = data[dataIndex].question;
    choiceAId.innerHTML = "A. " + data[dataIndex].answers["a"];
    choiceBId.innerHTML = "B. " + data[dataIndex].answers["b"];
    choiceCId.innerHTML = "C. " + data[dataIndex].answers["c"];
    choiceDId.innerHTML = "D. " +data[dataIndex].answers["d"];
}

function AnswerQuestion(key){
    if(data[dataIndex].key == key){
        alert("correct");
        score += reward;
    }
    else{
        alert("wrong");
        count += punish; 
    }
    userScore.innerHTML = score;
    dataIndex++;
    if(dataIndex < data.length){
        PromptQuestion();
    }
    else {
        alert("Quiz Complete!");
        clearInterval(timerInterval);
    }
}



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




//variables that index the questions 

//timer display for user 

//displays questions

//Displays user score when timer starts 

//event listners to display questions


//When user selects right answer 20 points is added 

//When user selects wrong answer timer subtracts 15 seconds

//When user answers all questions or timer equals zero 

//User can save his intials and score in local storage