class Modais {
  static abreModalDelete() {
    let botaoDelete = document.querySelectorAll('.lixeira')
    let ulModalDelete = document.getElementById('deleteModal')
    let idUsuario = ""
    botaoDelete.forEach(e => {
      e.addEventListener('click', () => {
        idUsuario = e.classList[1]
        ulModalDelete.classList.toggle('hidden')
      })
    })
    return idUsuario
  }
  static abreModalEdit() {
    let botaoEdit = document.querySelectorAll('.lapis')
    let ulModalEdit = document.getElementById('editModal')
    let idUsuario = ""
    botaoEdit.forEach(e => {
      e.addEventListener('click', () => {
        idUsuario = e.classList[1]
        ulModalEdit.classList.toggle('hidden')
      })
    })
    return idUsuario
  }
}
Modais.abreModalDelete()
Modais.abreModalEdit()

export default Modais