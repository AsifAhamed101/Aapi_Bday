function goPage(page){
document.body.classList.add("fade-out");
setTimeout(()=>{
window.location=page;
},600);
}

function enableSound(){
let video=document.getElementById("bgVideo");

video.muted=false;
video.volume=1;
video.play();

document.getElementById("soundBtn").style.display="none";
}


const video = document.getElementById("bgVideo");

if(video){

window.addEventListener("load", () => {
    let savedTime = localStorage.getItem("videoTime");
    if(savedTime){
        video.currentTime = savedTime;
    }
});

setInterval(()=>{
    localStorage.setItem("videoTime", video.currentTime);
},1000);

}




const text="You are my biggest support and best friend ❤️";
let i=0;
if(document.getElementById("typing")){
function type(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(type,70);
}
}
type();
}


const items=document.querySelectorAll(".timeline-item");

window.addEventListener("scroll",()=>{
items.forEach(item=>{
let pos=item.getBoundingClientRect().top;

if(pos < window.innerHeight-100){
item.classList.add("show");
}
});
});



function celebrate(){
confetti({
particleCount:200,
spread:120,
origin:{y:0.6}
});

document.getElementById("wish").innerHTML=
"🎉 Happy Birthday Aapi! Love you always ❤️";
}



function cutCake(){

document.getElementById("cake").src="images/cake2.jpg";

confetti({
 particleCount:300,
 spread:150,
 origin:{y:0.6}
});

// MESSAGE TEXT
const message =
"Dear Aapi,I don't always show it well.Sometimes I'm rude, sometimes silent, sometimes I act like I don't care.But please know this I always do.You're the one who checks if I reached home, defends me when I'm not there,and worries about me even when I say I am fine.I may not say it out loud or post it anywhere, but you mean more to me than you'll ever realize.I don't ask Allah for much,but when I do, it's always the same prayer keep my sister happy... she deserves it.----Asif";

let i = 0;
let speed = 40;
let para = document.getElementById("specialPara");

para.innerHTML = "";

function typeText(){
    if(i < message.length){
        para.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeText, speed);
    }
}

typeText();
}




const canvas=document.getElementById("hearts");
if(canvas){
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let hearts=[];

function createHeart(){
hearts.push({
x:Math.random()*canvas.width,
y:canvas.height,
size:Math.random()*6+4,
speed:Math.random()*1.5+0.5
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

hearts.forEach((h,i)=>{
ctx.fillStyle="pink";
ctx.beginPath();
ctx.arc(h.x,h.y,h.size,0,Math.PI*2);
ctx.fill();

h.y-=h.speed;
if(h.y<0) hearts.splice(i,1);
});
}

setInterval(createHeart,400);
setInterval(draw,30);
}




const music = document.getElementById("music");

let started = false;

document.addEventListener("click", () => {

    if (!started && music) {

        music.play()
        .then(() => {
            started = true;
            localStorage.setItem("musicPlaying", "true");
        })
        .catch(err => console.log("Blocked:", err));
    }

}, { once: true });


window.addEventListener("load", () => {

    if (!music) return;

    let savedTime = localStorage.getItem("musicTime");
    let wasPlaying = localStorage.getItem("musicPlaying");

    if (savedTime) {
        music.currentTime = savedTime;
    }

    if (wasPlaying === "true") {
        music.play().catch(()=>{});
    }
});


setInterval(() => {
    if (music && !music.paused) {
        localStorage.setItem("musicTime", music.currentTime);
    }
}, 1000);









setTimeout(()=>{
if(document.body.dataset.next){
window.location=document.body.dataset.next;
}
},6000);

function openPreview(img){
document.getElementById("preview").style.display="flex";
document.getElementById("previewImg").src=img.src;
}

function closePreview(){
document.getElementById("preview").style.display="none";
}



