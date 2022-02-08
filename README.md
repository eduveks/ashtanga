![Logo](https://raw.githubusercontent.com/eduveks/ashtanga/main/docs/logo.svg)

# Ashtanga Vinyasa Yoga

Website open-source que contém informações de introdução ao Ashtanga Vinyasa Yoga, vídeos demonstrativos e o catálogo de posições e sequências.

Feito com ReactJS, Ant.Design, [Cluar CMS](https://github.com/netuno-org/cluar) e a plataforma [Netuno](https://github.com/netuno-org/platform).

Tenha uma boa prática.

Namaste.

## Requisito

### Plataforma Netuno

[Siga os passos aqui](https://doc.netuno.org/docs/en/installation/)

## Instalação Automática da Aplicação

```
./netuno app github=eduveks/ashtanga
```

Em seguida, crie o config.json no website, por exemplo:

```
cp apps/ashtanga/website/src/config/config-dev.json apps/ashtanga/website/src/config/config.json
```

> Dentro da pasta `apps/ashtanga/website/src/config/` copiar o ficheiro `config-dev.json` para `config.json`.

Inicie o servidor Netuno:

```
./netuno server app=ashtanga
```

> Pode demorar porque é a primeira vez e a instalação do NPM será executada nas pastas `ui` e` website` dentro da pasta raiz do aplicativo.

## Clone e Instalação Manual

Crie uma nova app com o Netuno denominada `ashtanga` executando (no diretório raíz do Netuno) 

`./netuno app name=ashtanga`

e selecionando as configurações desejadas (tipo de base de dados, nome da base de dados e idioma da aplicação).

Depois clone este projeto para o diretório `(Netuno Root directory)/apps/ashtanga/`.

Depois instale as dependências NPM excutando

`npm install` 

no diretório `ashtanga/website/`.

## Configuração Manual

Copie o ficheiro de amostra de configuração de serviços executando o seguinte

`cp config/sample.json config/_development.json` (certifique-se do parâmetro `name`)

`cp website/src/config/config-dev.json website/src/config/config.json` 

e modifique de acordo com a configuração do seu ambiente local.

## Execução

No diretório raíz do Netuno execute

`./netuno server app=ashtanga`

que irá iniciar o servidor de backend e depois execute no diretório `(ashtanga app directory)/website/` o seguinte

`npm run start`

para iniciar o servidor de frontend.
