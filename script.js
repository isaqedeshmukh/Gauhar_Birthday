const hero = document.getElementById('hero');
const thumbs = document.querySelectorAll('.thumbs img');
const flames = document.querySelectorAll('.flame');
const blowBtn = document.getElementById('blowBtn');
const relightBtn = document.getElementById('relightBtn');
const message = document.getElementById('message');

const defaultMessage = 'Every candle glows like your smile in my life.';
const customBlowMessage = `Janamdin mubarak ho meri hone wali humsafar meri Jaan Gauhar 💫
Main har din Allah ka shukr ada karta hoon ke usne aapko meri zindagi mein bheja.
InshaAllah, humari mohabbat hamesha aise he qayam rahe`;

thumbs.forEach((img) => {
  img.addEventListener('click', () => {
    hero.src = img.src;
  });
});

let autoIndex = 0;
setInterval(() => {
  autoIndex = (autoIndex + 1) % thumbs.length;
  hero.src = thumbs[autoIndex].src;
}, 3500);

function blowCandles() {
  flames.forEach((f, i) => {
    setTimeout(() => f.classList.add('out'), i * 90);
  });
  message.textContent = customBlowMessage;
}

function relightCandles() {
  flames.forEach((f) => f.classList.remove('out'));
  message.textContent = defaultMessage;
}

blowBtn.addEventListener('click', blowCandles);
relightBtn.addEventListener('click', relightCandles);
