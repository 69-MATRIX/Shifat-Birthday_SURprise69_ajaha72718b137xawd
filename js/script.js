// ==========================
// Preload Images
// ==========================

const images = [
    "photos/photo1.jpg",
    "photos/photo2.jpg",
    "photos/photo3.jpg",
    "photos/photo4.jpg",
    "photos/photo5.jpg",
    "photos/photo6.jpg",
    "photos/photo7.jpg",
    "photos/photo8.jpg",
    "photos/photo9.jpg"
];

images.forEach(src => {
    const img = new Image();
    img.src = src;
});
// ------------------------
// Loading Screen
// ------------------------

setTimeout(() => {

    // Hide Loader
    document.getElementById("loader-screen").style.display = "none";

    // Show Password Screen
    document.getElementById("password-screen").classList.remove("hidden");

}, 3000);
const unlockBtn = document.getElementById("unlock-btn");
const password = document.getElementById("password");
const error = document.getElementById("error-message");

unlockBtn.onclick = () => {

    if (password.value === "simi") {   // Change "simi" to your password

        document.getElementById("password-screen").style.display = "none";

        document.body.innerHTML = `
            <div class="welcome">
                <h1>Dear Shifat-E-Nusrat 💙</h1>
                <h2>Happy Birthday My Love ❤️</h2>
                <p>Click below to begin your surprise.</p>

                <button id="startBtn">
                    Begin Journey ✨
                </button>
            </div>
        `;

        document
            .getElementById("startBtn")
            .addEventListener("click", firstPage);

    } else {

        error.innerHTML = "❌ Wrong Password";

    }

};
// ------------------------
// First Page
// ------------------------

function firstPage() {

    document.body.innerHTML = `
        <div class="memory">

            <img src="photos/photo1.jpg" class="photo">

            <h1>You are the most beautiful part of my life ❤️</h1>

            <p>
                Every moment with you is my favourite memory.
                Today is your day, and I hope every smile on your face lasts forever.
            </p>

            <button id="nextBtn">
                Next ❤️
            </button>

        </div>


    `;

    createHearts();

    document
        .getElementById("nextBtn")
        .addEventListener("click", secondPage);

}


// ------------------------
// Second Page
// ------------------------

function secondPage() {

    document.body.innerHTML = `
        <div class="memory">

            <img src="photos/photo2.jpg" class="photo">

            <h1>You make every day brighter 💙</h1>

            <p>
                Thank you for being such an amazing person.
                I hope today brings you happiness, laughter,
                and beautiful memories.
            </p>

            <button id="nextBtn2">
                Continue ✨
            </button>

        </div>


    `;

    createHearts();

    document
        .getElementById("nextBtn2")
        .addEventListener("click", thirdPage);

}


// ------------------------
// Third Page
// ------------------------

// ------------------------
// Third Page (Love Letter)
// ------------------------

function thirdPage() {

    document.body.innerHTML = `

    <div class="memory">

<h1>💌 A Letter For You Madam Ji</h1>

<div id="envelopeContainer">

    <div class="heartIcon">❤️</div>

    <div id="mailIcon">
        💌
    </div>

    <p class="openText">
        Open Letter
    </p>

</div>

<div id="typewriter" style="display:none;"></div>



    </div>



    `;

    createHearts();

document.getElementById("mailIcon").onclick = () => {

    document.getElementById("envelopeContainer").style.display = "none";

    document.getElementById("typewriter").style.display = "block";


    typeLetter();

};



}


// ------------------------
// Typewriter Effect
// ------------------------

function typeLetter() {

const message = `Dear Shifat-E-Nusrat,

Happy Birthday, My Love. ❤️

If someone asked me why I love you...

I honestly wouldn't know where to begin.

How do I explain a smile that makes my day better?
How do I explain eyes that calm my heart?
How do I explain someone who feels like home?

You are more than just my best friend.

You are the person I always wish to see happy.

I hope your birthday is filled with beautiful moments,
laughter,
peace,
and love.

Thank you for being part of my life.

No matter where life takes us,
I'll always wish the very best for you.

Happy Birthday.

Yours,
Muntasin ❤️`;

let i = 0;

const speed = 40;

const box = document.getElementById("typewriter");

box.innerHTML = "";

const typing = setInterval(() => {

    box.innerHTML += message.charAt(i);

    i++;

    if (i >= message.length) {

        clearInterval(typing);

        // Create button after typing finishes

        const btn = document.createElement("button");

        btn.id = "letterNextBtn";

        btn.innerHTML = "🎂 Blow The Candles";

        btn.onclick = candlePage;

        document.querySelector(".memory").appendChild(btn);

    }

}, speed);

}




// ------------------------
// Premium Gallery
// ------------------------

