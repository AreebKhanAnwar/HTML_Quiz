var Questions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyper Text Markup Language",
        option2: "Home Tool Markup Language",
        option3: "Hyperlinks and Text Markup Language",
        correctAnswer: "Hyper Text Markup Language",
    },
    {
        question: "Which HTML element is used for the largest heading?",
        option1: "<h6>",
        option2: "<h1>",
        option3: "<header>",
        correctAnswer: "<h1>",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<br>",
        option2: "<lb>",
        option3: "<break>",
        correctAnswer: "<br>",
    },
    {
        question:
            "Which attribute is used to provide an alternative text for an image?",
        option1: "alt",
        option2: "title",
        option3: "src",
        correctAnswer: "alt",
    },
    {
        question: "What is the correct way to make a checkbox in HTML?",
        option1: "<input type='checkbox'>",
        option2: "<checkbox>",
        option3: "<input type='box'>",
        correctAnswer: "<input type='checkbox'>",
    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        option1: "<ul>",
        option2: "<ol>",
        option3: "<list>",
        correctAnswer: "<ul>",
    },
    {
        question: "What does the <title> element define?",
        option1: "The document's body",
        option2: "The document's title in the browser toolbar",
        option3: "The main heading",
        correctAnswer: "The document's title in the browser toolbar",
    },
    {
        question: "Which tag is used to define a hyperlink in HTML?",
        option1: "<link>",
        option2: "<href>",
        option3: "<a>",
        correctAnswer: "<a>",
    },
    {
        question:
            "What is the correct syntax for adding a background color in HTML?",
        option1: "<body bg='color'>",
        option2: "<body style='background-color: color;'>",
        option3: "<background color='color'>",
        correctAnswer: "<body style='background-color: color;'>",
    },
    {
        question: "How can you make text bold in HTML?",
        option1: "<strong>",
        option2: "<b>",
        option3: "Both <strong> and <b>",
        correctAnswer: "Both <strong> and <b>",
    },
];

var quest = document.getElementById("quest");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3"); 
var index = 0;
var score = 0;

function again() {
    var check = document.getElementsByName("options"); 
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            var selected = check[i].value;
            var userAnswer = Questions[index- 1][`option${selected}`];
            var correctanswer = Questions[index - 1].correctAnswer;
            if (correctanswer === userAnswer) {
                score++; 
            }
        }
        check[i].checked = false; 
    }

    // console.log("Score:", score); 

    if (index < Questions.length) {
        quest.innerText = Questions[index].question;
        opt1.innerText = Questions[index].option1;
        opt2.innerText = Questions[index].option2;
        opt3.innerText = Questions[index].option3;
        index++;
    } else {
        // console.log("Quiz Complete");
        // console.log("Final Score:", score); 
        alert("Quiz Complete")
       var Finalscore = document.getElementById("Finalscore");
       Finalscore.innerText = "Your Score is " + score;
    }
}

again();
