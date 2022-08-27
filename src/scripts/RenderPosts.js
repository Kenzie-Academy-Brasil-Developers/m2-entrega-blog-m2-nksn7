import Api from "./script.js"

let retornoApi = await Api.listarPosts()
class RenderPosts {

    static renderizandoPosts(arr) {
        let section = document.querySelector(".posts")
        arr.forEach(element => {
            let auxData = element.createdAt
            let dataFormatada = `${auxData.slice(8,10)}/${auxData.slice(5,7)}/${auxData.slice(0,4)}`
            let divPrincipal = document.createElement("div")
            let img = document.createElement("img")
            let divPost = document.createElement("div")
            let h2 = document.createElement("h2")
            let p = document.createElement("p")
            let span = document.createElement("span")
            let divEdit = document.createElement("div")
            let imgLapis = document.createElement("img")
            let imgLixeira = document.createElement("img")

            divPrincipal.classList.add("othersUsers")
            img.src = `${element.user.avatarUrl}`
            img.alt = `Imagem de perfil de ${element.user.username}`
            divPost.classList.add("postContent")
            h2.innerText = `${element.user.username}`
            p.innerText = `${element.content}`
            span.classList.add("date")
            span.innerText = `${dataFormatada}`
            
            divPost.append(h2, p)
           
            if(element.user.id == localStorage.getItem("@Blog_M2:User_id")) {
                divPrincipal.setAttribute("id",`${element.id}`)
                divPrincipal.classList.replace("othersUsers","userLogado")
                divEdit.classList.add("userEdit")
                imgLapis.classList.add("lapis")
                imgLixeira.classList.add("lixeira")
                imgLapis.src = "../img/edit 1.png"
                imgLixeira.src = "../img/trash-bin 1.png"
                imgLixeira.classList.add(`${element.id}`)
                divEdit.append(imgLapis,imgLixeira)
                divPrincipal.append(img, divPost, span, divEdit)
            } else{
                divPrincipal.append(img, divPost, span)
            }
            
            section.appendChild(divPrincipal)
        });
        
    }
}
RenderPosts.renderizandoPosts(retornoApi.data)

export default RenderPosts