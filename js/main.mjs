import { HorarioDeAbrtura } from "./horaAbrir.mjs";
import {EsonderModal , MostrarModal} from "./MostartESconderMOdal.mjs"
import { RenderizarProdutos } from "./RenderizarProduto.mjs";
import { AdicionarIten } from "./AddProduto.mjs";
import { FinalizarPedido } from "./FinalizarPedido.mjs";
import { BTN } from "./comprarBTN.mjs";
import { MenuBuguer } from "./showMenuBuguer.mjs";


MenuBuguer()

//botões que vão fazer scoll
BTN()


//lista de Produtos
let Produtos = []
let Historico = ""





//Barra de navegacao dos produtos

const ProductNavigationBar = document.querySelectorAll("#Categorias nav img")
const Viewers = document.querySelectorAll("hamburguer")

let LInkSelected = ""
let HamburerViewer = document.getElementById("HamburerViewer")
let PizzaViewer = document.getElementById("PizzaViewer")
let BatataViewer = document.getElementById ("BatataViewer")
let RefriViewer = document.getElementById("RefriViewer")
let view = [HamburerViewer,PizzaViewer,BatataViewer,RefriViewer]
view.forEach((vi)=>{
    vi.style.display ="none"
    
    PizzaViewer.style.display = "flex"
})
function SelectLink() {
    ProductNavigationBar.forEach((img)=>{
        img.classList.remove("active")
    })
    Viewers.forEach((view)=>{
        view.style.display = "none"
    })
    this.classList.add("active")
    LInkSelected = this.id

    //capturando as Views

    
    //verificando o elemmento a ser mostradp
    if(LInkSelected == "hamburguer"){
        view.forEach((element)=>{
            element.style.display = "none"
        })
        HamburerViewer.style.display = "flex"
    }
    else if(LInkSelected == "pizza"){
        view.forEach((element)=>{
            element.style.display = "none"
        })
        PizzaViewer.style.display = "flex"
        

    }
    else if(LInkSelected == "batata"){
        view.forEach((element)=>{
            element.style.display = "none"
        })
        BatataViewer.style.display = "flex"
        

    }else{
        view.forEach((element)=>{
            element.style.display = "none"
        })
        RefriViewer.style.display = "flex"

    }
}

ProductNavigationBar.forEach((item)=>{
    item.addEventListener("click",SelectLink)
    
})


//hora de Abertura e Fechamento da Hamburgaria
HorarioDeAbrtura()

//MOdal ou Carrinho
const MostrarModalBTN = document.getElementById("verCarrinho")
MostrarModalBTN.addEventListener("click",MostrarModal)

const FecharModalBTN = document.getElementById("FecharModal")
FecharModalBTN.addEventListener("click",EsonderModal)

//adcionar no arrinho e Renderiza os mesmos
AdicionarIten(Produtos,RenderizarProdutos(Produtos))

//finalizando o pedido

FinalizarPedido(Produtos,Historico)
