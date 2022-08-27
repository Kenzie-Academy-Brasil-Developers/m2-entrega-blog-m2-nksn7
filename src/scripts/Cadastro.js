import Api from "./script.js"

class Cadastro {

    static cadastrandoCliente() {
        let btnCadastrar = document.getElementById("btnCadastrar")
        
        btnCadastrar.addEventListener("click", async (e) => {
            e.preventDefault()

            let username = document.querySelector(".username")
            let email = document.querySelector(".email")
            let avatarUrl = document.querySelector(".avatarUrl")
            let password = document.querySelector(".password")

            localStorage.setItem('ImagemUsuario', `${avatarUrl.value}`)
            localStorage.setItem('NoemUsuario', `${username.value}`)

            let data =JSON.stringify({
                "username": `${username.value}`,
                "email": `${email.value}`,
                "avatarUrl": `${avatarUrl.value}`,
                "password": `${password.value}`,
            })
            
            username.value = ""
            email.value = ""
            avatarUrl.value = ""
            password.value = ""
            await Api.cadastrarUsuario(data)
            console.log(data)
        })
    }

}

Cadastro.cadastrandoCliente()
