function generateDesign(){

let room = document.getElementById("room").value;
let budget = document.getElementById("budget").value;
let style = document.getElementById("style").value;


document.getElementById("result").innerHTML = `

🏠 AI Home Design Suggestion

<br><br>

Room: ${room}

<br>

Budget: ₹${budget}

<br>

Style: ${style}

<br><br>

Design Idea:

<br>

Create a modern ${style} house design with smart lighting,
beautiful furniture, premium materials and realistic 3D architecture.

`;

}



function createPrompt(){

let text = document.getElementById("housePrompt").value;


document.getElementById("promptResult").innerHTML =

"AI Image Prompt:<br><br>" +

"Create a realistic modern house design. " + text +

". Add beautiful lighting, luxury furniture and architectural details.";

}




function openImages(){

let search = document.getElementById("imageSearch").value;


window.open(

"https://www.google.com/search?tbm=isch&q=" + search

);

}
