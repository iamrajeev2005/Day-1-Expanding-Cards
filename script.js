const boxes = document.querySelectorAll('.boxes');

boxes.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClass()
        panel.classList.add('active')
    })
})

function removeActiveClass(){
    boxes.forEach((panel) => {
        panel.classList.remove('active')
    })
}