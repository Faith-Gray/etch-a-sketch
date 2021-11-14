const gridContainer = document.querySelector("div");
gridContainer.style.backgroundColor = 'white';
var square = document.createElement('div');
square.className = 'square';
// removed extra square
// document.body.appendChild(square);
square.style.background = 'gray';
square.style.height = '15px';
square.style.width = '15px'

// get 16 x 16 squares
function getSquares() 
{for (var i = 0; i < 256; i++) {
 gridContainer.appendChild(square.cloneNode(true));
}}

getSquares();