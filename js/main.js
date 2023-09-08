document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector(".hero");
    hero.classList.add("animate-in");

    const heroTitle = document.querySelector(".hero-title");
    heroTitle.classList.add("swing-in-top-fwd");

    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("slide-in-left");

    const heroP = document.querySelector(".hero-p");
    heroP.classList.add("swing-in-top-fwd");

    const name = document.querySelector(".name");
    name.classList.add("flip-in-hor-top")
    
    const job = document.querySelector(".job");
    job.classList.add("flip-in-hor-top")

    const btn = document.querySelector(".resume-btn");
    btn.classList.add("swing-in-top-fwd")
    
    if (window.innerWidth <= 768) {
      const logo = document.querySelector(".logo");
    logo.classList.add("wobble-hor-bottom")
    }
});


const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX + window.scrollX;
  const y = e.clientY + window.scrollY;

  cursorGlow.style.left = x + 'px';
  cursorGlow.style.top = y + 'px';
});

function setupObserver(targetSelector, animationClass) {
  const targetElements = document.querySelectorAll(targetSelector);

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add(animationClass);
              observer.unobserve(entry.target);
          }
      });
  }, options);

  targetElements.forEach(element => {
      observer.observe(element);
  });
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

// setupObserver('.skill-p', 'scale-in-ver-center');
setupObserver('.frontend-1', 'swing-in-top-fwd-2');
setupObserver('.backend-1', 'swing-in-top-fwd-3');
setupObserver('.tools-1', 'swing-in-top-fwd-4');
setupObserver('.ani-4', 'swing-in-top-fwd-5');
// setupObserver('.projects-p', 'scale-in-ver-center');
// setupObserver('.who-p', 'scale-in-ver-center');
setupObserver('.see-more-btn', 'puff-in-center');

const sidebar = document.querySelector('.sidebar');
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  if (window.innerWidth <= 768) { 
    if (sidebar.style.height === '75px' || sidebar.style.height === '') {
      sidebar.style.height = '100%'; 
      sidebar.style.backgroundColor = 'rgba(20, 20, 20, 0.95)';
    } else {
      sidebar.style.height = '75px'; 
      sidebar.style.backgroundColor = '';
    }
  }
});


