export function MenuBuguer() {
    let MenuBuguer = document.getElementById("menuBuguerContent")
    let btn = document.getElementById("menuBuguer")
    btn.addEventListener("click",()=>{
        if(MenuBuguer.style.display == "flex"){
            MenuBuguer.style.display = "none"
            return
        }else{
            MenuBuguer.style.display = "flex"
            return
        }
    })
    
    MenuBuguer.addEventListener("click",()=>{
        MenuBuguer.style.display = "none"
    })
}