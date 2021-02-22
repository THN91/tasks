const addBlock = document.getElementById('addBlock');
const list = document.getElementById('list');

function clickItem(event) {
  event.stopPropagation();

  if (event.target.id) {
    console.log('1', event.target.id);
    return null;
  }

  console.log('2', event.target.parentElement.id);
}

function createTemplate(index) {
  return `
    <div class="wrapper-item" id='item${index}' >
        <div class="test">Test ${index}</div>        
        <div class="btn"  id="btn${index}">
            <i class="fas fa-cog"></i>
        </div>
    </div>
  `;
}

function newBlock() {
  const counter = list.childElementCount + 1;
  list.insertAdjacentHTML('beforeend', createTemplate(counter));
}

addBlock.addEventListener('click', newBlock);
list.addEventListener('click', clickItem);
