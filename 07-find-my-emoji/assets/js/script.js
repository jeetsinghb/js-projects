// Import the emoji data array from an external module
import { emojis } from "./data.js";

// Get references to the DOM elements: the search input and the emoji list container
const emojiSearchInput = document.getElementById("searchInput");
const emojiList = document.getElementById("emojiList");

/**
 * Renders a list of emojis into the DOM.
 * If the list is empty, displays a "No Emoji Found" message.
 *
 * @param {Array} list - The array of emoji objects to render
 */
function renderEmojis(list) {
  // Clear any existing emoji list items
  emojiList.innerHTML = "";

  // If the list is empty, show a message
  if (list.length === 0) {
    const div = document.createElement("div");
    div.textContent = "No Emoji Found";
    emojiList.appendChild(div);
    return;
  }

  // Create a list item (<li>) for each emoji and append it to the list
  list.forEach((emoji) => {
    const li = document.createElement("li");
    li.textContent = `${emoji.symbol} ${emoji.name}`; // Show symbol and name
    emojiList.appendChild(li);
  });
}

/**
 * Filters the emojis based on a search term.
 *
 * @param {string} searchTerm - The text to filter emojis by
 * @returns {Array} - A filtered array of emojis whose names include the search term
 */
function filterEmojis(searchTerm) {
  return emojis.filter((emoji) =>
    emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Listen for input events (when the user types in the search box)
emojiSearchInput.addEventListener("input", () => {
  const searchTerm = emojiSearchInput.value.trim(); // Get current search input
  const filtered = filterEmojis(searchTerm); // Filter emojis based on input
  renderEmojis(filtered); // Render the filtered emojis
});

// Initially render all emojis on page load
renderEmojis(emojis);
