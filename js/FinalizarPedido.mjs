import { RenderizarProdutos } from "./RenderizarProduto.mjs"
export function FinalizarPedido(Produtos, Historico){
    let forms = document.querySelectorAll("form")
    forms.forEach(form=>{
        form.addEventListener("submit",(e)=>{
            e.preventDefault()
        })
    })
    const FinalizarBTN = document.getElementById("Finalizar")
    FinalizarBTN.addEventListener("click",()=>{


        //pegando o valor do input

        let input = document.querySelector("input")

        //pegando o validador do input
        let validator = document.getElementById("validator")

        //loader

        const loader = document.querySelector(".spinner")
        //fazendo com que quando estiver a digitar que o validador desapareça
        input.addEventListener("input",()=>{
            validator.style.display = "none"
        })

        if(!input.value){
            validator.style.display = "flex"
        }
        else if(Produtos.length === 0){
            validator.style.display = "flex"
            validator.textContent = "A sua Carrinha Está Vazia!"

        }
        else{
            
            let endereco = input.value
            loader.style.display = "flex"
            setTimeout(()=>{
                    alert("Produtos Enviado")
                    loader.style.display = "none"

                    //salvando o Histórico de  compra no localStorage
                    let total = 0
                    Produtos.forEach((produto)=>{
                        Historico += `Nome : ${produto.Nome} , Quantidade :  ${produto.Quantidade} , Preço : ${produto.Preço} \n`
                        total += produto.Quantidade * produto.preco
                    })
                    
                    Historico +=`\nTotal${document.getElementById("totalValor").textContent}`
                    localStorage.setItem("Histórico" , Historico)

                    //Esvaziando a Lista e Recarregar a página
                    location.reload()
            },1000)
            
        }

        input.value = ""
    })
}