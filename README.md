# IronPulse — Template de Landing Page (Academia)

Template 100% estático (HTML, CSS e JS) pensado para escalar várias landings de academias: planos, horários, modalidades, galeria e contato (WhatsApp/E‑mail).

## Features
- 🎯 **Mobile-first**, responsivo e acessível.
- ⚡ **Animações** com IntersectionObserver (reveal) e **parallax** leve em CSS/JS.
- 🏋️ **Elementos flutuantes** (halteres e anilhas em SVG) que sobem conforme o scroll.
- 🧩 Seções: Hero, Sobre, Planos, Modalidades, Horários, Galeria e Contato.
- ✅ **Aceita Gympass** (flag destacada).
- 🔗 Botões prontos para **WhatsApp** e **E‑mail**.
- 🖼️ Galeria estilo **masonry** com imagens de exemplo (substitua pelas suas).

## Estrutura
```
gym-landing-template/
  ├─ index.html
  ├─ style.css
  ├─ script.js
  └─ assets/
      ├─ hero-texture.png
      ├─ gym-01.jpg … gym-06.jpg (placeholders)
```

## Como usar
1. Abra o `index.html` no navegador (ou sirva com qualquer servidor estático).
2. Edite cores/tipografia em `:root` no `style.css` (ex.: `--primary` para o laranja).
3. Altere os números de **planos** e **horários** direto no HTML.
4. Troque imagens em `assets/` pelos seus arquivos (mesmo nome/ dimensão livre).
5. Atualize os links de WhatsApp/E‑mail na seção **Contato**.

## Dicas
- Para um parallax mais intenso, ajuste o fator em `script.js` (`y * 0.2`).  
- Prefere menos movimento? Use **Preferências do sistema** → reduzir movimento (já suportado).  
- Se quiser transformar isso em múltiplos **templates**, duplique a pasta e troque cores/ícones e textos.

Bom treino e bons deploys! 💪
