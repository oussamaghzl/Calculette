let myBody = document.querySelector('body')

let mySection = document.createElement('section')
let myDiv = document.createElement('div')
let myH1 = document.createElement('h1')

myBody.appendChild(mySection)
mySection.appendChild(myDiv)
myDiv.appendChild(myH1)

// Titre

myH1.textContent = ' La Fameuse Calculatrice ';

myH1.style = 'text-align: center; text-decoration: underline;';

// Section

let mySection2 = document.createElement('section');
export let myDiv2 = document.createElement('div');

myBody.appendChild(mySection2);
mySection2.appendChild(myDiv2);

// Dessin de la calculette

myDiv2.className = 'calculette';
export let myReponse = document.createElement('h3');

myDiv2.appendChild(myReponse);

myReponse.className = 'reponse';
myReponse.textContent = 'Resultat';

export let myInput = document.createElement('input');
myDiv2.appendChild(myInput);

myInput.className = 'afficheur';

let range;
let colonne;

for (let z = 0; z < 4; z++) {
    for (let i = 0; i < 1; i++) {
        range = document.createElement('div');
        range.className = 'row'
        myDiv2.appendChild(range);
        for (let a = 0; a < 4; a++) {
            colonne = document.createElement('button');
            colonne.className = 'boutonn'
            range.appendChild(colonne);
        }
    }
}

// Touche de la calculette

export let btn = document.querySelectorAll('button')[0]
export let btn1 = document.querySelectorAll('button')[1]
export let btn2 = document.querySelectorAll('button')[2]
export let btn3 = document.querySelectorAll('button')[3]
export let btn4 = document.querySelectorAll('button')[4]
export let btn5 = document.querySelectorAll('button')[5]
export let btn6 = document.querySelectorAll('button')[6]
export let btn7 = document.querySelectorAll('button')[7]
export let btn8 = document.querySelectorAll('button')[8]
export let btn9 = document.querySelectorAll('button')[9]
export let btn10 = document.querySelectorAll('button')[10]
export let btn11 = document.querySelectorAll('button')[11]
export let btn12 = document.querySelectorAll('button')[12]
export let btn13 = document.querySelectorAll('button')[13]
export let btn14 = document.querySelectorAll('button')[14]
export let btn15 = document.querySelectorAll('button')[15]



btn.textContent = '1'
btn1.textContent = '2'
btn2.textContent = '3'
btn3.textContent = '+'
btn3.style = 'background-color: #1979a9;color: white;'
btn4.textContent = '4'
btn5.textContent = '5'
btn6.textContent = '6'
btn7.textContent = '-'
btn7.style = 'background-color: #1979a9;color: white;'
btn8.textContent = '7'
btn9.textContent = '8'
btn10.textContent = '9'
btn11.textContent = '*'
btn11.style = 'background-color: #1979a9; color: white;'
btn12.textContent = 'C'
btn12.style = 'background-color: red;color: white;'
btn13.textContent = '0'
btn14.textContent = '='
btn14.style = 'background-color: #008000;color: white;'
btn15.textContent = '/'
btn15.style = 'background-color: #1979a9;color: white;'

