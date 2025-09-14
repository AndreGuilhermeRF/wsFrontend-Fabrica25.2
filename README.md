# Pokédex Next.js

Este é um projeto de Pokédex desenvolvido com [Next.js](https://nextjs.org), consumindo a [PokéAPI](https://pokeapi.co/).  
Você pode visualizar todos os 151 Pokémon originais, pesquisar por nome e ver detalhes de cada um.

## Funcionalidades

- Listagem dos 151 Pokémon originais em um grid responsivo
- Pesquisa por nome de Pokémon
- Página de detalhes com informações do Pokémon selecionado
- Layout moderno e responsivo
- Footer fixo ao final da página

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura de Pastas

- `src/app/page.tsx` — Página principal da Pokédex
- `src/components/PokemonCard/page.tsx` — Componente de card de Pokémon
- `src/app/details/[id]/page.tsx` — Página de detalhes do Pokémon
- `src/app/globals.css` — Estilos globais do projeto

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Axios](https://axios-http.com/)
- [PokéAPI](https://pokeapi.co/)
- CSS puro e Tailwind CSS (opcional)

## Créditos

- Dados fornecidos por [PokéAPI](https://pokeapi.co/)
- Projeto feito para fins de estudo e portfólio

---

Sinta-se à vontade para contribuir ou sugerir melhorias!