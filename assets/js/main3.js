let plusElements = document.getElementsByClassName("plus");

// const boxonly = document.getElementsByClassName("boxonly");
const boxonly = document.querySelectorAll(".boxonly");
var jour ;
const boutton = document.getElementById("boutton");
const boutton1 = document.getElementById("boutton1");
const selectGauche = document.getElementById("select");
const modalId = document.getElementById("modalId");
const selectMod = document.getElementById("select-module");
const selectEnsei = document.getElementById("select-ensei")
const selectHeureDebu = document.getElementById("select-heure-debu")
const selectSalle = document.getElementById("select-salle")
const selectHeureFin = document.getElementById("select-heure-fin")
const bouttonAnnuler = document.getElementById("boutton-annuler");
const bouttonOk = document.getElementById("boutton-ok");
const inputCours = document.getElementById("input-cours");

// inputCours = 


let theme = 'dark';
 
const profs = [
    { id: 1, nom: "ALY", module: [1, 2, 3], semaine: "", planning: [[], [], [], []] },
    { id: 2, nom: "Baila", module: [6,5, 4], semaine: "", planning: [[], [], [], []] },
    { id: 3, nom: "Ndoye", module: [4, 6, 3], semaine: "", planning: [[], [], [], []] },
    { id: 4, nom: "MBAYE", module: [1, 4], semaine: "", planning: [[], [], [], []] },
    { id: 5, nom: "Djiby", module: [1, 5], semaine: "", planning: [[], [], [], []] },
    { id: 6, nom: "Seckouba", module: [4], semaine: "", planning: [[], [], [], []] },
]
const modules = [
    { id: 1, nom: "jAVASCRIPT", classes: "", semaine: "", planning: [[], [], [], []] },
    { id: 2, nom: "PHP", classes: "", semaine: "", planning: [[], [], [], []] },
    { id: 3, nom: "PYTHON", classes: "", semaine: "", planning: [[], [], [], []] },
    { id: 4, nom: "LC", classes: "", semaine: "", planning: [[], [], [], []] },
    { id: 5, nom: "ALGO", classes: "", semaine: "", planning: [[], [], [], []] },
    { id: 6, nom: "JAVA", classes: "", semaine: "", planning: [[], [], [], []] },
]   

const classes = [
    { id: 1, nom: "devWeb", semaine: "", planning: [[], [], [], []], effectif: "9" },
    { id: 2, nom: "Hackeuse", semaine: "", planning: [[], [], [], []], effectif: "30" },
    { id: 3, nom: "refDig", semaine: "", planning: [[], [], [], []], effectif: "42" },
    { id: 1, nom: "gl", semaine: "", planning: [[], [], [], []], effectif: "22" },
]
const salles = [
    { id: 1, nom: "101", semaine: "", planning: [[], [], [], []], capacite: "26" },
    { id: 2, nom: "102", semaine: "", planning: [[], [], [], []], capacite: "35" },
    { id: 3, nom: "103", semaine: "", planning: [[], [], [], []], capacite: "9" },
    { id: 4, nom: "104", semaine: "", planning: [[], [], [], []], capacite: "19" },
]
const heures = [8,9,10,11,12,13,14,15,16,18];

// heureDebu.addEventListener("change", () => {

// })

// const heuresfin 
// function creationElementPlus() {
//         const div = document.createElement("div");
//         div.className = "modalTitle"
//         plus.appendChild(div)
//         const p = document.createElement("p");
//         div.appendChild(p)
//           p.textContent = "Modal title"
// }

//fonction pour afficher les modules
// function afficheModule() {
//     const ulModule = document.createElement('ul');
//     plus.appendChild(ulModule);
//     for (let monModule of laClasse[0]) {
//         const liModule = document.createElement("li");
//         liModule.textContent =`${laClasse.module.matiere}`;
//         ulModule.appendChild('liModule');
//     }
// }

// for(let plus of plusElements) {
    
//         plusE.addEventListener("click", ()=> {
//             modalId.style.visibility ="visible"
//             // if(plus.classList.contains("enseignant-gauche1 ")){
//             //     chargerSelect(profs, selectGauche);
//             // }
//      ;}) }    








for (let plus of plusElements) {

    plus.addEventListener("click",(e) => {
        // const modalId = getElementById("modalId");
        modalId.style.visibility = "visible";
        jour = e.target.parentNode.nextElementSibling;
    })
}
bouttonOk.addEventListener('click',()=> {
    modalId.style.visibility = "hidden"
})


bouttonAnnuler.addEventListener('click',()=> {
    modalId.style.visibility = "hidden"
})
boutton.addEventListener("click", () => {
    if (theme == 'dark') {
        theme = 'light'
        boutton1.style.transform = "translateX(23px)"
    } else {
        boutton1.style.transform = "translateX(0px)"
        theme = 'dark'
    }
})

const currentClass = {
    nom: "devWeb",
    semaine: "13/03/2023 au 18/03/2023",
    effectif: "30",
    planning: [[
        { prof: 1, module: 2, salle: 1, debut: 8, duree: 4 }
    ], [], [], [], [], []]
}



