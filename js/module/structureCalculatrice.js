let myBody = document.querySelector('body')

let mySection = document.createElement('section')
let myDiv = document.createElement('div')
let myH1 = document.createElement('h1')

myBody.appendChild(mySection)
mySection.appendChild(myDiv)
myDiv.appendChild(myH1)

// Titre

myH1.textContent = ' La Fameuse Calculatrice ' 

myH1.style = 'text-align: center; text-decoration: underline;'

// Section

let mySection2 = document.createElement('section')
let myDiv2 = document.createElement('div')

myBody.appendChild(mySection2)
mySection2.appendChild(myDiv2)


myDiv2.className = 'calculette'
let myReponse = document.createElement('span')
let espace = document.createElement('br')

myDiv2.appendChild(myReponse)
myDiv2.appendChild(espace)

myReponse.className = 'reponse'
myReponse.textContent = '0193919'

let myInput = document.createElement('input')
myDiv2.appendChild(myInput)

myInput.className = 'afficheur'

let range;
let colonne;
for (let i = 0; i < 4; i++) {
    colonne = document.createElement('col')
    for (let a = 0; a < 4; a++) {
        range = document.createElement('row')
    }
    
}