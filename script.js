document.getElementById("btn").onclick = function(){

let details = document.getElementById("question").value;


if(details.trim() === ""){

document.getElementById("result").innerHTML =
"❌ Enter details first";

return;

}


document.getElementById("result").innerHTML =

`
<h2>🤖 AI Design</h2>

🏠 Home Idea Generated

<br><br>

📐 Details:
${details}

<br><br>

🛋️ Furniture: Modern space saving furniture

<br>

💡 Lighting: Premium LED lighting

<br>

🎨 Style: Beautiful colour combination

<br>

🌿 Decoration: Plants and smart storage

`;

};
