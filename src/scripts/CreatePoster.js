import Api from "./script.js"
import RenderPosts from "./RenderPosts.js"

let retornoApi = await Api.listarClientes()
class CreatePoster {

    static async alterandoCardLogado() {
        let divBase = RenderPosts.renderizandoPosts(retornoApi.data)
        divBase.classList.replace("othersUsers","userLogado")
                let divEdit = document.createElement("div")
                let imgLapis = document.createElement("img")
                let imgLixeira = document.createElement("img")
        let idAux = await fetch("https://blog-m2.herokuapp.com/posts", {
            method: "GET",
            headers: Api.headers,
          })
          .then((response) => response.json())
          .then((response) => {
            
            response.data.forEach(element => {
                
                // console.log(idAux)
                
                
                divEdit.classList.add("userEdit")
                imgLapis.classList.add("lapis")
                imgLixeira.classList.add("lixeira")
                imgLixeira.classList.add(`${element.id}`)
                imgLapis.src = "../img/edit 1.png"
                imgLixeira.src = "../img/trash-bin 1.png"
                
            });
                divEdit.append(imgLapis,imgLixeira)
                divBase.append(divEdit)
                
        
                console.log(divBase)
            
        })
          .catch((err) => console.log('This is the error' + err))

    }
}

CreatePoster.alterandoCardLogado()