function galleryPage() {

    const photos = [
    "photos/photo3.jpg",
    "photos/photo4.jpg",
    "photos/photo5.jpg",
    "photos/photo6.jpg",
    "photos/photo7.jpg"
];

    const captions = [
    "Every memory with you is precious. ❤️",
    "The world becomes beautiful when you smile.",
    "You deserve endless happiness.",
    "Thank you for being part of my life.",
    "Happy Birthday, My Love. ❤️"
];

    let current = 0;

     const memorySong = new Audio("music/song.mp3");
    memorySong.loop = true;
    memorySong.play();
    window.memorySong = memorySong;
  
    document.body.innerHTML = `

    <div class="memory">


            <h1>📸 Beautiful Memories</h1>

            <img id="galleryImage"
                 class="photo"
                 src="${photos[0]}">

            <p id="caption">
                ${captions[0]}
            </p>

            <div class="galleryButtons">

                <button id="prevBtn">
                    ⬅ Previous
                </button>

                <button id="nextGallery">
                    Next ➡
                </button>

            </div>

            <button id="finishBtn" style="display:none;">
    Final Surprise 🎁
</button>

        </div>


    `;

    createHearts();

    const image = document.getElementById("galleryImage");
    const caption = document.getElementById("caption");

    document.getElementById("nextGallery").onclick = () => {

    if (current < photos.length - 1) {

        current++;

        image.src = photos[current];
        caption.innerHTML = captions[current];

        // If this is the last photo
        if (current === photos.length - 1) {

            document.getElementById("finishBtn").style.display = "inline-block";

            // Hide the Next button
            document.getElementById("nextGallery").style.display = "none";
        }
    }

};

    document.getElementById("prevBtn").onclick = () => {

        if(current > 0){

            current--;

            image.src = photos[current];

            caption.innerHTML = captions[current];

        }

    };

    document.getElementById("finishBtn").onclick = finalPage;

}


// ------------------------
// Floating Hearts
// ------------------------

function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = (20 + Math.random() * 30) + "px";

        heart.style.animationDuration = (4 + Math.random() * 4) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);

    }, 300);

}


// ------------------------
// Final Page
// ------------------------

function finalPage() {

    // Stop memories song
    if (window.memorySong) {
        window.memorySong.pause();
        window.memorySong.currentTime = 0;
    }

    document.body.innerHTML = `

    <div class="memory finalMemory">

        <h1 class="finalTitle">
            💙 Thank You 💙
        </h1>

        <img src="photos/photo8.jpg" class="finalPhoto">

        <h2>
            Happy Birthday, Shifat-E-Nusrat ❤️
        </h2>

        <p class="finalMessage">

            Dear Simi,

            Thank you for making my life so beautiful.

            Every photo, every word, and every moment on this website
            was made with love just for you.

            You will be an amazing doctor,
            an incredible best friend,
            and someone who means so much to me.

            No matter what happens in life,
            I'll always pray for your happiness,
            your success,
            and your beautiful smile.

            Never stop shining,
            because this world becomes a little brighter with you in it.

            Once again...

            Happy Birthday, Madam Ji. ❤️

        </p>

        <button id="lastQuestion">

            💖 One Last Question For You

        </button>

    </div>

    `;

    createHearts();

    document.getElementById("lastQuestion").onclick = questionPage;

}
// =====================================
// One Last Question Page
// =====================================

function questionPage(){
    // Stop previous memory song
if (window.memorySong) {
    window.memorySong.pause();
    window.memorySong.currentTime = 0;
}

// Start the new song
const loveSong = new Audio("music/forever.mp3");
loveSong.loop = true;
loveSong.play().catch(() => {});
window.loveSong = loveSong;

    document.body.innerHTML = `

    <div class="questionPage">

        <h1>❤️ One Last Question ❤️</h1>

        <p>

            Will you stay with me forever?

        </p>

        <div class="answerButtons">

            <button id="yesBtn">
                YES ❤️
            </button>

            <button id="noBtn">
                NO 😒
            </button>

        </div>

    </div>

    `;

    createHearts();

    document.getElementById("yesBtn").onclick = preparingAnswer;

    document.getElementById("noBtn").onclick = noAnswer;

}
// =====================================
// Funny NO Button
// =====================================

let noCount = 0;

function noAnswer(){

    noCount++;

    const questions = [

        "Are you really sure? 🥺",

        "Think again... ❤️",

        "I'll ask one more time 😔",

        "Please don't break my heart 💔",

        "Last chance... 😭",

        "I know you'll press YES 😏"

    ];

    if(noCount < questions.length){

        alert(questions[noCount]);

    }

    const noBtn = document.getElementById("noBtn");

    noBtn.style.position="absolute";

    noBtn.style.left=Math.random()*70+"vw";

    noBtn.style.top=Math.random()*70+"vh";

}
// =====================================
// Preparing Answer Animation
// =====================================

