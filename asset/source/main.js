/* ********************************* */
// Parallax Effect Animation
/* ********************************* */


const moon = document.getElementById('moon');
const text = document.getElementById('text');
const train = document.getElementById('train');
const desertMoon = document.getElementById('desert-moon');
const manOnBoat = document.getElementById('man-on-boat');

window.addEventListener('scroll', () => {
  const value = window.scrollY;

  moon.style.top = value * 0.85 + 'px';
  text.style.top = 95 + value * -0.1 + '%';
  text.style.left = value * .3 + 'px';
  train.style.left = value * 2 + 'px';
  desertMoon.style.top = value * 0.3 + 'px';
  manOnBoat.style.left = value * 0.6 + 'px';
});

/* ********************************* */
// Progress Bar 
/* ********************************* */

let scrollProgress = document.getElementById('progress');
let calcScrollValue = () => {
  let position = document.documentElement.scrollTop || document.body.scrollTop;
  //console.log(position); // for testing

  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((position * 100) / calcHeight);
  //console.log(scrollValue); // for testing

  scrollProgress.style.display = position > 100 ? 'grid' : 'none';
  
  scrollProgress.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#ff69b4 ${scrollValue}%, #67ccff ${scrollValue}%)`;
}



window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

/* ********************************* */
// Snow Flakes Animation
/* ********************************* */

document.addEventListener("DOMContentLoaded", function() {
  const numSnowflakes = 50;
  const numEmojis = 50;
  const emojis = [ "❄️","⛄", '💝',"❄️","☃️", '🎁',"🌨️", "❄️"];
  
  // Create snowflakes
  for (let i = 0; i < numSnowflakes; i++) {
    createSnowflake();
  }

  // Create emojis
  for (let i = 0; i < numEmojis; i++) {
    createEmoji();
  }

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.zIndex = 2000; 
    document.body.appendChild(snowflake);

    resetSnowflake(snowflake);
    animateSnowflake(snowflake);
  }

  function resetSnowflake(snowflake) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    snowflake.style.left = `${x}px`;
    snowflake.style.top = `${y}px`;
  }

  function animateSnowflake(snowflake) {
    const speed = 0.5 + Math.random() * 2;

    function move() {
      const y = parseFloat(snowflake.style.top);
      
      (y > window.innerHeight)
      ? resetSnowflake(snowflake)
      : snowflake.style.top = `${y + speed}px`;


      requestAnimationFrame(move);
    }

    move();
  }

  function createEmoji() {
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.style.zIndex = 2000;
    document.body.appendChild(emoji);

    resetEmoji(emoji);
    animateEmoji(emoji);
  }

  function resetEmoji(emoji) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    emoji.style.left = `${x}px`;
    emoji.style.top = `${y}px`;

    // Randomly select an emoji from the array
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.innerHTML = randomEmoji;
  }

  function animateEmoji(emoji) {
    const speed = 0.5 + Math.random() * 2;

    function move() {
      const y = parseFloat(emoji.style.top);
      
      if (y > window.innerHeight) {
        resetEmoji(emoji);
      } else {
        emoji.style.top = `${y + speed}px`;
      }

      requestAnimationFrame(move);
    }

    move();
  }

  // Create new flakes as the user scrolls
  window.addEventListener("scroll", function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      for (let i = 0; i < 10; i++) {
        createSnowflake();
        createEmoji();
      }
    }
  });
});

/* ********************************* */
// Glittering Stars Animation
/* ********************************* */

let index = 0,
  interval = 1000;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
};

for (const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);

    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3));
}

/* ********************************* */
// Matrix Style Animation
/* ********************************* */
document.addEventListener("DOMContentLoaded", function() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const target = document.querySelector("h1");
  let iteration = 0;
  let animationStarted = false;

  function animateText() {
    target.innerText = target.dataset.value
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= target.dataset.value.length) {
      setTimeout(() => {
        iteration = 0;
        animateText();
      }, 2000); // Pause
    } else {
      iteration += .5 / 8;
      requestAnimationFrame(animateText);
    }
  }

  function startAnimation() {
    if (!animationStarted) {
      animationStarted = true;
      animateText(); // Start the animation
    }
  }

  // Trigger animation when scrolling is detected
  window.addEventListener("scroll", startAnimation);
});

/* ********************************* */
// Xmas Quiz Section 
/* ********************************* */

