import {
    myInput,
    myBody,
    myReponse,

} from './structureCalculatrice.js'

import {
    btn,
    btn1,
    btn2,
    btn3,
    btn4,
    btn5,
    btn6,
    btn7,
    btn8,
    btn9,
    btn10,
    btn11,
    btn12,
    btn13,
    btn14,
    btn15
} from './structureCalculatrice.js'



myInput.setAttribute('type', 'number')

let bouton = [btn,
    btn1,
    btn2,
    btn3,
    btn4,
    btn5,
    btn6,
    btn7,
    btn8,
    btn9,
    btn10,
    btn11,
    btn12,
    btn13,
    btn14,
    btn15
]


let result = 0;
let calcul = '';
let nombre1;
let nombre2;
let operateur;

let test = (e) => {
    console.log(e.key)
}

document.addEventListener('keypress', test)


document.addEventListener('keypress', (e) => {
    if (e.key == 'c') {
        result = 0;
        myReponse.textContent = 'Resultat';
        myInput.value = ''

    } else if (e.key == '=') {
        nombre2 = parseInt(calcul);
        myInput.value = ''
        if (operateur == '+') {
            result = nombre1 + nombre2
            calcul = ''
            myReponse.textContent = result
        } else if (operateur == '-') {
            result = nombre1 - nombre2
            calcul = ''
            myReponse.textContent = result
        } else if (operateur == '/') {
            result = nombre1 / nombre2
            calcul = ''
            myReponse.textContent = result
        } else if (operateur == '*') {
            result = nombre1 * nombre2
            calcul = ''
            myReponse.textContent = result
        }

    } else if (e.key == '+') {
        operateur = '+'
        nombre1 = parseInt(calcul);
        calcul = '';
        myInput.value = ''
    } else if (e.key == '-') {
        operateur = '-'
        nombre1 = parseInt(calcul);
        calcul = '';
        myInput.value = ''

    } else if (e.key == '/') {
        operateur = '/'
        nombre1 = parseInt(calcul);
        calcul = '';
        myInput.value = ''

    } else if (e.key == '*') {
        operateur = '*'
        nombre1 = parseInt(calcul);
        calcul = '';
        myInput.value = ''

    } else {
        result = 0
        myInput.value += e.key;
        calcul += e.key;
        myReponse.textContent = 'Resultat';

    }
})



bouton.forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.target.innerText == 'C') {
            result = 0;
            myReponse.textContent = 'Resultat';
            myInput.value = ''

        } else if (e.target.innerText == '=') {
            nombre2 = parseInt(calcul);
            myInput.value = ''
            if (operateur == '+') {
                result = nombre1 + nombre2
                calcul = ''
                myReponse.textContent = result
            } else if (operateur == '-') {
                result = nombre1 - nombre2
                calcul = ''
                myReponse.textContent = result
            } else if (operateur == '/') {
                result = nombre1 / nombre2
                calcul = ''
                myReponse.textContent = result
            } else if (operateur == '*') {
                result = nombre1 * nombre2
                calcul = ''
                myReponse.textContent = result
            }

        } else if (e.target.innerText == '+') {
            operateur = '+'
            nombre1 = parseInt(calcul);
            calcul = '';
            myInput.value = ''
        } else if (e.target.innerText == '-') {
            operateur = '-'
            nombre1 = parseInt(calcul);
            calcul = '';
            myInput.value = ''

        } else if (e.target.innerText == '/') {
            operateur = '/'
            nombre1 = parseInt(calcul);
            calcul = '';
            myInput.value = ''

        } else if (e.target.innerText == '*') {
            operateur = '*'
            nombre1 = parseInt(calcul);
            calcul = '';
            myInput.value = ''

        } else {
            result = 0
            myInput.value += e.target.innerText;
            calcul += e.target.innerText;
            myReponse.textContent = 'Resultat';

        }
    })
});

