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
