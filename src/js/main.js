
document.addEventListener("DOMContentLoaded", () => {

  // VIDÉOS : uniquement si une carte vidéo existe
  const videoCards = document.querySelectorAll(".video-card");

  videoCards.forEach((videoCard) => {
    const video = videoCard.querySelector(".card-video");
    const playButton = videoCard.querySelector(".play-button");

    if (!video || !playButton) return;

    playButton.addEventListener("click", async (event) => {
      event.stopPropagation();

      try {
        await video.play();
        videoCard.classList.add("is-playing");
        video.setAttribute("controls", "");
      } catch (error) {
        console.error("Impossible de lancer la vidéo :", error);
      }
    });

    videoCard.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
      videoCard.classList.remove("is-playing");
      video.removeAttribute("controls");
    });
  });

  // BURGER MENU : toutes les pages
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("#main-nav");
console.log("Burger :", burger, "Navigation :", nav);
  if (!burger || !nav) return;

  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    const newState = !isOpen;

    burger.setAttribute("aria-expanded", String(newState));
    burger.setAttribute(
      "aria-label",
      newState ? "Fermer le menu" : "Ouvrir le menu"
    );

    burger.classList.toggle("is-open", newState);
    nav.classList.toggle("is-open", newState);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("is-open");
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Ouvrir le menu");
    });
  });

});

