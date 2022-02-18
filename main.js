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

let audioFile = document.getElementById('soundTrack');

function startAudio() {
    audioFile.play();
}

function pauseAudio() {
    audioFile.pause();
}

function volumeDown() {
    audioFile.volume = 0.0;
}

function volumeNormal() {
    audioFile.volume = 0.5;
}

function volumeMax() {
    audioFile.volume = 1.0;
}

function trackToBeginning() {
    audioFile.currentTime = 0;
}
