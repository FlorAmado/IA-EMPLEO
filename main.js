const cvTools = [
  {name:"Resume Worded",  url:"resumeworded.com",   href:"https://resumeworded.com",                     desc:"Análisis ATS",        icon:"fa-solid fa-trophy"},
  {name:"Jobscan",        url:"jobscan.co",          href:"https://jobscan.co",                           desc:"Match con ofertas",   icon:"fa-solid fa-magnifying-glass"},
  {name:"ResumeGo",       url:"resumego.net",        href:"https://resumego.net",                         desc:"Revisión profesional",icon:"fa-solid fa-star"},
  {name:"CV Maker Adecco",url:"fundacionadecco.org", href:"https://fundacionadecco.org/cv-maker/",        desc:"CV gratuito",         icon:"fa-solid fa-file-lines"},
  {name:"Resumatic",      url:"resumatic.ai",        href:"https://resumatic.ai",                         desc:"CV con IA",           icon:"fa-solid fa-microchip"},
  {name:"VMock",          url:"vmock.com",           href:"https://vmock.com",                            desc:"Feedback instantáneo",icon:"fa-solid fa-chart-bar"},
];

const intTools = [
  {name:"Yoodli",          url:"yoodli.ai",           href:"https://yoodli.ai",            desc:"Coach de habla",       icon:"fa-solid fa-microphone"},
  {name:"CareerSwift",     url:"careerswift.ai",      href:"https://careerswift.ai",       desc:"Simulación IA",        icon:"fa-solid fa-bolt"},
  {name:"Interview Warmup",url:"interview-warmup.com",href:"https://interview-warmup.com", desc:"Por Google",           icon:"fa-brands fa-google"},
  {name:"Big Interview",   url:"biginterview.com",    href:"https://biginterview.com",     desc:"Plataforma integral",  icon:"fa-solid fa-video"},
  {name:"AI Job Scout",    url:"aijobscout.com",      href:"https://aijobscout.com",       desc:"Búsqueda + práctica",  icon:"fa-solid fa-compass"},
];

const prompts = [
  {
    num:"01", icon:"fa-solid fa-user-tie",
    title:"Entrenador de Élite",
    text:"Actúa como un Senior Recruiter especializado en [Industria]. Simula una entrevista para el rol de [X]. No generes toda la entrevista de una vez. Haz una pregunta, espera mi respuesta y, antes de pasar a la siguiente, dame un 'Feedback Flash': (1) Nota del 1 al 10, (2) Un error específico y (3) Una frase 'nivel experto' para mejorar mi respuesta."
  },
  {
    num:"02", icon:"fa-solid fa-table-columns",
    title:"Analista de Brechas CV-Rol",
    text:"Te proporcionaré mi CV y una descripción de puesto. Crea una tabla comparativa de 3 columnas: 'Lo que piden', 'Lo que tengo' y 'El Puente'. En la columna 'El Puente', redacta una narrativa específica para explicar mis vacíos técnicos o de experiencia usando mis habilidades transferibles."
  },
  {
    num:"03", icon:"fa-solid fa-star-half-stroke",
    title:"Ingeniería del Método STAR",
    text:"Ayúdame a estructurar una respuesta STAR para la pregunta: [Insertar pregunta]. Analiza mi borrador y asegúrate de que la sección de Resultados incluya métricas o indicadores de éxito (KPIs). Si no los tengo, sugiéreme qué tipo de impacto cuantitativo podría haber tenido esa acción."
  },
  {
    num:"04", icon:"fa-solid fa-triangle-exclamation",
    title:"Auditoría de Red Flags",
    text:"Analiza mi respuesta a [Pregunta difícil] desde la perspectiva de un Manager con aversión al riesgo. Identifica cualquier palabra o actitud que pueda interpretarse como falta de compromiso, rigidez o falta de autonomía. Reescribe la respuesta para que suene honesta pero orientada a la solución."
  },
  {
    num:"05", icon:"fa-solid fa-elevator",
    title:"El Pitch de 2 Minutos",
    text:"Ayúdame a pulir mi 'Elevator Pitch'. Debe durar menos de 2 minutos hablado. Estructúralo así:\n• Pasado: Logro más relevante relacionado al rol.\n• Presente: Qué problema resuelvo hoy.\n• Futuro: Por qué esta empresa es el siguiente paso lógico.\nHazlo memorable y evita clichés como 'soy proactivo' o 'trabajo en equipo'."
  },
  {
    num:"06", icon:"fa-solid fa-hand-holding-dollar",
    title:"Negociación Salarial",
    text:"Dame un rango salarial estimado basado en el mercado actual para este rol en [País/Región] antes de empezar la simulación."
  },
  {
    num:"07", icon:"fa-solid fa-rotate-left",
    title:"Reverse Interviewing",
    text:"Genera 5 preguntas inteligentes que yo debería hacerle al entrevistador para demostrar pensamiento estratégico y evaluar si la cultura de la empresa me conviene."
  },
  {
    num:"08", icon:"fa-solid fa-code",
    title:"Preparación Técnica",
    text:"Actúa como un Tech Lead. Hazme una pregunta de diseño de sistemas o arquitectura y critica mi solución priorizando escalabilidad y mantenibilidad."
  },
];

