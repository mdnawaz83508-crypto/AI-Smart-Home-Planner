function searchAnything() {

let question = document.getElementById("question").value;

let text = question.toLowerCase();

let result = `
<h3>🤖 AI Assistant Result</h3>
<p>You searched for:</p>
<b>${question}</b>
<br><br>
`;

if (
text.includes("video") ||
text.includes("how to") ||
text.includes("tutorial") ||
text.includes("review") ||
text.includes("making")
) {

result += `
<button onclick="openYouTube('${question}')">
🎬 Watch Videos
</button>
`;

}
else {

result += `
<button onclick="openImages('${question}')">
🖼️ View Images
</button>
`;

}

document.getElementById("result").innerHTML = result;

}



function openYouTube(query){

window.open(
"https://www.youtube.com/results?search_query=" +
encodeURIComponent(query),
"_blank"
);

}


function openImages(query){

window.open(
"https://www.google.com/search?tbm=isch&q=" +
encodeURIComponent(query),
"_blank"
);

}
    
