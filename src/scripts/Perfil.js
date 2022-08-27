import Api from "./script.js"

class Perfil {

    static async perfilLogado() {
        let fotoPerfil = document.getElementById('fotoPerfil')
        let nomeUsuario = document.getElementById('nomeUsuario')
        let nomeUser = localStorage.getItem('NoemUsuario')
        let fotouser = localStorage.getItem('ImagemUsuario')

        fotoPerfil.src = `${fotouser}`
        nomeUsuario.innerText = `${nomeUser}`
    }
}

Perfil.perfilLogado()