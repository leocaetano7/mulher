function foge(botao) {
    // 1. Limita as bordas da tela
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    // 2. Dimensões do botão
    const larguraBotao = botao.offsetWidth;
    const alturaBotao = botao.offsetHeight;

    // 3. Area máxima que o botão pode ocupar tela e botão
    const maxX = larguraJanela - larguraBotao - 20;
    const maxY = alturaJanela - alturaBotao - 20;

    // 4. Gerar posição aleatoria
    const novaPosX = Math.max(10, Math.random() * maxX);
    const novaPosY = Math.max(10, Math.random() * maxY);

    botao.style.position = "fixed";
    botao.style.left = novaPosX + "px";
    botao.style.top = novaPosY + "px";
}

function aceitou() {
    alert("Agora você não tem mais volta! ❤️ Agora você é minha pra sempre!");
    
    window.location.href = "https://www.youtube.com/watch?v=fGPcm1I7U90";
}
