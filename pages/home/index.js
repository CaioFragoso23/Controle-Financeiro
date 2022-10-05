/* Desenvolva sua lógica aqui */
let tableSum = 0
function render(array) {
    tableSum = 0
    const cardsContainer = document.getElementById("cardsContainer")
    cardsContainer.innerHTML = ''
    const tableCardsSum = document.getElementById("sum")
 
    array.forEach((value) => {
 
        const card = cardValue(value)
        console.log(card)
        cardsContainer.appendChild(card)
        tableSum = tableSum + value.value
        tableCardsSum.innerText = `R$:${tableSum}`
    })
    console.log(cardsContainer)
}

function filterValues(){
    let filterButtons = document.querySelectorAll('.filter-items')
    filterButtons.forEach((button) => {
        button.addEventListener('click', () =>{
            console.log(button.innerText)
            if(button.innerText === 'Todos'){
                render(insertedValues)
            }
            else if(button.innerText === 'Entrada'){
                let arrayEntrada = insertedValues.filter((value) =>{
                    return value.categoryID == 0
                })
                render(arrayEntrada)
            }
            else{
                let arraySaida = insertedValues.filter((value) => {
                    return value.categoryID == 1
                })
                render(arraySaida)
            }
    })
    })
}
filterValues()

const cardValue = ({id, value, categoryID}) => {

    const cardsContainer = document.getElementById("cardsContainer")

    const tableCardsSum = document.getElementById("sum")
    
    const li = document.createElement("li")
    li.classList = "cardValue flex align-items-center jc-space-between"
    li.id = id

    const input = document.createElement("input")
    input.type = "radio"
    input.name = "select"

    const p = document.createElement("p")
    p.innerText = `R$: ${value}`

    const buttons = document.createElement("div")

    const buttonCategory = document.createElement("button")
    buttonCategory.classList.add(`${categoryID}`) 
    buttonCategory.classList.add("button-greylow")

    if(categoryID === 0){
        buttonCategory.innerText = "Entrada"
        li.classList.add("Entrada")
    }
    else{
        buttonCategory.innerText = "Saída"
        li.classList.add("Saída")
    }


    const buttonDelete = document.createElement("button")
    buttonDelete.innerHTML = `<img src="/assets/trash.svg" alt="">`
    buttonDelete.classList.add("button-delete")

    buttonDelete.addEventListener("click", function(){
        let card = document.getElementById(id);
        card.remove();
        tableSum = tableSum - value
        tableCardsSum.innerText = `R$:${tableSum}`
    })


    buttons.append(buttonCategory, buttonDelete)
    li.append(p, buttons)
    
    return li
}
render(insertedValues)





let submitModal = document.getElementById('insertValue')
submitModal.addEventListener('click', (event) => {
    event.preventDefault()
    let submitValueModal = document.getElementById('newValue')
    let radioModal = document.querySelector('input[name="selectTag"]:checked')
    console.log(radioModal.value)
    const data = {id: insertedValues.length + 1,
         value: parseFloat(submitValueModal.value),
         categoryID: parseInt(radioModal.value)}
         

    insertedValues.push(data)
    render(insertedValues)
    
    
})


{/* <li class="cardValue flex align-items-center jc-space-between">
<p>R$:Valor,00</p>
<div class="flex align-items-center">
    <button id="saida" class="button-greylow">Saída</button>
    <button class="button-delete"><img src="/assets/trash.svg" alt=""></button>
</div>
</li> */}



