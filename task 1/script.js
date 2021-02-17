const input = document.getElementById('input');
const buttonAdd = document.getElementById('buttonAdd');
const buttonRemove = document.getElementById('buttonRemove');
const text = document.getElementById('text');


function addEventToInput(){
  input.addEventListener('input', startAdd)
}

function removeEventToInput(){
    input.removeEventListener('input', startAdd)
}

function startAdd(e) {
    text.innerText = e.target.value
}

buttonAdd.addEventListener('click', addEventToInput);
buttonRemove.addEventListener('click', removeEventToInput);