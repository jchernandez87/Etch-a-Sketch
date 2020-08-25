function numCells(num) {
    let str = '';
    for(i = 0; i < num; i++) {
        str += 'auto '
    }
    return str
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let boxColor = 'black'

function randomizeColor() {
    boxColor = getRandomColor();
}


function gridArea (columns=16, rows=16) {
    const gridTemplate = document.querySelector('.container')
    const grid = document.createElement('div')
    grid.style.display = 'grid';
    grid.classList.add('gridArea');
    grid.style.gridTemplateColumns = numCells(columns);
    grid.style.gridTemplateRows = numCells(rows);
    grid.style.width = '50%';
    grid.style.height = '70%';
    grid.style.backgroundColor = '#C9C4B5';
    grid.style.border = '4px solid #000000';
    grid.style.borderRadius = '10px 10px 10px 10px';
    gridTemplate.appendChild(grid)

    
    for(i = 0; i < rows; i++) {
        for(c = 0; c < columns; c++) {
            let row = document.createElement('div');
            row.classList.add('cell');
            grid.appendChild(row)
            row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = boxColor;
            })
        }
    }

    
}

function removeColor() {
    boxColor = 'black';
    let box = document.querySelectorAll('.cell');
    box.forEach(element  => {
        element.style.backgroundColor = 'transparent';
    })
}

function changeSize() {
    let num1 = prompt('Number of columns');
    let num2 = prompt('Number of rows');
    let area = document.querySelector('.gridArea');
    area.remove()
    gridArea(num1, num2)
}


gridArea()



