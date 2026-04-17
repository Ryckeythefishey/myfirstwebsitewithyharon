window.addEventListener("load", () => {
    const music = document.getElementById("bg-music");

    if (localStorage.getItem("playMusic") === "true") {
        music.play().catch(err => {
            console.log("Autoplay blocked:", err);
        });

        localStorage.removeItem("playMusic");
    }
});