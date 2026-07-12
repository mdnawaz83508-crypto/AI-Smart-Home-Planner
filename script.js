// AI Smart Home Planner


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



// Create AI image prompt

function createPrompt(){

let text = document.getElementById("housePrompt").value;


document.getElementById("promptResult").innerHTML =

"AI Image Prompt:<br><br>" +

"Create a realistic 3D house design based on: " 
+ text +
". Include modern architecture, smart home features, luxury interior, garden, beautiful lighting and professional visualization.";

}



// Search YouTube videos

function openYoutube(){

let search = document.getElementById("youtubeSearch").value;


let url =
"https://www.youtube.com/results?search_query="
+ encodeURIComponent(search);


window.open(url,"_blank");

}



// Search Google Images

function openImages(){

let search =
document.getElementById("imageSearch").value;


let url =
"https://www.google.com/search?tbm=isch&q="
+ encodeURIComponent(search);


window.open(url,"_blank");

}
