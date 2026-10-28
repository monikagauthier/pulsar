# PULSAR — Manifesto de Assets

Este projeto **não inclui fotografias reais** (nenhuma foi fornecida e o ambiente de
build está offline, sem acesso a bancos de imagem). Para manter a direção de arte
autêntica, a interface usa **ilustrações técnicas vetoriais (SVG) originais** no lugar
das fotos. Elas funcionam como arte definitiva **ou** como _placeholders de alta
qualidade_ até que a fotografia real seja produzida.

Abaixo, exatamente o que criar/substituir, com finalidade, dimensão e composição
recomendadas. Mantenha os nomes de arquivo para que o código encontre os assets.

---

## 1. `hero/` — Dobra principal (prioridade máxima)

| Arquivo | Dimensão | Finalidade | Composição recomendada |
|---|---|---|---|
| `hero-sprayer.jpg` | 2560×1440 (16:9) | Fundo cinematográfico da Hero | Pulverizador autopropelido em operação ao entardecer, barra aberta com névoa de aplicação visível, lavoura em primeiro plano, céu com luz âmbar baixa. Espaço negativo à ESQUERDA para o texto. Luz lateral/contraluz. |
| `hero-sprayer-mobile.jpg` | 1080×1440 (3:4) | Versão vertical para mobile | Mesmo equipamento, enquadramento mais fechado e vertical; manter a máquina no terço inferior/direito e céu limpo no topo para legibilidade do texto. |

> Enquanto não houver foto, o componente `HeroArt` (SVG) é usado automaticamente.

## 2. `equipment/` — Tecnologia e equipamentos

| Arquivo | Dimensão | Finalidade | Composição |
|---|---|---|---|
| `boom-detail.jpg` | 1600×1280 (5:4) | Seção “Tecnologia” | Detalhe real da barra: porta-bicos, pontas e espaçamento. Fundo neutro, foco técnico, luz de dia. |
| `nozzle-macro.jpg` | 1200×1500 (4:5) | Seção “Treinamento” (figura técnica) | Macro de uma ponta de pulverização com leque de gota formado, fundo escuro. |

## 3. `mockups/` — Materiais do treinamento

| Arquivo | Dimensão | Finalidade | Composição |
|---|---|---|---|
| `lesson-device.png` | 1400×900 | Vídeo-aulas | Tela (notebook/tablet) exibindo uma aula do treinamento. Sombra suave, fundo verde profundo. **Uma peça por imagem — não fazer colagem.** |
| `guide-pdf.png` | 1000×800 | Apostilas | Capa/página de um guia técnico em PDF. |
| `checklist.png` | 1000×800 | Checklists | Folha de checklist de regulagem/inspeção. |

## 4. `backgrounds/` — Texturas de apoio (opcional)

| Arquivo | Dimensão | Finalidade | Composição |
|---|---|---|---|
| `field-rows.jpg` | 2400×1200 | Faixa de transição / CTA final | Linhas de cultivo em perspectiva, tom esverdeado escuro, baixo contraste para servir de fundo de texto. |

## 5. `branding/` — Identidade

| Arquivo | Dimensão | Finalidade |
|---|---|---|
| `logo.svg` | vetor | Logo PULSAR (já incluído em `site/assets/svg/logo.svg` e no componente `Logo`). |
| `favicon.svg` | vetor | Favicon (já incluído). |

---

### Diretrizes de uso
- **Uma função por imagem.** Não criar colagens que misturem vários materiais.
- Fotos reais devem representar o produto/contexto — nada de banco genérico sem relação.
- Exportar em WebP/AVIF quando possível; manter JPG/PNG como fallback.
- Respeitar o espaço negativo indicado para preservar a legibilidade do texto sobreposto.
