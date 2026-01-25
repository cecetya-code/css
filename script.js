(function(){
  const p=document.getElementById('preloader'),b=document.body,h=()=>{if(p){p.style.opacity='0';setTimeout(()=>{p.style.display='none';b.classList.remove('loading')},500)}};
  window.addEventListener('load',h);setTimeout(h,5000);
  const sa=document.getElementById('fake-scrollbar-area'),st=document.getElementById('fake-scrollbar-thumb'),bd=document.documentElement,sh=60;
  const u=()=>{const s=window.pageYOffset/(bd.scrollHeight-window.innerHeight),v=window.innerHeight-sh;st.style.top=(s*v)+'px'};
  const i=(e)=>{const y=e.touches?e.touches[0].clientY:e.clientY,v=window.innerHeight-sh;let cp=Math.max(0,Math.min(y-(sh/2),v));window.scrollTo({top:(cp/v)*(bd.scrollHeight-window.innerHeight),behavior:'auto'})};
  sa.addEventListener('touchstart',i,{passive:false});sa.addEventListener('touchmove',(e)=>{e.preventDefault();i(e)},{passive:false});sa.addEventListener('mousedown',i);window.addEventListener('scroll',u);window.addEventListener('resize',u);u();
  const c=document.getElementById('particle-container');if(c){c.innerHTML='';for(let j=0;j<80;j++){let pk=document.createElement('div'),sz=(Math.random()*4+1)+'px';pk.className='particle';pk.style.left=Math.random()*100+'vw';pk.style.top=Math.random()*100+'vh';pk.style.width=pk.style.height=sz;pk.style.animationDelay='-'+(Math.random()*20)+'s';pk.style.animationDuration=(Math.random()*15+5)+'s';pk.style.opacity=Math.random()*0.8;c.appendChild(pk)}}
})();

function changeIcon(){const i=document.getElementById('element-spark');i.innerHTML=i.innerHTML==='🔥'?'💧':'🔥'}
