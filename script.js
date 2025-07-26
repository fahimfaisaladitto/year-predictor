const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggle.checked);
});

function predictYear() {
  const year = document.getElementById("yearInput").value;
  const outputText = document.getElementById("outputText");
  const loader = document.getElementById("loader");

  if (!year || isNaN(year)) {
    outputText.textContent = "Please enter a valid year.";
    return;
  }

  // Messages to show during loading
  const loadingMessages = [
    "Crunching numbers...",
    "Analysing your input...",
    "Consulting the time oracle...",
    "Calibrating chronometer...",
    "Almost there..."
  ];

  loader.style.display = "block";

  // Show each message 1 second apart
  loadingMessages.forEach((msg, i) => {
    setTimeout(() => {
      outputText.textContent = msg;
    }, i * 1000); // i * 1000ms = 1s, 2s, 3s, etc.
  });

  // After 5 seconds, show the result
  setTimeout(() => {
    const nextYear = parseInt(year) + 1;
    outputText.textContent = `Predicted next year: ${nextYear}`;
    loader.style.display = "none";
  }, 5000);
}
