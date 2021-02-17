const container = document.getElementById('container');
const input = document.getElementById('input');
const buttonAdd = document.getElementById('buttonAdd');
const buttonRemove = document.getElementById('buttonRemove');
const text = document.getElementById('text');


let finalText = ['apple', 'grapes', 'peach'];

function addEventToInput(){
    let value = input.value;
    finalText.push(value.split());
    text.innerText = finalText.join(' ');
}

function removeEventToInput(){
    let value = input.value;

    if (value !== '') {
        input.value = '';
        console.log(value);
  }
    if (value == '') {
        finalText.pop();
        text.innerText = finalText.join(' ');
    }
}

text.innerText = finalText.join(' ');

buttonAdd.addEventListener('click', addEventToInput);
buttonRemove.addEventListener('click', removeEventToInput);