// boxonly.addEventListener('cliclk',()=> {

// })

function creatingElement(nElem) {
    let ele = document.createElement(nElem)
    return ele
}



// function filtrerProfsParModule(selectMod) {
//     return profs.filter((prof) => prof.module.includes(selectMod));
//   }
//   console.log(filtrerProfsParModule());

function chargerSelect(data, select, label = "Sélectionner") {
    select.innerHTML = "";
    let option = creatingElement("option");
    option.innerHTML = label;
    select.appendChild(option);
    data.forEach(e => {
        // e.addEventListener("click",()=> {
        const option = creatingElement("option");   
        option.innerHTML = e.nom;
        option.value= e.id
        select.appendChild(option)
        // })
    })
}

chargerSelect(modules,selectMod,"VeuiLez sélectionner une langue"),
chargerSelect(profs,selectEnsei);
chargerSelect(salles,selectSalle);


function chargerHeure(select,min,max,label='selectionner une heure'){
    select.innerHTML="";
    const option=creatingElement('option');
    option.innerHTML=label
    select.appendChild(option);
    for (let i = min; i <= max-1; i++) {
        const option =creatingElement('option');
        option.innerHTML=i;
        option.value=i;
        select.appendChild(option);        
    }
}

// function capaciteSalle(salle,classe) {
//      if(+salle.capacite >= +classe.effectif) {
//         return true
//     } 
//     return false;
// }

    chargerHeure(selectHeureDebu,8,17)
    chargerHeure(selectHeureFin,9,18)
// chargerHeure(selectHeureFin,9,18)

// plus.forEach(element => {
//     element.addEventListener("click", ()=> {
//     let plusElements = document.getElementsByClassName("plus");

//     })
// })

boxonly.forEach(element => {
    element.addEventListener("click", () => {
        if (element.classList.contains("enseignant-gauche1")) {

            chargerSelect(profs, selectGauche)
        }
        if (element.classList.contains("salle-gauche")) {

            chargerSelect(salles, selectGauche)
        }
           if (element.classList.contains("classe-gauche")) {

            chargerSelect(classes, selectGauche)
        }
        if (element.classList.contains("module-gauche")) {

            chargerSelect(modules, selectGauche)
        }
        
    });
});


//     function filtrerProfsParModule(moduleId) {
//         return profs.filter((prof) => prof.module.includes(moduleId));
//       }


function affichePlanning(selectMod, prof,selectSalle, heureDebu , heureFin, day) {
    const div = creatingElement("div");
    div.classList.add("course")
    let w = heureFin - heureDebu ;
    w*= 10;
    let mL=heureDebu-8;
    mL*=10;

    div.innerHTML = `
    <span>${getNameById(selectMod, modules)}</span>
    <span>${getNameById(prof, profs)}</span>
    <span>${getNameById(selectSalle, salles)}</span>
    `;
    
    div.style.width= `${w}%`;
    div.style.marginLeft = `${mL}%`;

    day.appendChild(div);
}

// bouttonOk.addEventListener('click',function() {
//    let modeValue = selectMod.value;
//    let enseiValue = selectEnsei.value;
//    let salleValue = selectSalle.value;
//    let heureDebutValue = selectHeureDebu.value;
//    let heureFinValue = selectHeureFin.value;

//    const obSall = chercheNom(salleValue,salles)
//    if (capaciteSalle(obSall,classes[0]))
//    {
//     affichePlanning(modeValue,enseiValue,salleValue,
//         +heureDebutValue,+heureFinValue, jour);
//    }
  
// })

function getProfsByIdModule(moduleId)
 {
    const professeurs=[];
    profs.forEach(prof => {
        if (prof.module.includes(moduleId)) {
            professeurs.push(prof);
        }
    });  
    return professeurs;
 }
 function getNameById(id, datas)
 {
    let name;
    datas.forEach(val => {
        if (val.id == id) {
            name = val.nom;
            return;
        }
    });  
    return name;
 }

//  function getHeurefinsByIdheureD(moduleId)
//  {
//     const heuresfin=[];
//     profs.forEach(prof => {
//         if (prof.module.includes(moduleId)) {
//             professeurs.push(prof);
//         }
//     });  
//     return professeurs;
//  }

//permet de chercher un élément.
function chercheNom(nom,tableau){
    for (const eleme of tableau) {
        if (eleme.id === nom  ) {
            return eleme
        }
    }return null;
}
selectMod.addEventListener("change", function() {
    let profsModule = getProfsByIdModule(+selectMod.value)
    let selectEnsei = document.getElementById("select-ensei");
    // selectEnsei.innerHTML ="";
    chargerSelect(profsModule,selectEnsei)
})
function getSelectValue(select){
    return select.options[select.selectedIndex].value;

 }
select.addEventListener('change',function(){
    getSelectValue(select);
   })

function isProfDispo(prof,jour,hd,hf) {
    let resultat = true;
    prof.planning[jour].forEach(c => {
        if (c.hd ==  hd && c.hf == hf || c.hd < hd && hd == c.hf || c.hd ==  hf && hf <= c.hf ) {
         resultat = false;   
        }
    })
    return resultat;
}