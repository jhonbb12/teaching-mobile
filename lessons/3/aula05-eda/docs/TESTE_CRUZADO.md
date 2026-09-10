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

> O visitante confundiu o texto de ação com o texto de informação e não compreendeu sem ajuda o efeito de alternar o filtro de somente atenção.

### Autores

**Correção escolhida:**

> Tornar o botão de filtro mais explícito com `accessibilityLabel`, rótulo textual estável e feedback visual. Também adicionar a imagem e organizar o cabeçalho com Flexbox, para oferecer hierarquia mais clara.

**Arquivo/trecho alterado:**

> O arquivo principal de interface em `app/index.tsx` foi reestruturado com `Image`, `Flexbox`, `Pressable` com feedback `pressed`, `accessibilityRole`, `accessibilityLabel` e área mínima de toque.

### Confirmação do visitante

Depois da correção, a tarefa ficou mais clara? `sim / parcialmente / não`

Comentário curto:

> Sim, a ação ficou mais clara e o painel passou a ficar mais organizado visualmente.
