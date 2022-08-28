import Logout from "./Logout.js"
// import RenderPosts from "./RenderPosts.js"
class Api {
    
    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem('@Blog_M2:token')
    static headers = {
        "Content-Type": "application/json", 
        Authorization: `Bearer: ${this.token}`             
        }
    static async listarPosts(){
        const listaDePosts = await fetch(`${this.baseUrl}/posts`, {
          method: "GET",
          headers: this.headers,
        })
        .then((response) => response.json())
        .then((response) => response)
        .catch((err) => console.log('This is the error' + err))

      
        return listaDePosts
    }

    static async loginUsuario(body){
        const userLogin = await fetch(`${this.baseUrl}/users/login`,{
            method: "POST",
            headers: this.headers,
            body: body
          })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem("@Blog_M2:token", res.token)
            localStorage.setItem("@Blog_M2:User_id", res.userId)
            window.location.assign('src/dashBoard/dashBoard.html')
          })
          .catch(err => console.log(err))
      
          return userLogin
    }

    static async cadastrarUsuario(body){
        const Usuario = await fetch(`${this.baseUrl}/users/register`, {
            method: "POST",
            headers: this.headers,
            body: body
          })
          .then(res => res.json())
          .then(res =>  res)
          .catch(err => console.log(err))
      
          return Usuario
    }

    static async criarPost(body) {
      const novoPost = await fetch(`${this.baseUrl}/posts`, {
        method: "POST",
        headers: this.headers,
        body: body
      })
      .then(res => res.json())
      .then(res =>  res)
      .catch(err => console.log(err))

      return novoPost
    }

    static async editarPost(id, body){
        const UsuarioEditado = await fetch(`${this.baseUrl}/posts/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: body
        })
        .then(res => res.json())
        .then(res =>  res)
        .catch(err => console.log(err))
    
        return UsuarioEditado
        
    }

    static async deletarPost(id){
      await fetch(`${this.baseUrl}/posts/${id}`, {
        method: "DELETE",
        headers: this.headers
    })
    .catch(err => console.log(err))
    }

}


export default Api