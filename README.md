<div align="center">

# PULSAR

### Domínio da Pulverização Agrícola

**Plataforma digital de educação e tecnologia agrícola.**
Página de vendas premium para o treinamento técnico PULSAR — tecnologia de aplicação,
regulagem, inspeção e boas práticas operacionais na pulverização agrícola.

</div>

---

## Sobre o projeto

PULSAR é uma marca de educação técnica voltada à pulverização agrícola. Este repositório
contém a **página de vendas** do treinamento, com direção de arte própria (conceito
_“Precisão de Campo” — painel de instrumentos editorial_) e identidade visual exclusiva,
evitando deliberadamente a aparência genérica de páginas geradas automaticamente.

O repositório entrega **duas implementações da mesma página**, compartilhando design
system e conteúdo:

| Pasta | O que é | Quando usar |
|---|---|---|
| **`site/`** | Site estático **sem dependências** (HTML + CSS + JS vanilla). Abre e roda em qualquer lugar, inclusive offline. | Preview imediato, hospedagem estática simples, ambientes sem acesso a registro npm. |
| **`src/`** | Aplicação **Next.js (App Router) + TypeScript + Tailwind CSS** — a mesma página componentizada. | Evolução do produto, integrações, SEO avançado, deploy em Vercel. |

> **Por que duas versões?** O ambiente de build original estava offline (sem acesso ao
> registro npm nem a CDNs). A versão `site/` garante uma entrega **funcional** e verificável
> imediatamente; a versão Next.js fica pronta para `npm install` assim que houver rede.

---

## Pré-visualização rápida (sem instalar nada)

```bash
cd site
python3 -m http.server 8000
# abra http://127.0.0.1:8000
```

Ou simplesmente abra `site/index.html` no navegador.

---

## Rodando a aplicação Next.js

> Requer acesso ao registro npm para instalar as dependências.

```bash
# 1. Instalar dependências
npm install

# 2. Ambiente de desenvolvimento
npm run dev          # http://localhost:3000

# 3. Build de produção
npm run build
npm run start

# 4. Qualidade
npm run lint         # ESLint (next/core-web-vitals + typescript)
npm run typecheck    # tsc --noEmit
```

### Variáveis de ambiente

```bash
cp .env.example .env.local
```

Preencha conforme a necessidade (ver comentários em `.env.example`).

---

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS 3** — tema com os tokens da marca em `tailwind.config.ts`
- **next/font** — webfonts self-hosted (Space Grotesk / Inter / IBM Plex Mono)
- Zero bibliotecas de animação: reveals via `IntersectionObserver` nativo

---

## Identidade visual

| Token | Hex | Uso |
|---|---|---|
| Verde profundo | `#10271D` | Cor institucional principal / fundos escuros |
| Verde energia | `#B9DC59` | Ações, indicadores de precisão (com parcimônia) |
| Âmbar | `#E5A943` | Acento raro (destaques/avisos) |
| Areia clara | `#F3F1E8` | Seções “claras” de respiro e contraste |
| Grafite agrícola | `#303A34` | Texto e elementos neutros |

A composição alterna fundos escuros e claros para criar **ritmo editorial** — sem
sequências intermináveis de verde, sem grades repetitivas de cards.

### Tipografia

Projetada para **Space Grotesk** (títulos) + **Inter** (texto) + **IBM Plex Mono**
(telemetria/labels).

- **Next.js:** já configurado via `next/font/google` em `src/app/layout.tsx`.
- **Site estático:** como o ambiente de build estava offline, `site/` usa **stacks de
  fontes do sistema** que emulam o mesmo caráter. Para ativar os webfonts reais, adicione
  no `<head>` de `site/index.html`:

  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
  ```

  As variáveis em `site/assets/css/tokens.css` (`--font-display`, `--font-body`,
  `--font-mono`) já apontam para essas famílias como primeira opção.

---

## Imagens e assets

A interface usa **ilustrações técnicas vetoriais originais** (SVG) no lugar de fotografia,
porque nenhuma foto real foi fornecida. Elas servem como arte definitiva ou como
_placeholder premium_.

Para substituir pela fotografia real, siga o **[Manifesto de Assets](public/images/ASSET-MANIFEST.md)**,
que lista cada arquivo esperado com finalidade, dimensão e composição recomendadas.

```
public/images/
├── branding/     # logo, favicon
├── hero/         # fundo cinematográfico da dobra principal
├── equipment/    # detalhes técnicos (barra, pontas)
├── mockups/      # materiais do treinamento (aulas, PDFs, checklists)
└── backgrounds/  # texturas de apoio
```

---

## Estrutura

```text
pulsar/
├── public/
│   ├── images/{branding,hero,equipment,mockups,backgrounds}/
│   │   └── ASSET-MANIFEST.md
│   ├── icons/
│   └── favicon.svg
├── site/                      # versão estática (HTML/CSS/JS) — roda offline
│   ├── index.html
│   └── assets/{css,js,svg}/
├── src/
│   ├── app/                   # App Router (layout, page, globals)
│   ├── components/
│   │   ├── layout/            # Header, Footer, RevealProvider
│   │   ├── sections/          # Hero, Sections (Problems, Benefits, Modules…)
│   │   └── ui/                # Button, Kicker, Logo, HeroArt (Design System)
│   ├── data/                  # conteúdo tipado (content.ts)
│   ├── hooks/                 # useReveal
│   ├── lib/                   # utilitários (cn)
│   └── styles/
├── .env.example
├── .gitignore
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Deploy

- **Estático (`site/`):** qualquer host de arquivos (Netlify, GitHub Pages, S3, Nginx).
- **Next.js:** [Vercel](https://vercel.com) (zero config) ou qualquer runtime Node 18.18+.

---

## Conteúdo & integridade

Nenhum dado fictício é apresentado: não há depoimentos, número de alunos, certificações,
garantias, parcerias oficiais ou resultados inventados. Fabricantes de equipamentos **não**
são apresentados como parceiros. O preço aparece como “a definir” até ser confirmado.

---

<div align="center">
<sub>PULSAR · Precisão no campo · Tecnologia de aplicação</sub>
</div>