function preparingAnswer(){

    document.body.innerHTML = `

    <div class="fadeScreen">

        <div class="loadingHeart">
            ❤️
        </div>

        <h2 class="loadingText">

            Preparing your answer...

        </h2>

    </div>

    `;

    // Wait 2 seconds

    setTimeout(() => {

        loveAccepted();

    },2000);

}
// =====================================
// Love Accepted (Final Cinematic Page)
// =====================================

function loveAccepted(){

    document.body.innerHTML = `

    <div class="lovePage fadeStart">

        <h1 class="loveTitle hiddenFade">
            ❤️ Thank You For Being Mine ❤️
        </h1>

        <img
            src="photos/photo9.jpg"
            class="lovePhoto hiddenFade"
            id="lovePhoto"
        >

        <p class="loveMessage hiddenFade">

            Thank you for saying <b>YES</b>. ❤️

            <br><br>

            You have no idea how much this moment means to me.

            Every smile of yours makes my world brighter.

            Every memory with you is something
            I'll always treasure.

            Thank you for accepting my heart.

            I promise I'll always pray for your happiness,
            your success,
            and your beautiful smile.

            Happy Birthday once again,
            Madam Ji ❤️

        </p>

        <h2 class="hiddenFade">

            Yours Forever,

            <br><br>

            Muntasin ❤️

        </h2>

    </div>

    `;

    createHearts();

    // Fade the whole page in
    setTimeout(()=>{

        document.querySelector(".lovePage")
        .classList.add("showLove");

    },100);

    // Reveal each element one after another
    const items=document.querySelectorAll(".hiddenFade");

    items.forEach((item,index)=>{

        setTimeout(()=>{

            item.classList.add("showItem");

        },800+(index*900));

    });

    // Soft confetti
    setInterval(()=>{

        confetti({

            particleCount:20,

            spread:70,

            origin:{

                x:Math.random(),

                y:0

            }

        });

    },900);

    // Floating Hearts

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="softHeart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*24)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },8000);

    },500);

}

// ------------------------
// Candle Page
// ------------------------

function candlePage() {

    document.body.innerHTML = `

    <div class="celebration">

        <h1 class="birthdayTitle">
            🎉 Happy Birthday Simi ❤️
        </h1>

        <p class="wishText">
            Make a wish before blowing the candles
        </p>

        <div id="cake">
            🎂🕯️🕯️🕯️
        </div>

        <h1 id="countdown">3</h1>

    </div>

    `;

    createHearts();

    let count = 3;

    const countdown = document.getElementById("countdown");

    const timer = setInterval(() => {

        count--;

        if (count > 0) {

            countdown.innerHTML = count;

        } else {

            clearInterval(timer);

            countdown.innerHTML = "💨";

            document.getElementById("cake").innerHTML = "🎂";

            // Blow sound
            const blow = new Audio("music/blow.mp3");
            blow.play();

            setTimeout(() => {

                // Birthday Song
                const birthdaySong = new Audio("music/birthday.mp3");
                birthdaySong.play();

                // Fireworks
                const fireworks = new Fireworks.default(document.body, {
                    autoresize: true,
                    opacity: 0.8,
                    particles: 120,
                    acceleration: 1.05,
                    friction: 0.97,
                    gravity: 1.5
                });

                fireworks.start();

                // Confetti
                const confettiInterval = setInterval(() => {

                    confetti({

                        particleCount: 120,

                        spread: 120,

                        origin: {

                            x: Math.random(),

                            y: Math.random() - 0.2

                        }

                    });

                }, 400);

                // Show big cake

                document.body.innerHTML = `

                <div class="cakeCelebration">

                    <h1 class="bigTitle">

                        🎉 Happy Birthday Simi ❤️

                    </h1>

                    <div class="bigCake">

                        🎂

                    </div>

                </div>

                `;

                fireworks.start();

                setTimeout(() => {

                    clearInterval(confettiInterval);

                    fireworks.stop();

                    birthdaySong.pause();

                    galleryPage();

                }, 15000);

            }, 1000);

        }

    }, 1000);

}

// ------------------------
// Preparing Page
// ------------------------

function preparingPage(){

    document.body.innerHTML = `

    <div class="preparingPage">

        <h1>❤️</h1>

        <h2>Preparing your answer...</h2>

    </div>

    `;

    document.body.style.transition = "1.5s";

    document.body.style.opacity = "0";

    setTimeout(()=>{

        document.body.style.opacity = "1";

        thankYouPage();

    },2000);

}
// ------------------------
// Thank You Page
// ------------------------

function thankYouPage(){

    document.body.innerHTML = `

    <div class="thankYouPage">

        <h1>❤️ Thank You For Being Mine ❤️</h1>

        <img src="photos/photo9.jpg" class="thankPhoto">

        <p>

        Every beautiful journey has a beautiful ending.

        Thank you for saying YES.

        I'll always cherish you.

        Happy Birthday, Madam Ji ❤️

        </p>

    </div>

    `;

    createHearts();

    confetti({
        particleCount:250,
        spread:360,
        origin:{y:0.6}
    });

}
