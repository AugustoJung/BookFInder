
let buscabtn = document.getElementById("busca-btn");
let bodyID = document.getElementById("body");
let textinho = document.getElementById("textinho_bonito");
let livros = document.getElementById("livro_show");
let capa = document.getElementById("livro_img");


function trocarFundo(){
    bodyID.style.transition = "0.5s ease-in-out";
    bodyID.style.backgroundImage = "url(./imgs/image_3.png)";
    textinho.style.visibility = "hidden";
    textinho.style.display = "none";
    livros.style.display = "flex";
    livros.style.visibility = "visible";
    fetch("http://openlibrary.org/search.json?q="+document.getElementById("input").value)
    .then(a => a.json())
    .then(response =>{
        titulo_livro.textContent = `${response.docs[0].title}`
        ano.textContent = `${response.docs[0].first_publish_year}`
        autor.textContent = `${response.docs[0].author_name[0]}`
        link.href = "https://openlibrary.org/isbn/"+response.docs[0].isbn[0]
        link.textContent = `${response.docs[0].title}`
        capa.src = "http://covers.openlibrary.org/b/isbn/"+response.docs[0].isbn[0]+"-M.jpg"
    })
}
