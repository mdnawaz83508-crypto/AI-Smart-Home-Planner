function searchAnything(){

let question = document.getElementById("question").value;

if(question.trim() === ""){
    document.getElementById("result").innerHTML =
    "❌ Enter your question first";
    return;
}


let text = question.toLowerCase();

let result = `
<h3>🤖 AI Search Assistant</h3>
<p>Your request:</p>
<b>${question}</b>
<br><br>
`;


// Video search
if(
text.includes("video") ||
text.includes("tutorial") ||
text.includes("how") ||
text.includes("making") ||
text.includes("review") ||
text.includes("vlog")
){

result += `
<button onclick="youtubeSearch()">
🎬 Watch Videos
</button>
`;

}

// Image search
else{

result += `
<button onclick="googleImageSearch()">
🖼️ View Images
</button>
`;

}


document.getElementById("result").innerHTML = result;

}



function youtubeSearch(){

let question =
document.getElementById("question").value;


window.open(
"https://www.youtube.com/results?search_query=" +
encodeURIComponent(question),
"_blank"
);

}



function googleImageSearch(){

let question =
document.getElementById("question").value;


window.open(
"https://www.google.com/search?tbm=isch&q=" +
encodeURIComponent(question),
"_blank"
);

}
