function updateClock() {
  const now = new Date();
  
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  
  const timeString = hours + ":" + minutes + ":" + seconds;
  
  document.getElementById("clock").textContent = timeString;
}

updateClock();

setInterval(updateClock, 1000);

let timer;
const fatal = document.querySelector(".fatal-silhouette");

function hideFatal() {
    fatal.classList.remove("revealed");
}

function showFatal() {
    fatal.classList.add("revealed");
}

document.addEventListener("mousemove", () => {
    hideFatal();
    clearTimeout(timer);

    timer = setTimeout(() => {
        showFatal();
    }, 1200);
});
