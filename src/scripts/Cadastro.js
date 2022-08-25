import Api from "./api.js"

class Cadastro {

    static cadastrandoCliente() {
        let btnCadastrar = document.getElementById("btnCadastrar")
        let retorno = 0
        btnCadastrar.addEventListener("click", (e) => {
            e.preventDefault()

            let username = document.querySelector(".username")
            let email = document.querySelector(".email")
            let avatarUrl = document.querySelector(".avatarUrl")
            let password = document.querySelector(".password")

            let data =JSON.stringify({
                "username": `${username.value}`,
                "email": `${email.value}`,
                "avatarUrl": `${avatarUrl.value}`,
                "password": `${password.value}`,
            })
            retorno = data
            username.value = ""
            email.value = ""
            avatarUrl.value = ""
            password.value = ""
            Api.cadastrarCliente(retorno)
            console.log(retorno)
        })
        return retorno
    }

}

Cadastro.cadastrandoCliente()

export default Cadastro