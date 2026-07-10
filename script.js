document.getElementById("searchBtn").onclick = function(){

let question = document.getElementById("question").value;


if(question.trim() === ""){
document.getElementById("result").innerHTML =
"Please enter something";
return;
}


document.getElementById("result").innerHTML =
"Searching: " + question;


// Open YouTube or Google Images

let choice = confirm(
"Press OK for YouTube videos\nPress Cancel for Google Images"
);


if(choice){

window.location.href =
"https://www.youtube.com/results?search_query="
+ encodeURIComponent(question);

}
else{

window.location.href =
"https://www.google.com/search?tbm=isch&q="
+ encodeURIComponent(question);

}


};
