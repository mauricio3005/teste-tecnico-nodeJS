const REGEX_PALAVRA = /^[A-Za-zÀ-ÿ]{3,}$/

function validarNome(nome) {
    if (typeof nome !== "string") {
        return "Nome é obrigatório"
    }
    const palavras = nome.trim().split(/\s+/).filter(Boolean)
    if (palavras.length < 2) {
        return "Nome deve conter pelo menos duas palavras"
    }
    const possuiPalavraInvalida = palavras.some((palavra) => !REGEX_PALAVRA.test(palavra))
    if (possuiPalavraInvalida) {
        return "Cada palavra do nome deve ter pelo menos 3 letras"
    }
    return null
}

function validarTelefone(telefone) {
    if (typeof telefone !== "string") {
        return { erro: "Telefone é obrigatório" }
    }
    const digitos = telefone.replace(/\D/g, "")
    if (digitos.length !== 10 && digitos.length !== 11) {
        return { erro: "Telefone deve conter 10 ou 11 dígitos (DDD + número)" }
    }
    if (digitos.length === 11 && digitos[2] !== "9") {
        return { erro: "Celular deve conter o nono dígito (DDD9XXXXXXXX)" }
    }
    return { digitos }
}

export function validarContato(nome, telefone) {
    const erroNome = validarNome(nome)
    if (erroNome) {
        return { erro: erroNome }
    }

    const resultadoTelefone = validarTelefone(telefone)
    if (resultadoTelefone.erro) {
        return { erro: resultadoTelefone.erro }
    }

    return { telefone: resultadoTelefone.digitos }
}
