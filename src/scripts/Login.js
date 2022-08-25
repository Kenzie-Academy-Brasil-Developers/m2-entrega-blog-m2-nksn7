import Api from "./script"

class Login {
    static renderLogin() {
        const token = localStorage.getItem("@Blog_M2:token")

        if(token) {
            window.location.assign("./src/dashBoard/dashBoard.html")
        }

        const emailInput = document.getElementById("email_Login")
        const passwordInput = document.getElementById("senha_Login")
        const btnEntrar = document.getElementById("btn_entrar")
        let retorno = 0

        btnEntrar.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                "email": emailInput.value,
                "password": passwordInput.value
            }
            retorno = data
            emailInput.value = ""
            passwordInput.value = ""
            Api.loginClientes(retorno)
        })
        return retorno
    }
}