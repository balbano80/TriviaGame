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


var questionArr = [
    questionOne = {
        question: "What is Planet Spaceball running out of?",
        possibles: ["Water", "Food", "Oil", "Air"],
        correct: 3,
        image: "<img src='assets/images/air.jpg' alt='spaceballs air'>"
    },
    questionTwo = {
        question: "What bumper sticker is on the back of Spaceball One?",
        possibles: ["Jesus Is Our Co-Pilot", "We Brake For Nobody", "I Love My Ewok", "My Other Car is the Millenium Falcon"],
        correct: 1,
        image: "<img src='assets/images/sb1BumperSticker.jpg' alt='sb1 back'>" 
    },
    questionThree = {
        question: "What is the name of Rick Moranis's character?",
        possibles: ["Darth Helmet", "Dark Vader", "Dark Helmet", "Barf Vapor"],
        correct: 2,
        image: "<img src='assets/images/darkHelmet.gif' alt='spaceballs dark helmet'>"
    },
    questionFour = {
        question: "Who is Dark Hemet's second in command?",
        possibles: ["Colonel Ronald McDonald", "Colonel Klink", "Colonel Sandurz", "Colonel Mustard"],
        correct: 2,
        image: "<img src='assets/images/colonelSandurz.png' alt='colonel sandurz'>"
    },
    questionFive = {
        question: "What type of spacecraft does Lone Starr pilot?",
        possibles: ["Ford Explorer", "Winnebago", "Corvette", "Astrovan"],
        correct: 1,
        image: "<img src='assets/images/winnebago.jpg' alt='spaceballs winnebago'>"
    },
    questionSix = {
        question: "What is the name of the gangster looking for Lone Starr",
        possibles: ["Pizza the Hutt", "Dom Ino", "Papa John", "Pepper Oni"],
        correct: 0,
        image: "<img src='assets/images/pizzaTheHutt.gif' alt='spaceballs pizza the hutt'>"
    },
    questionSeven= {
        question: "What is the name of Princess Vespa's sleepy husband to be?",
        possibles: ["Prince Valtrex", "Prince Prozac", "Prince Valium", "Prince Sleepinol"],
        correct: 2,
        image: "<img src='assets/images/princeValium.jpg' alt='spaceballs prince valium'>"
    },
    questionEight = {
        question: "What type of jam is used to 'jam' the Spaceball's radar?",
        possibles: ["Grape", "Strawberry", "Raspberry", "Apricot"],
        correct: 2,
        image: "<img src='assets/images/raspberry.jpg' alt='spaceballs raspberry'>"
    },
    questionEight = {
        question: "Barf is a Mawg.  What is a Mawg?",
        possibles: ["Half Man and Half Hog", "Half Man and Half Dog", "Half Man and Half Wookie", "Half Man and Half Woman"],
        correct: 1,
        image: "<img src='assets/images/mawg.gif' alt='spaceballs mawg'>"
    },
    questionEight = {
        question: "What speed does Spaceball One go to in order to follow Lone Starr's ship?",
        possibles: ["Warp Speed", "Ludicrous Speed", "Ridicuolos Speed", "Light Speed"],
        correct: 1,
        image: "<img src='assets/images/ludicrousSpeed.gif' alt='spaceballs ludicrous speed'>"
    },
    questionNine = {
        question: "What do the Spaceballs use to find out where Lone Starr escaped to?",
        possibles: ["Mr. Coffee", "Mr. Video and a copy of Spaceballs the Movie", "Mr. Radar", "Mr. Tractor Beam"],
        correct: 1,
        image: "<img src='assets/images/mrVideo.gif' alt='spaceballs mr video'>"
    },
    questionTen = {
        question: "When President Skroob uses the transporter, what accident happens to him?",
        possibles: ["He has no hair", "He is missing his arms", "His head is on backwards", "He is missing his legs"],
        correct: 2,
        image: "<img src='assets/images/backwardsHead.gif' alt='spaceballs head on backwards'>"
    },
    questionEleven = {
        question: "What thing in her matching luggage does Princess Vespa say she can't live without?",
        possibles: ["Her makeup", "Her clothes", "Her shoes" , "Her industrial stength hair dryer"],
        correct: 3,
        image: "<img src='assets/images/hairDryer.gif' alt='spaceballs hair dryer'>"
    },
    questionTwelve = {
        question: "Who saves them on the desert planet?",
        possibles: ["Yogurt", "Pizza the Hutt", "Yoda", "Soda"],
        correct: 0,
        image: "<img src='assets/images/yogurt.gif' alt='spaceballs yogurt'>"
    },
    questionThirteen = {
        question: "What is Yogurt the master of?",
        possibles: ["Tthe Bleeps", "The Force", "The Schwartz", "The Vulcan Neck Pench"],
        correct: 2,
        image: "<img src='assets/images/schwartz.gif' alt='spaceballs schwartz'>"
    },
    questionFourteen = {
        question: "What is the combination to the air lock over Druidia?",
        possibles: ["1-1-1-1-1", "9-8-7-6-5", "1-2-3-4-5", "5-4-3-2-1"],
        correct: 2,
        image: "<img src='assets/images/combination.gif' alt='spaceballs air shield combination'>"
    },
    questionFifteen = {
        question: "What does Yogurt say is going to be the name of the sequel for Spaceballs the Movie?",
        possibles: ["The search for Pizza the Hutt", "The Search for the Schwartz", "The Spaceballs Strike Back", "The Search for More Money"],
        correct: 3,
        image: "<img src='assets/images/spaceballs2.jpg' alt='spaceballs spaceballs2'>"
    }
];

