$(function() {
    
var correct = 0;
var wrong = 0;
var unanswered = 0;
var counter = 0;
var timer;
var arrIter = 0;
var startBtn = true;
var tempBtn;

var questionArr = [
    questionOne = {
        question: "What is Planet Spaceball running out of?",
        possibles: ["Water", "Food", "Oil", "Air"],
        correct: 3
    },
    questionTwo = {
        question: "What bumper sticker is on the back of Spaceball One?",
        possibles: ["Jesus Is Our Co-Pilot", "We Brake For Nobody", "I Love My Ewok", "My Other Car is the Millenium Falcon"],
        correct: 1
    },
    questionThree = {
        question: "What is the name of Rick Moranis's character?",
        possibles: ["Darth Helmet", "Dark Vader", "Dark Helmet", "Barf Vapor"],
        correct: 2
    },
    questionFour = {
        question: "Who is Dark Hemet's second in command?",
        possibles: ["Colonel Ronald McDonald", "Colonel Klink", "Colonel Sandurz", "Colonel Mustard"],
        correct: 2
    },
    questionFive = {
        question: "What type of spacecraft does Lone Starr pilot?",
        possibles: ["Ford Explorer", "Winnebago", "Corvette", "Astrovan"],
        correct: 1
    },
    questionSix = {
        question: "What is the name of the gangster looking for Lone Starr",
        possibles: ["Pizza the Hutt", "Dom Ino", "Papa John", "Pepper Oni"],
        correct: 0
    },
    questionSeven= {
        question: "What is the name of Princess Vespa's sleepy husband to be?",
        possibles: ["Prince Valtrex", "Prince Prozac", "Prince Valium", "Prince Sleepinol"],
        correct: 2
    },
    questionEight = {
        question: "What type of jam is used to 'jam' the Spaceball's radar?",
        possibles: ["Grape", "Strawberry", "Raspberry", "Apricot"],
        correct: 2
    },
    questionEight = {
        question: "Barf is a Mawg.  What is a Mawg?",
        possibles: ["Half Man and Half Hog", "Half Man and Half Dog", "Half Man and Half Wookie", "Half Man and Half Woman"],
        correct: 1
    },
    questionEight = {
        question: "What speed does Spaceball One go to in order to follow Lone Starr's ship?",
        possibles: ["Warp Speed", "Ludicrous Speed", "Ridicuolos Speed", "Light Speed"],
        correct: 1
    },
    questionNine = {
        question: "What do the Spaceballs use to find out where Lone Starr escaped to?",
        possibles: ["Mr. Coffee", "Mr. Video and a copy of Spaceballs the Movie", "Mr. Radar", "Mr. Tractor Beam"],
        correct: 1
    },
    questionTen = {
        question: "When President Skroob uses the transporter, what accident happens to him?",
        possibles: ["He has no hair", "He is missing his arms", "His head is on backwards", "He is missing his legs"],
        correct: 2
    },
    questionEleven = {
        question: "What thing in her matching luggage does Princess Vespa say she can't live without?",
        possibles: ["Her makeup", "Her clothes", "Her shoes" , "Her industrial stength hair dryer"],
        correct: 3
    },
    questionTwelve = {
        question: "Who saves them on the desert planet?",
        possibles: ["Yogurt", "Pizza the Hutt", "Yoda", "Soda"],
        correct: 0
    },
    questionThirteen = {
        question: "What is Yogurt the master of?",
        possibles: ["Tthe Bleeps", "The Force", "The Schwartz", "The Vulcan Neck Pench"],
        correct: 2
    },
    questionFourteen = {
        question: "What is the combination to the air lock over Druidia?",
        possibles: ["1-1-1-1-1", "9-8-7-6-5", "1-2-3-4-5", "5-4-3-2-1"],
        correct: 2
    },
    questionFifteen = {
        question: "What does Yogurt say is going to be the name of the sequel for Spaceballs the Movie?",
        possibles: ["The search for Pizza the Hutt", "The Search for the Schwartz", "The Spaceballs Strike Back", "The Search for More Money"],
        correct: 3
    }
];

function answers(arr){
    for (var i = 0; i < arr.length; i++){
        tempBtn = $("<button>");
        tempBtn.attr('class', 'center-block');
        tempBtn.attr('id', 'answerBtn');
        tempBtn.text(arr[i]);
        $("#possibles").append(tempBtn);
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
    $("#timer").html("Time remaining: " + timer) + " seconds";
    $("#question").html(questionArr[arrIter].question);
    answers(questionArr[arrIter].possibles);
    arrIter++;
}

function reset(){
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var counter = 0;
    var timer = 0;
    var arrIter = 0;
    var startBtn = true;
}



    $(document).on("click", "#answerBtn", function(){
        newQuestion();
    })

    $(document).on("click", "#startBtn", function(){
        newQuestion();
    });
});
