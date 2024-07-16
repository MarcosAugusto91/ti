var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var horas = window.document.getElementById('horas')

if(hora > 0 && hora <= 5 ){
    horas.innerText = `Boa madrugada, agora são ${hora} hora ${minuto} min!` 
} else if(hora < 12){
    horas.innerText = `Bom dia, agora são ${hora} hora ${minuto} min!` 
} else if(hora < 18){
    horas.innerText = `Boa tarde, agora são ${hora} hora ${minuto} min!` 
} else{
    horas.innerText = `Boa noite, agora são ${hora} hora ${minuto} min!` 
}