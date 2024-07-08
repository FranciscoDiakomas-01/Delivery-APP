//Renderizar Produtos
import { AdicionarIten } from "./AddProduto.mjs"
export function RenderizarProdutos(Produto) {
    const Carrinho = document.getElementById("carrinho")
    let TotalVAlor = document.getElementById("totalValor")
    let TotalItens = 0
    Carrinho.innerHTML = ""
    let total = 0
    Produto.forEach((produto)=>{

        const divCar = document.createElement("div")
        const divCarTitle = document.createElement("div")
        const divCarBTNs = document.createElement("div")
        const RemoveBTn = document.createElement("button")
        const AddionarBTN = document.createElement("button")
        

        divCar.className = "car"
        divCarTitle.className = "titleModal"
        divCarBTNs.classList = "cardBTNs"

        RemoveBTn.textContent = "Remover"
        RemoveBTn.id = produto.Nome

        RemoveBTn.addEventListener("click", (e)=>{
            let Existe = Produto.find((p)=>{
                return p.Nome == e.target.id
            })
            let Index = Produto.findIndex(p=>{
                return p.Nome == e.target.id
            })
            if(Existe.Quantidade == 1){
                Produto.splice(Index,1)
                RenderizarProdutos(Produto)
                return

            }else{
                Existe.Quantidade -= 1
                RenderizarProdutos(Produto)
                return
            }
        
        })

        AddionarBTN.textContent = "Adicionar"
        AddionarBTN.id = produto.Nome

        AddionarBTN.addEventListener("click",(e)=>{
            let Existe = Produto.find((p)=>{
                return p.Nome == e.target.id
            })
            if(Existe){
                Existe.Quantidade += 1
            }
            RenderizarProdutos(Produto)
        })

        divCarTitle.innerHTML = `
                        <img src="${produto.ImagemURL}" alt="">
                        <h4>${produto.Nome}</h4>
                        <span>Preço ${Number(produto.Preço).toFixed(2)} KZ</span>
                        <span>(Qtd <span>${produto.Quantidade}</span>)</span>
        
        `
        
        divCarBTNs.append(RemoveBTn)
        divCarBTNs.append(AddionarBTN)
    
        divCar.append(divCarTitle)
        divCar.append(divCarBTNs)
        Carrinho.append(divCar)
        TotalItens+=produto.Quantidade
        total += produto.Preço * produto.Quantidade
    })
    
    let totalProdutosHTML = document.getElementById("totalProdutos").textContent = `${TotalItens}`
    let TotalItensHTML = document.getElementById("ElementosSelecionados")
    TotalItensHTML.textContent = `${TotalItens}`
    TotalVAlor.textContent = Number(total).toLocaleString("pt",{
        style: "currency",
        currency : "AOA"
    })
}