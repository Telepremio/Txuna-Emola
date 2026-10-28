
"use strict";

// Seleccionar os elementos da página
const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

// Verificar se os elementos existem
if (formulario && mensagem) {

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        // Validar o preenchimento dos campos
        const campos = formulario.querySelectorAll(
            "input[required]"
        );

        for (const campo of campos) {

            if (campo.value.trim() === "") {
                mensagem.textContent =
                    "Por favor, preencha todos os campos.";

                campo.focus();
                return;
            }
        }

        // Abrir a página seguinte sem transmitir os valores
        window.location.href = "processamento.html";
    });
}

