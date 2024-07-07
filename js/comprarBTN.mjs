export function BTN() {

    const ALLCBtn = document.querySelectorAll("button")
    //verifiando se é botão comprar
    ALLCBtn.forEach(btn=>{
        btn.addEventListener("click",(e)=>{
            if(e.target.classList == "ComprarBTN"){
                window.scrollTo(0,1500)
                return
            }
            
        })
    })
    
}