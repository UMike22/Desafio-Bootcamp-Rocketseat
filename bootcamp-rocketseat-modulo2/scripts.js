const ModalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
for(let card of cards){
   console.log(card)
     card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")
        const iframe = ModalOverlay.querySelector("iframe")
        iframe.src = `https://www.youtube.com.br/embed/${videoId}`
        ModalOverlay.classList.add('active')
    }) 
}
const closeModal = document.querySelector('.close-modal')
closeModal.addEventListener("click", function(){
    ModalOverlay.classList.remove('active')
    ModalOverlay.querySelector("iframe").src = ""
})



