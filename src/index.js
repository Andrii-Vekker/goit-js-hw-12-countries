import './styles.css';
 const debounce = require('lodash.debounce');
import './notifications'


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
ref.inputRef.addEventListener('input', handleTextInput);
function handleTextInput(event) {
    ref.inputRef.value = ref.spanRef.textContent = event.target.value;
};



//============================