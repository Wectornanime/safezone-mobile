# SafeZone

[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]





<!-- <div align="center">
  <img src="https://img.shields.io/static/v1?label=angular%2014&message=framework&color=red&style=for-the-badge&logo=ANGULAR"/>
  <img src="http://img.shields.io/static/v1?label=node%20Js&message=framework&color=greenyellow&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</div> -->

Status do Projeto: ✔️ (concluido)

### Tópicos

🔹 [Descrição do projeto](#descrição-do-projeto)

🔹 [Funcionalidades](#funcionalidades)

🔹 [Deploy da Aplicação](#layout-ou-deploy-da-aplicação-)

🔹 [Pré-requisitos](#pré-requisitos)

🔹 [Tarefas em aberto](#tarefas-em-aberto)

🔹 [Como rodar a aplicação](#como-rodar-a-aplicação-️)

🔹 [Backend](https://github.com/Wectornanime/safezone-back)

## Descrição do projeto
O SafeZone é uma solução para promover a segurança no âmbito empresarial.
Este repositório diz respeiro à versão mobile do projeto, dependendo totalmente do backend.

## Funcionalidades

✔️ Registar, ler, deletar ocorrências.

✔️ Atualizar o status das ocorrências.

✔️ Anexar imagem à ocorrência.

✔️ Enviar a localização da ocorrência.

## Layout ou Deploy da Aplicação 💨

## Pré-requisitos

⚠️ [Node Js](https://nodejs.org/en/download/)

⚠️ [Expo](https://expo.dev/)

## Tarefas em aberto

⚠️ Adicionar sistema de usuários

## Como rodar a aplicação 🕹️
### Clone o projeto
Primeiro faça o clone do projeto com o seguinte comando:

```
git clone https://github.com/Wectornanime/safezone-mobile.git
```

### Instale as dependências
Depois, acesse a pasta onde o projeto foi clonado, e instale as dependencias com o seguinte comando:

```
npm install
```
### Execute o backend
Siga os passos descritos no `README` do backend.

### Configure as variáveies de ambiente
Para configurar as variáveis de ambinte, você precisa criar um arquivo chamado `.env` na raiz do projeto, contendo o seguinte conteúdo:
```
API_URL= #ip ou url do backend
```
Existe um arquivo chamado `.env.example`, que você pode usar como exemplo.

> Se você estiver rodando o backend localmente, será preciso usar o ip local do backend, para isso use o comando `ipconfig`, para ambientes windows, ou `ifconfig`, para ambientes unix, para obter o ip.

### Rode a aplicação em modo de desenvolvimento:
Para rodar a aplicação em modo de desenvolvimento, execute o seguinte comando:
```
npm start
```

### Veja a aplicação rodando em seu dispositivo móvel:
#### Instale o Expo Go em seu dispositivo
Para ver a aplicação rodando em seu dispositivo móvel, você precisará instalar o aplicativo `Expo Go`.
🔹 [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR)

🔹 [Apple Store](https://apps.apple.com/br/app/expo-go/id982107779)

#### Abra a aplicação
Após a instalação do `Expo Go`, você poderá ler o `Qr code` disponivel no terminal.

## Licença

The [MIT License](./LICENSE) (MIT)

Copyright ©️ 2024 - SafeZone - mobile

