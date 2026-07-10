const furniture = [
"Modern sofa with smart storage",
"Wooden modular furniture",
"Space saving table",
"Luxury designer furniture",
"Minimal furniture setup"
];

const lighting = [
"Warm LED lights",
"Smart ceiling lights",
"Premium hanging lights",
"Natural window lighting",
"Hidden strip lights"
];

const colours = [
"White and wooden theme",
"Grey modern theme",
"Beige luxury theme",
"Blue relaxing theme",
"Black and gold premium theme"
];


function randomItem(array){
return array[Math.floor(Math.random()*array.length)];
}



function generateDesign(){

let room = document.getElementById("room").value;
let budget = document.getElementById("budget").value;
let style = document.getElementById("style").value;


document.getElementById("result").innerHTML = `

<h3>🤖 AI Home Design</h3>

<b>Room:</b> ${room}<br>
<b>Budget:</b> ₹${budget}<br>
<b>Style:</b> ${style}<br><br>


🛋️ Furniture:<br>
${randomItem(furniture)}<br><br>

💡 Lighting:<br>
${randomItem(lighting)}<br><br>

🎨 Colour:<br>
${randomItem(colours)}

`;

}



function generateVideo(){

let idea = document.getElementById("videoIdea").value;


document.getElementById("videoResult").innerHTML = `

<h3>🎬 AI Video Concept</h3>

Create a realistic cinematic video about:
<br><br>

${idea}

<br><br>

Camera: Professional movement<br>
Quality: 4K realistic style

`;

}
    
