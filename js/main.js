let square = '<div class="square"></div>';
let SquareContainer = document.querySelector('.container_square');
let number = document.querySelector('.text');

let num = prompt ('Введите число');
let y = 0;
for (let x = 0; x < num; x++){
    SquareContainer.insertAdjacentHTML('beforeend', square);
}