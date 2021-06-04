// SCRIPT TO ANNINATE TEXT

// get text, split it by letters and empty the field
const title = document.querySelector('.title');
const titleText = title.textContent;
const titleTextSplit = titleText.split('');
title.textContent = "";

// use split text for add a span by letter
for (let i = 0; i < titleTextSplit.length; i++) {
    title.innerHTML += "<span>" + titleTextSplit[i] + "</span>"
}

let char = 0;

// now create a function for get all span and add a class
const showTitleByLetter = () => {
    const span = title.querySelectorAll('span')[char];
    span.classList.add('letter');
    if(span.textContent === " ") {
        span.classList.add('spacing');
    }
    char++;
    if(char === titleTextSplit.length) {
        complete();
        const subtitle = document.querySelector('h2');
        subtitle.classList.add('subtitle');
        subtitle.innerHTML = 'Développeur web';
        return;
    }
}

// call your function with interval 
let timer = setInterval(showTitleByLetter, 150);

// clear timer for finish
const complete = () => {
    clearInterval(timer);
    timer = null;
}