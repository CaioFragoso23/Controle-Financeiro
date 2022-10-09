/* Desenvolva sua lógica aqui */
const modalControl = document.querySelectorAll("[data-control-modal]")

        modalControl.forEach((modalButton) => {
            modalButton.addEventListener("click", () => {
                let modalId = modalButton.getAttribute("data-control-modal")
                document.getElementById(modalId).classList.toggle("show-modal")
        })
    });


    // function createModal(){
    //     const app = document.getElementById('app')
    //     let modalContainer = document.createElement("div")
    //     let modalContent   = document.createElement("div")
    //     let modalHeader    = document.createElement("header")
    //     let modalTitle     = document.createElement("p")
    //     let modalClose     = document.createElement("button")
    //     let modalForm      = document.createElement("form")
    //     let modalDescription = document.createElement("p")
    //     let modalInputDiv    = document.createElement("div")
    //     let modalInputTitle  = document.createElement("p")
    //     let modalInput       = document.createElement("input")
    //     let selectCategory    = document.createElement("div")
    //     let categoryDescription = document.createElement("p")
    //     let categoryButtons = document.createElement("div")
    //     let buttonEntrada    = document.createElement("input")
    //     let buttonSaida      = document.createElement("input")
    //     let modalFooter      = document.createElement("div")
    //     let cancelButton     = document.createElement("button")
    //     let submitButton     = document.createElement("button")
    
    //     modalContainer.classList = "modal-container fixed"
    //     modalContainer.id = "insert-value"
    
    //     modalContent.classList = "modal-content flex flex-dir-column"
    
    //     modalHeader.classList = "flex align-items-center jc-space-between"
    //     modalTitle.classList = "title-2-bold"
    //     modalClose.classList = "button-greylow"
    
    //     modalForm.classList = "modalForm flex flex-dir-column"
    //     modalForm.id = "insertValueForm"
    //     modalDescription.classList = "text-2-medium"
    //     modalInputTitle.classList = "text-2-bold"
    //     modalInput.classList = "newValue"
    //     modalInput.id = "newValue"
    
    //     selectCategory.classList = "selectTags"
    //     categoryDescription.classList = ""
    //     categoryButtons.classList = "tagButtons"

    //     buttonEntrada.type = "radio"
    //     buttonEntrada.classList = "inputRadio"
    //     buttonEntrada.id = "entrada"
    //     buttonEntrada.name = "selectTag"
    //     buttonEntrada.value = "1"

    //     buttonSaida.type = "radio"
    //     buttonSaida.classList = "inputRadio"
    //     buttonSaida.id = "saida"
    //     buttonSaida.name = "selectTag"
    //     buttonSaida.value = "2"
    
    //     modalFooter.classList = "modalFooter flex align-items-center jc-flex-end"
    //     cancelButton.classList = "button-outline cancelValue"
    //     // cancelButton.[data-control-modal] = "insert-value"
    //     submitButton.classList = "button-primary insertValue"
    //     submitButton.id = "insertValue"
    //     submitButton.value = "price"
    
    //     modalFooter.append(cancelButton, submitButton)
    //     categoryButtons.append(buttonEntrada, buttonSaida)
    //     selectCategory.append(categoryDescription, categoryButtons)
    //     modalInputDiv.append(modalInputTitle, modalInput)
    //     modalForm.append(modalDescription, modalInputDiv, selectCategory, categoryButtons, modalFooter)
    //     modalHeader.append(modalTitle, modalClose)
    //     modalContent.append(modalHeader, modalForm, modalFooter)
    //     modalContainer.append(modalContent)
    //     app.appendChild(modalContainer)
    // };

    
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
            
let cancel = document.getElementsByClassName('cancelValue')[0]
    cancel.addEventListener('click', (event) => event.preventDefault())