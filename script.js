const ButtonArea = document.querySelector('.Buttons');
const numNames = ['zero','one','two','three','four','five','six','seven','eight','nine']

for (let i = 9; i >= 0; i--) {
    const Number = document.createElement('button');
    Number.classList.add('btn', `${numNames[i]}`);
    Number.innerText = i;
    Number.value = i;
    ButtonArea.appendChild(Number);
}


