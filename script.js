function generateDesign(){

let details = document.getElementById("question").value;


if(details.trim() === ""){

document.getElementById("result").innerHTML =
"❌ Please enter your home details";

return;

}


let designs = [

"🏠 Modern Minimalist Home",
"🛋️ Luxury Living Room Design",
"🛏️ Smart Bedroom Interior",
"🍳 Modular Kitchen Concept",
"🌿 Eco Friendly Home Design",
"💡 Premium Lighting Setup",
"🪑 Space Saving Furniture Layout",
"🎨 Elegant Colour Combination",
"🏡 Smart Home Automation Idea",
"🌆 Contemporary Apartment Style"

];


let idea =
designs[Math.floor(Math.random()*designs.length)];


let prompt = `

🏠 AI HOME DESIGN RESULT

${idea}


📐 User Requirements:
${details}


✨ AI Suggestions:

🛋️ Furniture:
Use space-saving and stylish furniture placement.

💡 Lighting:
Add modern LED lighting with natural light balance.

🎨 Colours:
Choose matching premium colour combinations.

🌿 Decoration:
Add plants, artwork and smart storage.

📱 Smart Features:
Add modern home technology.

🎬 Visualization Prompt:

Create a realistic 4K architectural visualization of this home,
professional interior design,
realistic materials,
cinematic lighting,
modern furniture,
luxury appearance.

`;


document.getElementById("result").innerHTML =
"<h2>🤖 AI Designer</h2><p>"
+ prompt.replace(/\n/g,"<br>")
+ "</p>";

}
