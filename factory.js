// function criaObjeto() {
//     let objeto = {}
//     return objeto
// }

// let pessoaA = criaObjeto()
// let pessoaB = criaObjeto()

// console.log(pessoaA)
// console.log(pessoaB)

// pessoaA.nome = 'Thayla'
// pessoaB.nome = 'Diana'

// console.log(pessoaA)
// console.log(pessoaB)

// The properties that are in the returned object are public and can be read outside the function
function fabricarPessoa(nome, sobrenome) {
    let pessoa = {}
    pessoa.nome = nome
    pessoa.sobrenome = sobrenome

    let internalPessoa = {}
    internalPessoa.age = 31

    function nomeCompleto() {
        return `${pessoa.nome} ${pessoa.sobrenome}`
    }

    // making internal function acessible outside the function
    pessoa.nomeCompleto = nomeCompleto

    return pessoa
}

let pessoaA = fabricarPessoa('Thayla', 'Pedroso')
let pessoaB = fabricarPessoa('Carol', 'Denvers')

console.log(pessoaA)
console.log(pessoaA.nome)
console.log(pessoaA.nomeCompleto())
console.log(pessoaA.age)
console.log(pessoaB)