const projects = document.querySelectorAll(".project");
const preview = document.getElementById("preview-img");

/* CHANGEMENT IMAGE */
projects.forEach(project => {
  project.addEventListener("mouseenter", () => {
    const newImg = project.getAttribute("data-img");

    preview.style.opacity = 0;

    setTimeout(() => {
      preview.src = newImg;
      preview.style.opacity = 1;
    }, 200);
  });
});

/* EFFET IMAGE QUI SUIT LA SOURIS */
function handleMouseMove(e) {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  preview.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
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


window.addEventListener("load", () => {
  const items = document.querySelectorAll(".fade-item");

  items.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 150); // délai entre chaque élément
  });
});

window.addEventListener("load", () => {
  const splash = document.getElementById("splash");

  setTimeout(() => {
    splash.classList.add("hide");

    // supprime complètement après animation
    setTimeout(() => {
      splash.remove();
    }, 1000);

  }, 700);
});