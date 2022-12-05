function jogador1() {
  let pedra = document.getElementById("pedra");
  let papel = document.getElementById("papel");
  let tesoura = document.getElementById("tesoura");

  if (pedra.checked == 0 && papel.checked == 0 && tesoura.checked == 0) {
    alert("Jogador 1, selecione uma opção");
  }
}

function printar() {
  if (pedra.checked == 1) {
    $(document).ready(function () {
      $("#imageoption1").attr("src", "/img/duvida.png");
      teste.innerHTML = "Opção selecionada";
    });
    // alert('pedra foi selecionada');
  }

  if (papel.checked == 1) {
    $(document).ready(function () {
      $("#imageoption1").attr("src", "/img/duvida.png");
      teste.innerHTML = "Opção selecionada";
    });
    // alert('papel foi selecionada');
  }

  if (tesoura.checked == 1) {
    $(document).ready(function () {
      $("#imageoption1").attr("src", "/img/duvida.png");

      teste.innerHTML = "Opção selecionada";
    });
    // alert('tesoura foi selecionada');
  }
}

function jogador2() {
  let pedra2 = document.getElementById("pedra2");
  let papel2 = document.getElementById("papel2");
  let tesoura2 = document.getElementById("tesoura2");

  if (pedra2.checked == 0 && papel2.checked == 0 && tesoura2.checked == 0) {
    alert("Jogador 2, selecione uma opção");
  }
}

function printar2() {
  if (pedra2.checked == 1) {
    $(document).ready(function () {
      $("#imageoption2").attr("src", "/img/duvida.png");
      teste2.innerHTML = "Opção selecionada";
    });
    // alert('pedra foi selecionada');
  }

  if (papel2.checked == 1) {
    $(document).ready(function () {
      $("#imageoption2").attr("src", "/img/duvida.png");
      teste2.innerHTML = "Opção selecionada";
    });
    // alert('papel foi selecionada');
  }

  if (tesoura2.checked == 1) {
    $(document).ready(function () {
      $("#imageoption2").attr("src", "/img/duvida.png");

      teste2.innerHTML = "Opção selecionada";
    });
    // alert('tesoura foi selecionada');
  }
}

// Funções do index.html
function jogar1() {
  window.location.href = "game.html";
}
function jogar2() {
  window.location.href = "game2.html";
}

function limpar() {
  teste.innerHTML = "";
  $(document).ready(function () {
    $("#imageoption").attr("src", "");

    teste.innerHTML = "";
  });
}

function limpar2() {
  teste2.innerHTML = "";
  $(document).ready(function () {
    $("#imageoption").attr("src", "");

    teste2.innerHTML = "";
  });
}

function verificar() {
  if (pedra.checked == true && pedra2.checked == true) {
    resultado.innerHTML = "";
    $(document).ready(function () {
      $("#imageoption").attr("src", "");

      resultado.innerHTML = "Os dois escolheram pedra, houve um Empate";
    });
  }
  if (papel.checked == true && papel2.checked == true) {
    resultado.innerHTML = "";
    $(document).ready(function () {
      $("#imageoption").attr("src", "");

      resultado.innerHTML = "Os dois escolheram papel, houve um Empate";
    });
  }
  if (tesoura.checked == true && tesoura2.checked == true) {
    resultado.innerHTML = "";
    $(document).ready(function () {
      $("#imageoption").attr("src", "");

      resultado.innerHTML = "Os dois escolheram tesoura, houve um Empate";
    });
  }

  if (tesoura.checked == true && pedra2.checked == true) {
    resultado.innerHTML = "";
    $(document).ready(function () {
      $("#imageoption").attr("src", "");

      resultado.innerHTML = "jogador1 escolheu tesoura e jogador2 escolheu pedra: JOGADOR 2 VENCEU ";
    });
  }
  if (tesoura.checked == true && papel2.checked == true) {
    resultado.innerHTML = "";
    $(document).ready(function () {
      $("#imageoption").attr("src", "");

      resultado.innerHTML = "jogador1 escolheu tesoura e jogador2 escolheu papel: JOGADOR 1 VENCEU ";
    });
  }
  if (papel.checked == true && tesoura2.checked == true) {
    resultado.innerHTML = "";
    $(document).ready(function () {
      $("#imageoption").attr("src", "");

      resultado.innerHTML = "jogador1 escolheu papel e jogador2 escolheu tesoura: JOGADOR 2 VENCEU ";
    });
  }
  if (papel.checked == true && pedra2.checked == true) {
    resultado.innerHTML = "";
    $(document).ready(function () {
      $("#imageoption").attr("src", "");

      resultado.innerHTML = "jogador1 escolheu papel e jogador2 escolheu pedra: JOGADOR 1 VENCEU ";
    });
  }
  if (pedra.checked == true && tesoura2.checked == true) {
    resultado.innerHTML = "";
    $(document).ready(function () {
      $("#imageoption").attr("src", "");

      resultado.innerHTML = "jogador1 escolheu pedra e jogador2 escolheu tesoura: JOGADOR 1 VENCEU ";
    });
  }
  if (pedra.checked == true && papel2.checked == true) {
    resultado.innerHTML = "";
    $(document).ready(function () {
      $("#imageoption").attr("src", "");

      resultado.innerHTML = "jogador1 escolheu pedra e jogador2 escolheu papel: JOGADOR 2 VENCEU ";
    });
  }
}
