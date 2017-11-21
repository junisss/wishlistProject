function saveUserInput() {
    const getUserItemValue = document.getElementById('newItem').value;
    if (!getUserItemValue) return;
    displayUserInput(getUserItemValue);
};

function displayUserInput(getUserItemValue) {
    const createListItem = document.createElement('li');
    const copyTextToList = document.createTextNode(getUserItemValue);
    createListItem.appendChild(copyTextToList);
    document.getElementById('listOfItems').appendChild(createListItem);
};


 