function answers(arr){
    for (var i = 0; i < arr.length; i++){
        tempDiv = $("<div>");
        tempDiv.attr("class", "row");
        tempDiv.attr("class", "center-block");
        tempBtn = $("<button>");
        // tempBtn.attr("class", "center-block");
        tempBtn.attr("id", "answerBtn");
        tempBtn.attr("data-index", i);
        tempBtn.text(arr[i]);
        $("#possibles").append(tempDiv);
        $(tempDiv).append(tempBtn);
    }
}

function newQuestion(){
    if(startBtn){
        $("#startBtn").addClass("invisible");
        startBtn = false;
    }
    $("timer").empty();
    $("#possibles").empty();
    $("question").empty();
    $("#timer").html("Time remaining: " + timer + " seconds");
    $("#question").html(questionArr[arrIter].question);
    answers(questionArr[arrIter].possibles);
    timer = 30;
    decrement();
    // arrIter++;
}

function decrement(){
    if(!clockRunning){
        var timeDown = setInterval(function(){
            clockRunning = true;
            timer--;
            $("#timer").html("Time remaining: " + timer + " seconds");
            if($("#answerBtn").data('clicked')){
                clearInterval(timeDown);
                clockRunning = false;
                timer = 15;
            }
            if(timer == 0){
                clearInterval(timeDown);
                clockRunning = false;
                // timer = 0;
                expired();
                setTimeout(function(){
                    newQuestion()
                    arrIter++;
                 }, 6000);
            }
        }, 1000)
    }
}

function answerCheck(index){
    if(index == questionArr[arrIter].correct){
        console.log("In correct answer block");
        rightAnswer();
        setTimeout(function(){
            console.log("in setTimeout block");
            newQuestion()
         }, 6000);
    }
    else{
        wrongAnswer();
        setTimeout(function(){
            console.log("in setTimeout block");
            newQuestion()
         }, 6000);
    }
    arrIter++;
}

function rightAnswer(){  
    console.log("in right answer block");
    var answerDiv = $("<div>");
    answerDiv.attr("id", "correct");
    answerDiv.html(questionArr[arrIter].image);
    $("#question").text("Correct!!!")
    $("#possibles").html(answerDiv);
    document.querySelector("#music").innerHTML = "<audio autoplay><source src='assets/audio/goodumb.mp3' type='audio/mpeg'> </audio>"
    correct++;
}

function wrongAnswer(){
    console.log("in wrong answer block");
    var answerDiv = $("<div>");
    answerDiv.attr("id", "incorrect");
    answerDiv.text("The Correct Answer was: ");
    answerDiv.html(questionArr[arrIter].image);
    var wrongReply = "Wrong.  The correct answer was: " + questionArr[arrIter].possibles[questionArr[arrIter].correct];
    $("#question").text(wrongReply);
    $("#possibles").html(answerDiv);
    document.querySelector("#music").innerHTML = "<audio autoplay><source src='assets/audio/fooledyou.wav' type='audio/wav'> </audio>"
    wrong++;
}

function expired(){
    var answerDiv = $("<div>");
    answerDiv.attr("id", "expired");
    answerDiv.text("The Correct Answer was: ");
    answerDiv.html(questionArr[arrIter].image);
    $("#question").text("You ran out of Time")
    $("#possibles").html(answerDiv);
    unanswered++;
}

// function reset(){
//     var correct = 0;
//     var wrong = 0;
//     var unanswered = 0;
//     var counter = 0;
//     var timer = 0;
//     var arrIter = 0;
//     var startBtn = true;
// }


    $(document).on("click", "#answerBtn", function(){
        // newQuestion();
        answerCheck($(this).attr("data-index"));   
    })

    $(document).on("click", "#startBtn", function(){
        newQuestion();
    });
});

//Mostly working version

//TODO:
    //maybe make timer stop when an answer was selected/gif is playing
    //end of game display screen:
        //1. Notification game is over
        //2. stats(# of correct, incorrect and unanswered)
        //3. Play again button
    //reset game(without reloading page)

    //styles
        //1. better fonts
        //2. get opinions on fonts, text colors, on hover backgrounds, etc...
