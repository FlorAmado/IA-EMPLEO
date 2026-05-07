const cvTools = [
  {name:"Resume Worded",url:"resumeworded.com",href:"https://resumeworded.com",desc:"Análisis ATS",icon:"award"},
  {name:"Jobscan",url:"jobscan.co",href:"https://jobscan.co",desc:"Match con ofertas",icon:"search"},
  {name:"ResumeGo",url:"resumego.net",href:"https://resumego.net",desc:"Revisión profesional",icon:"star"},
  {name:"CV Maker Adecco",url:"fundacionadecco.org",href:"https://fundacionadecco.org/cv-maker/",desc:"CV gratuito",icon:"file-text"},
  {name:"Resumatic",url:"resumatic.ai",href:"https://resumatic.ai",desc:"CV con IA",icon:"cpu"},
  {name:"VMock",url:"vmock.com",href:"https://vmock.com",desc:"Feedback instantáneo",icon:"bar-chart-2"},
];
const intTools = [
  {name:"Yoodli",url:"yoodli.ai",href:"https://yoodli.ai",desc:"Coach de habla",icon:"mic"},
  {name:"CareerSwift",url:"careerswift.ai",href:"https://careerswift.ai",desc:"Simulación IA",icon:"zap"},
  {name:"Interview Warmup",url:"interview-warmup.com",href:"https://interview-warmup.com",desc:"Por Google",icon:"coffee"},
  {name:"Big Interview",url:"biginterview.com",href:"https://biginterview.com",desc:"Plataforma integral",icon:"video"},
  {name:"AI Job Scout",url:"aijobscout.com",href:"https://aijobscout.com",desc:"Búsqueda + práctica",icon:"compass"},
];
const prompts = [
  {num:"01",title:"Mejora de CV",text:"Actúa como un reclutador Tech y validador de ATS. Analiza este CV [pegar CV] y compáralo con esta oferta [pegar oferta]. Dime qué keywords faltan."},
  {num:"02",title:"Elevator Pitch",text:"Ayúdame a redactar una presentación de 1 minuto destacando mis estudios autodidactas y proyectos prácticos. Que suene profesional y asertivo."},
  {num:"03",title:"Roleplaying de Entrevista",text:"Eres un líder técnico entrevistándome para un puesto Junior. Hazme 5 preguntas (técnicas y soft skills), una por una, y dame feedback."},
];

function buildCards(data,id,variant){
  const grid = document.getElementById(id);
  data.forEach(t=>{
    const a = document.createElement('a');
    a.href=t.href; a.target='_blank'; a.rel='noopener';
    a.className=`card ${variant}`;
    const isBlue=variant==='blue';
    a.innerHTML=`
      <div class="card-accent"></div>
      <div class="card-top">
        <div class="card-icon ${isBlue?'bl':'or'}">
          <i data-lucide="${t.icon}" style="width:18px;height:18px;color:${isBlue?'var(--blue)':'var(--orange)'}"></i>
        </div>
        <div class="card-arrow"><i data-lucide="arrow-up-right" style="width:15px;height:15px;"></i></div>
      </div>
      <div>
        <div class="card-name">${t.name}</div>
        <div class="card-url">${t.url}</div>
      </div>
      <div class="card-chip">${t.desc}</div>
    `;
    grid.appendChild(a);
  });
}

function buildPrompts(data,id){
  const grid=document.getElementById(id);
  data.forEach((p,i)=>{
    const card=document.createElement('div');
    card.className='prompt-card';
    const btnId=`cb${i}`;
    card.innerHTML=`
      <div class="prompt-header">
        <div class="prompt-num">${p.num}</div>
        <div class="prompt-title">${p.title}</div>
      </div>
      <div class="prompt-body">"${p.text}"</div>
      <button class="copy-btn" id="${btnId}" data-text="${p.text.replace(/"/g,'&quot;')}">
        <i data-lucide="copy" style="width:11px;height:11px;"></i>
        Copiar
      </button>
    `;
    grid.appendChild(card);
  });
  grid.querySelectorAll('.copy-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      navigator.clipboard.writeText(btn.getAttribute('data-text')).then(()=>{
        btn.classList.add('copied');
        btn.innerHTML='<i data-lucide="check" style="width:11px;height:11px;"></i> ¡Copiado!';
        lucide.createIcons({nodes:[btn]});
        setTimeout(()=>{
          btn.classList.remove('copied');
          btn.innerHTML='<i data-lucide="copy" style="width:11px;height:11px;"></i> Copiar';
          lucide.createIcons({nodes:[btn]});
        },2200);
      });
    });
  });
}

buildCards(cvTools,'cv-grid','blue');
buildCards(intTools,'int-grid','orange');
buildPrompts(prompts,'prompt-grid');
lucide.createIcons();