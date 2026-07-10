const furnitureIdeas = [
"Use a modular sofa with hidden storage",
"Add a floating TV unit",
"Use a foldable study table",
"Choose a corner sofa to save space",
"Add wooden shelves for decoration",
"Use a compact dining table",
"Add a comfortable reading chair",
"Use multi-purpose furniture",
"Add a modern wardrobe",
"Use wall-mounted furniture"
];

const lightingIdeas = [
"Use warm LED ceiling lights",
"Add smart lights with adjustable brightness",
"Use pendant lights for a premium look",
"Add wall lights for decoration",
"Use hidden strip lighting",
"Add natural window lighting",
"Use energy-saving LED lamps"
];

const colourIdeas = [
"Try white and wooden colours",
"Use beige and cream shades",
"Add grey modern tones",
"Use pastel colours for a calm look",
"Try black and gold luxury theme",
"Use blue and white combinations"
];

const storageIdeas = [
"Add wall shelves",
"Use hidden storage cabinets",
"Install built-in wardrobes",
"Use under-bed storage",
"Add corner storage units",
"Use smart modular storage"
];

function randomIdea(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function generateDesign() {

let room = document.getElementById("room").value;
let budget = document.getElementById("budget").value;
let style = document.getElementById("style").value;


document.getElementById("result").innerHTML = `

<h3>🏠 AI Smart Home Plan</h3>

<b>Room:</b> ${room}<br>
<b>Budget:</b> ₹${budget}<br>
<b>Style:</b> ${style}<br><br>

🛋️ <b>Furniture:</b><br>
${randomIdea(furnitureIdeas)}<br><br>

💡 <b>Lighting:</b><br>
${randomIdea(lightingIdeas)}<br><br>

🎨 <b>Colours:</b><br>
${randomIdea(colourIdeas)}<br><br>

📦 <b>Storage:</b><br>
${randomIdea(storageIdeas)}

`;
}
