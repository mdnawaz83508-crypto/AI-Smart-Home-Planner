const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");

canvas.width=400;
canvas.height=600;


let player;
let bullets=[];
let aliens=[];
let particles=[];
let stars=[];

let score=0;
let lives=3;
let running=false;
let paused=false;


// Player spaceship
player={
x:180,
y:520,
width:40,
height:40,
speed:5
};


// Controls
let keys={};

document.addEventListener("keydown",e=>{
keys[e.key]=true;

if(e.key==" ")
shoot();
});

document.addEventListener("keyup",e=>{
keys[e.key]=false;
});


// Stars background

for(let i=0;i<100;i++){
stars.push({
x:Math.random()*400,
y:Math.random()*600,
speed:Math.random()*2+1
});
}



// Start

function startGame(){

document.getElementById("menu").style.display="none";
canvas.style.display="block";
document.getElementById("ui").style.display="block";

running=true;

gameLoop();

spawnAlien();

}



// Draw player

function drawPlayer(){

ctx.fillStyle="cyan";

ctx.beginPath();

ctx.moveTo(player.x+20,player.y);
ctx.lineTo(player.x,player.y+40);
ctx.lineTo(player.x+40,player.y+40);

ctx.fill();

}



// Shoot laser

function shoot(){

bullets.push({

x:player.x+18,
y:player.y,
speed:8

});

}



// Alien spawn

function spawnAlien(){

if(!running)return;


aliens.push({

x:Math.random()*360,
y:-40,
speed:2+score/200,
health:1

});


setTimeout(spawnAlien,1000);

}



// Draw aliens

function drawAliens(){

ctx.fillStyle="red";

aliens.forEach(a=>{

ctx.fillRect(a.x,a.y,40,40);

a.y+=a.speed;

});

}



// Bullets

function drawBullets(){

ctx.fillStyle="yellow";

bullets.forEach((b,i)=>{

ctx.fillRect(b.x,b.y,5,15);

b.y-=b.speed;


if(b.y<0)
bullets.splice(i,1);

});

}



// Collision

function collision(){

bullets.forEach((b,bi)=>{

aliens.forEach((a,ai)=>{


if(
b.x<a.x+40 &&
b.x+5>a.x &&
b.y<a.y+40 &&
b.y+15>a.y
){

score+=10;

createExplosion(a.x,a.y);

aliens.splice(ai,1);

bullets.splice(bi,1);

}

});


});


}



// Explosion particles

function createExplosion(x,y){

for(let i=0;i<10;i++){

particles.push({

x:x,
y:y,
dx:(Math.random()-0.5)*5,
dy:(Math.random()-0.5)*5,
life:30

});

}

}



function drawParticles(){

particles.forEach((p,i)=>{

ctx.fillStyle="orange";

ctx.fillRect(p.x,p.y,4,4);

p.x+=p.dx;
p.y+=p.dy;
p.life--;

if(p.life<=0)
particles.splice(i,1);

});

}



// Game loop

function gameLoop(){

if(!running)return;

requestAnimationFrame(gameLoop);


if(paused)return;


ctx.clearRect(0,0,400,600);


// Stars

ctx.fillStyle="white";

stars.forEach(s=>{

ctx.fillRect(s.x,s.y,2,2);

s.y+=s.speed;

if(s.y>600)s.y=0;

});


// Movement

if(keys["ArrowLeft"] && player.x>0)
player.x-=player.speed;

if(keys["ArrowRight"] && player.x<360)
player.x+=player.speed;



drawPlayer();

drawBullets();

drawAliens();

collision();

drawParticles();



document.getElementById("score").innerHTML=score;



// Enemy hits player

aliens.forEach((a,i)=>{

if(a.y>600){

aliens.splice(i,1);

lives--;

document.getElementById("lives").innerHTML=lives;


if(lives<=0)
endGame();

}

});


}



// Pause

function pauseGame(){

paused=!paused;

}



// Restart

function restartGame(){

location.reload();

}



// Game over

function endGame(){

running=false;

canvas.style.display="none";

document.getElementById("ui").style.display="none";

document.getElementById("gameOver").style.display="block";

  }
