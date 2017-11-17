function saveItemToList() {
    const getUserItemValue = document.getElementById('newItem').value;
    if (getUserItemValue == 0) {
        console.log('Nie podales wartosci')
    } else {
    const createListItem = document.createElement('li');
    const copyTextToList = document.createTextNode(getUserItemValue);
    createListItem.appendChild(copyTextToList);
    document.getElementById('listOfItems').appendChild(createListItem);
    };
}
    
    /* Erase the text input when next click */
$('input:text').focus(
    function eraseInput(){
        $(this).val('');
    });

saveItemToList();