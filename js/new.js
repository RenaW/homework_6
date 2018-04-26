
document.getElementById("logo_block").addEventListener("mouseenter", function() {
    var NewColor = ('#' + ((Math.random() * 0x1000000) | 0x1000000).toString(16).substr(1));
    document.getElementById("logo_block").style.backgroundColor=NewColor;
});

var ChangingColorsInterval = setInterval (ChangeColorInterval, 2000);
function ChangeColorInterval(){
    var NewColor = ('#' + ((Math.random() * 0x1000000) | 0x1000000).toString(16).substr(1));
    document.getElementById("logo_block").style.backgroundColor=NewColor;
}


var TaskList = [];

function addItem() {
    var ListNewItem = document.createElement('li');
    var task = document.getElementById("new_task").value;
    ListNewItem.innerHTML = task;
    document.getElementById("ol_list").appendChild(ListNewItem);
    TaskList.push(task);
    document.getElementById("new_task").value = " ";
}

function deleteItem() {
    var element = document.getElementById("ol_list");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    TaskList = [];
    document.getElementById("new_task").value = " ";
}
document.getElementById("add_button").addEventListener('click', addItem);
document.getElementById("clear_button").addEventListener('click', deleteItem);







