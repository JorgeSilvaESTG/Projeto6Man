# HaxBall 6Man

Script desenvolvido em **JavaScript** para criar e gerir uma sala personalizada de **6Man no HaxBall**, implementando a lógica completa do modo de jogo, sistema de vidas, progressão dos jogadores, economia, apostas, moderação, estatísticas e integração com Discord.

O projeto vai além da configuração de uma sala: implementa uma camada própria de **gameplay e gestão de jogadores**, utilizando os eventos da sala para controlar o ciclo das partidas e manter o estado dos jogadores entre sessões.

---

## 🎮 Sobre o projeto

O objetivo do projeto é transformar uma sala HaxBall numa experiência de jogo competitiva baseada num formato **6Man**, onde seis jogadores participam numa partida com:

* vidas individuais;
* eliminação progressiva;
* classificação final;
* sistema de pontos;
* ranks;
* estatísticas persistentes;
* economia virtual;
* loja de itens;
* apostas;
* sistema de moderação;
* proteção contra spam e AFK;
* comunicação com Discord;
* suporte multilíngue.

## A sala é configurada para suportar até **20 jogadores**, embora a partida principal seja iniciada com seis jogadores. O código controla a entrada dos jogadores, atribuição das posições, início/fim das partidas e respetiva classificação.

# ✨ Funcionalidades

## 🏆 Sistema 6Man

O núcleo do projeto é o sistema de jogo 6Man.

A lógica implementada controla:

* entrada dos jogadores na partida;
* necessidade de seis jogadores para iniciar;
* distribuição dos jogadores pelas equipas;
* atribuição aleatória das posições;
* sistema de vidas;
* deteção de golos;
* identificação do jogador que sofreu o golo;
* perda de vidas;
* eliminação dos jogadores;
* classificação de 1.º a 6.º;
* finalização automática da partida;
* preparação da partida seguinte.

Cada jogador começa a partida com **3 vidas**. Quando sofre um golo, perde uma vida. Ao chegar a zero, é retirado da partida. Quando restam menos de dois jogadores com vidas, a partida é terminada.

A posição de cada jogador é representada internamente por uma das seis posições da arena e é atribuída aleatoriamente no início de cada partida.

---

## ❤️ Sistema de vidas

Cada jogador possui um número de vidas associado ao estado da partida.

O sistema permite:

* começar com três vidas;
* perder uma vida após sofrer um golo;
* alterar visualmente o jogador conforme as vidas restantes;
* remover o jogador da partida quando chega a zero;
* consultar as vidas dos jogadores;
* comprar vidas através da economia do servidor.

O comando de consulta aceita diferentes aliases:

```text
!vidas
!v
!lives
!l
```

O sistema também apresenta automaticamente a quantidade de vidas dos jogadores durante determinados momentos da partida.

---

# 📊 Estatísticas e progressão

O projeto mantém estatísticas persistentes para cada jogador através de um `Map`.

Entre os dados armazenados encontram-se:

* `auth`
* `conn`
* idioma
* pontos
* rank
* jogos disputados
* vitórias
* golos marcados
* dinheiro
* inventário
* estado de banimento

Quando um jogador entra pela primeira vez, é criado o seu registo e este é guardado em `localStorage`.

### Estatísticas disponíveis

O jogador pode consultar as suas próprias estatísticas:

```text
!me
```

Ou consultar as estatísticas de outro jogador:

```text
!stats NomeDoJogador
```

O sistema apresenta informações como:

* nome;
* vitórias;
* pontos;
* rank;
* pontos por jogo;
* winrate;
* jogos disputados;
* golos por jogo;
* dinheiro.

Também existe um ranking dos cinco jogadores com mais pontos:

```text
!top
```

---

# 🥇 Sistema de pontos e classificação

A classificação final de uma partida influencia diretamente a pontuação dos jogadores.

O sistema atribui:

| Posição | Pontos |
| ------- | -----: |
| 🥇 1.º  |     +3 |
| 🥈 2.º  |     +2 |
| 🥉 3.º  |     +1 |
| 5.º     |     -1 |
| 6.º     |     -2 |

Os jogadores classificados em 1.º, 2.º e 3.º também recebem tratamento específico no encerramento da partida. O vencedor recebe ainda um incremento na estatística de vitórias.

---

# 🚀 Sistema de ranks

