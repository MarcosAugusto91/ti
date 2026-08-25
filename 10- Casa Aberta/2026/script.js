// ALTERE: defina aqui o usuario e a senha ficticios da atividade.
const usuarioCorreto = "aluno@senac.com";
const senhaCorreta = "1234";

function validarLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === usuarioCorreto && senha === senhaCorreta) {
        alert("Logado com sucesso");
    } else {
        alert("Usuario e senha invalidos");
    }

    return false;
}

function alternarTema() {
    const body = document.getElementById("body");
    const botaoTema = document.getElementById("botao-tema");
    const temaNoturnoAtivo = body.classList.toggle("tema-noturno");

    if (temaNoturnoAtivo) {
        botaoTema.textContent = String.fromCharCode(9788);
        botaoTema.title = "Ativar modo claro";
        botaoTema.setAttribute("aria-label", "Ativar modo claro");
    } else {
        botaoTema.textContent = String.fromCharCode(9790);
        botaoTema.title = "Ativar modo noturno";
        botaoTema.setAttribute("aria-label", "Ativar modo noturno");
    }
}
