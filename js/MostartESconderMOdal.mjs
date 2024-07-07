export function MostrarModal (){
    let modalBox = document.getElementById("modalBox")
    modalBox.style.visibility = "visible"
    //pegando o validador do input
    let validator = document.getElementById("validator")
    validator.textContent = "Endereço Inválido"
    validator.style.display = "none"
    

}
export function EsonderModal (){
    let modalBox = document.getElementById("modalBox")
    modalBox.style.visibility = "hidden"
    let validator = document.getElementById("validator")
    validator.textContent = "Endereço Inválido"
    validator.style.display = "none"

}

