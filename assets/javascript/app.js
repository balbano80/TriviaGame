$(function() {

var correct = 0;
var wrong = 0;
var unanswered = 0;
var counter = 0;
var timer = 30;
var arrIter = 0;
var startBtn = true;
var tempBtn;
var clockRunning = false;
var timeDown;

var questionArr = [
    questionOne = {
        question: "What is Planet Spaceball running out of?",
        possibles: ["Water", "Food", "Oil", "Air"],
        correct: 3,
        image: "<img src='assets/images/air.gif' alt='spaceballs air'>",
        audio: "assets/audio/suckblow.wav"
    },
    questionTwo = {
        question: "What bumper sticker is on the back of Spaceball One?",
        possibles: ["Jesus Is Our Co-Pilot", "We Brake For Nobody", "I Love My Ewok", "My Other Car is the Millenium Falcon"],
        correct: 1,
        image: "<img src='assets/images/sb1BumperSticker.jpg' alt='sb1 back'>", 
        audio: "assets/audio/spaceballOne.wav"
    },
    questionThree = {
        question: "What is the name of Rick Moranis's character?",
        possibles: ["Darth Helmet", "Dark Vader", "Dark Helmet", "Barf Vapor"],
        correct: 2,
        image: "<img src='assets/images/darkHelmet.gif' alt='spaceballs dark helmet'>",
        audio: "assets/audio/goodumb.wav"
    },
    questionFour = {
        question: "Who is Dark Hemet's second in command?",
        possibles: ["Colonel Ronald McDonald", "Colonel Klink", "Colonel Sandurz", "Colonel Mustard"],
        correct: 2,
        image: "<img src='assets/images/chicken.gif' alt='colonel sandurz'>",
        audio: "assets/audio/chicken.wav"
    },
    questionFive = {
        question: "What type of spacecraft does Lone Starr pilot?",
        possibles: ["Ford Explorer", "Winnebago", "Corvette", "Astrovan"],
        correct: 1,
        image: "<img src='assets/images/winnebago.jpg' alt='spaceballs winnebago'>",
        audio: "assets/audio/winnebago.wav"
    },
    // questionSix = {
    //     question: "What is the name of the gangster looking for Lone Starr",
    //     possibles: ["Pizza the Hutt", "Dom Ino", "Papa John", "Pepper Oni"],
    //     correct: 0,
    //     image: "<img src='assets/images/pizzaTheHutt.gif' alt='spaceballs pizza the hutt'>",
    //     audio: "assets/audio/stunt.wav"
    // },
    // questionSeven= {
    //     question: "What is the name of Princess Vespa's sleepy husband to be?",
    //     possibles: ["Prince Valtrex", "Prince Prozac", "Prince Valium", "Prince Sleepinol"],
    //     correct: 2,
    //     image: "<img src='assets/images/princeValium.jpg' alt='spaceballs prince valium'>",
    //     audio: "assets/audio/mechanism.wav"
    // },
    questionEight = {
        question: "What type of jam is used to 'jam' the Spaceball's radar?",
        possibles: ["Grape", "Strawberry", "Raspberry", "Apricot"],
        correct: 2,
        image: "<img src='assets/images/raspberry.gif' alt='spaceballs raspberry'>",
        audio: "assets/audio/buckle.wav"
    },
    questionNine = {
        question: "Barf is a Mawg.  What is a Mawg?",
        possibles: ["Half Man and Half Hog", "Half Man and Half Dog", "Half Man and Half Wookie", "Half Man and Half Woman"],
        correct: 1,
        image: "<img src='assets/images/mawg.gif' alt='spaceballs mawg'>",
        audio: "assets/audio/mawg.wav"
    },
    questionTen = {
        question: "What speed does Spaceball One go to in order to follow Lone Starr's ship?",
        possibles: ["Warp Speed", "Ludicrous Speed", "Ridicuolos Speed", "Light Speed"],
        correct: 1,
        image: "<img src='assets/images/ludicrousSpeed.gif' alt='spaceballs ludicrous speed'>",
        audio: "assets/audio/speed.wav"
    },
    questionEleven = {
        question: "What do the Spaceballs use to find out where Lone Starr escaped to?",
        possibles: ["Mr. Coffee", "Mr. Video and a copy of Spaceballs the Movie", "Mr. Radar", "Mr. Tractor Beam"],
        correct: 1,
        image: "<img src='assets/images/mrVideo.gif' alt='spaceballs mr video'>",
        audio: "assets/audio/apes.wav"
    },
    questionTwelve = {
        question: "When President Skroob uses the transporter, what accident happens to him?",
        possibles: ["He has no hair", "He is missing his arms", "His head is on backwards", "He is missing his legs"],
        correct: 2,
        image: "<img src='assets/images/backwardsHead.gif' alt='spaceballs head on backwards'>",
        audio: "assets/audio/bigass.wav"
    },
    questionThirteen = {
        question: "What thing in her matching luggage does Princess Vespa say she can't live without?",
        possibles: ["Her makeup", "Her clothes", "Her shoes" , "Her industrial stength hair dryer"],
        correct: 3,
        image: "<img src='assets/images/hairDryer.gif' alt='spaceballs hair dryer'>",
        audio: "assets/audio/fooledyou.wav"
    },
    questionFourteen = {
        question: "Who saves them on the desert planet?",
        possibles: ["Yogurt", "Pizza the Hutt", "Yoda", "Soda"],
        correct: 0,
        image: "<img src='assets/images/yogurt.gif' alt='spaceballs yogurt'>",
        audio: "assets/audio/yogurt.wav"
    },
    questionFifteen = {
        question: "What is Yogurt the master of?",
        possibles: ["Tthe Bleeps", "The Force", "The Schwartz", "The Vulcan Neck Pench"],
        correct: 2,
        image: "<img src='assets/images/schwartz.gif' alt='spaceballs schwartz'>",
        audio: "assets/audio/shwartz.wav"
    },
    questionSixteen= {
        question: "What is the combination to the air lock over Druidia?",
        possibles: ["1-1-1-1-1", "9-8-7-6-5", "1-2-3-4-5", "5-4-3-2-1"],
        correct: 2,
        image: "<img src='assets/images/combination.gif' alt='spaceballs air shield combination'>",
        audio: "assets/audio/12345.wav"
    },
    questionSeventeen= {
        question: "What does Yogurt say is going to be the name of the sequel for Spaceballs the Movie?",
        possibles: ["The search for Pizza the Hutt", "The Search for the Schwartz", "The Spaceballs Strike Back", "The Search for More Money"],
        correct: 3,
        image: "<img src='assets/images/spaceballs2.jpg' alt='spaceballs spaceballs2'>",
        audio: "assets/audio/theme.wav"
    }
];  //array of question objects with their question, corresponding possible answers to display, the index of the correct answer, and corresponding image/gif plus audio

function answers(arr){
    for (var i = 0; i < arr.length; i++){
        tempDiv = $("<div>");
        tempDiv.attr("class", "row");
        tempDiv.attr("class", "center-block");
        tempBtn = $("<button>");
        tempBtn.attr("id", "answerBtn");
        tempBtn.attr("data-index", i);
        tempBtn.text(arr[i]);
        $("#possibles").append(tempDiv);
        $(tempDiv).append(tempBtn);
    }
} //creates div and button for each of the possible answers in the corresponding objects "possible" array, and appends to div with #possilbes id

function newQuestion(){
    if(startBtn){
        $("#start").hide();
        startBtn = false;  
    }//hides start button in case it is up
    $("#timer").empty();
    $("#possibles").empty();
    $("#question").empty();
    timer = 30;    
    $("#timer").html("Time remaining: " + timer + " seconds");
    $("#question").html(questionArr[arrIter].question);
    answers(questionArr[arrIter].possibles);
    decrement();
}   // empties the timer, question and possibles divs
    // replaces timer div with max timer(30seconds)
    // appends current iteration of question array question to the div with question id
    // calls answers function
    // calls decrement function

function decrement(){
     if(!clockRunning){
        timeDown = setInterval(function(){
            clockRunning = true;
            timer--;
            $("#timer").html("Time remaining: " + timer + " seconds");
            if(timer == 0){
                stopInterval()
                expired();
                playAudio();
                unanswered++;
                if(arrIter ===questionArr.length - 1){
                    gameOver();
                } // if last question goes unanswered, call gameOver function
                else{
                setTimeout(function(){
                    arrIter++;
                    newQuestion()
                 }, 6000);
                } // else, increment iterator, call newQuestion function after 6 seconds
            }
        }, 1000)
    } // only go if clockRunning is set to false
} // 1 second decrement and display timer function

function stopInterval(){
    // console.log("in stop interval function");
    clearInterval(timeDown);
    clockRunning = false;;
} // stops timer and sets clockRunning to false

function answerCheck(index){
    if(index == questionArr[arrIter].correct){
        correct++;
        rightAnswer();
        if(arrIter ===questionArr.length - 1){
            gameOver();
        } // if on last question, call gameOver function
        else{
            setTimeout(function(){
                newQuestion()
            }, 6000);
        } // else call newQuestion function after 6 seconds
    }
    else{
        wrong++;
        wrongAnswer();
        if(arrIter ===questionArr.length - 1){
            gameOver();
        } // if on last question, call gameOver function
        else{
            setTimeout(function(){
                newQuestion()
            }, 6000);
        } // else call newQuestion function after 6 seconds
    }
    if(arrIter ===questionArr.length - 1){
        console.log("In game over block 2");
        gameOver();
    } // actually not sure if this is needed anymore
    else{
        arrIter++;
    } // increase question array iterator
}

function playAudio(){
    document.querySelector("#music").innerHTML = "<audio autoplay><source src=" + questionArr[arrIter].audio + " type='audio/wav'> </audio>"
} // plays corresponding audio value for each object

function rightAnswer(){
    stopInterval();
    var answerDiv = $("<div>");
    answerDiv.attr("id", "correct");
    answerDiv.html(questionArr[arrIter].image);
    $("#question").text("Correct!!!")
    $("#possibles").html(answerDiv);
    playAudio()
} // calls stop timer function, notifyes user that they selected the correct and plays corresponding gif for current question object, and calls playAudio function

function wrongAnswer(){
    stopInterval();
    var answerDiv = $("<div>");
    answerDiv.attr("id", "incorrect");
    answerDiv.text("The Correct Answer was: ");
    answerDiv.html(questionArr[arrIter].image);
    var wrongReply = "Wrong.  The correct answer was: " + questionArr[arrIter].possibles[questionArr[arrIter].correct];
    $("#question").text(wrongReply);
    $("#possibles").html(answerDiv);
    playAudio();
} // calls stop timer function, notifies user that wrong answer selected, displays correct answer and plays corresponding gif for current question object, and calls playAudio function

function expired(){
    var answerDiv = $("<div>");
    answerDiv.attr("id", "expired");
    answerDiv.text("You ran out of Time");
    answerDiv.html(questionArr[arrIter].image);
    var wrongReply = "You ran out of Time. The correct answer was: " + questionArr[arrIter].possibles[questionArr[arrIter].correct];
    $("#question").text(wrongReply);
    $("#possibles").html(answerDiv);
} // notifies user they ran out of time, displays correct answer, plays corresponding gif and audio for question object

function gameOver(){
    $("#timer").empty();
    $("#possibles").empty();
    $("question").empty();
    $("#timer").text("Game Over")
    var correcstDiv = $("<div>");
    var wrongsDiv = $("<div>");
    var unansweredDiv = $("<div>");
    correcstDiv.text("Correct answers: " + correct);
    wrongsDiv.text("Wrong answers: " + wrong);
    unansweredDiv.text("Unanswered: " + unanswered);
    $("#possibles").append(correcstDiv);
    $("#possibles").append(wrongsDiv);
    $("#possibles").append(unansweredDiv);
    var playAgain = $("<button>");
    playAgain.attr("id", "again");
    playAgain.text("Play Again?");
    $("#possibles").append(playAgain);
} // empties all necessary divs, displays game over message, displays correct, wrong and unanswered question totals, and creates/displays play again button

function reset(){
    console.log("in reset block");
    correct = 0;
    wrong = 0;
    unanswered = 0;
    counter = 0;
    timer = 30;
    arrIter = 0;
    startBtn = true;
    $("#timer").empty();
    $("#possibles").empty();
    $("#question").empty();
    $("#start").show();
} // sets all variables back to default, empties necessary divs and re-displays the start button(which starts the cycle again on-click)

//Basic function flow:
    // on start button click
    // new question
        // answers
        // decrement/timer
    //no click
        //expired(image/gif)
        //check end of question array
        //after interval
            //new question
            //or game over
    //on answer button click
        // checkanswer
            //right answer(image/gifs)
            // or
            //wrong answer(image/gifs)
            //check end of question array
            // after interval
                //new question
                //or game over


    $(document).on("click", "#startBtn", function(){
        newQuestion();
    });
    $(document).on("click", "#answerBtn", function(){
        answerCheck($(this).attr("data-index"));   
    })
    $(document).on("click", "#again", function(){
        // console.log("in play again button hit block")
        reset();
    });
});





