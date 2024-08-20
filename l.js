let vida = 100
let inventario = []
let menu = 0
let vidaPerdida = 0
let olimpiadasGo = 0


//alert exibe uma mensagem para o usuário
//switch case é para tomar decisões
//if para especificar um bloco de código a ser executado, se a condição especificada for verdadeira
//else para especificar um bloco de código a ser executado, se a mesma condição for falsa.
//function executa uma tarefa ou calcula algum valor
//while um laço que executa uma declaração até que o teste da condição for falsa
//let para declarar variáveis limitando seu escopo no bloco


alert("ola, seja bem-vindo ao jogo das olimpíadas")
alert("você está jogando sendo o Musa Suliman do atletismo")
alert("bora começar?")


    while (menu != 1 & menu != 2) {
    menu = Number(prompt("1) Começar \n 2) Sair \n"))
        if (menu === 2) {
            alert("nao pode sair nao")
        } else if (menu === 1){
            alert("pense que és ainda muito jovem");
            alert("e ao longo do jogo vai envelhecendo");
            alert("no momento você está no Sudão");
            alert("um lugar assolado pelo escaldante calor da pradaria, um local tomado pelas guerras e conflitos de todos o tipos e motivos, tao seco que qualquer gota de lagrimas que ja esteve ja nao estava e nunca vai estar mais presente ali novamente de tal modo que tudo que ali esta e esteve foi e sera esquecido para toda eternidade, o sol batia nos pes caluniados dos velhos e das crianças causando marcas de queimaduras tao vermelhas quanto o sangue das batalhas")
        } else if (menu != 1 & menu !=2){
            alert("essa opção não existe")
        }
}menu = 0


    while (menu != 1 & menu != 2 & menu != 3) {
    menu = Number(prompt("o que gostaria de fazer? \n 1) ficar em casa \n 2) correr com os amigos \n 3) ir para a escola"));
        if (menu === 1) {
            alert("voce ficou em casa aproveitando o dia ensolarado e as nuvens cortavam os ceus como linhas emendadas de trico ");
        } else if (menu === 2) {
            alert("saiu de casa e percebeu que corre mais rápido que seus amigos, suas pernas pulsavam perante o chao duro e arido do sudao.");
        } else if (menu === 3) {
            alert("enquanto voce estava indo para a escola fitou homens agredindo da carne de outro jovem")
            let mvida= Math.ceil(Math.random() * 20)
            if (mvida>= 1 && mvida <= 5) {
                alert("voce caminhou poucos passos adiante e ouviu um estrondo, o som se partiu em pedaços pela rua e de repente um dor inigualavel e o som de sangue respingando do corpo e caindo no chao se espalhando como poeira em uma duna de areia...")
                alert("pos a mãos sujas de areia no ferimento e entao despencou da atual posição e se sentou gemendo de dor");
                alert("por algo do destino ou pela mais pura e maldita sorte sobreviveu ao ferimento e fita o chao ensanguentado");
                vida = vida - AtaquePesado()
                inventario.push("coragem")
                alert("voce adquiriu coragem ao inventário")
                alert(`Você perdeu ${vidaPerdida} de vida`)
                if (vida === 0){
                    alert("Você morreu, indo até o ultimo checkpoint")
                    vida = vida + vidaPerdida
                    menu = 0
                }   
            }
        } else if (menu != 1 & menu != 2 & menu != 3) {
            alert("Essa opção não existe")
        }
    }menu = 0


    while (menu != 1 & menu != 2 & menu !=3) {
    menu = Number(prompt("o que voce gostaria de fazer agora? \n 1) dormir \n 2) descansar \n 3) hospital "))
    if (menu ==1) {
    alert("em seu sono pesado teve sonhos de um vislumbre futuro, na qual corria pelos campos de corrida das olimpiadas") 
    } else if (menu == 2) {
        alert("voce relaxou o corpo e descansou")
    } else if (menu == 3) {
        alert("se decidiu ir ate o hospital mais proximo e ficou la por uma semana e por falta de dinheiro a recuperação foi inconsistente e falharam significamente durante sua cirurgia,ele saiu do hospital no setimo dia e voltou para casa com sua familia.")
    }
}menu = 0


    while (menu != 1 & menu != 2 & menu !=3) {
        menu = Number(prompt("o que voce vai fazer \n 1) comer \n 2) ler \n 3) se exercitar"))
        if (menu ==1){
        alert("sua mae fez o moukhbaza")
        } else if (menu ==2) {
            alert("voce pegou um jornal relativamente velho e pouco úmido e leu sobre a economia(nao entendia uma linha)")
        } else if (menu ==3) {
            alert("flexionou as pernas e correu pela rua desertica")
        }
}menu = 0


alert("UM ACONTECIMENTO INESPERADO ACONTECEU")
alert("SEU PAI ESTA PASSANDO MAL")


        while (menu != 1 & menu != 2 & menu != 3) {
            menu = Number(prompt(" \n 1) sair do sudão e tratá-lo \n 2) ignorar "));
                if (menu === 1){
                    alert("voce saiu do sudão e foi para cairo no egito para fazer o tratamento de saúde de seu pai ");
                } else if (menu === 2) {
                    alert("nao mostrou preocupação, ignorou total a situação");
                    let vida= Math.ceil(Math.random() * 15)
                    if (vida>= 1 && vida <= 5) {
                        alert("opss")
                        alert("voce desbloqueou algo novo no inventario");
                        alert("mas nao foi uma coisa boa...");
                        vida = vida - AtaqueMedio()
                        inventario.push("egoísmo")
                        alert("voce adquiriu egoísmo ao inventário")
                        alert(`Você perdeu ${vidaPerdida} de vida`)
                    }}
}menu = 0