Os pontos acumulados determinam o rank do jogador.

O código implementa progressão e regressão de rank, atualizando também o avatar apresentado ao jogador.

A progressão implementada inclui vários níveis, começando em:

```text
🦯
🦽
🛴
🚲
🛵
🛺
🚜
🚚
🚆
🚁
✈️
🚀
```

Os limites de pontos são definidos diretamente na função de atualização de ranks, incluindo níveis acima dos inicialmente documentados nos comentários do projeto.

O rank também é utilizado como avatar do jogador:

```javascript
room.setPlayerAvatar(players[i].id, rank);
```

---

# 💬 Sistema de chat

O chat é uma das partes mais completas do projeto.

Toda a lógica passa pelo evento:

```javascript
room.onPlayerChat
```

O sistema diferencia mensagens normais de comandos e aplica diferentes regras de moderação e personalização.

### Funcionalidades do chat

* ativação/desativação do chat;
* mute manual;
* desmute manual;
* lista de jogadores mutados;
* limpeza da lista de mutados;
* anti-spam;
* mute automático;
* ban automático por spam continuado;
* remoção manual do mute automático;
* mensagens personalizadas;
* cores de mensagens;
* estilos de mensagens;
* encaminhamento das mensagens para Discord.

---

# 🛡️ Anti-Spam

Existe um sistema específico para deteção de spam.

O script mantém um histórico temporal das mensagens de cada jogador e verifica a quantidade de mensagens enviadas dentro de determinados intervalos.

A configuração atual inclui:

```javascript
limite = 5;
intervaloSpam = 3000;
removerMute = 300000;
limiteSpamBan = 3;
```

Na prática, o sistema pode:

1. detetar uma sequência rápida de mensagens;
2. avisar o jogador;
3. aplicar mute automático;
4. manter o jogador mutado durante 5 minutos;
5. impedir novas mensagens durante o mute;
6. contabilizar tentativas de spam enquanto mutado;
7. aplicar ban caso o limite seja ultrapassado.

Existe ainda um comando administrativo para remover manualmente o mute provocado por spam:

```text
!tirarspam NomeDoJogador
```

---

# 🔇 Sistema de moderação

Os administradores conseguem controlar diretamente a comunicação e acesso dos jogadores.

### Mute

```text
!mutar NomeDoJogador
!desmutar NomeDoJogador
```

### Lista de mutados

```text
!mutados
!limparMutados
```

Um jogador presente na lista de mutados fica impedido de enviar mensagens através do chat.

### Banimento

O sistema também possui banimento através do chat:

```text
!ban NomeDoJogador
!unban NomeDoJogador
```

Os dados relacionados com banimentos são guardados em `localStorage`, permitindo manter a informação entre reinícios da sala.

Também existe limpeza dos bans:

```text
!limparBans
```

---

# 💤 Sistema Anti-AFK

O projeto possui deteção automática de jogadores inativos.

A atividade dos jogadores é acompanhada durante a partida e, quando um jogador permanece inativo durante tempo suficiente:

1. recebe um aviso;
2. é dado um período adicional;
3. se continuar inativo, é expulso da sala.

O limite de AFK está configurado através de:

```javascript
var limiteAFK = 12;
```

## O sistema utiliza também o evento `onPlayerActivity` para reiniciar o contador de atividade quando o jogador realiza uma ação.

# 💰 Economia virtual

Cada jogador possui uma quantidade de dinheiro virtual.

Um novo jogador começa com:

```text
20€
```

O dinheiro é utilizado nos sistemas de loja, personalização e apostas.

Também existem recompensas associadas à progressão:

* recompensas por quantidade de jogos;
* recompensas por quantidade de vitórias.

Por exemplo, o código atribui dinheiro adicional em determinados múltiplos de jogos e vitórias.

---

# 🛒 Loja

O sistema inclui uma loja virtual acessível através de:

```text
!buy
```

Os itens disponíveis permitem alterar propriedades do jogador durante a partida.

### Itens

| Item | Preço | Função                         |
| ---- | ----: | ------------------------------ |
| 1    |   50€ | Tornar um jogador mais pequeno |
| 2    |   50€ | Comprar uma vida               |
| 3    |  100€ | Tornar o próprio jogador maior |

O código verifica o dinheiro disponível, o estado do jogador e se a compra é permitida naquele momento.

