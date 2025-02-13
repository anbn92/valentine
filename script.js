function showSurprise() {
  document.getElementById("surprise").classList.remove("d-none");
  document.getElementById("love-letter").classList.remove("d-none");

  setTimeout(typeLetter, 500);

  let audio = document.getElementById("backgroundMusic");
  if (audio.paused) {
    audio.play();
  }
}

const loveText = `Em yêu dấu, ngày Valentine
Bên em, hạnh phúc thật hiền lành.
Nụ cười em, ánh mắt sáng,
Làm tim anh mãi rộn ràng.

Bốn mùa qua, tình không đổi,
Năm năm bên nhau thật tuyệt vời.
Anh yêu em hơn vạn lời,
Mãi mãi bên nhau, em ơi! 💖`;
let index = 0;
const speed = 80;

function typeLetter() {
  if (index < loveText.length) {
    document.getElementById("typed-text").innerHTML += loveText.charAt(index);
    index++;
    setTimeout(typeLetter, speed);
  } else {
    setTimeout(() => {
      const container = document.getElementById("heart-container");
      container.classList.add("show-slideshow");
      container.style.display = "block";
      console.log("Starting slideshow...");
      startSlideshow();
    }, 1000);
  }
}

function startSlideshow() {
  const container = document.getElementById("heart-container");
  let index = 0;

  function showNextImage() {
    if (index >= imagePaths.length) {
      console.log("Slideshow finished, forming picture wall...");
      setTimeout(formPictureWall, 1000);
      return;
    }

    console.log("Showing image:", imagePaths[index]);

    const img = document.createElement("img");
    img.src = imagePaths[index];
    img.classList.add("slideshow-image");
    container.innerHTML = "";
    container.appendChild(img);

    gsap.set(img, { opacity: 0, scale: 1.5 });
    gsap.to(img, { opacity: 1, duration: 1 });

    setTimeout(() => {
      gsap.to(img, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          index++;
          showNextImage();
        },
      });
    }, 3000);
  }

  showNextImage();
}

function formPictureWall() {
  const container = document.getElementById("heart-container");
  container.innerHTML = "";
  container.classList.remove("show-slideshow");
  container.classList.add("show-wall");

  container.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  container.style.border = "5px solid #ff4d6d";
  container.style.padding = "20px";

  imagePaths.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("wall-image");
    container.appendChild(img);

    setTimeout(() => {
      gsap.to(img, { opacity: 1, scale: 1, duration: 1 });
    }, index * 300);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("heart-container");

  function createHeart() {
    const emojis = ["❤️", "😘", "💋"];
    const heart = document.createElement("div");

    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 500);
});

const imagePaths = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
  "img/img6.jpg",
  "img/img7.jpg",
  "img/img8.jpg",
  "img/img9.jpg",
  "img/img10.jpg",
  "img/img11.jpg",
  "img/img12.jpg",
];
