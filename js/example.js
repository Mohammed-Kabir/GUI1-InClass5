

// ADD NEW ITEM TO END OF LIST
var node = document.createElement("li");                 
var textnode = document.createTextNode("cream");       
node.appendChild(textnode);                              
document.querySelector("#page ul").appendChild(node);

// ADD NEW ITEM START OF LIST
 var newItem = document.createElement("li");       
var StartItem = document.createTextNode("kale");  
newItem.appendChild(StartItem);                    

var list = document.querySelector("#page ul");    
list.insertBefore(newItem, list.childNodes[0]);   

// ADD A CLASS OF COOL TO ALL LIST ITEMS
const ListColor = document.querySelectorAll('#page ul li');
  for (let i = 0; i <= ListColor.length - 1; i++) {
        ListColor[i].classList.add('cool')
    }

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
const ItemNumber = ListColor.length
const number = document.getElementById('number').innerText = ItemNumber
