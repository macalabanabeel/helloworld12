const roles = [
  "Fullstack Developer",
  "Graphic Designer",
  "Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex++);
  }

  // Speeds
  let typingSpeed = isDeleting ? 50 : 90;

  // When word is fully typed → immediately start deleting
  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    typingSpeed = 200; // small pause before erase
  }
  // When word is fully deleted → move to next
  else if (isDeleting && charIndex < 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 400; // pause before typing next word
    charIndex = 0;
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
