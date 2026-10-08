
const easy_questions = [

    {

        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Easy/Bridge_Pic_Easy.png",
        type: "Bridge_Bastion",
        formation: "Double_Single",

    },

    {
        
        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Easy/Bridge_Pic_Easy2.png",
        type: "Bridge_Bastion",
        formation: "Double_Triple",

    },

    {
        
        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Easy/Bridge_Pic_Easy3.png",
        type: "Bridge_Bastion",
        formation: "Right_Single_Triple",

    },

    {
        
        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Easy/Bridge_Pic_Easy4.png",
        type: "Bridge_Bastion",
        formation: "Left_Single_Triple",

    },

    {
        
        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Easy/Bridge_Pic_Easy5.png",
        type: "Bridge_Bastion",
        formation: "Left_Single_Triple",

    },

    {

        image: "images/Bastion_Recognition_Pictures/Housing_Bastions/Easy/Housing_Pic_Easy.png",
        type: "Housing_Bastion",
        formation: "Left_Single_Housing"

    },

    {

        image: "images/Bastion_Recognition_Pictures/Housing_Bastions/Easy/Housing_Pic_Easy2.png",
        type: "Housing_Bastion",
        formation: "Left_Single_Housing"

    },

    {

        image: "images/Bastion_Recognition_Pictures/Housing_Bastions/Easy/Housing_Pic_Easy3.png",
        type: "Housing_Bastion",
        formation: "Double_Triple_Housing"

    },

    {

        image: "images/Bastion_Recognition_Pictures/Housing_Bastions/Easy/Housing_Pic_Easy4.png",
        type: "Housing_Bastion",
        formation: "Left_Ruins_Housing"

    },

    {

        image: "images/Bastion_Recognition_Pictures/Housing_Bastions/Easy/Housing_Pic_Easy5.png",
        type: "Housing_Bastion",
        formation: "Double_Triple_Housing"

    },

]

const medium_questions = [

    {

        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Medium/Bridge_Pic_Medium.png",
        type: "Bridge_Bastion",
        formation: "Right_Single_Triple",

    },

    {

        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Medium/Bridge_Pic_Medium2.png",
        type: "Bridge_Bastion",
        formation: "Double_Triple",

    },

    {

        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Medium/Bridge_Pic_Medium3.png",
        type: "Bridge_Bastion",
        formation: "Left_Single_Triple",

    },

    {

        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Medium/Bridge_Pic_Medium4.png",
        type: "Bridge_Bastion",
        formation: "Double_Single",

    },

    {

        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Medium/Bridge_Pic_Medium5.png",
        type: "Bridge_Bastion",
        formation: "Double_Single",

    },

]

const hard_questions = [

    {

        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Hard/Bridge_Pic_Hard.png",
        type: "",
        formation: "",

    },

    {

        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Hard/Bridge_Pic_Hard2.png",
        type: "",
        formation: "",

    },

    {

        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Hard/Bridge_Pic_Hard3.png",
        type: "",
        formation: "",

    },

    {

        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Hard/Bridge_Pic_Hard4.png",
        type: "",
        formation: "",

    },

    {

        image: "images/Bastion_Recognition_Pictures/Bridge_Bastions/Hard/Bridge_Pic_Hard5.png",
        type: "",
        formation: "",

    },
    
]



// Says what array to use for the questions
let currentQuestions = easy_questions;

function setDiff(difficulty) {
    if (difficulty === "easy") {
        currentQuestions = easy_questions;
        currentDiff = "Easy";
        }
    if (difficulty === "medium") {
        currentQuestions = medium_questions; 
        currentDiff = "Medium"
        }
    if (difficulty === "hard") {
        currentQuestions = hard_questions;
        currentDiff = "Hard";
        }
}


// Foundation for all the quiz stuff

let currentDiff = " ";

let currentQuestion = null;

let currentPhase = "type";

let currentScore = 0;

let previousQuestion = -1;

// Foundational Functions

function createScoreDisplay() {
    const scoreContainer = document.createElement("div");
    scoreContainer.id = "score-container";
    scoreContainer.style.cssText = `
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 5vw;
        padding: 1.5vw;
        border-radius: 1vw;
        margin: 1vw 0;
        color: white;
        font-family: Arial, sans-serif;
        width: 100%;
        box-sizing: border-box;
    `;

    scoreContainer.innerHTML = `
        <div class="score-item">
            <div style="font-size: 1.2vw; opacity: 0.8;">Score</div>
            <div id="score-value" style="font-size: 2vw; font-weight: bold;">0</div>
        </div>
        <div class="score-item">
            <div style="font-size: 1.2vw; opacity: 0.8;">Difficulty</div>
            <div id="difficulty-display" style="font-size: 2vw; font-weight: bold;"> </div>
        </div>
        <div class="score-item">
            <div style="font-size: 1.2vw; opacity: 0.8;">Phase</div>
            <div id="phase-display" style="font-size: 2vw; font-weight: bold;">Type</div>
        </div>
    `;

    return scoreContainer;
}

