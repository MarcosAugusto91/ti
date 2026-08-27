// ALTERE: defina aqui o usuário e a senha fictícios da atividade.
const usuarioCorreto = "aluno@senac.com";
const senhaCorreta = "1234";

function validarLogin() {
    // estes nomes "email" e "senha" devem bater com os IDs do HTML.
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    // troque a mensagem que aparece quando o login falhar.
    const mensagemErro = document.getElementById("mensagem-erro");

    // Aqui a gente compara o que o usuário digitou com os valores corretos.
    if (email.value === usuarioCorreto && senha.value === senhaCorreta) {
        // Se estiver certo, vai para a página de sucesso.
        window.location.href = "logado.html";
    } else {
        // Se estiver errado, mostra a mensagem na tela.
        mensagemErro.innerText = "Usuário e senha inválidos!";
        mensagemErro.style.display = "block";

        // Limpa os campos e coloca o foco no primeiro input para tentar novamente.
        email.value = "";
        senha.value = "";
        email.focus();
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
