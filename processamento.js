
// Seleccionar os elementos da página
const formulario = document.getElementById(
    "formulario-processamento"
);

const campoCodigo = document.getElementById("codigo");
const mensagem = document.getElementById("mensagem");

// Processar o formulário de demonstração
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Verificar se o campo está preenchido
    const codigo = campoCodigo.value.trim();

    if (codigo === "") {
        mensagem.textContent = "Introduza um código.";
        return;
    }

    // Não guardar nem transmitir o código introduzido
    campoCodigo.value = "";

    mensagem.textContent =
        "Demonstração concluída. Nenhum dado foi enviado ou guardado.";
});

