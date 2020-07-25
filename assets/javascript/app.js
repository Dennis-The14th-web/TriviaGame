// this fuction start the game 
// when button is pressed it fades out and question page appears
$("#doneButton").hide();
$("#resetButton").hide();

function startGame(){
    $("#startBtn").on("click", ()=>{
        $(this).hide("#startBtn");
        displayQuestions();
        $("#doneButton").show();
    });
}
startGame();

// this function holds the questions, answers, question ID and actual answer data
 function displayQuestions(){
 $(document).ready(function(){
var playGame = {
        questions: [
        {
            question: '<h4>What is the capital of the U.S.A?</h4>',
            choices: ["Georgia", "Washinton, D.C", "California", "Chicago"],
            id: "question-one",
            answer: 1
        },{
            question: '<h4>Who was the 44th president of the U.S.A?</h4>',
            choices: ["Barack Obama", "George W Bush", "Ronald Reagan", "Bill Clinton"],
            id: "question-two",
            answer: 0
        },{
            question: '<h4>In what year was Georgia Tech founded?</h4>',
            choices: ["1900", "1932", "1800", "1910", "1885"],
            id: "question-three",
            answer: 4
        },{
            question: '<h4>On what date was Georgia Tech founded?</h4>',
            choices: ["October 15", "October 13", "October 17", "November 20"],
            id: "question-four",
            answer: 1
        },{
            question: '<h4>How many pair of chromosome are in the human body?</h4>',
            choices: ["23", "24", "32", "50"],
            id: "question-five",
            answer: 0
        },{
            question: '<h4>Who is the Author of the Harry Potter book series?</h4>',
            choices: ["Steven King", "J.k Rowling", "Harold Smith", "Dennis Trump"],
            id:"question-six",
            answer: 1
        },{
            question: '<h4>What is the capital of Vermont?</h4>',
            choices: ["Battleboro", "Montpelier", "Barre City", "Burlington"],
            id: "question-seven",
            answer: 1
        },{
            question: '<h4>On what date was Harvard University founded?</h4>',
            choices: ["June 27, 1850", "April 16, 1730", "September 8, 1636", "March 16, 1550"],
            id: "question-eight",
            answer: 2
        },{
            question: '<h4>What are the first three words of the bible?</h4>',
            choices: ["I Am God","God is great","In the beginning","The Holy Spirit"],
            id: "question-nine",
            answer: 2
        },{
            question: '<h4>Which planet is nearest the sun?</h4>',
            choices: ["Pluto", "Mars", "Earth", "Neptune", "Mercury"],
            id: "question-ten",
            answer: 4
        },{
            question: '<h4>What did the Montgolfier brothers invent?</h4>',
            choices: ["The Ball", "The Ballon", "The Battery", "The Bottle"],
            id: "question-eleven",
            answer: 1
        },{
            question: '<h4> What does the roman numeral C represent?</h4>',
            choices: ["1000", "1100", "100", "10", "1", "10000"],
            id: "question-twelve",
            answer: 2
        }      
]};

//this function controls the timer, decrement and stops time appropriately 
// displays time up at exactly zero 

var number = 100;

function decrement(){
    $("#timeLeft").on("click", run);
    number--;
    $("#timeLeft").html("Time Remaining: " + number + " " +"Seconds");
    if (number === 0){
        stop();
        checkAnswers();
        $("#messageDiv").html("Time Up!");
    }
}

function run(){
    counter = setInterval(decrement, 1000);
}

function stop(){
    clearInterval(counter);
}
run();

//this function holds the answers and the chance to chose from the answers option.
// the for data only allows user to chose only one time from different options 

function formTemplate(data) {
    var qString = "<form id='questionOne'>"+ data.question + "<br>";
    var choices = data.choices;

    for (var i = 0; i < choices.length; i++) {
        var choice = choices[i];
       qString = qString + "<input type='radio' name='"+data.id+"' value="+ i + ">"+choice;
    }
    return qString + "</form>";
}
window.formTemplate = formTemplate;

// this function holds the questions and answers

function buildQuestions(){
    var questionHTML = ""
    for (var i = 0; i < playGame.questions.length; i++) {
        questionHTML = questionHTML + formTemplate(playGame.questions[i]);    
    }
    $("#questions-container").append(questionHTML);
}

// this function holds the correct answers to the actual question

function isCorrect(question) {

    var answers = $('[name='+question.id+']');
    var correct = answers.eq(question.answer);
    var isChecked = correct.is(":checked");
    return isChecked;
};
// console.log(isCorrect);
buildQuestions();

//this function holds the result  

function resultsTemplate(question) {
    var htmlBlock = "<div>"
    htmlBlock = htmlBlock + question.question + ' : ' + isChecked;
    return htmlBlock + "</div>";
}

//this holds the chosen answers to the questions and distinguish between correct and incorrect answered choice 
function checkAnswers (){
    var resultHTML = "";
    var guessedAnswer = [];
    var correct = 0;
    var incorrect = 0;
    var unAnswered = 0

    for (var i = 0; i < playGame.questions.length; i++) {
        if (isCorrect(playGame.questions[i])){
            correct++;
        }else {
             
            if (checkAnswered(playGame.questions[i])){
                incorrect++;
            } else {
                unAnswered++;
            }
        }
    }
    // console.log(checkAnswers);
     end();
    $("#result").html("Correct Answers: " + correct + "<br>" + "Incorrect Answers: " + incorrect + "<br>" + "Unanswered: " + unAnswered);
}

function checkAnswered(question){
    var anyAnswered = false;
    var answers = $("[name="+question.id+"]");

    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            anyAnswered = true;
        }
    }
    return anyAnswered;
}

// this helps to display the game when started 

function end() {
    if (number === 0){
         $("#questions-container").hide();
         $("#timeLeft").hide();
         $("#doneButton").hide();
         $("#messageDiv").html("All Done!");
    }    
}
end();

// this helps to display the game when started

function endGame(){
    $("#doneButton").on("click", ()=>{
        checkAnswers();
        stop();
        $("#questions-container").hide();
        $("#timeLeft").hide();
        $("#doneButton").hide();
        $("#messageDiv").html("All Done!");
        $("#resetButton").show();
               
    });   
};
endGame();
});

// this will restart the game all over
function rstart() {
    $("#resetButton").on("click", ()=>{
        location.reload(true);
    });
};
rstart();
}




