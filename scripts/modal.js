/* Desenvolva sua lógica aqui */
const modalControl = document.querySelectorAll("[data-control-modal]")

    for(let i = 0; i < modalControl.length; i++){
        modalControl[i].addEventListener("click", () => {
            let modalId = modalControl[i].getAttribute("data-control-modal")
            document.getElementById(modalId).classList.toggle("show-modal")
        })
    }








{/* <div class="modal-container fixed">
<div class="modal-content flex flex-dir-column">
    <header class="flex align-items-center jc-space-between">
        <p class="title-2-bold">Registro de valor</p>
        <button class="button-greylow">X</button>
    </header>
    <form class="modalForm flex flex-dir-column">
        <p class="text-2-medium">Digite o valor e em seguida aperte no botão referente ao tipo de valor</p>
        <div>
            <p class="text-2-bold">Valor</p>
            <input class="" type="number" placeholder="R$00,00">
        </div>
        <div>
            <button class="button-greylow">Todos</button>
            <button class="button-greylow">Entradas</button>
            <button class="button-greylow">Saídas</button>
        </div>
        <div class="modalFooter flex align-items-center">
            <button class="button-outline">Cancelar</button>
            <button class="button-primary insertValue">Inserir Valor</button>
        </div>
    </form>
</div>
</div> */}