const ramos = [
  // SEMESTRE 1
  { id: "quimica1", nombre: "Química General I", requisitos: [], correquisitos: [], semestre: 1 },
  { id: "biocel", nombre: "Biología Celular", requisitos: [], correquisitos: [], semestre: 1 },
  { id: "algebra", nombre: "Elementos de Álgebra y Cálculo", requisitos: [], correquisitos: [], semestre: 1 },
  { id: "introFar", nombre: "Introducción a las Ciencias Farmacéuticas", requisitos: [], correquisitos: [], semestre: 1 },
  { id: "habilidades", nombre: "Habilidades Comunicativas", requisitos: [], correquisitos: [], semestre: 1 },

  // SEMESTRE 2
  { id: "quimica2", nombre: "Química General II", requisitos: ["quimica1"], correquisitos: [], semestre: 2 },
  { id: "org1", nombre: "Química Orgánica I", requisitos: ["quimica1"], correquisitos: [], semestre: 2 },
  { id: "morfo", nombre: "Morfología", requisitos: ["biocel"], correquisitos: [], semestre: 2 },
  { id: "fisica", nombre: "Física", requisitos: ["algebra"], correquisitos: [], semestre: 2 },
  { id: "ingles1", nombre: "Inglés I", requisitos: ["habilidades"], correquisitos: [], semestre: 2 },

  // SEMESTRE 3
  { id: "fisicoq", nombre: "Fisicoquímica Aplicada", requisitos: ["fisica", "quimica2"], correquisitos: [], semestre: 3 },
  { id: "org2", nombre: "Química Orgánica II", requisitos: ["org1"], correquisitos: [], semestre: 3 },
  { id: "fisio", nombre: "Fisiología Humana", requisitos: ["morfo"], correquisitos: [], semestre: 3 },
  { id: "analitica", nombre: "Química Analítica", requisitos: ["quimica2"], correquisitos: [], semestre: 3 },
  { id: "ingles2", nombre: "Inglés II", requisitos: ["ingles1"], correquisitos: [], semestre: 3 },

  // SEMESTRE 4
  { id: "bioq", nombre: "Bioquímica General y Laboratorio de Bioquímica", requisitos: ["org2", "fisio"], correquisitos: [], semestre: 4 },
  { id: "fisiosemio", nombre: "Fisiopatología y Semiología", requisitos: ["fisio"], correquisitos: [], semestre: 4 },
  { id: "analitica2", nombre: "Química Analítica e Instrumental", requisitos: ["analitica"], correquisitos: [], semestre: 4 },
  { id: "farmacocinetica", nombre: "Farmacocinética y Biofarmacia", requisitos: ["fisicoq"], correquisitos: [], semestre: 4 },
  { id: "ingles3", nombre: "Inglés III", requisitos: ["ingles2"], correquisitos: [], semestre: 4 },

  // SEMESTRE 5
  { id: "microbio", nombre: "Microbiología", requisitos: ["bioq"], correquisitos: [], semestre: 5 },
  { id: "labMicro", nombre: "Laboratorio de Microbiología", requisitos: ["bioq"], correquisitos: ["microbio"], semestre: 5 },
  { id: "salud1", nombre: "Salud Pública I", requisitos: ["fisiosemio"], correquisitos: [], semestre: 5 },
  { id: "farmaco1", nombre: "Farmacología Humana I", requisitos: ["fisiosemio", "farmacocinetica"], correquisitos: ["farmoquimica1"], semestre: 5 },
  { id: "farmoquimica1", nombre: "Farmacoquímica I", requisitos: ["analitica2", "org2"], correquisitos: ["farmaco1"], semestre: 5 },
  { id: "ingles4", nombre: "Inglés IV", requisitos: ["ingles3"], correquisitos: [], semestre: 5 },


  // SEMESTRE 6
  { id: "biotec", nombre: "Fundamentos de Biología Molecular y Biotecnología", requisitos: ["microbio"], correquisitos: [], semestre: 6 },
  { id: "farmaco2", nombre: "Farmacología Humana II", requisitos: ["farmaco1"], correquisitos: ["farmoquimica2"], semestre: 6 },
  { id: "botanica", nombre: "Botánica y Farmacognosia", requisitos: ["farmaco1", "farmoquimica1"], correquisitos: [], semestre: 6 },
  { id: "tecFar1", nombre: "Tecnología Farmacéutica I", requisitos: ["farmacocinetica"], correquisitos: [], semestre: 6 },
  { id: "farmoquimica2", nombre: "Farmacoquímica II", requisitos: ["farmoquimica1"], correquisitos: ["farmaco2"], semestre: 6 },

  // SEMESTRE 7
  { id: "eduSalud", nombre: "Farmacovigilancia y Educación en Salud", requisitos: ["farmaco2", "salud1"], correquisitos: ["bioqClinica"], semestre: 7 },
  { id: "tecFar2", nombre: "Tecnología Farmacéutica II", requisitos: ["tecFar1", "microbio"], correquisitos: [], semestre: 7 },
  { id: "farmaco3", nombre: "Farmacología Humana III", requisitos: ["farmaco2", "botanica"], correquisitos: [], semestre: 7 },
  { id: "bioqClinica", nombre: "Bioquímica Clínica", requisitos: ["biotec", "fisiosemio"], correquisitos: ["eduSalud"], semestre: 7 },
  { id: "tic", nombre: "Razonamiento Científico y TICs", requisitos: ["habilidades"], correquisitos: [], semestre: 7 },

  // SEMESTRE 8
  { id: "salud2", nombre: "Salud Pública II", requisitos: ["salud1", "eduSalud"], correquisitos: [], semestre: 8 },
  { id: "tecCos", nombre: "Tecnología Cosmética", requisitos: ["tecFar2"], correquisitos: [], semestre: 8 },
  { id: "atencion1", nombre: "Farmacia Clínica y Atención Farmacéutica I", requisitos: ["farmaco3", "bioqClinica", "eduSalud"], correquisitos: ["tox"], semestre: 8 },
  { id: "tox", nombre: "Toxicología Clínica y Forense", requisitos: ["farmoquimica2", "bioqClinica"], correquisitos: ["atencion1"], semestre: 8 },
  { id: "pensamiento", nombre: "Pensamiento Crítico", requisitos: ["habilidades"], correquisitos: [], semestre: 8 },

  // SEMESTRE 9
  { id: "fcomercio", nombre: "Farmacoeconomía y Marketing", requisitos: ["salud2"], correquisitos: ["admin"], semestre: 9 },
  { id: "gestionCalidad", nombre: "Gestión y Control de Calidad Farmacéutico de Alimentos", requisitos: ["tecCos"], correquisitos: [], semestre: 9 },
  { id: "atencion2", nombre: "Farmacia Clínica y Atención Farmacéutica II", requisitos: ["atencion1", "tox"], correquisitos: [], semestre: 9 },
  { id: "admin", nombre: "Administración y Gestión en Salud", requisitos: ["salud2", "atencion1"], correquisitos: ["fcomercio"], semestre: 9 },
  { id: "integrador1", nombre: "Integrador I: Laboratorio Químico, Clínico, Forense y Biofarmacéutico", requisitos: ["tox", "tecCos", "analitica2"], correquisitos: [], semestre: 9 },

  // SEMESTRE 10
  { id: "etica", nombre: "Ética y Legislación Farmacéutica", requisitos: ["admin", "fcomercio"], correquisitos: ["integrador2", "hospitalaria"], semestre: 10 },
  { id: "hospitalaria", nombre: "Farmacia Hospitalaria", requisitos: ["admin", "atencion2"], correquisitos: ["integrador2", "etica"], semestre: 10 },
  { id: "gestionProy", nombre: "Gestión de Recursos y Evaluación de Proyectos", requisitos: ["admin", "fcomercio"], correquisitos: [], semestre: 10 },
  { id: "comunitaria", nombre: "Práctica en Farmacia Comunitaria", requisitos: ["atencion2", "gestionCalidad", "integrador1", "admin", "fcomercio"], correquisitos: [], semestre: 10 },
  { id: "social", nombre: "Responsabilidad Social", requisitos: ["habilidades"], correquisitos: [], semestre: 10 },
  { id: "integrador2", nombre: "Integrador II: Atención Clínica", requisitos: ["atencion2"], correquisitos: ["etica", "hospitalaria"], semestre: 10 }
];

