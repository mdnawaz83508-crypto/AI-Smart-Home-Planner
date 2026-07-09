function generateDesign() {
  let room = document.getElementById("room").value;
  let budget = document.getElementById("budget").value;
  let style = document.getElementById("style").value;

  document.getElementById("result").innerHTML =
    "AI Design Suggestion:<br><br>" +
    "For a " + room + " room with budget " + budget +
    " and " + style + " style:<br>" +
    "• Use space-saving furniture<br>" +
    "• Add modern lighting<br>" +
    "• Choose matching colours<br>" +
    "• Keep storage solutions";
}
