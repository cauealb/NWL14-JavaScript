const {select} = require('@inquirer/prompts')

const start = async () => {
    
    while(true){

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar Meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opcao){
            case "listar":
                console.log("Listado");
                break;
            case "cadastrar":
                console.log("Cadastrar");
                break;
            case "sair":
                console.log('Atá a Próxima')
                return
        }
    }
}

start()