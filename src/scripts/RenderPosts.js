import Api from "./script.js"

let retornoApi = await Api.listarClientes()
class RenderPosts {

    static renderizandoPosts(arr) {
        let section = document.querySelector(".posts")
        let retornandoDivPrincipal = 0
        arr.forEach(element => {
            let auxData = element.createdAt
            let dataFormatada = `${auxData.slice(8,10)}/${auxData.slice(5,7)}/${auxData.slice(0,4)}`
            let divPrincipal = document.createElement("div")
            let img = document.createElement("img")
            let divPost = document.createElement("div")
            let h2 = document.createElement("h2")
            let p = document.createElement("p")
            let span = document.createElement("span")

            divPrincipal.classList.add("othersUsers")
            img.src = `${element.user.avatarUrl}`
            img.alt = `Imagem de perfil de ${element.user.username}`
            divPost.classList.add("postContent")
            h2.innerText = `${element.user.username}`
            p.innerText = `${element.content}`
            span.classList.add("date")
            span.innerText = `${dataFormatada}`

            divPost.append(h2, p)
            divPrincipal.append(img, divPost, span)
            retornandoDivPrincipal = divPrincipal
            section.appendChild(divPrincipal)
        });
        return retornandoDivPrincipal
    }
}
RenderPosts.renderizandoPosts(retornoApi.data)

export default RenderPosts