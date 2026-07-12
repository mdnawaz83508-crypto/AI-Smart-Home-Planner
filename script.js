// AI Smart Home Planner


function generateDesign() {

    let room = document.getElementById("room").value;
    let budget = document.getElementById("budget").value;
    let style = document.getElementById("style").value;

    let result = document.getElementById("result");


    if (room === "" || budget === "" || style === "") {
        result.innerHTML = "Please enter all details.";
        return;
    }


    result.innerHTML =
    "🏠 AI Design Suggestion<br><br>" +
    "Room: " + room + "<br>" +
    "Budget: ₹" + budget + "<br>" +
    "Style: " + style + "<br><br>" +
    "Create a beautiful " + style + " " + room +
    " with smart home technology, modern furniture, " +
    "premium lighting and realistic 3D design.";
}




function createPrompt() {

    let house = document.getElementById("housePrompt").value;

    let output = document.getElementById("promptResult");


    if (house === "") {
        output.innerHTML = "Please enter house description.";
        return;
    }


    output.innerHTML =
    "✨ AI Prompt:<br><br>" +
    "Create a realistic 3D house design of " +
    house +
    ". Add modern architecture, smart home features, " +
    "luxury interior, garden, glass windows and beautiful lighting.";
}





function openYoutube() {

    let video = document.getElementById("youtubeSearch").value;


    if (video === "") {
        alert("Enter video search");
        return;
    }


    window.open(
        "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(video)
    );
}





function openImages() {

    let image = document.getElementById("imageSearch").value;


    if (image === "") {
        alert("Enter image search");
        return;
    }


    window.open(
        "https://www.google.com/search?tbm=isch&q=" +
        encodeURIComponent(image)
    );
}
