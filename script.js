// ===== SPA NAVIGATION =====

function showPage(id){
  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// ===== CONTINUOUS MUSIC =====

const music = document.getElementById("music");

document.addEventListener("click", ()=>{
  if(music.paused){
    music.play().catch(()=>{});
  }
}, { once:true });

// ===== CAKE CUT =====

function cutCake(){

  document.getElementById("cake").src="cake2.jpg";

  confetti({
    particleCount:300,
    spread:150,
    origin:{y:0.6}
  });

  const message =
  "Dear Aapi... I may not say it often, but you mean the world to me ❤️";

  let i = 0;
  const para = document.getElementById("specialPara");
  para.innerHTML = "";

  function type(){
    if(i < message.length){
      para.innerHTML += message.charAt(i);
      i++;
      setTimeout(type,40);
    }
  }

  type();
}
