# Site de campanha — estrutura inicial

Scaffold em React + Vite, já organizado para cobrir os requisitos do TSE
levantados no briefing (itens 1 a 9). Os 4 primeiros itens (obrigatórios)
já têm componente dedicado; os demais (recomendados) também.

## Passo a passo — VSCode

### 1. Pré-requisitos
- Node.js 18+ instalado (`node -v` pra conferir)
- VSCode com as extensões: **ES7+ React/Redux snippets**, **ESLint**, **Prettier**

### 2. Abrir o projeto
```bash
cd campanha-site
code .
```

### 3. Instalar dependências
```bash
npm install
```
Isso vai instalar o `react`, `react-dom`, `react-router-dom` (listados no
`package.json`) e as ferramentas de build (`vite`, `eslint`).

### 4. Rodar em desenvolvimento
```bash
npm run dev
```
Abre automaticamente em `http://localhost:5173`.

### 5. Build de produção (pra quando for publicar)
```bash
npm run build
```
Gera a pasta `dist/`, pronta pra subir em qualquer hospedagem estática
(Vercel, Netlify, hospedagem própria etc.) — só lembrando que o domínio
final precisa ser o mesmo informado no registro da candidatura na
Justiça Eleitoral (item 2 do briefing).

## Estrutura de pastas

```
campanha-site/
├── public/                    → arquivos estáticos (favicon, robots.txt)
├── src/
│   ├── assets/                → imagens e fontes
│   ├── components/
│   │   ├── Header/            → identificação do candidato + navegação
│   │   ├── Footer/            → CNPJ, partido, links legais (itens 1, 3, 4)
│   │   ├── Hero/               → seção de abertura
│   │   ├── Trajetoria/        → linha do tempo da carreira política
│   │   ├── Compromissos/      → propostas / compromissos com o povo
│   │   ├── Contato/           → e-mail/WhatsApp oficiais (item 6)
│   │   └── Cookies/           → banner de aviso de cookies (item 7)
│   ├── data/
│   │   └── candidato.js       → dados oficiais (nome, número, partido, CNPJ...)
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Legal/
│   │       ├── PoliticaPrivacidade.jsx   → item 4 (OBRIGATÓRIO)
│   │       └── TermosDeUso.jsx           → item 5 (recomendado)
│   ├── styles/
│   │   └── global.css         → base de acessibilidade (item 8)
│   ├── App.jsx                 → rotas
│   └── main.jsx                 → entrada da aplicação
├── index.html
├── package.json
└── vite.config.js
```

## Checklist TSE (do briefing)

- [x] 1. Identificação do candidato — `src/data/candidato.js` + `Header`/`Footer`/`Hero`
- [x] 2. Endereço eletrônico informado à Justiça Eleitoral — campo `siteOficial`
- [x] 3. CNPJ da campanha — exibido no `Footer`
- [x] 4. Política de Privacidade (LGPD) — `pages/Legal/PoliticaPrivacidade.jsx`
- [x] 5. Termos de Uso — `pages/Legal/TermosDeUso.jsx`
- [x] 6. Canal de contato — `components/Contato`
- [x] 7. Aviso de cookies — `components/Cookies/CookieBanner.jsx`
- [x] 8. Acessibilidade — base em `styles/global.css` (foco visível, contraste), a expandir
- [ ] 9. Transparência sobre IA — texto no `Footer`, só ativa se algum conteúdo do site usar IA

## Próximos passos

1. Preencher `src/data/candidato.js` com os dados reais assim que o
   registro da candidatura sair (número, CNPJ, partido).
2. Você vai mandar o script de requisitos e o material de referência —
   assim que chegar, a gente aplica o design system (paleta, tipografia)
   em cima dessa base.
3. Escrever o conteúdo real da Política de Privacidade e dos Termos de
   Uso — os arquivos atuais são só o esqueleto com `[TODO]`, precisam de
   revisão jurídica antes de ir ao ar.
