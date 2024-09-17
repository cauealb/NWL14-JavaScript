const {select, input} = require('@inquirer/prompts')

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
                await cadastrarMeta();
                break;
            case "sair":
                console.log('Atá a Próxima')
                return
        }
    }
}

const cadastrarMeta = async () => {
    const opcao = await input({message: "Digite sua meta"})
     
    if(opcao.length <= 0){
        console.log('Digite uma meta válida!!!')
        return cadastrarMeta();
    }
}

start()