function generateDesign() {
  let room = document.getElementById("room").value;
  let budget = document.getElementById("budget").value;
  let style = document.getElementById("style").value;

  document.getElementById("result").innerHTML =
  `
  🏠 AI Home Design Suggestion<br><br>
  Room: ${room}<br>
  Budget: ₹${budget}<br>
  Style: ${style}<br><br>

  Design Idea:<br>
  Create a modern ${style} house design with smart lighting,
  beautiful furniture, and a realistic architectural look.
  `;
}

function createPrompt() {
  let text = document.getElementById("housePrompt").value;

  document.getElementById("promptResult").innerHTML =
  "AI Prompt:<br>Design a beautiful modern house with " + text;
}

function openYouTube() {
  let q = document.getElementById("youtubeSearch").value;
  window.open("https://www.youtube.com/results?search_query=" + q);
}

function openImages() {
  let q = document.getElementById("imageSearch").value;
  window.open("https://www.google.com/search?tbm=isch&q=" + q);
}

alert("JavaScript connected");
