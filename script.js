alert("JS WORKING");
function generateDesign() {
  let room = document.getElementById("room").value;
  let budget = document.getElementById("budget").value;
  let style = document.getElementById("style").value;

  let result = `
  🏠 AI Home Design Suggestion <br><br>

  Room: ${room}<br>
  Budget: ₹${budget}<br>
  Style: ${style}<br><br>

  Design Idea:<br>
  Create a modern ${style} house design with smart lighting,
  beautiful furniture, and realistic 3D architectural view.
  `;

  document.getElementById("result").innerHTML = result;
}


function createPrompt() {
  let text = document.getElementById("housePrompt").value;

  document.getElementById("promptResult").innerHTML =
  "AI Prompt: Design a beautiful house with " + text;
}


function openYouTube() {
  let q = document.getElementById("youtubeSearch").value;
  window.open("https://www.youtube.com/results?search_query=" + q);
}


function openImages() {
  let q = document.getElementById("imageSearch").value;
  window.open("https://www.google.com/search?tbm=isch&q=" + q);
}
