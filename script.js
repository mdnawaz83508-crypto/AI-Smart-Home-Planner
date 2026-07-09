function generateDesign() {
  let room = document.getElementById("room").value;
  let budget = document.getElementById("budget").value;
  let style = document.getElementById("style").value;

  document.getElementById("result").innerHTML = `
  <h3>🏠 AI Design Plan</h3>
  <b>Room:</b> ${room}<br>
  <b>Budget:</b> ₹${budget}<br>
  <b>Style:</b> ${style}<br><br>

  🛋️ <b>Furniture:</b> Use space-saving furniture suitable for your room size.<br><br>

  💡 <b>Lighting:</b> Add modern LED lighting for a premium look.<br><br>

  🎨 <b>Colours:</b> Choose colours that match your ${style} theme.<br><br>

  📦 <b>Storage:</b> Add smart storage solutions to save space.
  `;
}
