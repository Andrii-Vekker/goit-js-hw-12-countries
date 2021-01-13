
import debounce from 'lodash.debounce';
import { alert, defaultModules } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import countriesTpl from './templates/countries.hbs'
import './styles.css';
//import './notifications';

//========================input=============================//

let inputRef = document.querySelector('#name-input');
 const nameRefMurkup = document.querySelector('#name-output')

 inputRef.addEventListener('input', debounce(handleTextInput), 3500);
function handleTextInput(event) {
    let nameCountry = '';
    nameCountry = event.target.value
     nameRefMurkup.textContent = nameCountry

fetch(`https://restcountries.eu/rest/v2/name/${nameCountry}`)
    .then(response => response.json())
    .then(nameCountry => {
        console.log(nameCountry)
        const murkup = countriesTpl(nameCountry);
        console.log(murkup)
        nameRefMurkup.insertAdjacentHTML('beforeend', murkup)
    });
 };


