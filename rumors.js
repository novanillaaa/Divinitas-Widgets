(function(){
const rumors = [
"A senior dumped their inheritance fund into a theater set — and vanished the receipts.",
"The fountain ran crimson at dawn; maintenance says it's 'staining' not blood.",
"A professor keeps a private audition list labeled only with dates and names.",
"Someone swapped the practice scores — a Virtue won by two marks overnight.",
"Dorm cameras once recorded static and then a shadow moving alone.",
"A scholarship winner received a sealed envelope: 'Leave before winter break.'",
"A maintenance worker found a locked auditorium door that opened from the inside.",
"Three students reported the same dream: a bell that only rings at 3:33am."
];

const virusBtn = document.getElementById('virusBtn');
const virusText = document.getElementById('virusText');
const tearEls = document.querySelectorAll('.tear');
const badge = document.querySelector('.virus-badge');

function typeText(text, cb) {
virusText.textContent = '';
let i = 0;
const typer = setInterval(() => {
virusText.textContent += text[i];
virusText.setAttribute('data-text', virusText.textContent);
i++;
if (i >= text.length) {
clearInterval(typer);
if (cb) cb();
}
}, 25);
}

function revealRumor() {
let next;
const current = virusText.textContent.trim();
do {
next = rumors[Math.floor(Math.random()*rumors.length)];
} while (next === current && rumors.length>1);

tearEls.forEach((el,i)=>{
el.style.animation = `tearIn 900ms cubic-bezier(.2,.8,.2,1) ${i*120}ms forwards`;
});

virusText.style.animation = "none";
void virusText.offsetWidth;
virusText.style.animation = "textGlitch 0.4s steps(3) infinite, textFlicker 2s infinite";

// re-trigger badge flicker
badge.style.animation = "none";
void badge.offsetWidth;
badge.style.animation = "badgeFlicker 1.2s infinite steps(2)";

typeText(next, ()=>{});
}

virusBtn.addEventListener('click', revealRumor);
})();
