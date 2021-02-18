const item = document.getElementById('item');
const btn = document.getElementById('btn');

item.addEventListener('click', clickItem);

btn.addEventListener('click', clickBtn);

function clickItem () {
    console.log('click item');
}

function clickBtn (event) {
    event.stopPropagation();
    console.log('click button')
}