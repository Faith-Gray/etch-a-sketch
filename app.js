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

//get color through event listener 
function colorGrid(target) {
    target.style.backgroundColor = 'white';
  }
  gridContainer.addEventListener('mouseover', function (e){
    target = e.target;
    colorGrid(target);
  });
  
  document.getElementById('reset').addEventListener('click', resetSquares);
  

  function resetSquares() {

    var gridPixels = gridContainer.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#808080');
  }
