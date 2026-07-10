function generateDesign() {
  let room = document.getElementById("room").value;
  let budget = document.getElementById("budget").value;
  let style = document.getElementById("style").value;

  let prompt =
    "Modern interior design of a " + room +
    " room, budget " + budget +
    ", " + style +
    " style, realistic 3D home design.";

  document.getElementById("result").innerHTML = `
  <h3>🏠 AI Design Suggestion</h3>
  <p><b>Room:</b> ${room}</p>
  <p><b>Budget:</b> ₹${budget}</p>
  <p><b>Style:</b> ${style}</p>

  <h4>AI Image Prompt:</h4>
  <p>${prompt}</p>

  <button onclick="generateImage('${prompt}')">
  🖼️ Generate AI Room Image
  </button>
  `;
}

function generateImage(prompt) {
  let imageSearch = 
  "https://www.google.com/search?tbm=isch&q=" 
  + encodeURIComponent(prompt);

  window.open(imageSearch, "_blank");
}
