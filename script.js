let pessoas = []
let pessoaEditada = null

let nome = document.getElementById('nome').value,
    sobrenome = document.getElementById('sobrenome').value,
    cnpj = document.getElementById('cnpj').value,
    email = document.getElementById('email').value,
    contato = document.getElementById('contato').value,
    cidade = document.getElementById('cidade').value

let abrirModalButton = document.getElementById("abrirModal");
let fecharModalButton = document.getElementById("fecharModal");
let modal = document.getElementById("modal");

let modalInput1 = document.getElementById('modalInput1')
let modalInput2 = document.getElementById('modalInput2')
let modalInput3 = document.getElementById('modalInput3')
let modalInput4 = document.getElementById('modalInput4')
let modalInput5 = document.getElementById('modalInput5')
let modalInput6 = document.getElementById('modalInput6')

let btnEditar = document.getElementById('btnEditar')
let btnSalvar = document.getElementById('btnSalvar')

let pessoaEditadaIndex //Índice da pessoa editada

function fecharModal(){
    this.modal.style.display = "none";

    modalInput1.disabled = true
    modalInput2.disabled = true
    modalInput3.disabled = true
    modalInput4.disabled = true
    modalInput5.disabled = true
    modalInput6.disabled = true

    btnSalvar.style.display = 'none'

    btnSalvar.disabled = false
    btnSalvar.style.opacity = '1'
    btnSalvar.style.cursor = 'pointer'

}
    
function cadastro(){
    let nome = document.getElementById('nome').value,
        sobrenome = document.getElementById('sobrenome').value,
        cnpj = document.getElementById('cnpj').value,
        email = document.getElementById('email').value,
        contato = document.getElementById('contato').value,
        cidade = document.getElementById('cidade').value
    
    if(nome.length > 0 && sobrenome.length > 0 && cnpj.length > 0 && email.length > 0 && contato.length > 0 && cidade.length > 0){
        let pessoa = {
            nome: nome,
            sobrenome: sobrenome,
            cnpj: cnpj,
            email: email,
            contato: contato,
            cidade: cidade
        }
        pessoas.push(pessoa)

        let nomeFocado = document.getElementById('nome')
        nomeFocado.focus()
        
        pessoaEditadaIndex = pessoas.indexOf(pessoa)

        let cadastrados = document.querySelector('.cadastrados')
        let cadastroContainer = document.createElement('div')
        cadastroContainer.classList.add('novoCadastro')

        
        let novoCadastroNome = document.createElement('p')
        novoCadastroNome.textContent = 'Cliente: '+pessoa.nome+' '+pessoa.sobrenome

        cadastroContainer.appendChild(novoCadastroNome)

        let btnAcessar = document.createElement('button')
        btnAcessar.classList.add('btnAcessar')
        btnAcessar.textContent = 'ACESSAR'
        //btnAcessar.addEventListener('click', abrirModal)

        let btnExcluir = document.createElement('button')
        btnExcluir.classList.add('btnExcluir')
        btnExcluir.textContent = 'EXCLUIR'

        let btnsCadastroModal = document.createElement('div')
        btnsCadastroModal.classList.add('btnsCadastroModal')

        btnsCadastroModal.appendChild(btnAcessar)
        btnsCadastroModal.appendChild(btnExcluir)
        
        cadastroContainer.appendChild(btnsCadastroModal)

        cadastrados.appendChild(cadastroContainer)

        nome = document.getElementById('nome').value = ''
        sobrenome = document.getElementById('sobrenome').value = ''
        cnpj = document.getElementById('cnpj').value = ''
        email = document.getElementById('email').value = ''
        contato = document.getElementById('contato').value = ''
        cidade = document.getElementById('cidade').value = ''

        btnEditar.addEventListener('click', function(){
            modalInput1.disabled = false
            modalInput2.disabled = false
            modalInput3.disabled = false
            modalInput4.disabled = false
            modalInput5.disabled = false
            modalInput6.disabled = false
        
            modalInput1.focus()
        
            btnSalvar.style.display = 'block'
        })

        btnAcessar.addEventListener('click', function() {
            
            pessoaEditadaIndex = pessoas.indexOf(pessoa)
            
            pessoaEditada = pessoas[pessoaEditadaIndex]

            console.log(pessoa)
            console.log(pessoas)

            abrirModal(pessoaEditadaIndex)
        });

        btnSalvar.addEventListener('click', () =>{
            console.log('Cadastro Salvo!')
            
            //Verificador
            if(pessoaEditadaIndex != undefined){
                pessoas[pessoaEditadaIndex].nome = modalInput1.value
                pessoas[pessoaEditadaIndex].sobrenome = modalInput2.value
                pessoas[pessoaEditadaIndex].cnpj = modalInput3.value
                pessoas[pessoaEditadaIndex].email = modalInput4.value
                pessoas[pessoaEditadaIndex].contato = modalInput5.value
                pessoas[pessoaEditadaIndex].cidade = modalInput6.value
            }

            let nomePessoaElement = cadastrados.getElementsByClassName('novoCadastro')[pessoaEditadaIndex].querySelector('p');
            nomePessoaElement.textContent = 'Nome: ' + modalInput1.value + ' ' + modalInput2.value;

            modalInput1.disabled = true
            modalInput2.disabled = true
            modalInput3.disabled = true
            modalInput4.disabled = true
            modalInput5.disabled = true
            modalInput6.disabled = true
            
            btnSalvar.disabled = true
            btnSalvar.style.opacity = '0.5'
            btnSalvar.style.cursor = 'auto'
            
        })

        function abrirModal(pessoaEditadaIndex) {
            modal.style.display = "block";
        
            if (pessoaEditadaIndex !== undefined && pessoaEditadaIndex < pessoas.length) {
                modalInput1.value = pessoaEditada.nome;
                modalInput2.value = pessoaEditada.sobrenome;
                modalInput3.value = pessoaEditada.cnpj; // Se você tiver uma propriedade "cnpj" na pessoa
                modalInput4.value = pessoaEditada.email; // Se você tiver uma propriedade "email" na pessoa
                modalInput5.value = pessoaEditada.contato; // Se você tiver uma propriedade "contato" na pessoa
                modalInput6.value = pessoaEditada.cidade; // Se você tiver uma propriedade "cidade" na pessoa
            }
        }

        btnExcluir.addEventListener('click', function(){
            let paiDoExcluir = btnsCadastroModal.parentNode
            paiDoExcluir.parentNode.removeChild(paiDoExcluir)
        })

    }else{
        alert('Preencha todos os campos realizar o cadastro!')
    }
}

const modalInfo = document.getElementById("modalInfo");

// Exibe o modal ao carregar a página
window.addEventListener("load", () => {
    modalInfo.style.display = "block";
})
window.addEventListener("click", (event) => {
    if (event.target === modalInfo) {
        modalInfo.style.display = "none";
    }
});