function updateScoreDisplay() {
    const scoreValue = document.getElementById("score-value");
    const phaseDisplay = document.getElementById("phase-display");
    const diffDisplay = document.getElementById("difficulty-display");
    
    if (scoreValue) scoreValue.textContent = currentScore;

    if (phaseDisplay) {
        phaseDisplay.textContent = currentPhase === "type" ? "Type" : "Formation";
    }

    if (diffDisplay) {
        diffDisplay.textContent = currentDiff;
    }
}

function questionPicker() {

    let randomQuestion = Math.floor(Math.random() * currentQuestions.length);

    while (randomQuestion === previousQuestion) {
        randomQuestion = Math.floor(Math.random() * currentQuestions.length);
    }

    currentPhase = "type";
    previousQuestion = randomQuestion;
    currentQuestion = currentQuestions[randomQuestion];
    const bastionImage = document.querySelector(".Bastion_Recognition_Image");
    bastionImage.src = currentQuestion.image;
}

const difficulty_select = document.getElementById("diff_select");

difficulty_select.addEventListener ('click', function(event) {

    if (event.target.id === "Easy") {
        setDiff("easy");
        currentScore = 0;
        questionPicker();
        updateScoreDisplay();
    }

    if (event.target.id === "Medium") {
        setDiff("medium");
        currentScore = 0;
        questionPicker();
        updateScoreDisplay();
    }

    if (event.target.id === "Hard") {
        setDiff("hard");
        currentScore = 0;
        questionPicker();
        updateScoreDisplay();
    }

});

// Main quiz content

const quizContainer = document.getElementById("Selection_Buttons");

quizContainer.addEventListener('click', function(event) {

    if (currentQuestion === null) return;
    if (!event.target.id) return;
    if (event.target.id === "Submit_Stables") return;

    const clickedButton = event.target;

    if (currentPhase === "type") {

        if (event.target.id === currentQuestion.type) {

            clickedButton.classList.add("correct");
            updateScoreDisplay();

            if(currentQuestion.type === "Treasure_Bastion") {

                currentScore += 2;
                updateScoreDisplay();

                setTimeout(function() {
                    clickedButton.classList.remove("correct");
                    quizContainer.innerHTML = `
                        <button class="Bridge_Bastion" id="Bridge_Bastion"> Bridge Bastion </button>
                        <button class="Treasure_Bastion" id="Treasure_Bastion"> Treasure Bastion </button>
                        <button class="Housing_Bastion" id="Housing_Bastion"> Housing Bastion </button>
                        <button class="Stables_Bastion" id="Stables_Bastion"> Stables Bastion </button>
                    `;
                    questionPicker();
                    updateScoreDisplay();
                }, 1000);
            }

            else {
                currentPhase = "formation";

                updateScoreDisplay();
        }
    }

        else {

            clickedButton.classList.add("incorrect");
            currentScore -= 2;
            updateScoreDisplay();

            setTimeout(function() {
                clickedButton.classList.remove("incorrect");
                quizContainer.innerHTML = `
                    <button class="Bridge_Bastion" id="Bridge_Bastion"> Bridge Bastion </button>
                    <button class="Treasure_Bastion" id="Treasure_Bastion"> Treasure Bastion </button>
                    <button class="Housing_Bastion" id="Housing_Bastion"> Housing Bastion </button>
                    <button class="Stables_Bastion" id="Stables_Bastion"> Stables Bastion </button>
                `;
                questionPicker();
                updateScoreDisplay();
            }, 1000);

        }

    }

    else if (currentPhase === "formation") {

        updateScoreDisplay();

        if (event.target.id === currentQuestion.formation) {

            clickedButton.classList.add("correct");
            currentScore += 2;
            updateScoreDisplay();

            setTimeout(function() {
                clickedButton.classList.remove("correct");
                quizContainer.innerHTML = `
                    <button class="Bridge_Bastion" id="Bridge_Bastion"> Bridge Bastion </button>
                    <button class="Treasure_Bastion" id="Treasure_Bastion"> Treasure Bastion </button>
                    <button class="Housing_Bastion" id="Housing_Bastion"> Housing Bastion </button>
                    <button class="Stables_Bastion" id="Stables_Bastion"> Stables Bastion </button>
                `;
                questionPicker();
                updateScoreDisplay();
            }, 1000);

        }

        else {

            clickedButton.classList.add("incorrect");
            currentScore -= 2;
            updateScoreDisplay();

            setTimeout(function() {
                clickedButton.classList.remove("incorrect");
                quizContainer.innerHTML = `
                    <button class="Bridge_Bastion" id="Bridge_Bastion"> Bridge Bastion </button>
                    <button class="Treasure_Bastion" id="Treasure_Bastion"> Treasure Bastion </button>
                    <button class="Housing_Bastion" id="Housing_Bastion"> Housing Bastion </button>
                    <button class="Stables_Bastion" id="Stables_Bastion"> Stables Bastion </button>
                `;
                questionPicker();
                updateScoreDisplay();
            }, 1000);

        }

    }
});

// Initialize the Score Display
document.addEventListener('DOMContentLoaded', function() {
    // Get the Playfield
    const playfield = document.querySelector(".Playfield");
    
    if (playfield) {
        
        // Create and add score display as first child
        const scoreDisplay = createScoreDisplay();
        playfield.appendChild(scoreDisplay);
    }

});
