# Angular Clock

Relógio digital em tempo real com fuso horário local (Brasil) e relógios mundiais, construído com **Angular 21** e **Tailwind CSS**.

![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## Sobre o projeto

O **Angular Clock** é uma aplicação web que exibe a hora e a data atualizadas a cada segundo. O relógio principal usa o fuso `America/Sao_Paulo`, e cartões adicionais mostram o mesmo instante em outros países, formatados em português do Brasil (`pt-BR`).

O projeto foi pensado como demonstração de conceitos modernos do Angular: componentes standalone, **signals** para estado reativo, ciclo de vida (`OnInit` / `OnDestroy`) e formatação de data/hora com a API nativa `Intl`.

## Funcionalidades

- Relógio principal em **horário de Brasília** (hora, minuto, segundo e data por extenso)
- **Relógios mundiais** para Índia, Alemanha, Estados Unidos (Nova York) e Japão
- Atualização automática a cada 1 segundo
- Interface responsiva com **Tailwind CSS**
- Cabeçalho com links para GitHub e LinkedIn
- Rodapé com data, hora local e créditos

## Stack tecnológica

| Tecnologia      | Uso                                      |
|-----------------|------------------------------------------|
| Angular 21      | Framework, componentes, signals            |
| TypeScript 5.9  | Tipagem estática                         |
| Tailwind CSS 4  | Estilização utilitária                   |
| RxJS            | Suporte do ecossistema Angular           |
| Vitest          | Testes unitários                         |

## Estrutura do projeto

```
src/app/
├── app.ts                    # Componente raiz da aplicação
├── components/
│   ├── digital-clock/        # Relógio principal e cartões mundiais
│   ├── header/               # Navegação e título
│   └── footer/               # Rodapé com data/hora e créditos
└── ...
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) (incluído com o Node.js)

## Como executar

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Paulo-Borges/angular-clock.git
cd angular-clock
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Acesse [http://localhost:4200](http://localhost:4200) no navegador. A página recarrega automaticamente quando você altera os arquivos do projeto.

## Scripts disponíveis

| Comando        | Descrição                          |
|----------------|------------------------------------|
| `npm start`    | Servidor de desenvolvimento        |
| `npm run build`| Build de produção em `dist/`       |
| `npm test`     | Testes unitários (Vitest)           |
| `npm run watch`| Build em modo watch (desenvolvimento) |

## Build para produção

```bash
npm run build
```

Os artefatos gerados ficam na pasta `dist/`. O build de produção aplica otimizações de performance e tamanho do bundle.

## Testes

```bash
npm test
```

Os testes rodam com [Vitest](https://vitest.dev/), integrado ao Angular CLI.

## Como funciona a atualização do relógio

O componente `DigitalClock` mantém um `signal` com a data/hora atual. No `ngOnInit`, um `setInterval` atualiza esse signal a cada segundo; no `ngOnDestroy`, o intervalo é limpo para evitar vazamento de memória.

A formatação usa `toLocaleTimeString` e `toLocaleDateString` com `timeZone` e locale `pt-BR`, permitindo exibir a mesma instância em fusos diferentes sem bibliotecas externas.

## Autor

**Paulo Borges**

- GitHub: [@Paulo-Borges](https://github.com/Paulo-Borges)
- LinkedIn: [Paulo Borges de Almeida](https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/)

## Licença

Este projeto é de uso livre para estudo e portfólio. Consulte o repositório para detalhes sobre licenciamento, se aplicável.
