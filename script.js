const ButtonArea = document.querySelector('.Buttons');
const numNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let display = document.querySelector(".display-number");
let calStorageArea = [];
let result = [];

for (let i = 9; i >= 0; i--) {
    const Number = document.createElement('button');
    Number.classList.add('btn', `${numNames[i]}`);
    Number.innerText = i;
    ButtonArea.appendChild(Number);

}

const buttons = document.querySelectorAll('.btn');


for (let i = 0; i <= buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (buttons[i].innerText == 'AC' || buttons[i].innerText == "C") {
            if (buttons[i].innerText == 'AC') {
                display.innerText = '';
                calStorageArea = [];
            }
            else {
                calStorageArea = calStorageArea.slice(0, (calStorageArea.length - 1))
                display.innerHTML = calStorageArea.join('');
            }
        }
        else if (buttons[i].innerText == '=') {
            calStorageArea = [eval((calStorageArea.join('')))];
            display.innerText = calStorageArea.join('');


        }
        else {
            if(calStorageArea.length<10){
                display.innerText += buttons[i].innerText;
                calStorageArea = [...display.innerText];
            }
         
        }
    })
};