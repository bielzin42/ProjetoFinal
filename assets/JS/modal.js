// selecionamos as variáveis que receberão os valores do botão que abre, que fecha e do overlay.

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// ao clickar no botão, abre o modal. estudar forEach.
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

// ao clickar no botão de fechar, fecha o modal
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

// ao clickar no 'overlay' fecha o modal e o overlay
overlay.addEventListener('click', () => 
{
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => 
        {
            closeModal(modal);
        })
})


// função que abre o modal adicionando a classe active para o modal e para o overlay
//classList.add(adiciona classes EXISTENTES no CSS no HTML)
function openModal (modal) 
{
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

// close modal retira as classes do CSS do HTML.
function closeModal (modal) 
{
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}