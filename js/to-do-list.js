const botaoAdicionar = document.querySelector('.btn.btn-success');
const tarefas = document.querySelector('#tarefas');

botaoAdicionar.addEventListener('click', adicionaLinha);

function adicionaLinha() {
    
    /*
    Cria a nova linha, onde estarão todos os elementos relacionados à
    nova tarefa:
    */
    const novaRow = document.createElement('div');
    novaRow.className = 'row mt-2';
    novaRow.innerHTML = `
        <div class="col d-flex">
            <input type="checkbox" />
            <input type="text" class="flex-grow-1 ml-2" />
            <button type="button" class="btn btn-danger">
                <i class="bi bi-trash-fill"></i>
            </button>
        </div>
    `;

    // Adiciona a nova linha à página, re-renderizando o documento HTML:
    tarefas.appendChild(novaRow);

    // Captura referências para os elementos interativos da nova linha:
    const novoCheckbox = novaRow.querySelector('input[type="checkbox"]');
    const novoInputText = novaRow.querySelector('input[type="text"]');
    const novoButton = novaRow.querySelector('button');

    /**
     * Handler do checkbox.
     * 
     * @param {Event} event Evento de alteração de valor do checkbox.
     */
    function handlerCheck(event) {
        novoInputText.disabled = event.target.checked;
    }
    novoCheckbox.addEventListener('change', handlerCheck);


    /**
     * Handler do botão excluir.
     * 
     * @param {Event} event Evento de click sobre o botão de excluir.
     */
    function handlerExcluir(event) {
        tarefas.removeChild(novaRow);
    }
    novoButton.addEventListener('click', handlerExcluir);

}
