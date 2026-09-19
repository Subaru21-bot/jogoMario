# Jogo Mario

Projeto de um jogo inspirado no universo do **Mario**, desenvolvido com uma estrutura separada entre **frontend** e **backend**.

## Sobre o projeto

O **Jogo Mario** é uma aplicação desenvolvida com o objetivo de criar uma experiência de jogo inspirada nos clássicos jogos do Mario.

O projeto possui uma estrutura organizada, separando a interface da aplicação da parte responsável pela lógica e funcionalidades do sistema.

## Integrantes

| Nome | Matrícula | Papel |
|----------------|-----------|---------------|
| Karllyson Paula | 01861379 | Testador |
| Marconi Farias Araújo | 01783919 | Desenvolvedor |
| Gustavo Buled Martins | 01797483 | Documentador |
| Sérgio Luiz dos Santos Neto | 01819969 | Desenvolvedor |
| Pedro Henrique Rodrigues da Silva | 01794091 | Scrum Master |
| Janildo Caluête de Farias Júnior | 01799458 | Testador |

## Estrutura do projeto

```text
jogoMario/
├── backend/
├── frontend/
├── docs/
├── README.md
└── LICENSE
```

### Backend

Diretório responsável pela parte de backend da aplicação.

```text
backend/
```

### Frontend

Diretório responsável pela interface e interação do usuário com o jogo.

```text
frontend/
```

### Docs

Diretório destinado à documentação do projeto.

```text
docs/
```

## Como executar

### Clonar o repositório

```bash
git clone https://github.com/Subaru21-bot/jogoMario.git
```

Acesse o diretório:

```bash
cd jogoMario
```

### Executar o Frontend

O Front-End é feito em HTML, CSS e JavaScript puros, sem dependências externas. Acesse o diretório:

```bash
cd frontend
```

E abra o arquivo `index.html` diretamente no navegador, ou, de preferência, utilize um servidor local (por exemplo, a extensão **Live Server** do VS Code, ou o comando abaixo):

```bash
npx serve .
```

Após abrir a página, pressione qualquer tecla para fazer o personagem pular e desviar do cano que se aproxima.

### Backend

O diretório `backend/` está reservado para futuras funcionalidades do projeto e ainda não possui implementação.

## Funcionalidades

* Jogo inspirado no universo do Mario
* Frontend separado do backend
* Organização modular do projeto
* Estrutura preparada para novas funcionalidades
* Documentação separada no diretório `docs`

## Tecnologias

* HTML5
* CSS3
* JavaScript

## Desenvolvimento

O projeto foi desenvolvido com foco em organização, separação de responsabilidades e facilidade de manutenção.

A estrutura permite que novas funcionalidades sejam adicionadas ao jogo de forma independente, mantendo o frontend e backend separados.

## Documentação

A documentação complementar está disponível no diretório:

```text
docs/
```

## Licença

Este projeto está disponibilizado sob a licença presente no arquivo [`LICENSE`](LICENSE).