Os efeitos são aplicados diretamente às propriedades físicas do jogador através de `setPlayerDiscProperties`.

---

# 🎨 Personalização de mensagens

Existe uma segunda área da loja dedicada à personalização da cor das mensagens:

```text
!cores
```

O jogador pode escolher entre diferentes cores, com preços que vão de **199€ a 549€**.

Depois da compra, a cor e o estilo ficam armazenados no inventário do jogador e são utilizados quando este envia mensagens no chat.

---

# 🎲 Sistema de apostas

O projeto inclui um sistema de apostas baseado no resultado da partida.

Antes de uma partida, o script apresenta os seis jogadores disponíveis para apostar.

Exemplo:

```text
!bet ID MONTANTE
```

O sistema verifica:

* se o período de apostas está ativo;
* se o jogador está autorizado a apostar;
* se o jogador não está atualmente em jogo;
* se o jogador selecionado participa na partida;
* se existe dinheiro suficiente;
* limite máximo da aposta.

O valor máximo de uma aposta está atualmente limitado a:

```text
20€
```

## As apostas são armazenadas durante a partida e processadas quando esta termina.

# 🌍 Suporte multilíngue

O sistema possui três idiomas:

* 🇵🇹 Português
* 🇬🇧 Inglês
* 🇪🇸 Espanhol

O idioma pode ser alterado através de:

```text
!pt
!en
!es
```

As mensagens do servidor são armazenadas num sistema de traduções centralizado, incluindo:

* mensagens de sistema;
* mensagens de erro;
* mensagens de loja;
* mensagens de apostas;
* mensagens de moderação;
* mensagens de estatísticas;
* mensagens de início/fim de partida.

---

# 💬 Comandos do jogador

Os comandos efetivamente processados pelo sistema incluem:

```text
!ajuda
!help
!ayuda

!comandos

!me
!stats <nome>
!top
!ranks

!vidas
!v
!lives
!l

!pt
!en
!es

!ss
!bb

!buy
!buy <opção>
!buy <opção> <jogador>

!cores
!cores <opção>

!bet <id> <montante>

!report <mensagem>

!discord
```

## Estes comandos são identificados diretamente na implementação do `onPlayerChat`, em vez de depender da documentação comentada no início do ficheiro.

# 👮 Comandos administrativos

A administração da sala possui funcionalidades adicionais, incluindo:

```text
!admin <password>

!chat

!mutar <nome>
!desmutar <nome>
!mutados
!limparMutados

!ban <nome>
!unban <nome>
!limparBans

!tirarspam <nome>

!skins

!p
!g

!rr
!parar

!desbugarko
```

Os comandos administrativos são protegidos através da propriedade:

```javascript
player.admin
```

## e, no caso da autenticação inicial, através da password configurada no script.

# 🔗 Integração com Discord

O projeto possui integração direta com o Discord através de **webhooks HTTP**.

A comunicação é implementada através de `XMLHttpRequest`:

```javascript
xhr.open("POST", url);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify(params));
```

O sistema envia informação para o Discord em diferentes situações, incluindo:

* mensagens do chat;

* entrada de jogadores;

* saída de jogadores;

* kicks;

* bans;

* reports;

* erros internos;

* estado online do servidor;

* criação/atualização do link da sala.

O comando:

```text
!report <mensagem>
```

permite enviar um report diretamente para o webhook dedicado de reports.

---

# 💾 Persistência de dados

O projeto utiliza `localStorage` para guardar informação persistente.

São principalmente utilizados dois conjuntos de dados:

```text
stats
listaBanidos
```

As estatísticas dos jogadores são serializadas para JSON e armazenadas localmente. O mesmo acontece com a lista de banimentos.

Quando o link da sala é criado, os dados são carregados novamente para os respetivos `Map`.

Isto permite que dados como:

* pontos;
* vitórias;
* jogos;
* golos;
* dinheiro;
* rank;
* inventário;
* estado de banimento

não sejam simplesmente perdidos quando a sessão da sala termina.

---

# ⚽ Deteção de contacto com a bola

O código implementa lógica própria para determinar qual jogador teve contacto com a bola.

São utilizadas:

* posição da bola;
* posição dos jogadores;
* raio da bola;
* raio do jogador;
* distância entre objetos;
* `Set` para jogadores que já tocaram na bola;
* `lastTouch` para guardar o último jogador identificado.

