// this fuction start the game 
// when button is pressed it fades out and actual game page appears

function startGame(){
    $(".startBtn").on("click", function(){
        $(this).hide(".startBtn");
        displayQuestions();
        // decrement()
        // $(this).show(".startBtn");
        // $("#messageDiv").html("All Done!");
        // checkAnswered()
        // gameOver()

    });
}
startGame();

 function displayQuestions(){
 $(document).ready(function(){
var playGame = {
        questions: [
        {
            question: "What is the capital of the U.S.A?",
            choices: ["Georgia", "Washinton D.C", "California", "Chicago"],
            id: "question-one",
            answer: 1
        },{
            question: "Who was the 44th president of the U.S.A?",
            choices: ["Barack Obama", "George W Bush", "Ronald Reagan", "Bill Clinton"],
            id: "question-two",
            answer: 0
        },{
            question: "In what year was Georgia Tech founded?",
            choices: ["1900", "1932", "1800", "1910", "1885"],
            id: "question-three",
            answer: 4
        },{
            question: "On what date was Georgia Tech founded?",
            choices: ["October 15", "October 13", "October 17", "November 20"],
            id: "question-four",
            answer: 1
        },{
            question: "How many pair of chromosome are in the human body?",
            choices: ["23", "24", "32", "50"],
            id: "question-five",
            answer: 0
        },{
            question: "Who is the Author of the Harry Potter book series?",
            choices: ["Steven King", "J.k Rowling", "Harold Smith", "Dennis Trump"],
            id:"question-six",
            answer: 1
        },{
            question: "What is the capital of Vermont?",
            choices: ["Battleboro", "Montpelier", "Barre City", "Burlington"],
            id: "question-seven",
            answer: 1
        },{
            question: "On what date was Harvard University founded?",
            choices: ["June 27, 1850", "April 16, 1730", "September 8, 1636", "March 16, 1550"],
            id: "question-eight",
            answer: 3
        }
]};
                        
                    var chioces = []; 
                    var message = "All Done!";
                    var number = 8;
                   
        
                    function decrement(){
                        $("#timeLeft").on("click", run);
                        number--;
                        $("#timeLeft").html("Time Remaining: " + number + "seconds");
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
               
                    function formTemplate(data) {
                        var qString = "<form id='questionOne'>"+ data.question + "<br>";
                        var choices = data.choices;
        
                        for (var i = 0; i < choices.length; i++) {
                            var choice = choices[i];
                            // console.log(choice);
                            qString = qString + "<input type='radio' name='"+data.id+"' value="+ i + ">"+choice;
                            // $("choices-container").append(choicesHTML);
        
                        }
                        return qString + "</form>";
                    }
                    window.formTemplate = formTemplate;
        
                    function buildQuestions(){
                        var questionHTML = ""
                        for (var i = 0; i < playGame.questions.length; i++) {
                            questionHTML = questionHTML + formTemplate(playGame.questions[i]);    
                        }
                        $("#questions-container").append(questionHTML);
                    }
        

                    function isCorrect(question) {
                    
                        var answers = $('[name='+question.id+']');
                        var correct = answers.eq(question.answer);
                        var isChecked = correct.is(":checked");
                        return isChecked;
                    };
                    // console.log(isCorrect);
                    buildQuestions();

                    function resultsTemplate(question) {
                        var htmlBlock = "<div>"
                        htmlBlock = htmlBlock + question.question + ' : ' + isChecked;
                        return htmlBlock + "</div>";
                    }
        
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
                        $(".result").html("Correct Answers: " + correct + "<br>" + "Incorrect Answers: " + incorrect + "<br>" + "Unanswered: " + unAnswered);
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

                    function end() {
                        if (number === 0){
                             $("#questions-container").hide();
                             $("#timeLeft").hide();
                             $(".doneButton").hide();
                             $("#messageDiv").html("All Done!");
                        }
                        
                    }
            
                    end();

                    function endGame(){
                        $(".doneButton").on("click", function(){
                            checkAnswers();
                            stop();
                            $("#questions-container").hide();
                            $("#timeLeft").hide();
                            $(".doneButton").hide();
                            $("#messageDiv").html("All Done!");
                        });
                        
                    }
                
                    endGame();
                   
                
             });
         }


// this holds the question,choices,id,answers

