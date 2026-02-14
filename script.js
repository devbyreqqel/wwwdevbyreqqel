const cursor = document.getElementById("cursor");
const audio = document.getElementById("audio");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("click", () => {
  audio.volume = 1;
  audio.play();

  setInterval(() => {
    document.body.style.transform =
      `rotate(${Math.random() * 8 - 4}deg) scale(${1 + Math.random() * 0.15})`;
  }, 60);

  setInterval(() => {
    document.title =
      Math.random().toString(36).substring(2, 8).toUpperCase();
  }, 120);
});
