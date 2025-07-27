# Portfólio Pessoal e Blog com Next.js

Este é um projeto de um portfólio pessoal e blog desenvolvido com Next.js, Tailwind CSS e Firebase. O projeto apresenta uma estrutura moderna e organizada, incluindo uma área administrativa para gestão de conteúdo.

## ✨ Funcionalidades

-   **Blog:** Seção para publicação de artigos e posts.
-   **Portfólio de Projetos:** Exibição dos projetos desenvolvidos.
-   **Hobbies:** Uma área para compartilhar interesses pessoais como filmes, séries, animes e livros.
-   **Painel Administrativo:** Área restrita para gerenciar posts, projetos e visualizar feedbacks.
-   **Sistema de Feedback:** Usuários podem enviar feedbacks.
-   **Autenticação:** Login com o GitHub para acesso à área administrativa.

## 🚀 Tecnologias Utilizadas

-   **Next.js:** Framework React para renderização no lado do servidor e geração de sites estáticos.
-   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
-   **Tailwind CSS:** Framework de CSS utilitário para estilização.
-   **Firebase:** Plataforma da Google utilizada para autenticação e banco de dados (Firestore).
-   **React:** Biblioteca para construção de interfaces de usuário.
-   **Tiptap:** Editor de texto rico (WYSIWYG) para a criação e edição de posts.

## ⚙️ Como Executar o Projeto

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
-   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1.  Clone o repositório:

    ```bash
    git clone https://github.com/peal-26/peal-26.github.io.git
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd peal-26.github.io
    ```

3.  Instale as dependências:

    ```bash
    npm install
    ```

### Configuração do Ambiente

1.  Renomeie o arquivo `.env.example` para `.env` e preencha com as suas credenciais do Firebase.

### Executando a Aplicação

-   Para iniciar o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

-   Para gerar a build de produção:

    ```bash
    npm run build
    ```

-   Para iniciar o servidor de produção:

    ```bash
    npm run start
    ```

## 📜 Scripts Disponíveis

-   `npm run dev`: Inicia o servidor de desenvolvimento.
-   `npm run build`: Gera a build de produção.
-   `npm run start`: Inicia o servidor de produção.
-   `npm run lint`: Executa o linter para análise de código.
-   `npm run format`: Formata o código com o Prettier.

## 📁 Estrutura de Pastas

A estrutura de pastas do projeto está organizada da seguinte forma:

```
/src
|-- @types/           # Definições de tipos TypeScript
|-- actions/          # Funções de servidor (Server Actions)
|-- app/              # Rotas da aplicação (App Router)
|   |-- (home)/       # Rota principal
|   |-- admin/        # Rotas da área administrativa
|   |-- biografia/    # Rota da página de biografia
|   |-- hobbies/      # Rota da página de hobbies
|   |-- posts/        # Rotas relacionadas aos posts
|   `-- projectos/    # Rotas da página de projetos
|-- components/       # Componentes React reutilizáveis
|-- config/           # Configurações da aplicação (Firebase, etc.)
|-- contexts/         # Contextos React
|-- data/             # Funções de acesso a dados (Firebase)
|-- helpers/          # Funções utilitárias
|-- hooks/            # Hooks React customizados
|-- libs/             # Configuração de bibliotecas externas
|-- providers/        # Provedores de contexto
`-- styles/           # Estilos globais
```

## 🚀 Deploy

O projeto está configurado para deploy contínuo no GitHub Pages através do workflow do GitHub Actions presente em `.github/workflows/nextjs.yml`.
