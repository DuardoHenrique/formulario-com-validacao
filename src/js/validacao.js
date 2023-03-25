const inputs = document.querySelectorAll('.input')
const btnSubmit = document.getElementById('btnSubmit') 
const formulario = document.getElementsByClassName('form')[0]

formulario.addEventListener("submit", (form) => {
    form.preventDefault()
})


inputs.forEach(element => {
    console.log(element)
    btnSubmit.addEventListener('click', () => {
        if (element.value == "") {
            element.classList.remove('preenchido')
            element.classList.add('vazio')
            element.nextElementSibling.classList.remove('none')
        } else {
            element.classList.add('preenchido')
            element.classList.remove('vazio')
            element.nextElementSibling.classList.add('none')
        }
    })
})