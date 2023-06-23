// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables */
const synth = window.speechSynthesis;
const speakButton = document.getElementById('speakButton');
const nounButton = document.getElementById('nounButton');
const verbButton = document.getElementById('verbButton');
const adjectiveButton = document.getElementById('adjectiveButton');
const noun2Button = document.getElementById('noun2Button');
const placeButton = document.getElementById('placeButton');
const generateButton = document.getElementById('generateButton');
const resetButton = document.getElementById('resetButton');
const storyOutput = document.getElementById('storyOutput');

const nouns = ['cat', 'dog', 'bird', 'tree', 'flower'];
const verbs = ['jumped', 'ran', 'flew', 'grew', 'bloomed'];
const adjectives = ['happy', 'sad', 'funny', 'colorful', 'bright'];
const noun2 = ['house', 'car', 'boat', 'bike', 'computer'];
const places = ['park', 'beach', 'forest', 'mountain', 'city'];

let textToSpeak = '';

/* Functions */
function speakNow(string) {
  const utterThis = new SpeechSynthesisUtterance(string);
  synth.speak(utterThis);
}

function generatePhrase(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function updateTextToSpeak() {
  textToSpeak = `${generatePhrase(nouns)} ${generatePhrase(verbs)} ${generatePhrase(
    adjectives
  )} ${generatePhrase(noun2)} ${generatePhrase(places)}`;
}

function generateStory() {
  updateTextToSpeak();
  storyOutput.textContent = textToSpeak;
}

function resetStory() {
  textToSpeak = '';
  storyOutput.textContent = '';
}

function highlightButton(button) {
  button.classList.add('highlight');
  setTimeout(() => {
    button.classList.remove('highlight');
  }, 300);
}

/* Event Listeners */
speakButton.addEventListener('click', () => {
  speakNow(textToSpeak);
});

nounButton.addEventListener('click', () => {
  updateTextToSpeak();
  highlightButton(nounButton);
});

verbButton.addEventListener('click', () => {
  updateTextToSpeak();
  highlightButton(verbButton);
});

adjectiveButton.addEventListener('click', () => {
  updateTextToSpeak();
  highlightButton(adjectiveButton);
});

noun2Button.addEventListener('click', () => {
  updateTextToSpeak();
  highlightButton(noun2Button);
});

placeButton.addEventListener('click', () => {
  updateTextToSpeak();
  highlightButton(placeButton);
});

generateButton.addEventListener('click', () => {
  generateStory();
});

resetButton.addEventListener('click', () => {
  resetStory();
});


