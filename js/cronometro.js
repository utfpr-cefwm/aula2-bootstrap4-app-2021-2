const botaoStart = document.querySelector('.btn.btn-success');
const botaoPause = document.querySelector('.btn.btn-warning');
const botaoStop = document.querySelector('.btn.btn-danger');

botaoStart.addEventListener('click', () => computa('inicia'));
botaoPause.addEventListener('click', () => computa('pausa'));
botaoStop.addEventListener('click', () => computa('reinicia'));

const output = document.querySelector('output');

let contagem = 0;
let estado = 'parado';
let timer;

// MÁQUINA DE ESTADOS:

// Estados:
// - Parado
// - Rodando (incrementando) [a cada 100ms, contagem = contagem + 0.1]

// Transições: eventos:
// Parado → Rodando: inicia [setInterval]
// Rodando → Parado: pausa [clearInterval]
// Rodando → Parado: reinicia [contagem = 0] [clearInterval]
// Parado →  Parado: reinicia [contagem = 0] [clearInterval]

function computa(acao) {

    switch (estado) {
        case 'parado':

            if (acao === 'inicia') {
                estado = 'rodando';
                timer = setInterval(() => computa('tick'), 100);
            }
            if (acao === 'reinicia') {
                estado = 'parado';
                clearInterval(timer);
                contagem = 0;
            }
            break;

        case 'rodando':

            contagem = contagem + 0.1;
            if (acao === 'pausa') {
                estado = 'parado';
                clearInterval(timer);
            }
            if (acao === 'reinicia') {
                estado = 'parado';
                clearInterval(timer);
                contagem = 0;
            }
            break;
    }

    output.innerHTML = `${paraDecimalFixo(contagem)} s`;
    
}

function paraDecimalFixo(num) {
    return contagem.toFixed(1).replace('.', ',');
}
