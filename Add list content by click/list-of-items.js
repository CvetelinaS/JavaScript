function addItem(){
    let newContent = document.getElementById('newItemText').value;
    let newListItem = document.createElement('li');
    
    newListItem.textContent = newContent;

    let list = document.getElementById('items'); //ul # items
    list.appendChild(newListItem);

    document.getElementById('newItemText').value = ' '; //clears the space, where we inserted some text
    //clears existing element

