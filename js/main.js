const modal = document.querySelector('.Modal');
const input = document.querySelector('#emailInput');
const label = document.querySelector('#invalidMessage');
const button = document.querySelector('.buttonSubs')
const Dismiss = document.querySelector('.Dismiss')
const closeButton = document.querySelector('.closeButton')


/* Variables */





/* Eventos */
input.addEventListener('input', validarNombre);
button.addEventListener('click', pressedButton);
Dismiss.addEventListener('click', pressedButton);
closeButton.addEventListener('click', pressedButton);

/* Funciones */
function pressedButton() {
    document.getElementById('btnSubs').disabled = true;
    modal.classList.toggle('visually-hidden')
    form.reset()
    
}

function validarNombre() {
    let nv = input.value
   
    if (nv.includes('@')) {
        let slicedName = nv.split('@' && '.com');

        if (slicedName.length > 2 || !slicedName[1].includes('.com')) {
            input.classList.remove('invalid');
            label.classList.add('visually-hidden');
            document.getElementById('btnSubs').disabled = false;
        } else {
            input.classList.remove('invalid');
            label.classList.add('visually-hidden');
            document.getElementById('btnSubs').disabled = true;
        }  
        
    } else {
        input.classList.add('invalid');
        label.classList.remove('visually-hidden');
       
    } return;
    
};
