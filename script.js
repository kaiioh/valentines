const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const gif = document.getElementById("gif");

let noCount = 1;

const gifs = [
    "images/1st.gif",
    "images/nailong-yellow-dragon.gif",
    "images/sad-orange-cat-sad-cat.gif",
    "images/ok-cat-okay-cat.gif",
    "images/SADCAT1.gif",
    "images/the-voices.gif",
    "images/okii.gif"
];

const noTexts = [
    "No ",
    "Really?",
    "Sure?",
    "plsz?",
    "Last chance 😤"
];

// Set initial YES scale
yesBtn.style.transform = `scale(1)`;

// NO button click
noBtn.addEventListener("click", () => {
    // Grow YES button indefinitely
    const scale = 1 + noCount * 0.5; // increases every click
    yesBtn.style.transform = `scale(${scale})`;

    // Change NO text (loops forever)
    noBtn.textContent = noTexts[noCount % noTexts.length];

    // Change GIF (loops through gifs)
    gif.src = gifs[noCount % gifs.length];

    // Increment counter after using it
    noCount++;
});

// YES button click
yesBtn.addEventListener("click", () => {
    // Clear body and add main container
    document.body.innerHTML = `
    <div class="container" id="yayContainer">
      <h1>YAYYYYY 💖💖💖</h1>
      <h2>💘 Happy Valentine’s Day 💘</h2>
      <p>Click <a href="https://forms.gle/YOUR_FORM_LINK" target="_blank">here</a> to tell me your cravings!</p>
    </div>
  `;

    const container = document.getElementById("yayContainer");

    const yayGifs = [
        "images/yapapa-cat.gif",
        "images/cat-tongue-shake-cat-meme.gif",
        "images/cat-happy.gif",
        "images/aaaah-cat.gif",
        "images/nailong-dwerk.gif",
        "images/memes.gif"
    ];

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const radius = 200; // distance from center of container

    const numGifs = yayGifs.length;

    for (let i = 0; i < numGifs; i++) {
        const angle = (i / numGifs) * Math.PI * 2;
        const img = document.createElement("img");
        img.src = yayGifs[i];
        img.classList.add("floatingGif");

        const x = centerX + radius * Math.cos(angle) - 50;
        const y = centerY + radius * Math.sin(angle) - 50;

        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        img.style.width = `100px`;
        img.style.height = `100px`;

        document.body.appendChild(img);
    }
});



