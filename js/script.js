const quizData = [
    {
        question: "Do you feel a sense of purpose or fulfillment in your daily life?",
        options: [
            "Not really – I often feel lost🥺",
            "Yes, I feel fulfilled & motivated🎯"
        ],
        correct: 1,
    },
    {
        question: "How often do you feel lonely?",
        options: ["No, Never🫠", "Almost all the time❤️‍🩹"],
        correct: 0,
    },
    {
        question: "How do you usually feel..?",
        options: ["Insecure & Worried ♡", "Always happy & energetic😉"],
        correct: 1,
    },
    {
        question: "Are you feeling stressed today?",
        options: ["Yes :(", "No, Not at all😃"],
        correct: 1,
    },
    {
        question: "What's your day today?",
        options: ["Always Running... to 🍕🎧🍦💃", "chill... but only in my dreams😴"],
        correct: 0,
    },
    {
    question: "What’s your ideal way to relax?",
        options: ["listening to sad song💔", "Watching to funny videos😂"],
        correct: 1,
},
{
    question: "Are you happy today?",
        options: ["Yes...🤩", "No...🥹"],
        correct: 0,
},
{
    question: "Which one are you? ",
        options: ["Scrolling social media until your phone dies😆 📱","Thinking really about career,maybe next time😏"],
        correct: 0,
},
{
    question: "If you were a drink order, what would you be?",
        options: ["Coffee or tea —straight to the point 😅☕", "A cup of lukewarm water—because no one really  \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0  asks for me, but I’m just kinda… there.🥹"],
        correct: 0,
},
{
question: "If your life was a browser tab, what would it say?",
    options:["Page Not Found-I have no idea what’s going on.😞", "Too Many Tabs, No Regrets – like as Chaotic Genius🤓💥"],
    correct: 1,
},

];
// ? initialization

const quiz = document.querySelector("#quiz");

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2] = document.querySelectorAll("#question, .option_1, .option_2");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {

    const { question, options } = quizData[currentQuiz];
    questionElm.innerText = question;

    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );
};
loadQuiz();

// ? for submit

const getSelectedOPtion = () => {
    let ans_index;
    answerElm.forEach((curOption, index) => {
        if (curOption.checked) {
            ans_index = index;
        }
    });
    return ans_index;
}
//? deselectAnswer

const deselectAnswer = ()=>{
   return answerElm.forEach((curElem) => (curElem.checked = false));
};


submitBtn.addEventListener("click", () => {
    const selectedOption = getSelectedOPtion();
    console.log(selectedOption);
    
    if(selectedOption === quizData[currentQuiz].correct)
        {
            score = score +1;
        }
        
        currentQuiz++;
        
        if (currentQuiz < quizData.length) {
            
            deselectAnswer();
            
            loadQuiz();
        }
        else{
                const percentage = Math.round((score / quizData.length)*100);

                let healthMessage ="";
                if (percentage >= 85){
                    healthMessage = " Awesome!🥳 You're in excellent shape!💫";
                }else if (percentage >= 60){
                    healthMessage ="Great job!🤓 You're dong well, just a little more to go! 👍";
                }else if (percentage >= 45){
                    healthMessage =` Not bad!❤️‍🔥 You're on the right track🚀, Always keep smilling...🌹<br> you can also try..💁🏻‍♀️ <a href="https://in.pinterest.com/ananyagaud999/funny-jokes/" target="_blank">Something special</a>`;
                }else{
                    healthMessage ='Hmm...🤔 It might be time to make some mood changes! Take care of yourself...😊 <br> you can also try..💁🏻‍♀️  <a href="https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/7-tips-to-live-a-happier-life" target="_blank">Tips for Happier Life</a> and <a href="https://in.pinterest.com/ananyagaud999/funny-jokes/" target="_blank">Something special</a>';
                }


                quiz.innerHTML = `
                <div class = "result">
                <h2>Your personal health score :
                 ${percentage}%</h2>
                <p>${healthMessage}</p>
                <br><br>
                <button class="reload-button" onclick="location.reload()">Play Again ↻</button>
                </div>
                `;
            }

});