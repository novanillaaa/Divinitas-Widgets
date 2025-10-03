<script>
const testimonials = [
  { quote: "Divinitas nurtures the best in every student.", author: "— Class of 2026" },
  { quote: "The faculty inspires excellence and creativity at every turn.", author: "— Second-Year Virtue Student" },
  { quote: "I’ve grown so much here, academically and personally.", author: "— Choir Club President" },
  { quote: "Every performance feels like a step toward greatness.", author: "— Theater Arts Student" },
  { quote: "Divinitas challenges me to reach my full potential.", author: "— Scholarship Recipient" }
];

let index = 0;
const quoteEl = document.getElementById("testimonial-quote");
const authorEl = document.getElementById("testimonial-author");

function cycleTestimonials() {
  // Fade out
  quoteEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    // Update text AFTER fade out
    index = (index + 1) % testimonials.length;
    quoteEl.textContent = testimonials[index].quote;
    authorEl.textContent = testimonials[index].author;

    // Fade back in
    quoteEl.style.opacity = 1;
    authorEl.style.opacity = 1;
  }, 1000); // must match CSS transition duration
}

setInterval(cycleTestimonials, 5000);
</script>
