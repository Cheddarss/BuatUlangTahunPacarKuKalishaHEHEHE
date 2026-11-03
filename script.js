const photos = [
  { src: "images/foto1.jpg", caption: "one of my favorite moments" },
  { src: "images/foto2.jpg", caption: "a little memory with you" },
  { src: "images/foto3.jpg", caption: "glad we made this memory" },
  { src: "images/foto4.jpg", caption: "you make ordinary days better" },
  { src: "images/foto5.jpg", caption: "more moments like this, please" }
];

let current = 0;
const image = document.getElementById("slideImage");
const count = document.getElementById("photoCount");
const caption = document.getElementById("photoCaption");
const dots = document.getElementById("dots");

function showPhoto(index) {
  current = (index + photos.length) % photos.length;
  image.classList.add("is-changing");
  window.setTimeout(() => {
    image.src = photos[current].src;
    image.alt = `Foto kenangan ${current + 1} bersama Kalisha`;
    caption.textContent = photos[current].caption;
    count.textContent = `${String(current + 1).padStart(2, "0")} / 05`;
    image.classList.remove("is-changing");
  }, 130);
  [...dots.children].forEach((dot, i) => dot.classList.toggle("active", i === current));
}
photos.forEach((photo, i) => {
  const dot = document.createElement("button");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.setAttribute("aria-label", `Tampilkan foto ${i + 1}`);
  dot.addEventListener("click", () => showPhoto(i));
  dots.appendChild(dot);
});
document.getElementById("prevBtn").addEventListener("click", () => showPhoto(current - 1));
document.getElementById("nextBtn").addEventListener("click", () => showPhoto(current + 1));

document.getElementById("bloomBtn").addEventListener("click", () => {
  const bouquet = document.getElementById("bouquet");
  const button = document.getElementById("bloomBtn");
  bouquet.classList.toggle("show");
  button.innerHTML = bouquet.classList.contains("show")
    ? 'bunganya buat kamu ♡'
    : 'buka bunga kecilnya <span>✿</span>';
});
