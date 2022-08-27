import Api from "./script.js"

class CreatePoster {

    static criandoPost() {
        const novoPost = document.getElementById("novoPost")
        const btnPostar = document.getElementById("btnPostar")

        btnPostar.addEventListener("click", async (event) => {
            event.preventDefault()

            const body = JSON.stringify({
                "content": novoPost.value                
            })

            novoPost.value = ""
            await Api.criarPost(body)
            window.location.reload()
        })
    }
    
}

CreatePoster.criandoPost()