# M1 — Scanner de Barreiras

**Regra:** durante os primeiros 60 segundos, não altere o código. Use o app.

| # | Barreira observada | Evidência concreta | Quem pode ser prejudicado? | Prioridade |
|---|---|---|---|---|


| 1 | A interface tinha um visual meio desorganizado e o painel da imagem não era apresentado junto com texto do app. | O cabeçalho do painel e o texto ficavam separados sem nenhuma relação visual.
 | Leitores e observadores iniciais da tela. | alta |


| 2 | O botão de filtro não dava feedback de "ação pressionada" e tinha área de toque pouco visivel. | O `Pressable` não mexia com `pressed` nem com altura mínima de 48x48 dp.
 | Usuários que precisam de confirmação tátil. | alta |

| 3 | O estado de “somente atenção” era representado só pela mudança de texto e cor do botão. | O botão mudava de rótulo, mas a explicação textual não era suficiente, alem disso, o botão não carrega feedback o suficiente para total compreensão do usurario, e não faz muito sentido em relação ao proprio uso. 
| Usuários com baixa visão ou que dependem de texto. | média |


| 4 | O cartão e o cartão de situação não apresentavam texto acessível suficiente para leitor de tela. | Cartões tinham cores e textos, mas sem `accessibilityLabel` no conjunto.
 | Usuários de tecnologia assistiva. | média |

## Duas barreiras que vamos corrigir primeiro

1. Melhorar a leitura visual do layout usando a imagem local e o agrupamento do texto com `View`, `Image` e `Flexbox`.
2. Tornar o botão acionável mais claro e mais acessível, com `Pressable`, feedback `pressed`, rótulo acessível e altura mínima útil.

## Perguntas de apoio

- O que parece acionável?
- O toque dá uma resposta perceptível?
- Algum estado importante depende só de cor?
- O conteúdo está apertado ou sem hierarquia?
- A ação teria um nome compreensível para um leitor de tela?
- O alvo de toque parece pequeno?
