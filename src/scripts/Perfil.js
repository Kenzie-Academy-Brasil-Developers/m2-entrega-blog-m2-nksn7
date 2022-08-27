import Api from "./script.js"

class Perfil {

    static async perfilLogado() {
        let divPerfil = document.querySelector(".user")
        let aux = localStorage.getItem("@Blog_M2:User_id")
        const listaDePosts = await fetch(`${Api.baseUrl}/posts`, {
            method: "GET",
            headers: Api.headers,
          })
          .then((response) => response.json())
          .then((response) => {
            response.data.forEach(element => {
                if(element.user.id == aux) {
                    let imgPerfil = document.createElement("img")
                    let pPerfil = document.createElement("p")
                    imgPerfil.setAttribute("id", "fotoPerfil")
                    imgPerfil.src = element.user.avatarUrl
                    imgPerfil.alt = `Foto do perfil de ${element.user.username}`
                    pPerfil.setAttribute("id", "nomeUsuario")
                    pPerfil.innerText = element.user.username
                    divPerfil.append(imgPerfil,pPerfil)
                }
                console.log(element.user.id)
                console.log(aux)
            });
            
          })
          console.log(divPerfil)
    }
}

Perfil.perfilLogado()