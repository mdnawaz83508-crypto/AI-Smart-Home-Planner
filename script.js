// AI Smart Home Planner Script


function generateDesign(){

    let room = document.getElementById("room").value;
    let budget = document.getElementById("budget").value;
    let style = document.getElementById("style").value;

    let result = `
    🏠 AI Home Design Suggestion

    Room: ${room}

    Budget: ${budget}

    Style: ${style}

    Design Idea:
    Create a modern ${style} ${room} design with smart home technology,
    beautiful lighting, comfortable furniture, premium materials,
    and a realistic 3D architectural view.
    `;

    document.getElementById("result").innerHTML = result;

}



// House design prompt generator

function createPrompt(){

    let text = document.getElementById("housePrompt").value;

    let prompt = `
    🏠 AI Image Design Prompt:

    Create a realistic 3D house design based on:
    ${text}

    Include:
    - Modern architecture
    - Smart home technology
    - Luxury interior
    - Beautiful garden
    - Glass windows
    - Professional lighting
    - High quality architectural visualization
    `;

    document.getElementById("promptResult").innerHTML = prompt;

}



// YouTube search

function openYoutube(){

    let search = document.getElementById("youtubeSearch").value;

    let link = 
    "https://www.youtube.com/results?search_query=" 
    + encodeURIComponent(search);

    window.open(link, "_blank");

}



// Google image search

function openImages(){

    let search = document.getElementById("imageSearch").value;

    let link =
    "https://www.google.com/search?tbm=isch&q="
    + encodeURIComponent(search);

    window.open(link, "_blank");

}
