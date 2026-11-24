# Jogo da Velha (versão original — 2018)

Meu primeiro app: um **Jogo da Velha** feito em HTML/JavaScript e empacotado com **Apache Cordova**. Está aqui principalmente como registro histórico — a versão moderna, em Kotlin/Compose, está em [jogo-da-velha-compose](https://github.com/lucasemanuel58/jogo-da-velha-compose).

> 🎮 **Demo jogável:** https://lucasemanuel58.github.io/jogoDavelha/

## O que faz

- Modo **1 jogador** (marque "Computador") ou **2 jogadores** (desmarque).
- Telas separadas para vitória de X, vitória de O e empate.
- Botão **reiniciar** para voltar ao tabuleiro inicial.
- Rodava no navegador e, via Cordova, virava app Android/iOS/Windows.

## Como rodar

A parte web não tem build: basta abrir `www/index.html` no navegador.

Para gerar o APK, era usado Cordova (versão antiga, de 2018 — talvez seja preciso ajustar as versões de plataforma hoje):

```bash
npm install -g cordova
cordova platform add android
cordova run android
```

## Sobre os testes

Existe uma suíte **Jasmine 1.2** em `www/spec/`, mas ela é o template padrão do Cordova (`app.initialize`, evento `deviceready`...). Ela **não cobre a lógica do jogo**. Deixei isso registrado para não vender o que não existe: os testes de verdade da lógica (minimax, vitória e empate) estão na versão Compose.

## Limitações conhecidas

- O "computador" escolhe o centro se estiver livre e depois joga aleatoriamente. Não há minimax nem níveis de dificuldade.
- A navegação entre resultados usa troca de página (`location.href`), não um estado único.
- Código de 2018, preservado como está. Não pretendo modernizar este repo — a refação vive no projeto novo.

## Estrutura

```
config.xml          # configuração do Cordova
www/index.html      # tabuleiro
www/script.js       # regras + "IA" simples
www/spec/           # suíte Jasmine do template Cordova
www/res/            # ícones e splash screens
```

## Licença

Domínio público sob [Unlicense](LICENSE) (o arquivo ficou na raiz para o GitHub reconhecer).
