const gitaquotes = [
    "`One who sees inaction in action, and action in inaction, is intelligent among men.`",
    "You should perform your duty with a view to guide people and for universal welfare.",
    "Even the wise are confused about what is action and what is inaction."
];

let previousIndex = -1; // Initialize with an index that is out of bounds

function updateQuote() {
    let randomIndex = Math.floor(Math.random() * gitaquotes.length);
    // Generate a new random index until it's different from the previous index
    while (randomIndex === previousIndex) {
        randomIndex = Math.floor(Math.random() * gitaquotes.length);
    }
    previousIndex = randomIndex; // Update the previous index
    document.getElementById("dquote").textContent = gitaquotes[randomIndex];
}

document.getElementById("changequote").addEventListener("click", updateQuote);

updateQuote(); // Display a random quote by default
