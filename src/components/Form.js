function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault() //previne o envio ao banco, já que no momento não tem acesso ao banco, sem isso o console.log não roda
        console.log("Usuario foi cadastrado")
    }

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form