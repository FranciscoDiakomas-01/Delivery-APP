export function HorarioDeAbrtura() {
    let  data = new Date()
    let hora = data.getHours()
    let HoraDiv = document.querySelector(".hr")
    if(hora >= 12 && hora <= 22){
        HoraDiv.style.backgroundColor = "green"
    }else{
        HoraDiv.style.backgroundColor = "red"
    }
    
}