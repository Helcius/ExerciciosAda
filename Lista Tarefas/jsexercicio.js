var form = document.querySelector("form");
var submit = document.getElementById("retorno-submit");
var body = document.body;
var task = document.getElementById("template-task");



function recebeFormulario(evt) {
    evt.preventDefault();
    
    let titulo = evt.target[0].value;
    let descricao = evt.target[1].value;
    
    console.log(titulo,descricao);
}


form.addEventListener("submit", recebeFormulario)