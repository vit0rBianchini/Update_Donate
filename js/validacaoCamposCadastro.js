import { valida } from "./validador.js"

const concluido = (event) => {
    event.preventDefault()
    console.log(":)")
}

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {

    input.addEventListener('blur', event => {
        valida(event.target)
    })
})
