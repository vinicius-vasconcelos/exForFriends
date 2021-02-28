function loadPage() {
    document.getElementById('sort').innerText = '0';
}

function sort() {
    let num = Math.floor(Math.random() * (30 - 1)) + 1

    document.getElementById('sort').innerText = num;

    let newLi = document.createElement('li');
    let textLi = document.createTextNode(num);
    newLi.appendChild(textLi);
    newLi.classList.add('num-sort-item');
   
    document.getElementById('num-sort-itens').appendChild(newLi); 
}