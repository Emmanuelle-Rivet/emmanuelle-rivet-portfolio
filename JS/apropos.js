/* EFFET IMAGE QUI SUIT LA SOURIS */
const preview = document.getElementById("preview");

function handleMouseMove(e) {
  if (!preview) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  preview.style.transform =
    `translate(-50%, -50%) translate(${x}px, ${y}px) scale(1.02)`;
}

function checkScreen() {
  if (window.innerWidth > 768) {
    document.addEventListener("mousemove", handleMouseMove);
  } else {
    document.removeEventListener("mousemove", handleMouseMove);
    preview.style.transform = "none"; // reset position
  }
}

checkScreen();
window.addEventListener("resize", checkScreen);


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
    }, 200); // doit correspondre au CSS (0.4s)
  });
});

window.addEventListener("load", () => {
  document.body.classList.remove("fade-out");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // animation une seule fois
    }
  });
}, {
  threshold: 0.15 // déclenche quand 15% visible
});

// observer tous les éléments
document.querySelectorAll(".fade-item").forEach(el => {
  observer.observe(el);
});

