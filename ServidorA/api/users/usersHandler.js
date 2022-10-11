let listaUsuarios = [];

async function retornarUsuarios() {
    return listaUsuarios;
}

async function retornarUsuario(dado) {
    for (const usuario of listaUsuarios) {
        if(dado.login == usuario.login && dado.senha == usuario.senha) {
            return usuario;
        }
    }
    throw new Error("Usuário não encontrado");
}

async function adicionarUsuario(dado) {

    if(dado.login == undefined || dado.senha == undefined) {
        throw new Error("Dados Inválidos!");
    }

    dado.id = listaUsuarios.length + 1;
    listaUsuarios.push(dado);
    return "Usuário adicionado com sucesso!";
}

module.exports = {
    retornarUsuarios,
    retornarUsuario,
    adicionarUsuario
}