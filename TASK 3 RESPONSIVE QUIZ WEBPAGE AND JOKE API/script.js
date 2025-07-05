// Quote Generator Function
async function generateJoke() {
  const jokeText = document.getElementById('joke-text');
  jokeText.textContent = "Fetching a cosmic giggle... ✨";

  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?format=txt");
    const joke = await response.text();
    jokeText.textContent = joke;
  } catch (error) {
    jokeText.textContent = "Oops! Even the stars couldn't find a joke. 😅";
  }
}


document.addEventListener("DOMContentLoaded", function () {
  // Check if we are on the gallery-topic page
  if (window.location.pathname.includes("gallery-topic.html")) {
    const imageGrid = document.getElementById("image-grid");
    const categoryTitle = document.getElementById("category-title");

    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    if (category && imageGrid && categoryTitle) {
      categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1) + " Gallery";

      for (let i = 1; i <= 10; i++) {
        const img = document.createElement("img");
        img.src = `assets/images/${category}/${i}.jpg`;
        img.alt = `${category} ${i}`;
        img.classList.add("grid-image");
        imageGrid.appendChild(img);
      }
    }
  }
});
// Carousel Viewer
const carouselImage = document.getElementById("carousel-image");

if (carouselImage) {
  const category = localStorage.getItem("carouselCategory") || "nature";
  let index = parseInt(localStorage.getItem("carouselIndex")) || 1;

  function updateCarousel() {
    carouselImage.classList.remove("fade-in");
    setTimeout(() => {
      carouselImage.src = `assets/images/${category}/${index}.jpg`;
      carouselImage.classList.add("fade-in");
    }, 200);
  }

  window.prevImage = function () {
    index = index <= 1 ? 10 : index - 1;
    localStorage.setItem("carouselIndex", index);
    updateCarousel();
  };

  window.nextImage = function () {
    index = index >= 10 ? 1 : index + 1;
    localStorage.setItem("carouselIndex", index);
    updateCarousel();
  };

  updateCarousel();
}
function handleLogin(event) {
  event.preventDefault();

  const username = document.querySelector('input[type="text"]').value.trim().toLowerCase();
  const password = document.querySelector('input[type="password"]').value.trim();

  if (username === "mahi" && password === "galaxy") {
    // Save to localStorage (optional)
    localStorage.setItem("username", username);

    // Redirect to gallery
    window.location.href = "gallery.html";
  } else {
    alert("Invalid username or password! Try mahi / 1234");
  }
}
let currentIndex = 0;
let images = [];

function openLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = images[index].src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("image-grid");
  images = Array.from(grid.getElementsByTagName("img"));

  images.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });

  document.querySelector(".lightbox .close").onclick = closeLightbox;
  document.querySelector(".lightbox .next").onclick = showNext;
  document.querySelector(".lightbox .prev").onclick = showPrev;

  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });
});