Existe ainda utilização do evento:

```javascript
room.onPlayerBallKick
```

para atualizar o último toque conhecido.

Esta informação é utilizada posteriormente no processamento dos golos e na atribuição de golos marcados.

---

# 🥅 Sistema de balizas

Cada um dos seis jogadores é associado a uma posição de baliza.

O código mantém coordenadas para seis posições:

```text
bal1
bal2
bal3
bal4
bal5
bal6
```

As posições são utilizadas para:

* colocar jogadores no início da partida;
* determinar que jogador sofreu o golo;
* reposicionar jogadores;
* manter a estrutura do 6Man.

A baliza mais próxima da posição da bola é calculada através de distância geométrica.

---

# 🔄 Ciclo de uma partida

O fluxo principal da partida pode ser resumido da seguinte forma:

```text
Jogadores entram
       ↓
São registados / autenticados
       ↓
É necessário atingir 6 jogadores
       ↓
Jogadores são distribuídos pelas equipas
       ↓
São atribuídas posições aleatórias
       ↓
Cada jogador recebe 3 vidas
       ↓
A partida começa
       ↓
Sistema monitoriza:
  - bola
  - golos
  - vidas
  - atividade
  - posições
       ↓
Jogador sofre golo
       ↓
Perde uma vida
       ↓
0 vidas → eliminado
       ↓
Classificação atualizada
       ↓
Restam 1 jogador?
       ↓
Fim da partida
       ↓
Pontos / vitórias / apostas atualizados
       ↓
Nova partida
```

O ciclo é controlado através de eventos como:

```javascript
onPlayerJoin
onPlayerLeave
onGameStart
onGameStop
onGameTick
onTeamGoal
onPlayerTeamChange
onPositionsReset
onPlayerActivity
onPlayerChat
```

---

# 👥 Gestão de jogadores

O projeto possui uma estrutura própria para representar os seis jogadores da partida:

```javascript
[
    numeroBaliza,
    vidas,
    nome,
    id
]
```

O sistema possui funções auxiliares para:

* procurar jogador pelo nome;
* procurar jogador pelo ID;
* obter ID através do nome;
* encontrar a posição de um jogador;
* determinar jogadores vivos;
* determinar jogadores que participam na partida;
* posicionar jogadores;
* retirar jogadores para espectadores.

Também existem verificações para impedir:

* utilização simultânea do mesmo nickname;
* utilização da mesma conta/auth em múltiplas sessões;
* entrada de jogadores banidos;
* utilização de uma conta diferente associada a determinadas credenciais.

---

# 🗺️ Mapa personalizado

O projeto inclui o mapa diretamente no próprio JavaScript através de um objeto `customMap`.

Características principais:

```text
Nome: 6 MAN STRONG by Raul Meireles
Width: 330
Height: 305
```

O mapa contém uma configuração extensa de:

* `vertexes`;
* `segments`;
* collision masks;
* collision groups;
* cores;
* propriedades físicas;
* limites da arena;
* posição da câmara;
* comportamento de reset.

O mapa é carregado diretamente através de:

```javascript
room.setCustomStadium(customMap);
```

---

# 🎥 Gestão de posições e física

O script altera dinamicamente propriedades dos jogadores através de:

```javascript
room.setPlayerDiscProperties()
```

Isto permite controlar:

* posição;
* raio do jogador;
* collision groups;
* comportamento durante determinadas fases da partida.

## É utilizado, por exemplo, para representar jogadores afetados pela perda de vidas e para aplicar itens comprados na loja.

# 📈 Leaderboards

O sistema mantém dois rankings internos:

### Top 5 — Pontos

```text
top5
```

É atualizado através da quantidade de pontos acumulados.

### Top 3 — Vitórias

```text
top3W
```

É atualizado com base no número de vitórias.

## O Top 3 de vitórias também é apresentado periodicamente aos jogadores através de mensagens automáticas.

# 🔔 Mensagens automáticas

A sala possui mensagens automáticas periódicas.

São utilizadas para:

* divulgar o Discord;
* informar que o servidor/script está em beta;
* mostrar o Top 3 de vitórias.

Os intervalos são controlados por timers e pela função auxiliar:

```javascript
minParaMs()
```

---

