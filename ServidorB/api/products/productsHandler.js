const fetch = require("node-fetch");

let listaProdutos = [];

async function retornarProdutos() {
  return listaProdutos;
}

async function adicionarProduto(dado) {
  if (
    dado.nome == undefined ||
    dado.login == undefined ||
    dado.senha == undefined
  ) {
    throw new Error("Dados Inválidos!");
  }

  await fetch("http://servidor-a:3000/api/users", {
    method: "POST",
    body: JSON.stringify(dado),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    if (res.status == 500) {
      throw new Error("Login Inválido!");
    }
  });

  dado.id = listaProdutos.length + 1;
  listaProdutos.push(dado);
  return "Produto adicionado com sucesso!";
}

module.exports = {
  retornarProdutos,
  adicionarProduto,
};
