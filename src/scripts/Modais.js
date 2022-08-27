class Modais {
    static abreModalDelete(){
     let botaoDelete = document.querySelectorAll('.lixeira')
     let ulModalDelete = document.getElementById('deleteModal')
     let idUsuario = ""
     botaoDelete.forEach(e => {
       e.addEventListener('click', ()=>{
       idUsuario = e.classList[1]
       ulModalDelete.classList.toggle('hidden')
       })})
       return idUsuario
    }
    static abreModalEdit(){
     let botaoEdit = document.querySelectorAll('.lapis')
     let ulModalEdit = document.getElementById('editModal')
     botaoEdit.forEach(e => {
       e.addEventListener('click', ()=>{
       ulModalEdit.classList.toggle('hidden')
         console.log(ulModalEdit)
       })})       
    }
   }
   Modais.abreModalDelete()
   Modais.abreModalEdit()

   export default Modais