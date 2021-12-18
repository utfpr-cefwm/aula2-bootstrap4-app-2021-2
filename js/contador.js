const botaoMenos = document.querySelector('.btn.btn-danger');
const botaoMais = document.querySelector('.btn.btn-success');

botaoMenos.addEventListener('click', () => soma(-1) );
botaoMais.addEventListener('click', () => soma(+1) );

const output = document.querySelector('output');

/**
 * Computa a contagem atual, e então re-renderiza o elemento
 * `<output>`.
 *
 * @param {number} valor Valor a ser acrescido da contagem atual;
 * pode ser negativo.
 */
function soma(valor) {

    // Computa a contagem atual:
    const valorAtual = +output.innerHTML + valor;
    output.innerHTML = valorAtual;

    // Adiciona ou remove classes dependendo da contagem atual:
    if (valorAtual > 0) {
        output.classList.add('text-success');
    } else if (valorAtual < 0) {
        output.classList.add('text-danger');
    } else {
        output.classList.remove('text-success');
        output.classList.remove('text-danger');
    }
}