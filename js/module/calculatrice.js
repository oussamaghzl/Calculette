import {
    myInput,
    myDiv2,
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

let row1 = document.querySelectorAll('.row')[0]
let row2 = document.querySelectorAll('.row')[1]
let row3 = document.querySelectorAll('.row')[2]
let row4 = document.querySelectorAll('.row')[3]


let tab1 = [].slice.call(row1.children)
let tab2 = [].slice.call(row2.children)
let tab3 = [].slice.call(row3.children)
let tab4 = [].slice.call(row4.children)


let result = 0;
let calcul = '';
let nombre1;
let nombre2;
let operateur;

myDiv2.addEventListener('click', (e) => {

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
