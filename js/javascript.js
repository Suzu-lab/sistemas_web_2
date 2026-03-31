document.addEventListener("DOMContentLoaded", function () {
  exibirSaudacao();
  exibirDataHora();
  configurarFormulario();
});

function exibirSaudacao() {
  const elemento = document.getElementById("mensagemBoasVindas");
  if (!elemento) return;

  const hora = new Date().getHours();
  let saudacao = "";

  if (hora < 12) {
    saudacao = "Bom dia! Seja bem-vindo ao PetShop Amigo Fiel.";
  } else if (hora < 18) {
    saudacao = "Boa tarde! Conheça nossos produtos e serviços.";
  } else {
    saudacao = "Boa noite! Agende o atendimento do seu pet com facilidade.";
  }

  elemento.textContent = saudacao;
}

function exibirDataHora() {
  const elemento = document.getElementById("dataHoraAtual");
  if (!elemento) return;

  const agora = new Date();
  elemento.textContent = "Data e hora atuais: " + agora.toLocaleString("pt-BR");
}

function configurarFormulario() {
  const formulario = document.getElementById("formAgendamento");
  const resultado = document.getElementById("resultadoAgendamento");

  if (!formulario || !resultado) return;

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeCliente = document.getElementById("nomeCliente").value;
    const nomePet = document.getElementById("nomePet").value;
    const servico = document.getElementById("servico").value;
    const metodo = document.getElementById("metodo").value;
    const data = document.getElementById("dataAgendamento").value;
    const hora = document.getElementById("horaAgendamento").value;

    resultado.classList.remove("d-none");
    resultado.innerHTML = `
      <h3 class="h5">Agendamento realizado com sucesso!</h3>
      <p><strong>Cliente:</strong> ${nomeCliente}</p>
      <p><strong>Pet:</strong> ${nomePet}</p>
      <p><strong>Serviço:</strong> ${servico}</p>
      <p><strong>Método:</strong> ${metodo}</p>
      <p><strong>Data:</strong> ${data}</p>
      <p><strong>Horário:</strong> ${hora}</p>
    `;
  });
}