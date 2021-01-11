import countriesTemplate from './templates/countries.hbs'
import './styles.css';
 const debounce = require('lodash.debounce');
import  './notifications'
import { data } from 'autoprefixer';

//========================input=============================//

const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output')
inputRef.addEventListener('input', handleInputChange)




function handleInputChange(event) {

    inputRef.value = nameRef.textContent = event.target.value;
}
const ref = {
    inputRef: document.querySelector('#name-input'),
    spanRef: document.querySelector('#name-output')
};
ref.inputRef.addEventListener('input', debounce(handleTextInput), 500);
function handleTextInput(event) {
    ref.inputRef.value = ref.spanRef.textContent = event.target.value;
};



//============================Fetch===========================//

let name = [];
fetch('https://restcountries.eu/rest/v2/name/eesti')
    .then(response => response.json())
    .then(([{name}]) => {
        console.log(name);
    };