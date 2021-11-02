export function valida(input){
    const typeInput = input.dataset.type


    if(validadores[typeInput]){
        validadores[typeInput](input)
    }
    if(input.validity.valid){
        console.log(input.parentElement)
        input.parentElement.classList.remove('input-invalido')
        input.parentElement.querySelector('.input-erro').innerHTML = ''
    }else {
        input.parentElement.classList.add('input-invalido')
        input.parentElement.querySelector('.input-erro').innerHTML = mostraMensagemDeErro(typeInput, input)
    }

}

const tiposDeErro = [
    'valueMissing',
    'patternMismatch',
    'typeMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não deve estar vazio'
    },
    sobrenome: {
        valueMissing: 'O campo de sobrenome não deve estar vazio'
    },
    email: {
        valueMissing: 'O campo de email não deve estar vazio',
        typeMismatch: 'O campo digitado não é válido, tente outro e-mail'
    },
    senha: {
        valueMissing: 'O campo de senha não deve estar vazio',
        patternMismatch: 'A senha deve ter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos'
    },
    cpf: {
        valueMissing: 'O campo de CPF não deve estar vazio',
        customError: 'CPF inválido'

    },
    confSenha: {
        valueMissing: 'Digite a senha novamente nesse campo',
        customError: 'A senha não é igual à digitada anteriormente'

    }

}

const validadores = {
    cpf:input => validaCPF(input),
    senha:input => setSenha(input),
    confSenha:input => confirmaSenha(input),

}

const mostraMensagemDeErro = (typeInput, input) => {
    let mensagemErro = ''
    tiposDeErro.forEach(tipoDeErro => {
        if(input.validity[tipoDeErro]){
            mensagemErro = mensagensDeErro[typeInput][tipoDeErro]
        }
    })
    return mensagemErro

}

const senha = []

const setSenha = (input) => {
    const senhaValor = input.value
    senha.splice(0, 1 , senhaValor)
    console.log(senha)
}

const confirmaSenha = (input) => {
    const valorDigitado = input.value
    console.log(valorDigitado)
    let erroMensagem = ''
    if(senha[0] != valorDigitado){
        erroMensagem = 'A senha não é igual à digitada anteriormente0'
    }
    
    input.setCustomValidity(erroMensagem)

}

const validaCPF = (input) => {
    const cpfFormatado = input.value.replace(/\D/g,'')

    let mensagem = ''

    if(!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)){
        mensagem = 'O CPF digitado não é válido'
    }
    input.setCustomValidity(mensagem)
}

function checaCPFRepetido( cpf ){
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    let cpfValido = true

    valoresRepetidos.forEach(valor => {
        if(valor == cpf){
            cpfValido = false
        }
    })

    return cpfValido
}

function checaEstruturaCPF( cpf ){
    const multiplicador = 10

    return checaDigitoVerificador(cpf, multiplicador)
}

function checaDigitoVerificador( cpf, multiplicador ){

    if(multiplicador >= 12){
        return true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0
    const cpfSemDigito = cpf.substr(0, multiplicador - 1).split('')
    console.log(cpfSemDigito)
    const digitoVerificador = cpf.charAt(multiplicador - 1)
    console.log(digitoVerificador)
    for(let i = 0; multiplicadorInicial > 1; multiplicadorInicial--){
        soma = soma + cpfSemDigito[i] * multiplicadorInicial
        console.log(soma, cpfSemDigito[i], multiplicadorInicial)
        i ++
    }

    if(digitoVerificador == confirmaDigito(soma)){
        return checaDigitoVerificador(cpf, multiplicador + 1)
    }

    return false
}

function confirmaDigito( soma ){

    if(11 - (soma % 11) == 10 || 11 - (soma % 11) == 11){
        return soma = 0
    }else{
        return 11 - (soma % 11)
    }
    
}


export default valida


