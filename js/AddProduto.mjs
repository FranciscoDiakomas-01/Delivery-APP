import { RenderizarProdutos } from "./RenderizarProduto.mjs"
export function AdicionarIten(Produtos){
    
    let cardBTNs = document.querySelectorAll(".priceCard button")
    cardBTNs.forEach((iten) =>{
        iten.addEventListener("click",()=>{
            let NomeProduto = iten.getAttribute("data-name")
            let Preço = Number(iten.getAttribute("data-price"))
            let imagem = iten.getAttribute("data-image")

            if(Produtos.length == 0){
                Produtos.push({
                    Nome : NomeProduto,
                    Preço : Preço ,
                    ImagemURL : imagem,
                    Quantidade : 1
                })
            }
            else{

                //verificando se o iten existe
                const ExisteIten = Produtos.find(item=>{
                    return item.Nome == NomeProduto
                })

                if(ExisteIten){
                    ExisteIten.Quantidade += 1
                    
                }
                else{
                    Produtos.push({
                        Nome : NomeProduto,
                        Preço : Preço ,
                        ImagemURL : imagem,
                        Quantidade : 1
                    })
                }



            }
            RenderizarProdutos(Produtos)
            
        })
    })
}
