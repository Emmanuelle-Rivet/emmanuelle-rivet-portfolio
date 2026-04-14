
// ouvrir
document.addEventListener("click", (e) => {

  const img = e.target.closest(".slide img");
  const video = e.target.closest(".slide video");

  // ===== IMAGE =====
  if (img) {
    lightbox.innerHTML = `
      <img src="${img.src}">
    `;

    lightbox.classList.add("active");
    document.body.classList.add("lightbox-open");
  }

  // ===== VIDEO =====
  if (video) {

    const videoClone = video.cloneNode(true);

    videoClone.muted = false;
    videoClone.controls = true;
    videoClone.currentTime = 0;

    lightbox.innerHTML = "";
    lightbox.appendChild(videoClone);

    lightbox.classList.add("active");
    document.body.classList.add("lightbox-open");

    videoClone.play().catch(() => {});
  }

});
// fermer
lightbox.addEventListener("click", () => {
  // récupérer la vidéo si elle existe
  const video = lightbox.querySelector("video");

  if (video) {
    video.pause();        // stop
    video.currentTime = 0; // reset
    video.muted = true;   // coupe le son (sécurité)
  }

  lightbox.classList.remove("active");
  document.body.classList.remove("lightbox-open");

  lightbox.innerHTML = ""; // supprime la vidéo du DOM
});

const cursor = document.getElementById("cursor");


// ========== TRANSITION PAGE =========
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    const url = this.href;

    // on ignore les liens externes
    if (!url.includes(".html")) return;

    e.preventDefault();

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = url;
    }, 400); // doit correspondre au CSS (0.4s)
  });
});

window.addEventListener("load", () => {
  document.body.classList.remove("fade-out");
});

window.addEventListener("load", () => {
  const items = document.querySelectorAll(".fade-item");

  items.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 150); // délai entre chaque élément
  });
});