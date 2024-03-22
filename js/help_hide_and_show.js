const openHint = document.getElementById("openhint");
const closeHint = document.getElementById("closehint");
const helpTextDiv = document.getElementById("help_text");

openHint.addEventListener("click", () => {
  helpTextDiv.style.display = "block";
  openHint.style.display = "none";
  closeHint.style.display = "block";
});

closeHint.addEventListener("click", () => {
  helpTextDiv.style.display = "none";
  openHint.style.display = "block";
  closeHint.style.display = "none";
});
