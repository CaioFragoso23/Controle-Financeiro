/* Desenvolva sua lógica aqui */
const getValues = insertedValues.map((independentValue) => {
        return independentValue
})


console.log(getValues)

let tableSum = 0
const cardValue = (value) => {
    const cardsContainer = document.getElementById("cardsContainer")
    const tableCardsSum = document.getElementById("sum")


    
for(let i = 0; i < value.length; i++){

    const li = document.createElement("li")
    li.classList = "cardValue flex align-items-center jc-space-between"
    li.id = value[i].id

    const input = document.createElement("input")
    input.type = "radio"
    input.name = "select"

    const p = document.createElement("p")
    p.innerText = `R$: ${value[i].value}`

    const buttons = document.createElement("div")

    const buttonCategory = document.createElement("button")
    buttonCategory.classList.add(`${value[i].categoryID}`) 
    buttonCategory.classList.add("button-greylow")

    if(value[i].categoryID === 1){
        buttonCategory.innerText = "Entrada"
    }
    else{
        buttonCategory.innerText = "Saída"
    }


    tableSum = tableSum + value[i].value

    
    tableCardsSum.innerText = `R$: ${tableSum}`

    const buttonDelete = document.createElement("button")
    buttonDelete.innerHTML = `<img src="/assets/trash.svg" alt="">`
    buttonDelete.classList.add("button-delete")

    buttonDelete.addEventListener("click", function(){
        let card = document.getElementById(value[i].id);
        card.remove();

        tableSum = tableSum - value[i].value
        tableCardsSum.innerText = `R$: ${tableSum}`
    })


    buttons.append(buttonCategory, buttonDelete)
    li.append(p, buttons)
    cardsContainer.appendChild(li)

    

}
       
}

cardValue(getValues)


const addingValues = (click) =>{
    click.preventDefault()
    const pushValue       = document.getElementById("newValue")
    const categoryEntrada = document.getElementById("entrada")
    const categorySaida   = document.getElementById("saida")
    const submitValue     = document.getElementById("insertValue")
    const modalForm       = document.getElementById("insertValueForm")

    modalForm.preventDefault()


    let addValue = {
        id: insertedValues.length + 1,
        value: pushValue.value,
        categoryID: 0
    }

    categoryEntrada.addEventListener("click", () => {
        addValue.categoryID = 1
    })

    categorySaida.addEventListener("click", () => {
        addValue.categoryId = 2
    })
    

    insertedValues.push(addValue)
    document.forms[0].reset()

    submitValue.addEventListener("click", addingValues())
}



{/* <li class="cardValue flex align-items-center jc-space-between">
<p>R$:Valor,00</p>
<div class="flex align-items-center">
    <button id="saida" class="button-greylow">Saída</button>
    <button class="button-delete"><img src="/assets/trash.svg" alt=""></button>
</div>
</li> */}



function createModal(){
    let modalContainer = document.createElement("div")
    let modalContent   = document.createElement("div")
    let modalHeader    = document.createElement("header")
    let modalTitle     = document.createElement("p")
    let modalClose     = document.createElement("button")
    let modalForm      = document.createElement("form")
    let modalDescription = document.createElement("p")
    let modalInputDiv    = document.createElement("div")
    let modalInputTitle  = document.createElement("p")
    let modalInput       = document.createElement("input")
    let selectCategory    = document.createElement("div")
    let categoryDescription = document.createElement("p")
    let categoryButtons = document.createElement("div")
    let buttonEntrada    = document.createElement("button")
    let buttonSaida      = document.createElement("button")
    let modalFooter      = document.createElement("div")
    let cancelButton     = document.createElement("button")
    let submitButton     = document.createElement("button")

    modalContainer.classList = "modal-container fixed"
    modalContainer.id = "insert-value"

    modalContent.classList = "modal-content flex flex-dir-column"

    modalHeader.classList = "flex align-items-center jc-space-between"
    modalTitle.classList = "title-2-bold"
    modalClose.classList = "button-greylow"

    modalForm.classList = "modalForm flex flex-dir-column"
    modalForm.id = "insertValueForm"
    modalDescription.classList = "text-2-medium"
    modalInputTitle.classList = "text-2-bold"
    modalInput.classList = "newValue"
    modalInput.id = "newValue"

    selectCategory.classList = "selectTags"
    categoryDescription.classList = ""
    categoryButtons.classList = "tagButtons"
    buttonEntrada.classList = "button-greylow"
    buttonEntrada.id = "entrada"
    buttonSaida.classList = "button-greylow"
    buttonSaida.id = "saida"

    modalFooter.classList = "modalFooter flex align-items-center jc-flex-end"
    cancelButton.classList = "button-outline"
    submitButton.classList = "button-primary insertValue"
    submitButton.id = "insertValue"

    modalFooter.append(cancelButton, submitButton)
    categoryButtons.append(buttonEntrada, buttonSaida)
    selectCategory.append(categoryDescription, categoryButtons)
    modalInputDiv.append(modalInputTitle, modalInput)
    modalForm.append(modalDescription, modalInputDiv, selectCategory, categoryButtons, modalFooter)
    modalHeader.append(modalTitle, modalClose)
    modalContent.append(modalHeader, modalForm, modalFooter)
    modalContainer.append(modalContent)
}
{/*     <div id="insert-value" class="modal-container fixed">
        <div class="modal-content flex flex-dir-column">
            <header class="flex align-items-center jc-space-between">
                <p class="title-2-bold">Registro de valor</p>
                <button data-control-modal="insert-value" class="button-greylow">X</button>
            </header>
            <form id="insertValueForm" class="modalForm flex flex-dir-column">
                <p class="text-2-medium">Digite o valor e em seguida aperte no botão referente ao tipo de valor</p>
                <div>
                    <p class="text-2-bold">Valor</p>
                    <input id="newValue" class="newValue" type="number" placeholder="R$00,00">
                </div>
                <div class="selectTags">
                    <p>Tipo de valor</p>
                    <div class="tagButtons">
                        <button id="entrada" class="button-greylow">Entradas</button>
                        <button id="saida" class="button-greylow">Saídas</button>
                    </div>
                </div>
                <div class="modalFooter flex align-items-center jc-flex-end">
                    <button class="button-outline">Cancelar</button>
                    <button id="insertValue" class="button-primary insertValue">Inserir Valor</button>
                </div>
            </form>
        </div>
        </div> */}