// Estado inicial: cargado desde localStorage o vacío
const progreso = JSON.parse(localStorage.getItem('progreso')) || {};

// Renderizar
const mallaDiv = document.getElementById("malla");

for (let semestre = 1; semestre <= 10; semestre++) {
  const columna = document.createElement("div");
  columna.className = "semestre";
  columna.innerHTML = `<h3>Semestre ${semestre}</h3>`;
  mallaDiv.appendChild(columna);

  ramos.filter(r => r.semestre === semestre).forEach(ramo => {
    const div = document.createElement("div");
    div.id = ramo.id;
    div.textContent = ramo.nombre;
    div.className = "ramo";
    if (progreso[ramo.id]) {
      div.classList.add("aprobado");
      ramo.estado = "aprobado";
    } else {
      const requisitosListos = ramo.requisitos.every(id => progreso[id]);
      if (!requisitosListos) div.classList.add("bloqueado");
    }

    div.addEventListener("click", () => {
      if (!div.classList.contains("bloqueado")) {
        div.classList.toggle("aprobado");
        progreso[ramo.id] = div.classList.contains("aprobado");
        localStorage.setItem("progreso", JSON.stringify(progreso));
        location.reload(); // recargar para aplicar desbloqueos
      }
    });

    columna.appendChild(div);
  });
}

// Botón para reiniciar progreso
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
