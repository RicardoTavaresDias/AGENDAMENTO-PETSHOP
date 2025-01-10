const regex = /[0-9!@#$%¨&*(){}[?/;:.,\]|'"´`=-]/
const regexNumber = /\D/g

document.querySelector("#name").addEventListener("keyup", () => {
  validCaracteres("menName", "* Este campo só aceita letras!!")
}) 
 
document.querySelector("#namepet").addEventListener("keyup", () => {
  validCaracteres("menNamepet", "* Este campo só aceita letras!!")
}) 

document.querySelector("#phone").addEventListener("keyup", () => {
  validNumber("menPhone", "* Este campo só aceita números!!")
}) 


//FORMATANDO TELEFONE COM (00)0000-0000
document.querySelector("#phone").addEventListener("blur", () => {
  
  const phone = document.querySelector("#phone").value
  if(String(phone).length === 11){
  document.querySelector("#phone").value = "(" + phone.slice(0,2) + ")" + phone.slice(2,7) + "-" + phone.slice(7,11)
  }else if (String(phone).length === 10){
    document.querySelector("#phone").value = "(" + phone.slice(0,2) + ")" + phone.slice(2,6) + "-" + phone.slice(6,10)
  } else if (String(phone).length === 14 || String(phone).length === 13) {
    return false
  }else {
    error("menPhone", "* Número de telefone incompleto!")
  }
}) 

// VALIDA CARACTERES
function validCaracteres(value, mensage) {
  const id = document.querySelector("#" + value.slice(3, 10).toLowerCase())
  if (regex.test(id.value)) {
    id.value = id.value.replace(regex, "")
    error(value , mensage)
  } else {
    start(value)
  }
}

//VALIDA NÚMEROS
function validNumber(value, mensage) {
  const id = document.querySelector("#" + value.slice(3, 10).toLowerCase())
  if (regexNumber.test(id.value)) {
    id.value = id.value.replace(regexNumber, "")
    error(value , mensage)
  } else {
    start(value)
  }
}

// MENSAGEM E NUDANÇA DE ESTILO CSS
function error(value, mensage) {
  document.querySelector("." + value).textContent = mensage
  document.querySelector("." + value).style.color = "red"
  document.querySelector("#" + value.slice(3, 10).toLowerCase()).style.outlineColor = "red"
}

//VOLTA ESTADO INICIAL DA ESTILIZAÇÃO
function start(value) {
  document.querySelector("." + value).textContent = ""
  document.querySelector("." + value).style.color = ""
  document.querySelector("#" + value.slice(3, 10).toLowerCase()).style.outlineColor = ""
}

//VALIDAR O CAMPO VAZIO
export function value(value) {
  if (value.value === "") {  
    error(`men${value.id.charAt(0).toUpperCase() + value.id.slice(1)}`, `* Favor preencher o campo obrigatorio!`)
  } else {
    return true
  }
}
