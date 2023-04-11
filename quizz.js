// mécanique du quizz

// 1 On récupère les valeurs du formulaire

const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['c', 'b', 'c', 'a', 'c'];
const emojis = ['✔️', '✨', '👀', '😭', '👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //console.log(document.querySelector('input[name="q1"]:checked').value);

    //On parcourt les questions du formulaire

    for (i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    verifFunc(tableauResultats);
    tableauResultats = [];

})

function verifFunc(tabResultats) {

    for (let a = 0; a < 5; a++) {
        if (tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false)

        }

    }
    //console.log(verifTableau);
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];

}

function afficherResultats(tabCheck) {

    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    //console.log(nbDeFautes);
    switch (nbDeFautes) {
        case 0:
            titreResultat.innerText = `✔️ Bravo, c'est un sans faute ✔️ `;
            aideResultat.innerText = '';
            noteResultat.innerText = '5/5';
            break;
        case 1:
            titreResultat.innerText = `✨Presque ! ✨ `;
            aideResultat.innerText = 'Il reste une seule question rouge';
            noteResultat.innerText = '4/5';
            break;
        case 2:
            titreResultat.innerText = `✨ Pousse ! 👀 `;
            aideResultat.innerText = 'Retente les questions rouges, puis revalide';
            noteResultat.innerText = '3/5';
            break;
        case 3:
            titreResultat.innerText = `👀 50% ! Il reste quelques erreurs ! 😭 `;
            aideResultat.innerText = 'Retente les questions rouges, puis revalide';
            noteResultat.innerText = '2/5';
            break;
        case 4:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭 `;
            aideResultat.innerText = 'Retente les questions rouges, puis revalide';
            noteResultat.innerText = '1/5';
            break;
        case 5:
            titreResultat.innerText = `👎 Cache-toi ! 👎 `;
            aideResultat.innerText = 'Retente, puis revalide';
            noteResultat.innerText = '0/5';
            break;
        default:
            'Mince, il y a un problème';

    }

}


function couleursFonction(tabValBool) {

    for (let j = 0; j < tabValBool.length; j++) {

        if (tabValBool[j] === true) {
            toutesLesQuestions[j].style.background = '#5AB464';
        } else {
            toutesLesQuestions[j].style.background = '#CD1719';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');

            }, 500)
        }
    }

}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {

        item.style.background = "white";
    })

})
