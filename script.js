// /* Select the elements with the following ids
//     * modal
//     * open-model-btn
//     * close-modal-btn
//     * BOUNS: overly
// */

// const model = document.querySelector("#Model")
// const openModalButton = document.querySelector("#open-modal-btn")
// const closeModalButton = document.querySelector("#close-modal-btn")
// const overlay = document.querySelector("#overlay")


// // Creat a click eventlistener for the open-model-btn that adds the class "open" to the model

// openModalButton.addEventListener("click",() =>{
//     model.classList.add("open")

// })

// // BOUNS: also add the class "open" to the overlay

const modal = document.querySelector("#modal")
const openModalButton = document.querySelector("#open-modal-btn")
const closeModalButton = document.querySelector("#close-modal-btn")
const overlay = document.querySelector("#overlay")

// Open modal
openModalButton.addEventListener("click", () => {
    modal.classList.add("open")
    overlay.classList.add("open")
})

// Close modal
closeModalButton.addEventListener("click", () => {
    modal.classList.remove("open")
    overlay.classList.remove("open")
})

// Close modal when clicking overlay
overlay.addEventListener("click", () => {
    modal.classList.remove("open")
    overlay.classList.remove("open")
})