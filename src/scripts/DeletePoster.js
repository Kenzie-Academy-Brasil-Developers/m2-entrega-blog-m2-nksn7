import Api from "./script.js"
import Modais from "./Modais.js"
class Delete {
    static async deletPost(){
      let ulModalDelete = document.getElementById('deleteModal')
      let btnDelete = document.getElementById('delete')
      
      btnDelete.addEventListener('click', ()=>{
        Api.deletarPost(Modais.abreModalDelete())
        ulModalDelete.classList.toggle('hidden')

      })
    }
  }
  Delete.deletPost()