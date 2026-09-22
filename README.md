# ⚽ HaxBall 6-Man

Script personalizado para **HaxBall**, desenvolvido em 2024 para criar e gerir uma experiência de jogo no formato **6-Man**, com sistemas de administração, estatísticas de jogadores, ranks, gestão de chat e um mapa personalizado.

O projeto combina **JavaScript**, lógica de jogo e configuração de mapas do HaxBall para automatizar e melhorar a gestão de uma sala multiplayer.

## ✨ Funcionalidades

* 🎮 Configuração de uma sala dedicada para partidas 6-Man
* 👥 Suporte para até **20 jogadores**
* 📊 Sistema de estatísticas dos jogadores
* 🏆 Sistema de progressão baseado em pontos e ranks
* ⚽ Contabilização de jogos, vitórias e golos marcados
* 🗺️ Mapa personalizado desenvolvido especificamente para o modo 6-Man
* 🔧 Sistema de comandos administrativos
* 💬 Gestão do chat da sala
* 🔇 Sistema de mute/ignore de jogadores
* 🔄 Reinício e troca de lados das equipas
* ⏸️ Controlo de pausa e continuação do jogo
* 👕 Gestão de skins personalizadas
* 🚫 Gestão de bans
* 👤 Gestão e consulta da lista de jogadores
* 👋 Deteção de interações/touch entre jogadores e bola

## 📈 Sistema de Estatísticas

O script mantém informação associada aos jogadores, incluindo:

| Estatística | Descrição                     |
| ----------- | ----------------------------- |
| Auth        | Identificador de autenticação |
| Nome        | Nome do jogador               |
| Pontos      | Pontuação acumulada           |
| Rank        | Nível atual do jogador        |
| Jogos       | Número de jogos disputados    |
| Vitórias    | Número de vitórias            |
| Golos       | Número de golos marcados      |

A progressão dos jogadores é baseada na quantidade de pontos acumulados, existindo vários níveis de rank.

## 🏅 Sistema de Ranks

O projeto implementa um sistema de progressão com diferentes níveis:

| Rank |  Pontos |
| ---- | ------: |
| 🦯   |    0–24 |
| 🦽   |   25–49 |
| 🛴   |   50–74 |
| 🚲   |   75–99 |
| 🛵   | 100–149 |
| 🛺   | 150–199 |
| 🚜   | 200–249 |
| 🚆   | 250–299 |
| 🚁   | 300–349 |
| ✈️   | 350–399 |

Este sistema permite apresentar uma progressão persistente dos jogadores com base no desempenho dentro da sala.

## 🛠️ Comandos

### Administração

| Comando             | Descrição                           |
| ------------------- | ----------------------------------- |
| `!admin <password>` | Atribui permissões de administrador |
| `!p`                | Pausa o jogo                        |
| `!g`                | Retoma o jogo                       |
| `!rr`               | Reinicia o jogo                     |
| `!rrs`              | Reinicia o jogo e troca os lados    |
| `!s`                | Troca os lados das equipas          |
| `!clear_bans`       | Remove os bans                      |
| `!clear_bans_s`     | Remove os bans silenciosamente      |
| `!set_skins`        | Define skins personalizadas         |
| `!reset_skins`      | Repõe as skins predefinidas         |
| `!touch_on`         | Ativa a deteção de touches          |
| `!touch_off`        | Desativa a deteção de touches       |

### Chat e jogadores

| Comando              | Descrição                              |
| -------------------- | -------------------------------------- |
| `!chat_on`           | Ativa o chat                           |
| `!chat_off`          | Desativa o chat                        |
| `!ignore <player>`   | Silencia um jogador                    |
| `!unignore <player>` | Remove o jogador da lista de ignorados |
| `!ignore_list`       | Mostra a lista de jogadores ignorados  |
| `!ignore_clear`      | Limpa a lista de ignorados             |
| `!players`           | Mostra a lista de jogadores            |

## 🗺️ Mapa Personalizado

O projeto inclui um mapa próprio denominado:

**6 MAN STRONG by Raul Meireles**

O mapa é definido diretamente no script através da estrutura de mapas do HaxBall, incluindo:

* Dimensões e geometria personalizadas
* Áreas específicas para as equipas
* Colisões personalizadas
* Segmentos e vértices próprios
* Configuração de física da bola
* Elementos visuais personalizados

A configuração do mapa está integrada diretamente no projeto.

## 💻 Tecnologias

* **JavaScript**
* **HaxBall Headless Host API**
* Custom HaxBall Stadium / Map Configuration
* Event-driven game logic

## 🧠 Conceitos aplicados

Este projeto permitiu trabalhar com vários conceitos relevantes de desenvolvimento de software, nomeadamente:

* Programação orientada a eventos
* Gestão de estado
* Estruturas de dados
* Sistemas de pontuação e progressão
* Gestão de utilizadores
* Validação e processamento de comandos
* Lógica multiplayer
* Configuração e personalização de ambientes de jogo
* Manipulação de eventos em tempo real

## 🚀 Objetivo

O objetivo do projeto é disponibilizar uma infraestrutura personalizada para partidas **6-Man de HaxBall**, automatizando tarefas de administração e adicionando sistemas de progressão e estatísticas aos jogadores.

Para além da componente de jogo, o projeto serviu como aplicação prática de **JavaScript, lógica de programação e desenvolvimento de sistemas interativos em tempo real**.

## 📂 Estrutura

```text
.
├── Projeto 6Man.js
└── README.md
```

## 👤 Autor

**Raul Meireles**

Projeto desenvolvido como experiência prática de desenvolvimento em JavaScript e personalização da plataforma HaxBall.
