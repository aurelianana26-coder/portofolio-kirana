// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }
});


// HERO TYPING EFFECT

const heroTitle = document.querySelector(".hero-title");

if (heroTitle) {
  const text = "Hi I'm Kiranna";
  let index = 0;
  heroTitle.innerHTML = "";

  function typeEffect() {
    if (index < text.length) {
      heroTitle.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 70);
    }
  }

  typeEffect();
}


// SKILL BAR ANIMATION

function animateSkills() {
  const bars = document.querySelectorAll(".skill-bar");

  bars.forEach((bar, i) => {

    const target = bar.dataset.width + "%";

    bar.style.width = "0";

    setTimeout(() => {
      bar.style.transition = "width 1.5s ease-in-out";
      bar.style.width = target;
    }, i * 200);

  });
}

const skillsSection = document.getElementById("skills");
let skillsDone = false;

if (skillsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !skillsDone) {
        skillsDone = true;
        animateSkills();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(skillsSection);
}


// SCROLL REVEAL EFFECT

const fadeElements = document.querySelectorAll(".fade-section");

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach((el) => fadeObserver.observe(el));


// SEND MESSAGE BUTTON

const sendBtn = document.getElementById('sendBtn');

if (sendBtn) {
  sendBtn.addEventListener('click', function () {

    const name = document.getElementById('contactName').value.trim();
    const number = document.getElementById('contactNumber').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !number || !message) {
      showToast('Mohon isi semua field!', 'error');
      return;
    }

    showToast('Pesan berhasil dikirim! 🎉', 'success');

    document.getElementById('contactName').value = '';
    document.getElementById('contactNumber').value = '';
    document.getElementById('contactMessage').value = '';
  });
}


// TOAST NOTIFICATION

function showToast(msg, type) {

  const existing = document.getElementById('toast-notif');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast-notif';
  toast.innerText = msg;

  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: ${type === 'success' ? '#2e6fda' : '#c0392b'};
    color: white;
    padding: 12px 28px;
    border-radius: 25px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    z-index: 9999;
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '1';
  }, 50);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}