const atsTemplates = [
  {
    icon:"fa-brands fa-canva",
    label:"Modelos CV Harvard — Canva",
    links:[
      {text:"Plantilla Harvard 1", href:"https://www.canva.com/templates/EAGiwP0Fxj4/"},
      {text:"Plantilla Harvard 2", href:"https://www.canva.com/templates/EAGVhkoIxXs/"},
      {text:"Plantilla Harvard 3", href:"https://www.canva.com/templates/EAFUfmkLqq4/"},
    ]
  },
  {
    icon:"fa-brands fa-google-drive",
    label:"CV Compatible con ATS — Google Docs",
    links:[
      {text:"TheGoodocs ATS Templates", href:"https://thegoodocs.com/es/freebies/ats-resume/#google_vignette"},
    ]
  },
  {
    icon:"fa-solid fa-shield-halved",
    label:"Chequeadores de CV / Filtro ATS",
    links:[
      {text:"CV2Key — Verificador ATS", href:"https://cv2key.com/"},
    ]
  },
];

const growthResources = [
  {
    icon:"fa-solid fa-graduation-cap",
    label:"Cursos y Certificaciones Gratuitas",
    desc:"Portal oficial del gobierno con cursos gratuitos y certificaciones de empresas líderes.",
    links:[{text:"Argentina Capacita", href:"https://www.argentina.gob.ar/economia/capacitar"}]
  },
  {
    icon:"fa-solid fa-language",
    label:"Recursos de Inglés",
    desc:"Herramientas para mejorar tu escritura, traducción y medir tu nivel de inglés.",
    links:[
      {text:"DeepL Translator",         href:"https://www.deepl.com/es/translator"},
      {text:"Ciudad Bilingüe — GCBA",   href:"https://buenosaires.gob.ar/gcaba_historico/educacion/ciudad-bilingue"},
      {text:"EF SET — Examen de Nivel", href:"https://www.efset.org/es/#"},
    ]
  },
  {
    icon:"fa-solid fa-building-columns",
    label:"Tecnicaturas en Buenos Aires",
    desc:"Carreras terciarias gratuitas en la Ciudad de Buenos Aires para el sector tecnológico.",
    links:[{text:"Agencia de Habilidades para el Futuro", href:"https://buenosaires.gob.ar/gcaba_historico/educacion/agencia-de-habilidades-para-el-futuro/carreras-terciarias"}]
  },
  {
    icon:"fa-solid fa-people-group",
    label:"AMIA Empleo",
    desc:"Cursos de orientación vocacional, armado de CV y búsqueda laboral para jóvenes de 16 a 25 años.",
    links:[{text:"AMIA Capacitación Gratuita", href:"https://empleos.amia.org.ar/busco-empleo/capacitacion-gratuita/"}]
  },
];

/* ── BUILD FUNCTIONS ── */

function buildCards(data, id, variant){
  const grid = document.getElementById(id);
  const isBlue = variant === 'blue';
  data.forEach(t => {
    const a = document.createElement('a');
    a.href = t.href; a.target = '_blank'; a.rel = 'noopener';
    a.className = `card ${variant}`;
    a.innerHTML = `
      <div class="card-accent"></div>
      <div class="card-top">
        <div class="card-icon ${isBlue ? 'bl' : 'or'}">
          <i class="${t.icon}" style="font-size:17px;color:${isBlue ? 'var(--blue)' : 'var(--orange)'}"></i>
        </div>
        <div class="card-arrow">
          <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:13px;"></i>
        </div>
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

function buildPrompts(data, id){
  const grid = document.getElementById(id);
  data.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'prompt-card';
    const btnId = `cb${i}`;
    const escaped = p.text.replace(/"/g, '&quot;').replace(/\n/g, '\\n');
    const bodyHTML = p.text.replace(/\n/g, '<br>');
    card.innerHTML = `
      <div class="prompt-header">
        <div class="prompt-num">
          <i class="${p.icon}" style="font-size:13px;"></i>
        </div>
        <div class="prompt-title">${p.title}</div>
      </div>
      <div class="prompt-body">${bodyHTML}</div>
      <button class="copy-btn" id="${btnId}" data-text="${escaped}">
        <i class="fa-regular fa-copy"></i>
        Copiar
      </button>
    `;
    grid.appendChild(card);
  });
  grid.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const rawText = btn.getAttribute('data-text').replace(/\\n/g, '\n');
      navigator.clipboard.writeText(rawText).then(() => {
        btn.classList.add('copied');
        btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copiar';
        }, 2200);
      });
    });
  });
}

function buildATS(data, id){
  const container = document.getElementById(id);
  data.forEach(group => {
    const block = document.createElement('div');
    block.className = 'ats-group';
    const linksHTML = group.links.map(l =>
      `<a href="${l.href}" target="_blank" rel="noopener" class="ats-link">
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
        ${l.text}
      </a>`
    ).join('');
    block.innerHTML = `
      <div class="ats-label-wrap">
        <div class="ats-icon-wrap"><i class="${group.icon}"></i></div>
        <div class="ats-label">${group.label}</div>
      </div>
      <div class="ats-links">${linksHTML}</div>
    `;
    container.appendChild(block);
  });
}

function buildGrowth(data, id){
  const grid = document.getElementById(id);
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'growth-card';
    const linksHTML = item.links.map(l =>
      `<a href="${l.href}" target="_blank" rel="noopener" class="growth-link">
        <i class="fa-solid fa-arrow-right"></i>
        ${l.text}
      </a>`
    ).join('');
    card.innerHTML = `
      <div class="growth-icon-wrap">
        <i class="${item.icon}" style="font-size:20px;color:var(--orange)"></i>
      </div>
      <div class="growth-label">${item.label}</div>
      <div class="growth-desc">${item.desc}</div>
      <div class="growth-links">${linksHTML}</div>
    `;
    grid.appendChild(card);
  });
}

buildCards(cvTools, 'cv-grid', 'blue');
buildCards(intTools, 'int-grid', 'orange');
buildPrompts(prompts, 'prompt-grid');
buildATS(atsTemplates, 'ats-grid');
buildGrowth(growthResources, 'growth-grid');