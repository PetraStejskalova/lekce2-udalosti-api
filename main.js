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
