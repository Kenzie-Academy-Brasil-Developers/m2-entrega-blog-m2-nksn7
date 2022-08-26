class Logout {

    static fazendoLogout() {
        let btnLogout = document.getElementById("btnLogout")
        if(btnLogout) {
            btnLogout.addEventListener("click", (event) => {
                event.preventDefault()
                localStorage.removeItem("@Blog_M2:token")
                localStorage.removeItem("@Blog_M2:User_id")
                window.location.assign('../../index.html')
            })
        }
        
    }
}
Logout.fazendoLogout()

export default Logout