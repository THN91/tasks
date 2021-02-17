const container = document.getElementById('container');
const input = document.getElementById('input');
const buttonAdd = document.getElementById('buttonAdd');
const buttonRemove = document.getElementById('buttonRemove');
const text = document.getElementById('text');


let finalText = ['Taras', 'Honcharuk', 'Nikolaevich'];

// change name => addEventToInput
function addWord(){
    let value = input.value;
    finalText.push(value.split());
    text.innerText = finalText.toString();
}

// change name => removeEventToInput
function removeWord(){

}

text.innerText = finalText.toString();

buttonAdd.addEventListener('click', addWord);
buttonRemove.addEventListener('click', removeWord);