# 🧠 Arquitetura do projeto

Embora o projeto esteja concentrado num único ficheiro JavaScript, existe uma separação lógica por responsabilidades.

### Configuração

Responsável por:

* nome da sala;
* host;
* número máximo de jogadores;
* localização;
* estado do chat;
* deteção de toque;
* configurações iniciais.

### Eventos da sala

Responsáveis pelo ciclo de vida:

```text
onRoomLink
onGameStart
onGameStop
onGameTick
onTeamGoal
onPlayerJoin
onPlayerLeave
onPlayerChat
onPlayerActivity
onPlayerKicked
onPlayerTeamChange
onPositionsReset
```

### Sistemas de gameplay

* 6Man;
* vidas;
* posições;
* balizas;
* classificação;
* deteção da bola;
* AFK.

### Sistemas de progressão

* pontos;
* ranks;
* vitórias;
* jogos;
* golos;
* leaderboards.

### Sistemas sociais

* chat;
* idiomas;
* moderação;
* Discord;
* reports.

### Sistemas económicos

* dinheiro;
* loja;
* itens;
* cores;
* apostas;
* recompensas.

---

# 🛠️ Tecnologias e conceitos utilizados

O projeto demonstra utilização prática de:

* **JavaScript**
* programação orientada a eventos;
* gestão de estado;
* estruturas `Map`, `Set` e arrays;
* `localStorage`;
* timers com `setTimeout` e `setInterval`;
* expressões regulares para parsing de comandos;
* manipulação de objetos;
* JSON;
* comunicação HTTP através de `XMLHttpRequest`;
* webhooks do Discord;
* deteção de colisões/distâncias;
* manipulação de propriedades físicas dos jogadores;
* lógica de jogos em tempo real.

---

# 🔐 Segurança antes de publicar

**Importante:** o ficheiro contém atualmente credenciais/configurações sensíveis diretamente no código, incluindo uma password administrativa e URLs de webhooks Discord.

Antes de colocar este projeto num repositório público, estes valores devem ser removidos ou substituídos por configurações seguras.

Por exemplo:

```javascript
var ADMIN_PASSWORD = 'SUA_PASSWORD';
```

e os webhooks Discord devem ser substituídos por placeholders.

## **Nunca publiques as credenciais atuais presentes no ficheiro.**

# 📁 Estrutura

Atualmente, a implementação principal está concentrada num único ficheiro:

```text
Projeto 6Man.js
```

O ficheiro contém tanto a configuração da sala como a implementação dos diferentes sistemas do jogo.

Para uma versão futura, uma possível evolução seria separar os sistemas em módulos:

```text
src/
├── game/
│   ├── match.js
│   ├── players.js
│   ├── lives.js
│   └── positions.js
│
├── stats/
│   ├── statistics.js
│   ├── ranks.js
│   └── leaderboard.js
│
├── economy/
│   ├── shop.js
│   ├── betting.js
│   └── rewards.js
│
├── moderation/
│   ├── chat.js
│   ├── spam.js
│   ├── bans.js
│   └── afk.js
│
├── integrations/
│   └── discord.js
│
└── map/
    └── stadium.js
```

Esta estrutura **não corresponde à estrutura atual do projeto**; representa apenas uma possível evolução arquitetural.

---

# 📌 Estado do projeto

O código contém uma implementação extensa de uma sala 6Man, incluindo múltiplos sistemas integrados.

O próprio sistema apresenta mensagens indicando que a sala/script se encontra em fase **beta**, pelo que algumas áreas podem necessitar de manutenção ou refatoração.

---

# 🎯 Objetivos técnicos demonstrados

Este projeto demonstra experiência prática no desenvolvimento de lógica para um ambiente multiplayer em tempo real, incluindo:

* desenvolvimento de regras de jogo;
* gestão de estado de jogadores;
* processamento de eventos em tempo real;
* sistemas de progressão;
* persistência de dados;
* economia virtual;
* moderação automática;
* comunicação externa através de webhooks;
* criação e manipulação de mapas personalizados;
* desenvolvimento de sistemas interligados dentro de uma única aplicação.

---

## 👨‍💻 Projeto

**HaxBall 6Man — Custom Multiplayer Game Script**

Desenvolvido em **JavaScript** com foco na criação e gestão de uma experiência multiplayer personalizada para HaxBall.
