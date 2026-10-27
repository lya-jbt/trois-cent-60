const videoCard = document.querySelector(".video-card");
const video = videoCard.querySelector(".card-video");
const playButton = videoCard.querySelector(".play-button");

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
