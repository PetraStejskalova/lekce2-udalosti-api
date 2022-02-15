// tady je místo pro náš program

let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty');
nadpis.classList.remove('zluty');

let pocitadlo = 0;
function priNajetiNaCtverec() {
    console.log('test ' + pocitadlo);
    // pocitadlo = pocitadlo + 1;
    pocitadlo++;
}


// domácí úkol

function setBold(element) {
    element.style.fontWeight = 'bold';
}

function setNormal(element) {
    element.style.fontWeight = 'normal';
}

let paragraph = document.querySelector('p');
function addClass() {
    paragraph.classList.toggle('cerveny');
}

function changeFontSize() {
    let computedSize = window.getComputedStyle(paragraph, null).getPropertyValue('font-size');
    paragraph.style.fontSize = (parseFloat(computedSize) + 1) + 'px';
}
