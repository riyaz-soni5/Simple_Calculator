const ButtonArea = document.querySelector('.Buttons');
let display = document.querySelector(".display-number");
let calStorageArea = [];
let result = [];

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