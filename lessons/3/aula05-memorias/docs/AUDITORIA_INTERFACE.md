# M1 — Scanner de Barreiras

**Regra:** durante os primeiros 60 segundos, não altere o código. Use o app.

| # | Barreira observada | Evidência concreta | Quem pode ser prejudicado? | Prioridade |
|---|---|---|---|---|
| 1 | Baixo contraste e baixa legibilidade em textos secundários | O texto explicativo no topo, as legendas abaixo dos títulos e a mensagem “Nenhuma memória selecionada.” aparecem em tom cinza claro sobre fundo branco. | Usuários com baixa visão, brilho reduzido e leitores de tela com contexto visual limitado. | alta |
| 2 | Falta de feedback visual no controle de filtro | O botão de filtro pode ser reconhecido como ação, mas não entrega resposta ao toque nem estado de `pressed` visível. | Usuários que precisam de confirmação de toque e feedback imediato. | alta |
| 3 | Falta de imagem local e suporte multimodal no cabeçalho | O layout depende do texto e não usa `assets/images/arquivo-didatico.png`, nem ícones de apoio como mapa, calendário ou imagem de comunidade fictícia. | Pessoas com dificuldades de leitura, neurodivergentes e usuários que se beneficiam de representação multimodal. | média |
| 4 | Rótulos e papel acessível ausentes para controle de ação | O filtro não apresenta `accessibilityRole`, `accessibilityLabel` e `accessibilityHint` claros; o leitor de tela não anuncia um nome compreensível da função. | Usuários de leitores de tela e tecnologias assistivas. | alta |

## Duas barreiras que vamos corrigir primeiro

1. Baixo contraste e baixa legibilidade dos textos secundários.
2. Falta de feedback visual e de acessibilidade clara no botão de filtro.

## Perguntas de apoio

- O que parece acionável?
- O toque dá uma resposta perceptível?
- Algum estado importante depende só de cor?
- O conteúdo está apertado ou sem hierarquia?
- A ação teria um nome compreensível para um leitor de tela?
- O alvo de toque parece pequeno?