const christmasFacts = [
  {
    question: "What ancient civilization is credited with the creation of the candy cane?",
    answer: [
      { text: "Egyptians", correct: false },
      { text: "Romans", correct: false },
      { text: "Greeks", correct: false },
      { text: "Germans", correct: true },
    ],
  },
  {
    question: "Which Christmas tradition is said to have originated from a story by Washington Irving?",
    answer: [
      { text: "Stockings by the Fireplace", correct: false },
      { text: "Yule Log", correct: true },
      { text: "Christmas Carols", correct: false },
      { text: "Santa Claus", correct: false },
    ],
  },
  {
    question: "In the song 'The Twelve Days of Christmas,' what is given on the fifth day?",
    answer: [
      { text: "Five Golden Rings", correct: true },
      { text: "Five Calling Birds", correct: false },
      { text: "Five French Hens", correct: false },
      { text: "Five Colly Birds", correct: false },
    ],
  },
  {
    question: "What is the world record for the tallest snowman ever built?",
    answer: [
      { text: "25 feet", correct: false },
      { text: "50 feet", correct: false },
      { text: "100 feet", correct: false },
      { text: "122 feet", correct: true },
    ],
  },
  {
    question: "Which country started the tradition of leaving out shoes for St. Nicholas to fill with gifts?",
    answer: [
      { text: "Netherlands", correct: true },
      { text: "Italy", correct: false },
      { text: "Sweden", correct: false },
      { text: "Spain", correct: false },
    ],
  },
  {
    question: "What is the name of the famous ballet performed during the Christmas season?",
    answer: [
      { text: "Swan Lake", correct: false },
      { text: "The Nutcracker", correct: true },
      { text: "Cinderella", correct: false },
      { text: "Romeo and Juliet", correct: false },
    ],
  },
  {
    question: "In what decade did the first artificial Christmas tree gain popularity?",
    answer: [
      { text: "1910s", correct: false },
      { text: "1930s", correct: true },
      { text: "1950s", correct: false },
      { text: "1970s", correct: false },
    ],
  },
  {
    question: "What Christmas decoration is said to frighten away evil spirits?",
    answer: [
      { text: "Tinsel", correct: false },
      { text: "Christmas Lights", correct: false },
      { text: "Garland", correct: false },
      { text: "Bells", correct: true },
    ],
  },
  {
    question: "Which saint is believed to be the inspiration for the modern-day Santa Claus?",
    answer: [
      { text: "St. Peter", correct: false },
      { text: "St. Nicholas", correct: true },
      { text: "St. Patrick", correct: false },
      { text: "St. Augustine", correct: false },
    ],
  },
  {
    question: "What is the main ingredient in traditional Christmas pudding?",
    answer: [
      { text: "Raisins", correct: false },
      { text: "Cranberries", correct: false },
      { text: "Plums", correct: false },
      { text: "Currants", correct: true },
    ],
  },
  {
    question: "In what country did the tradition of Christmas trees originate?",
    answer: [
      { text: "Germany", correct: true },
      { text: "France", correct: false },
      { text: "United States", correct: false },
      { text: "England", correct: false },
    ],
  },
  {
    question: "What popular Christmas song was actually written for Thanksgiving?",
    answer: [
      { text: "Jingle Bells", correct: true },
      { text: "Deck the Halls", correct: false },
      { text: "Silent Night", correct: false },
      { text: "White Christmas", correct: false },
    ],
  },
  {
    question: "In what year did Coca-Cola start using Santa Claus in its advertisements?",
    answer: [
      { text: "1920", correct: false },
      { text: "1931", correct: true },
      { text: "1945", correct: false },
      { text: "1955", correct: false },
    ],
  },
  {
    question: "Which country is credited with the creation of eggnog?",
    answer: [
      { text: "United States", correct: false },
      { text: "England", correct: false },
      { text: "Canada", correct: false },
      { text: "England", correct: true },
    ],
  },
  {
    question: "What plant is often associated with Christmas and is believed to bring good luck?",
    answer: [
      { text: "Mistletoe", correct: true },
      { text: "Holly", correct: false },
      { text: "Poinsettia", correct: false },
      { text: "Fir Tree", correct: false },
    ],
  },
  {
    question: "Which president was the first to decorate the White House Christmas tree?",
    answer: [
      { text: "Abraham Lincoln", correct: false },
      { text: "John F. Kennedy", correct: false },
      { text: "Franklin D. Roosevelt", correct: true },
      { text: "George Washington", correct: false },
    ],
  },
  {
    question: "What is the best-selling Christmas single of all time?",
    answer: [
      { text: "White Christmas", correct: true },
      { text: "Jingle Bells", correct: false },
      { text: "Last Christmas", correct: false },
      { text: "All I Want for Christmas Is You", correct: false },
    ],
  },
];


const questionEl = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let attempts = 0;
const maxAttempts = 5;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  attempts = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let randomIndex = Math.floor(Math.random() * christmasFacts.length);
  let currentQuestion = christmasFacts[randomIndex];
  questionEl.innerHTML = "Question: " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("box");
    answerBtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  attempts++;
  if (attempts < maxAttempts) {
    nextBtn.style.display = "block";
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionEl.innerHTML = `You scored ${score} out of ${maxAttempts}`;
  questionEl.style=('font-size: 3rem','font-wight: 700');
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  if (attempts < maxAttempts) {
    showQuestion();
  } else {
    startQuiz();
  }
});

startQuiz();

