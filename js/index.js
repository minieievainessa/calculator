const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits button');
digits.forEach(btn => btn.addEventListener('click', digitPressed));

function digitPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}
const opers = document.querySelectorAll('.opers button');
opers.forEach(btn => btn.addEventListener('click', operPressed));

function operPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

document.querySelector('.equal').addEventListener('click', equalPressed);

function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
    
}
document.querySelector('.clearAll').addEventListener('click', clearAll);

function clearAll(e) {
    e.preventDefault();
    display.value = null;
}








