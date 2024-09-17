const start = () => {
    
    while(true){
        let opcao = 'Cadastrar'
        switch(opcao){
            case "Atualizar":
                console.log("Atualizou");
                break;
            case "Cadastrar":
                console.log("Cadastrar");
                break;
            case "Sair":
                return
        }
    }
}

start()