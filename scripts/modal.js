/* Desenvolva sua lógica aqui */
const modalControl = document.querySelectorAll("[data-control-modal]")

        modalControl.forEach((modalButton) => {
            modalButton.addEventListener("click", () => {
                let modalId = modalButton.getAttribute("data-control-modal")
                document.getElementById(modalId).classList.toggle("show-modal")
        })
    });
    
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