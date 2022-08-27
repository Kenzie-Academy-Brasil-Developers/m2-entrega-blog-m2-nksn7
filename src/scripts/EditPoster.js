import Api from "./script.js"
import Modais from "./Modais.js"

let idUsuario = Modais.abreModalEdit()

class EditPoster {

    static editandoPost() {
        let ulModalEdit = document.getElementById('editModal')
        const editPost = document.getElementById("editPost")
        const btnEditarPost = document.getElementById("btnEditarPost")

        btnEditarPost.addEventListener("click", async (event) => {
            event.preventDefault()
            console.log("funcionou")

            const body = JSON.stringify({
                "content": editPost.value                
            })

            await Api.editarPost(idUsuario,body)
            editPost.value = ""
            ulModalEdit.classList.toggle('hidden')
            window.location.reload()
        })
    }
    
}

EditPoster.editandoPost()