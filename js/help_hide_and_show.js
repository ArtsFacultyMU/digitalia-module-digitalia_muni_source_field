const openAbbrev = document.getElementById("open_abbrev");
const closeAbbrev = document.getElementById("close_abbrev");
const abbrevText = document.getElementById("abbrev_text");


openAbbrev.addEventListener("click", () => {
  abbrevText.style.display = "block";
  openAbbrev.style.display = "none";
  closeAbbrev.style.display = "block";
});

closeAbbrev.addEventListener("click", () => {
  abbrevText.style.display = "none";
  openAbbrev.style.display = "block";
  closeAbbrev.style.display = "none";
});

const openSource = document.getElementById("open_source");
const closeSource = document.getElementById("close_source");
const sourceText = document.getElementById("source_text");

openSource.addEventListener("click", () => {
  sourceText.style.display = "block";
  openSource.style.display = "none";
  closeSource.style.display = "block";
});

closeSource.addEventListener("click", () => {
  sourceText.style.display = "none";
  openSource.style.display = "block";
  closeSource.style.display = "none";
});

