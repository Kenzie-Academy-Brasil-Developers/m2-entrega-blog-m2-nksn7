import Login from "./Login.js"
class Api {
    
    static baseUrl = "https://blog-m2.herokuapp.com"
    static headers = {"Content-Type": "application/json"}
    static async listarClientes(){
        // const listaDeClientes = await fetch("https://atividade-api-clientes.herokuapp.com/clientes")
        // .then((response) => response.json())
        // .then((response) => {return response})
        // .catch((err) => console.log('This is the error' + err))

        // return listaDeClientes
    }

    static async loginClientes(body){
        const userLogin = await fetch(`${baseUrl}/users/login`,{
            method: "POST",
            headers: headers,
            body: body
          })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem("@Blog_M2:token", res.token)
            localStorage.setItem("@Blog_M2:User_id", res.userId)
          })
          .catch(err => console.log(err))
      
          return userLogin
    }

    static async cadastrarCliente(body){
        const cliente = await fetch(`${baseUrl}/users/register`, {
            method: "POST",
            headers: headers,
            body: body
          })
          .then(res => res.json())
          .then(res => res)
          .catch(err => console.log(err))
      
          return cliente
    }

    static async editarCliente(id, body){
        // const clienteEditado = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`, {
        //     method: "PATCH",
        //     headers: {"Content-Type": "application/json"},
        //     body: body
        // })
        // .then(res => res.json())
        // .catch(err => console.log(err))
    
        // return clienteEditado
        
    }

    static async deletarCliente(id){

    }

}

Login.renderLogin()
export default Api