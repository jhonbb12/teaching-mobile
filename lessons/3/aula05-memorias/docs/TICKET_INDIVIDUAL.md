# Ticket individual — Aula 5

Nome: Aluno(a) da Aula 5

1. Qual barreira sua dupla encontrou **antes** de editar o código?

> A interface apresentava baixa legibilidade em textos secundários, com legenda em cinza claro sobre fundo branco, falta de painel de estado para a seleção, ausência de resposta visual perceptível no botão de filtro e pouca clareza na separação entre o texto informativo e o conteúdo de ação.

2. Cite uma decisão de layout e diga o que ela melhorou.

> Implementamos um layout com `View`, `Image`, `StyleSheet` e `Flexbox`, usando uma linha de cabeçalho com `flexDirection: "row"` e `gap`, além do asset local `assets/images/arquivo-didatico.png` inserido no cabeçalho. Isso trouxe maior organização visual e alinhou a imagem com o controle de ação de forma legível.

3. Cite uma decisão de acessibilidade/interação e diga quem se beneficia.

> O botão de filtro foi convertido em um `Pressable` com estado `pressed`, área mínima de toque de 48x48dp (`minWidth: 48`, `minHeight: 48`), e propriedades de acessibilidade com `accessible={true}`, `accessibilityRole="button"`, `accessibilityLabel="Filtrar memórias"` e `accessibilityHint`. Isso beneficia usuários com leitor de tela, baixa visão e quem precisa de feedback claro ao tocar.

4. O que a outra dupla encontrou que vocês não tinham percebido?

> A outra dupla apontou que a presença do texto “Nenhuma memória selecionada.” solto sem painel ou contêiner reduzia a hierarquia visual e deixava o espaço de detalhe sem estrutura clara. Também observou que o controle de ação precisava de feedback e acessibilidade mais explícita.

5. Confirmação de preservação da lógica da Aula 4

> Sim. Mantivemos a lógica de domínio da Aula 4 intacta, sem alterar os tipos, props, estado e seleção já definidos em [src/dominio.ts](../src/dominio.ts). Apenas a interface visual e a semântica de ação foram refinadas.
