const plus = document.getElementsByClassName("plus")[0];

const boxonly = document.getElementsByClassName("boxonly");
const boutton = document.getElementById("boutton");
const boutton1 = document.getElementById("boutton1");
let theme = 'dark';

const profs = [
    {id:1,nom:"ALY",module:[1,2,3],semaine:"",planning:[[],[],[],[]]},
    {id:2,nom:"Baila",module:[1,2,3],semaine:"",planning:[[],[],[],[]]},
    {id:3,nom:"Ndoye",module:[1,2,3],semaine:"",planning:[[],[],[],[]]},
    {id:4,nom:"MBAYE",module:[1,2,3],semaine:"",planning:[[],[],[],[]]},
    {id:5,nom:"Djiby",module:[1,3],semaine:"",planning:[[],[],[],[]]},
    {id:6,nom:"Seckouba",module:[2],semaine:"",planning:[[],[],[],[]]}, 
]
const modules = [
    {id:1,nom:"jAVASCRIPT",classes:"",semaine:"",planning:[[],[],[],[]]},
    {id:2,nom:"PHP",classes:"",semaine:"",planning:[[],[],[],[]]},
    {id:3,nom:"PYTHON",classes:"",semaine:"",planning:[[],[],[],[]]},
    {id:4,nom:"LC",classes:"",semaine:"",planning:[[],[],[],[]]},
    {id:5,nom:"ALGO",classes:"",semaine:"",planning:[[],[],[],[]]},
    {id:6,nom:"JAVA",classes:"",semaine:"",planning:[[],[],[],[]]}, 
]

const classes = [
    {id:1,nom:"devWeb",semaine:"",planning:[[],[],[],[]],effectif:"29"},
    {id:2,nom:"Hackeuse",semaine:"",planning:[[],[],[],[]],effectif:"30"},
    {id:3,nom:"refDig",semaine:"",planning:[[],[],[],[]],effectif:"42"},
    {id:1,nom:"gl",semaine:"",planning:[[],[],[],[]],effectif:"22"},
]
const salles = [
    {id:1,nom:"101",semaine:"",planning:[[],[],[],[]],effectif:"26"},
    {id:2,nom:"102",semaine:"",planning:[[],[],[],[]],effectif:"35"},
    {id:3,nom:"103",semaine:"",planning:[[],[],[],[]],effectif:"9"},
    {id:4,nom:"104",semaine:"",planning:[[],[],[],[]],effectif:"19"}, 
]
// function creationElementPlus() {
//         const div = document.createElement("div");
//         div.className = "modalTitle"
//         plus.appendChild(div)
//         const p = document.createElement("p");
//         div.appendChild(p)
//           p.textContent = "Modal title"
// }

    //fonction pour afficher les modules
    function afficheModule() {
        const ulModule = document.createElement('ul');
        plus.appendChild(ulModule);
        for (let monModule of laClasse[0]) {
            const liModule = document.createElement("li");
            liModule.textContent =`${laClasse.module.matiere}`;
            ulModule.appendChild('liModule');
        }
    }
    
    plus.addEventListener("click", creationElementPlus)   

    boutton.addEventListener("click", ()=> {
        if (theme == 'dark') {
            theme = 'light'
            boutton1.style.transform = "translateX(23px)" 
        } else {
            boutton1.style.transform = "translateX(0px)"
            theme ='dark'
        }
    })

    const currentClass = {
        nom : "devWeb",
        semaine : "13/03/2023 au 18/03/2023",
        effectif : "30",
        planning : [[
            {prof:1,module: 2,salle:1,debut: 8,duree:4}
     ],[],[],[],[],[]]
    }
    
    boxonly.addEventListener('cliclk',()=> {

    })

    function creatingElement(nElem) {
        let ele =  document.createElement(nElem)
       return ele 
    }




    function chargerSelect(data, select, label="Sélectionner") {
        select.innerHTML = "";
        let option = creatingElement("option");
        option.innerHTML = label;
        data.forEach(e => {
            option = creatingElement("option");
            option.innerHTML =e.nom;
            option.value= e.id
        })

    }

    [
        ...boxonly
    ].forEach()

boxonly.forEach(box => {
    box.addEventListener('click',(e)=>{
        // console.log(e.target)
        // const boxTitle = box.classList[0]; au cas ou ......
        const boxTitle = box.classList; 

        if(boxTitle.contains('salle-gauche'))
        {
            chargerSelect(salles,selection,'selectionner une salle');
        }

        if(boxTitle.contains('classe-gauche'))
        {
            chargerSelect(modules,selection,'selectionner  un cours');
        }

        if(boxTitle.contains('enseignant-gauche1'))
        {
            chargerSelect(profs,selection,'selectionner  un prof');
        }

        if(boxTitle.contains('module-gauche'))
        {
            chargerSelect(classes,selection,'selectionner  une classe');
        }
    })
});
