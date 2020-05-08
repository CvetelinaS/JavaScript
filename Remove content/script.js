function addItem() {
let newContent = document.getElementById('newText').value;
let listItem = document.createElement('li');
let ul = document.getElementById('items');

listItem.appendChild(document.createTextNode(newContent + ''));
let span = document.createElement('span');
span.innerHTML = '<a href="#"> Delete </a>';

listItem.appendChild(span);
ul.appendChild(listItem);
document.getElementById('items').appendChild(listItem);

}