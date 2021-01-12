
import debounce from 'lodash.debounce';
import { alert, defaultModules } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import countriesTpl from './templates/countries.hbs'
import './styles.css';
//import './notifications';

//========================input=============================//

let inputRef = document.querySelector('#name-input');
 const nameRefMurkup = document.querySelector('#name-output')

 inputRef.addEventListener('input', debounce(handleTextInput), 500);
function handleTextInput(event) {
    let nameCountry = '';
    nameCountry = event.target.value

fetch(`https://restcountries.eu/rest/v2/name/${nameCountry}`)
    .then(response => response.json())
    .then(name => {
        //console.log(name)
        const murkup = countriesTpl(name);
        console.log(murkup)
        nameRefMurkup.insertAdjacentHTML('beforeend', murkup)
    });
 };
// inputRef.addEventListener('input', handleInputChange)




// function handleInputChange(event) {

//     inputRef.value = nameRef.textContent = event.target.value;
// }
// const ref = {
//     inputRef: document.querySelector('#name-input'),
//     spanRef: document.querySelector('#name-output')
// };



//============================Fetch===========================//

