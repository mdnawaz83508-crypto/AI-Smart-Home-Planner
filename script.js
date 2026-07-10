function searchAnything(){

let question = document.getElementById("question").value;

if(question==""){
document.getElementById("result").innerHTML="Enter something";
return;
}


document.getElementById("result").innerHTML =
"Searching for: " + question;


setTimeout(function(){

let choice = confirm(
"Open YouTube for videos? Press OK. Press Cancel for Images."
);


if(choice){

window.open(
"https://www.youtube.com/results?search_query=" +
encodeURIComponent(question)
);

}
else{

window.open(
"https://www.google.com/search?tbm=isch&q=" +
encodeURIComponent(question)
);

}

},500);


}
