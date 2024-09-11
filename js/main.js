const button = document.querySelector('.buttonSubs');
const input = document.querySelector('#emailInput');
const label = document.querySelector('#invalidMessage');

button.addEventListener('click', pressedButton);
input.addEventListener('input', validarNombre);

function pressedButton() {


}

function validarNombre() {
    let nv = input.value
    if (nv.includes('@')) {
        let slicedName = nv.split('@');

        if (slicedName.length > 2 || !slicedName[1].includes('.com')) {
            input.classList.add('invalid');
            label.classList.remove('visually-hidden');

        } else {
            input.classList.remove('invalid');
            label.classList.add('visually-hidden');
        };
    } else {
        input.classList.add('invalid');
        label.classList.remove('visually-hidden');
    };
};