console.log('Programa executando...');

// Capturo o objeto que referencia o botão:
let formulario = document.querySelector('form');

formulario.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
    const input = document.querySelector('input');
    const body = document.querySelector('body');

    body.style.backgroundColor = input.value;

    if (body.style.backgroundColor === input.value) {
        console.log('Estou fazendo log de', input.value);
    } else {
        alert('Erro ao alterar a cor');
    }

    event.preventDefault();
    return false;
}