alert(" o médico, Dr.Rafael, revela que o tratamento requer um avançado tratamento de reabilitação e uma peça de tecnologia rara e muito cara, que só pode ser encontrada em uma antiga loja de antiguidades na cidade.")

        while (menu != 1 & menu != 2 & menu != 3) {
             menu = Number(prompt(" \n 1) vou me esforçar para dar tudo certo \n 2) infelizmente nao vou conseguir ajudar por questões financeiras"))
                 if (menu === 1) {
            alert("nao vai ser tão fácil assim, para isso precisa ir para uma lojinha desconhecida no cairo");
            } else if (menu === 2) {
            alert("lembre-se de tudo o que seu pai fez por você")         
         }
}menu = 0
             
alert("ola, seja bem vindo a lojinha Oásis Escondido, oq gostaria?")
const resposta = prompt("digite algo:")
alert("um momentinho, vou dar uma olhada")
alert("para sua sorte temos")
alert("em troca disto lhe ofereço um emprego de entregador para que possa ajudar sua família financeiramente")
alert("parabéns pela escolha, voce vai conseguir cuidar de seu pai")

alert("um tempinho se passou...")
alert("depois que seu pai se recuperou você foi para Suiça. Lá como refugiado começou a praticar algum esporte, qual?")

while (menu != 1 & menu != 2 & menu != 3) {
    menu = Number(prompt( "\n 1) futebol \n 2) basquete \n 3) natação"));
        if (menu === 1) {
            alert("parabéns, seus colegas perceberam o quanto você corre rápido, e você decidiu se decicar ao atletismo ");
            alert("após fazer seu melhor tempo, 800m em 1 minuto, 48 segundos e 77 centéssimos, você conseguiu uma bolsa pela Fundação de Refugiados Olímpicos")
            alert("PARABÉNS!!! VOCÊ ESTÁ NAS OLIMPÍADAS DE PARIS 2024!!!")
        } else if (menu === 2) {
            alert("que pena, neste jogo você não se destacou muito");
        } else if (menu === 3) {
            alert("infelizmente na primeira aula você se afogou e ficou traumatizado.")
            let vida= Math.ceil(Math.random() * 10)
            if (vida>= 1 && vida <= 5) {
                alert("opss")
                vida = vida - AtaqueLeve()
                inventario.push("medo")
                alert("voce adquiriu medo ao inventário")
                alert(`Você perdeu ${vidaPerdida} de vida`)
        }}
}menu = 0  

alert("boa sorte na corrida") 
alert("está preparado?")
alert("clique 1 e espaço ate completar 400")

obj = 0
while (olimpiadasGo < 400) {
    
    let treino = Number(prompt('OBJETIVO:' + olimpiadasGo+ '/400 \n1- TREINAR'))
    if (treino == 1) {
        olimpiadasGo += 50
    } else {
        alert("clica no 1 só")
    }
}
alert("parabéns, objetivo concluido")
alert("jogo finalizado")


let numero= prompt("gostou do jogo das olimpíadas?\n 1=sim  \n 2=não")
switch(numero){
    case "1":
        alert("que bomm, fico feliz")
        break
    case "2":
        alert("ok, irei melhorar")
        break
}

while (menu != 1 & menu != 2 & menu != 3) {
    menu = Number(prompt( " deseja saber sobre a biografia de Musa Suliman?\n 1) sim \n 2) não"));
        if (menu === 1) {
            alert("Musa Suliman nasceu em 2004 no Sudão.")
            alert("Passou pelas dificuldades da guerra e do deslocamento desde muito jovem.")
            alert("Mudou-se para o cairo aos 9 anos devido a saúde de seu pai.")
            alert("Lá trabalhou para sustentar sua família.")
            alert("Musa chegou a Suiça em 2021 como refugiado.")
            alert("Seu amor por esportes rapidamente o levou a se juntar a um clube de futebol em Berna.")
            alert("Lá chamou a atenção de seus colegas ao correr muito rápido durante o treino.")
            alert("Isto lhe rendeu um convite para se juntar a um clube de corrida local")
            alert("Logo depois competiu e venceu uma corrida de 400m")
            alert("Com este resultado conquistou uma bolsa pela Fundação de Refugiados Olímpicos.")
            alert("Desta forma participou pela primeira vez das Olimpíadas de Paris 2024.")
            alert("Não adquiriu medalha, mas com certeza isto foi uma grande conquista de sua vida")
        } else if (menu === 2) {
            alert("ok")
        }
}menu = 0

alert("fim do jogo")

while (menu != 1 & menu != 2 & menu != 3) {
    menu = Number(prompt( " deseja ver o inventario?\n 1) sim \n 2) não"));
        if (menu === 1) {
        alert("aqui está, você conseguiu:")
        } else if (menu === 2) {
            alert("ok")
        }
}menu = 0


    function AtaqueLeve () {
        vidaPerdida = Math.ceil(Math.random() * 10)
        return(vidaPerdida)
    }

    function AtaqueMedio () {
        vidaPerdida = Math.ceil(Math.random() * 15)
        return(vidaPerdida)
    }

    function AtaquePesado() {
        vidaPerdida = Math.ceil(Math.random() * 20)
        return(vidaPerdida)
    }

    function abrirInventario() {
        alert(inventario.join(", "))
    }
    alert(inventario)