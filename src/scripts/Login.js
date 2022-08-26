import Api from "./script.js"

class Login {
    static renderLogin() {
        const token = localStorage.getItem("@Blog_M2:token")

        if(token) {
            window.location.assign("src/dashBoard/dashBoard.html")
        }

        const emailInput = document.getElementById("email_Login")
        const passwordInput = document.getElementById("senha_Login")
        const btnEntrar = document.getElementById("btn_entrar")

        btnEntrar.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = JSON.stringify({
                "email": emailInput.value,
                "password": passwordInput.value
            })
            
            emailInput.value = ""
            passwordInput.value = ""
            await Api.loginClientes(data)
        })
    }
}

Login.renderLogin()