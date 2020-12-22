import {error, Stack} from'@pnotify/core';
import"@pnotify/core/dist/PNotify.css";
import"@pnotify/core/dist/BrightTheme.css";

const myStack = new Stack({
    dir1: 'down',
    context: document.querySelector('#input-box'),
});

const myError = {
    stack: myStack,
    
    createError() {
        return error({
            text: "Too many matches found. Please enter a more specific query!",
            delay: Infinity,
            stack: myStack,
        })
    },
}

export default  myError;