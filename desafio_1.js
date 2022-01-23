//(1)
let idade = 20

if (idade >= 18) {
    console.log('Parabéns, você é maior de idade. Agora você é um jovem adulto !')
}
humano = true

//(2)
if (idade >= 18 && humano == true) {
    console.log('Ei, não é um ornitorrinco ! Você é um humano maior de 18 !')
}

//(3)

let aniversario = 'março'

if (aniversario == 'janeiro' || aniversario == 'Dezembro') {
    console.log('Você faz aniversário nas férias !')
}


//(4)
let a = 'Rendell'
console.log(a.length)

if (a.indexOf('R') == 0) {
    console.log('seu nome começa com R')
}else {
    console.log('seu nome nao começa com R')
}
// eu acho que tem algum comando pra pegar um determinado valor de uma string mas nao consegui. 
//Eu tentei fazer a.[0] == 'R' mas nao funcionou

//(5)

let nome = 'Eendell'
if (a.length >= 6 || a.indexOf('E') == 0) {
    console.log('Seu nome tem mais de 6 letras ou começa com a letra E')
}