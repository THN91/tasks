const item = document.getElementById('item1');
const btn = document.getElementById('btn1');
const addBlock = document.getElementById('addBlock');
const list = document.getElementById('list');
const wrapper = document.getElementsByClassName('wrapper-item');


function clickItem (event) {
    console.log(event.target.id);
    event.stopPropagation()
}

function clickBtn (event) {
    console.log(event.target.parentElement.id);
    event.stopPropagation()
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
    btn.id = `btn${counter()}`;

    let icon = document.createElement('div');
    icon.className = 'fas fa-cog';


    wrapperItem.appendChild(test);
    wrapperItem.appendChild(btn);
    btn.appendChild(icon);
    list.appendChild(wrapperItem);
}

item.addEventListener('click', clickItem);
btn.addEventListener('click', clickBtn);
addBlock.addEventListener('click', newBlock);
