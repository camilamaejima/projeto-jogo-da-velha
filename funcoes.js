var nomeJogador1 = document.getElementById('nomeJogador1');
    var nomeJogador2 = document.getElementById('nomeJogador2');
    var jogadorX = "";
    var jogadorO = "";
    var tela = document.getElementById('matriz');
    var pincel = tela.getContext('2d');
    var desenho = "x";
    var corDesenho = "#FE2E2E";
    // variaveis dos quadrantes 1-1; 2-2; 3-3; etc.
    var q11 = ""; 
    var q12 = "";
    var q13 = "";
    var q21 = "";
    var q22 = "";
    var q23 = "";
    var q31 = "";
    var q32 = "";
    var q33 = "";
    var nomeQuadrante = "";
    var ganhador = false; 
    var valorOpacidade = 0; 

    //construindo a tela inicial
    var titulo = document.getElementById('titulo');
    titulo.style = 'font-family: Impact; font-size: 60px;text-align: center;'
    titulo.innerHTML = "Jogo da Velha";

    var jogador1 = document.getElementById('jogador1');
    jogador1.style = 'font-family: Impact; font-size: 30px;text-align: center';
    jogador1.innerHTML = "Nome jogador(a) 1: ";

    var jogador2 = document.getElementById('jogador2');
    jogador2.style = 'font-family: Impact; font-size: 30px;text-align: center';
    jogador2.innerHTML = "Nome jogador(a) 2: ";

    var botaoIniciarJogo = document.getElementById("iniciarJogo");
    botaoIniciarJogo.style = 'font-family: Impact; font-size: 30px;text-align: center; border-radius: 10px; color: #848484';
    botaoIniciarJogo.onclick = abrirJogo;
   
    var botaoVoltarParaMenu = document.getElementById("voltarTelaInicial");
    botaoVoltarParaMenu.style = 'font-family: Impact; font-size: 30px;text-align: center;border-radius: 10px; color: #848484';
    botaoVoltarParaMenu.onclick = atualizarPagina;
   
    var mensagensParaUsuarios = document.getElementById('mensagensParaUsuarios');
    var mensagemVencedor = document.getElementById ("mensagemVencedor");

    var jogadorXeO = document.getElementById("jogadorXeO");
    jogadorXeO.style = 'font-family: Impact; font-size: 25px; text-align: center; color: black';

    var efeitoSabre = document.getElementById("efeitoSabre");

    tela.onclick = desenhaXO;

    function tocarEfeitoSabre (){

        efeitoSabre.play();

    }

    function atualizarPagina(){

        window.location.reload();
    }

    function revelarBotaoVoltarParaMenu(){

        var revelarBotaoVoltarParaMenu = document.getElementById ("revelarBotaoVoltarParaMenu");
        revelarBotaoVoltarParaMenu.style.display = "block";
    }

    function abrirJogo(){

        if(nomeJogador1.value == ""){
            alert("Informe o nome do primeiro jogador.");
            return;
        }
        if (nomeJogador2.value == ""){
            alert("Informe o nome do segundo jogador.");
            return;
        }

        if(nomeJogador1.value == nomeJogador2.value){
            alert("O nome dos jogadores não pode ser igual.");
            return;
        }
        //limpa a tela
        document.getElementById("divId").innerHTML="";
        //define as margens canvas
        //tela.style = 'margin-left: 35%; margin-top: 10%;';
        tela.style = 'margin-left: 38%; margin-top: 0%;';

        //preenche o canvas
        for(var x = 0; x <= 450; x = x + 150) {
            desenhaMatriz(x, 0, "#F2F2F2");
            desenhaMatriz(x, 150, "#F2F2F2");
            desenhaMatriz(x, 300, "#F2F2F2");
            desenhaMatriz(x, 450, "#F2F2F2");
        }      

        revelarBotaoVoltarParaMenu();
        sorteiaPrimeiroJogador();
    }

    function desenhaMatriz(x, y, cor) {
        pincel.fillStyle = cor;
        pincel.fillRect(x, y,450 , 450);
        pincel.fillStroke = 'black';
        pincel.strokeRect(x, y, 450, 450);
    }

    function sorteiaPrimeiroJogador (){

        var numeroJogador = Math.floor(Math.random() * 10);

        if (numeroJogador <= 5){

            jogadorX = nomeJogador1.value;
            jogadorO = nomeJogador2.value;
            jogadorXeO.innerHTML = "Jogador(a) " + nomeJogador1.value + ": X</br>Jogador(a) " + nomeJogador2.value + ": O</br>" + nomeJogador1.value + ", comece o jogo";
        } else {

            jogadorX = nomeJogador2.value;
            jogadorO = nomeJogador1.value;
            jogadorXeO.innerHTML = "Jogador(a) " + nomeJogador2.value + ": X</br>Jogador(a) " + nomeJogador1.value + ": O</br>" + nomeJogador2.value + ", comece o jogo";
        }
    }

    function desenhaLinhaDaVitoria (x1, y1, x2, y2){

       pincel.lineWidth = 4;
       if (nomeQuadrante == "x"){
            pincel.strokeStyle = "black";
       } else {
            pincel.strokeStyle = "black";
       
       }
       pincel.moveTo (x1, y1);
       pincel.lineTo (x2, y2);
       pincel.stroke();
    }

    function exibeMensagemVencedor(){

        if (nomeQuadrante == "x"){

            mensagensParaUsuarios.style = 'font-family: Impact; font-size: 30px; text-align: center; font-family: Impact; color: #FE2E2E';
            mensagensParaUsuarios.innerHTML = jogadorX + ", você o desafio ganhou!";
            mensagemVencedor.style.display = "block";


        } else{

            mensagensParaUsuarios.style = 'font-family: Impact; font-size: 30px; text-align: center; font-family: Impact; color: #00FFFF';
            mensagensParaUsuarios.innerHTML = jogadorO + ", você o desafio ganhou!";
            mensagemVencedor.style.display = "block";

        }       
        
        if (nomeJogador1.value.toUpperCase() == "RICARDEX" || nomeJogador2.value.toUpperCase() == "RICARDEX" || nomeJogador1.value.toUpperCase() == "RICARDO" || nomeJogador2.value.toUpperCase() == "RICARDO"){
                
                mensagemVencedor.style.display = "block";
                easterEgg.src = "ricardexYoda.png";
        }

        ganhador = true;
    }

    function trocaOpacidadeMensagemVencedor(){

        if (valorOpacidade == 1 && ganhador == true){

            mensagemVencedor.style = "opacity: 0";
            valorOpacidade = 0;
        } else if (valorOpacidade == 0 && ganhador == true){

            mensagemVencedor.style = "opacity: 1";
            valorOpacidade = 1;
        }  
    }

    function verificaVencedor(){

        if(q11 == nomeQuadrante && q21 == nomeQuadrante && q31 == nomeQuadrante){ // primeira coluna
            
            exibeMensagemVencedor();
            desenhaLinhaDaVitoria(75 ,10, 75, 430);

        }
        if(q12 == nomeQuadrante && q22 == nomeQuadrante && q32 == nomeQuadrante){ //segunda coluna
            
            exibeMensagemVencedor();
            desenhaLinhaDaVitoria(225, 10, 225, 430);
        }
        if(q13 == nomeQuadrante && q23 == nomeQuadrante && q33 == nomeQuadrante){ //terceira coluna
            
            exibeMensagemVencedor();
            desenhaLinhaDaVitoria(375, 10, 375, 430);
        }
        if(q11 == nomeQuadrante && q12 == nomeQuadrante && q13 == nomeQuadrante){ //primeira linha
            
            exibeMensagemVencedor();
            desenhaLinhaDaVitoria(10, 75, 430, 75);
        }
        if(q21 == nomeQuadrante && q22 == nomeQuadrante && q23 == nomeQuadrante){ //segunda linha
            
            exibeMensagemVencedor();
            desenhaLinhaDaVitoria(10, 225, 430, 225);
        }
        if(q31 == nomeQuadrante && q32 == nomeQuadrante && q33 == nomeQuadrante){ //terceira linha
            
            exibeMensagemVencedor();
            desenhaLinhaDaVitoria(10, 375, 430, 375);
        }
        if(q11 == nomeQuadrante && q22 == nomeQuadrante && q33 == nomeQuadrante){ //diagonal 1
            
            exibeMensagemVencedor();
            desenhaLinhaDaVitoria(30, 30, 430, 430);
        }
        if(q31 == nomeQuadrante && q22 == nomeQuadrante && q13 == nomeQuadrante){ //diagonal 2
            
            exibeMensagemVencedor();
            desenhaLinhaDaVitoria(430, 20, 20, 430);
        }
        if (q11 != "" && q12 != "" && q13 != "" && q21 != "" && q22 != "" && q23 != "" && q31 != ""
        && q32 != "" && q33 != "" && ganhador == false){
            
            mensagensParaUsuarios.style = 'font-family: Impact; font-size: 30px; text-align: center; font-family: Impact; color: black';
            mensagensParaUsuarios.innerHTML = "Velha o jogo deu!";
            mensagemVencedor.style.display = "block";
            ganhador = true;
        }

    }

    function quadradoPreenchido(quadrado){

        return quadrado != "";
    }

    function habilitaDesenho(quadrado,x,y){
           
        nomeQuadrante = desenho;                 
        pincel.font = '130px Arial';
        pincel.fillStyle = corDesenho;
        pincel.fillText(desenho, x, y);            

        if (desenho == "x"){
            desenho = "o";
            corDesenho = "#00FFFF";
        } else {
            desenho = "x";
            corDesenho = "#FE2E2E";
        }             
    }

    function desenhaXO(evento){

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
       
        // fixar X e O no meio dos quadrados;
        if (ganhador == false && jogadorX != "" && jogadorO != ""){
             if (x < 150 && y < 150 ){ //coluna 1 - linha 1 (quadrante 1-1)       

                var estaPreenchido = quadradoPreenchido(q11);
                if(estaPreenchido == false) {
                habilitaDesenho(q11,40,110);
                q11 = nomeQuadrante;
                }
            } else if (x < 300 && y < 150 ){ // coluna 1 - linha 2 (quadrante 1-2)

                var estaPreenchido = quadradoPreenchido(q12);
                if(!estaPreenchido) {
                    habilitaDesenho(q12,190,110);
                    q12 = nomeQuadrante;
                }

            } else if (x < 450 && y < 150 ){ // coluna 1 - linha 3 (quadrante 1-3)
                
                var estaPreenchido = quadradoPreenchido(q13);
                if(!estaPreenchido) {   
                habilitaDesenho(q13,340,110);
                q13 = nomeQuadrante;
                }
            } else if (x < 150 && y < 300 ){ //coluna 2 - linha 1 (quadrante 2-1)
                
                var estaPreenchido = quadradoPreenchido(q21);
                if(!estaPreenchido) {
                habilitaDesenho(q21,40,260);
                q21 = nomeQuadrante;
                }

            } else if (x < 150 && y < 450 ){ // coluna 3 - linha 1 (quadrante 3-1)
                
                var estaPreenchido = quadradoPreenchido(q31);
                if(!estaPreenchido) {
                habilitaDesenho(q31,40,410);
                q31 = nomeQuadrante;
                }

            } else if (x < 300 && y < 300 ){ //coluna 2 - linha 2 (quadrante 2-2)
                
                var estaPreenchido = quadradoPreenchido(q22);
                if(!estaPreenchido) {
                habilitaDesenho(q22,190,260);
                q22 = nomeQuadrante;
                }
                
            } else if (x < 450 && y < 300 ){ //coluna 2 - linha 3 (quadrante 2-3)
                
                var estaPreenchido = quadradoPreenchido(q23);
                if(!estaPreenchido) {
                habilitaDesenho(q23,340,260);
                q23 = nomeQuadrante;
                }
                    
            } else if (x < 300 && y < 450 ){ // coluna 3 - linha 2 (quadrante 3-2)
                
                var estaPreenchido = quadradoPreenchido(q32);
                if(!estaPreenchido) {
                habilitaDesenho(q32,190,410);
                q32 = nomeQuadrante;
                }

            } else if (x < 450 && y < 450 ){ // coluna 3 - linha 3 (quadrante 3-3)
                
                var estaPreenchido = quadradoPreenchido(q33);
                if(!estaPreenchido) {
                habilitaDesenho(q33,340,410);
                q33 = nomeQuadrante;
                }
            } 
            verificaVencedor(); 
            tocarEfeitoSabre();
        }
    }

    window.setInterval(trocaOpacidadeMensagemVencedor, 1500);     
