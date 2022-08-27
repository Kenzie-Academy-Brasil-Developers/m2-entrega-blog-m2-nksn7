
/* Função de mudar nome e foto usuário no header
Pega usuário com get armazena em uma variável
Pega a foto armazena
Pega o nome armazena
Pega a tag img no header
Pega a tag h1 no header
Altera o src da imagem do header
Altera o innertect da imagem do header */
static async mudaHeader(){
    let idUsuario = localStorage.getItem("@Blog_M2:User_id")
    //pega esse id e faz o GET /users/{idUsuario}, armazena em formato JS em uma variável await
    //pega essa variável do GET.avatarUrl e armazena pra ser o novo valor do img.src
    //pega essa variável do GET.username e armazena pra ser o novo valor do h1.innerHtml
    let fotoUsuario = document.querySelector('.headerFotoUsuario')
    //adicionar essa classe na foto no html
    let nomeUsuario = document.querySelector('.headerNomeUsuario')
    //mesma coisa
    //atribui os valores abaixo
    fotoUsuario.src = ''
    nomeUsuario.innerText = ''
  }
  /* Função de post
  Pega o value do input
  Cria evento no input
  Pega k value do input no click
  Cria o body com o value
  Chama a função da requisição de post com o body em uma variável
  Chama a função de renderizar user logado passando a variável que armazenou o resultado da outra função
  Limpa input */
  static async criaPost(){
    let inputPost = document.getElementById('inputPost')
    //atribui esse id no html
    let btnPost = document.getElementById('btnPost')
    btnPost.addEventListener('click', (event)=>{
      event.preventDefault()
      let valueInput = inputPost.value
      let body = JSON.stringify({
        content: `${valueInput}`
      //chama a requisicao POST /posts - FORMATO DA REQUISIÇÃO
      //passando o body no body
      //armazena em uma variável
      //chama a função de renderizar
      })
      //chama a requisicao POST /posts - FORMATO DA REQUISIÇÃO
      //passando o body no body
      //armazena em uma variável
      //chama a função de renderizar
    })
  }
  /* Função de edit
  Capturar o input do modal
  Armazenar o input.value em uma variável para usar de body
  Capturar o button do modal
  Adicionar evento de click
  Realizar a função de patch passando o body como parâmetro */
  static editandoPost(id){
    let inputModalEditar = document.getElementById('inputModalEditar')
    //atribui id no html
    let btnModalEditar = document.getElementById('send')
    btnModalEditar.addEventListener('click', (event) => {
      event.preventDefault()
      let valueInputEditar = inputModalEditar.value
      let body = JSON.stringify({
        content: `${valueInputEditar}`
      })
      //pega o id da função que retorna o id do botão
      //realiza PATCH /posts/{id} - FORMATO DA REQUISIÇÃO
      //passa o body como body
    })
  }
  /* Alterar função de abrir modal editar
  Capturar post pelo Id do button e colocar
  Capturar input do modal
  Adicionar ao value do input o conteúdo do resultado da requisição
  Pensar no que fazer pra quando o usuário do post for o mesmo que está logado na hora da função renderizar
  fazer if nela
  */