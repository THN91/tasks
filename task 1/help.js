const input = document.getElementById('input');
const buttonAdd = document.getElementById('buttonAdd');
const buttonRemove = document.getElementById('buttonRemove');
const text = document.getElementById('text');

function inputListener(e){
    text.innerText = text.innerText + e.data
}

function addEventToInput(){
    input.addEventListener('input', inputListener )
}

function removeEventToInput(){
    input.removeEventListener('input', inputListener)
}

buttonAdd.addEventListener('click', addEventToInput);
buttonRemove.addEventListener('click', removeEventToInput);