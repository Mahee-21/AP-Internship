// === Scroll Reveal Animation ===
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.2
  }
);

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// === Active Nav Link Highlight ===
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      let id = section.getAttribute('id');
      document.querySelector(`.navbar a[href="#${id}"]`).classList.add('active');
    }
  });
});
