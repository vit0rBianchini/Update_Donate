import { valida } from "./validador.js"


const inputs = document.querySelectorAll('input')

inputs.forEach(input => {

    input.addEventListener('blur', event => {
        valida(event.target)
    })
})
