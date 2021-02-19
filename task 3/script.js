const item = document.getElementById('item');
const btn = document.getElementById('btn');
const addBlock = document.getElementById('addBlock');
const list = document.getElementById('list');
const wrapper = document.getElementsByClassName('wrapper-item');



function clickItem () {
    console.log('click item');
}

function clickBtn (event) {
    event.stopPropagation();
    console.log('click button')
}

function counter() {
    return wrapper.length + 1;
}

function newBlock () {
    let wrapperItem = document.createElement('div');
    wrapperItem.className = 'wrapper-item';
    wrapperItem.id = `item${counter()}`;

    let test = document.createElement('div');
    test.className = 'test';
    test.innerText = `Test ${counter()}`;

    let btn = document.createElement('div');
    btn.className = 'btn';
    btn.id = 'btn';

    let icon = document.createElement('div');
    icon.className = 'fas fa-cog';


    wrapperItem.appendChild(test);
    wrapperItem.appendChild(btn);
    btn.appendChild(icon);
    list.appendChild(wrapperItem);
}

list.addEventListener('click', clickItem);
btn.addEventListener('click', clickBtn);
addBlock.addEventListener('click', newBlock);
