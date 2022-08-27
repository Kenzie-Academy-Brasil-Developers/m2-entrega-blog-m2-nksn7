import Api from "./script.js"

class Modais {
  static async abreModal() {
    let ulModalDelete = document.getElementById('deleteModal')
    let ulModalEdit = document.getElementById('editModal')
    let sectionPosts = document.querySelector('.posts')
    let idPost = ''

    sectionPosts.addEventListener('click', async (event)=>{
      event.preventDefault()

      if(event.target.tagName == 'IMG'){
        let arrayClasses = event.target.classList
        idPost = arrayClasses[1]

      if(arrayClasses[0] === 'lapis'){

        ulModalEdit.classList.toggle('hidden')

        const btnEditarPost = document.getElementById("btnEditarPost")
        const editPost = document.getElementById("editPost")

        btnEditarPost.addEventListener("click", async (event) => {
            event.preventDefault()

            const body = JSON.stringify({
                "content": editPost.value                
            })

            await Api.editarPost(idPost,body)
            editPost.value = ""
            ulModalEdit.classList.toggle('hidden')
            window.location.reload()
        })
      } 

        if(arrayClasses[0] === 'lixeira'){
          ulModalDelete.classList.toggle('hidden')

          let btnDelete = document.getElementById('delete')
        
          btnDelete.addEventListener('click', async ()=>{
          await Api.deletarPost(idPost)
          ulModalDelete.classList.toggle('hidden')
          window.location.reload()
          })
        }
      }
    })
  }
}
Modais.abreModal()

export default Modais