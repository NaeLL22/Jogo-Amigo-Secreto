   let amigos = [];
   //função para adicionar amigo
function adicionarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    const lista = document.getElementById('listaAmigos');
    

    //Validar se o campo esta vazio 
    if (nomeAmigo === ""){
        alert("Por Favor, Insira um nome válido");
        return;
    }

    if (amigos.includes(nomeAmigo)){
        alert("Este nome ja foi adicionado");
        return;
    }

    amigos.push(nomeAmigo);

    //adicionar o nome na lista 
    const listaDeAmigo = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nomeAmigo;
    listaDeAmigo.appendChild(novoItem);


    //limpar campo de entrada
    inputAmigo.value = "";

}
// Adiciona evento para capturar Enter no campo de entrada
document.getElementById('amigo').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo(); // Chama a função quando Enter for pressionado
    }
});
    //função para sotear um amigo secreto
function sortearAmigo(){
    const listaAmigos = document.getElementById('listaAmigos').children;
    const resultado = document.getElementById('resultado');
     
    if (listaAmigos.length === 0){
        alert("Adicione pelo menos dois amigo para sortear");
        return;
    }

    // limpar o resultado anterior 
    resultado.innerHTML = "";

    // Sortear o Resultado Aleatorio
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado].textContent;


    // Exibir o resultado
    const resultadoItem = document.createElement('li');
    resultadoItem.textContent = `🎁Amigo secreto: ${amigoSorteado}`;
    resultado.appendChild(resultadoItem);
}
 