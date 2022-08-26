import Api from "./script.js"
import Modais from "./Modais.js"
class Delete {
    static async deletPost(){
      let sectionPosts = document.querySelector('.posts')
      let div = document.querySelectorAll('.userLogado')
      let botaoDelete = document.querySelectorAll('.lixeira')
      let divADeletar = document.querySelector('.posts')
      let ulModalDelete = document.getElementById('deleteModal')
      let btnDelete = document.getElementById('delete')
      
      btnDelete.addEventListener('click', ()=>{
        Api.deletarCliente(Modais.abreModalDelete())
        ulModalDelete.classList.toggle('hidden')

      })
    }
  }
  Delete.deletPost()