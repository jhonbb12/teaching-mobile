# Boss Fight — Teste Cego por Pares

## Regra dos 60 segundos

A dupla visitante usa a interface **sem receber explicação**. A dupla autora não pode apontar onde tocar.

### Visitante

- O que parece acionável?
- O toque produz resposta perceptível?
- Algum estado depende apenas de cor?
- O texto e a hierarquia estão claros?
- Há algo apertado, ambíguo ou difícil de tocar?

**Uma barreira observada:**

> A visitante tentou localizar o filtro pelo texto “Filtrar”, mas não percebeu se o botão estava ativo nem se o toque causava resposta. A área do botão parecia pequena e o leitor de tela não anunciava com clareza o nome da ação, porque o controle não deixava o papel e o texto acessível de forma explícita.

### Autores

**Correção escolhida:**

> Adicionamos um controle `Pressable` com `pressed` visual, `accessibilityRole="button"`, `accessibilityLabel="Filtrar memórias"`, `accessibilityHint="Alterna a visualização das memórias"`, além de `minWidth: 48`, `minHeight: 48`, `justifyContent: "center"` e `alignItems: "center"` para garantir área de toque e resposta perceptível.

**Arquivo/trecho alterado:**

> O arquivo principal [app/index.tsx](../app/index.tsx) foi atualizado com o cabeçalho em linha com a imagem local, o botão de filtro com Pressable, feedback de `pressed`, estrutura de Flexbox e o bloco de estado de seleção com texto explícito.

### Confirmação do visitante

Depois da correção, a tarefa ficou mais clara? `sim / parcialmente / não`

Comentário curto:

> Sim. O botão ficou reconhecível como ação, com resposta ao toque e texto de rótulo claro para o leitor de tela. A área de toque visual também passou a parecer mais segura.
