var enseignant = ["ALy", "Wane", "Niass", "Dieng"];
var salle = ["Salle 1", "Salle 2", "Salle 3", "Salle 4"];
var modules = ["Algo", "Langage C", "Test 3", "Test 4"];
var classes = ["Genie LOgiciel", "Dev web", "DEv Data", "REf dig"];

nbrElemSalle = document.getElementById('nbrElemSalle')
nbrElemEns = document.getElementById('nbrElemEns')

nbrElemEns.innerText = enseignant.length
nbrElemSalle.innerText = salle.length

function charger(chaine){
    if (chaine == 'enseignant') {
        console.log(enseignant);
        chargerSelect(enseignant)
    }else if (chaine == 'salle') {
        console.log(salle);
        chargerSelect(salle)

        
    }
       
}

select = document.getElementById('select')
function chargerSelect(tab) {
    select.innerHTML = "";
    // const opt = document.createElement("option")
    // opt.innerHtml = label;
    // select.appendChild(opt);
    tab.forEach(element => {
       const opt = document.createElement('option')
        opt.innerText = element
        select.appendChild(opt)
    });
}