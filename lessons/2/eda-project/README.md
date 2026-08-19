# Miniprojeto B — Painel EDA de Permanência Estudantil

## Missão

Construir um pequeno painel tipado com indicadores simulados de permanência estudantil. Cada indicador será exibido por um componente reutilizável. Um botão deverá alternar entre todos os indicadores e somente os que exigem atenção.

> **Atenção:** os valores são fictícios, agregados e produzidos apenas para aprendizagem. O exercício não contém dados pessoais nem descreve uma turma real.

## O que você vai praticar

- união de literais com `type`;
- objeto tipado com `interface`;
- função com parâmetros e retorno tipados;
- componente com `props`;
- estado booleano com `useState`;
- coleção transformada por `.filter()` e `.map()`;
- teste e commit no Git.

## Resultado esperado

A tela deve mostrar três indicadores simulados. O botão “Somente atenção” filtra a coleção. Um novo toque remove o filtro e restaura todos os cartões. O texto do botão e a quantidade exibida devem acompanhar o estado atual.

## Preparação no VS Code — 5 minutos

1. Abra o projeto-base usado na Aula 3.
2. Abra o terminal integrado do VS Code.
3. Confirme que está na pasta do projeto.
4. Se ainda não executou o projeto nesta máquina, use:

```powershell
npm ci
npx expo-doctor
```

5. Copie o arquivo `app/index.tsx` fornecido nesta atividade para a rota inicial do projeto-base.
6. Inicie o aplicativo:

```powershell
npx expo start
```

Abra no navegador com `w` ou leia o QR Code no Expo Go. Não instale bibliotecas e não recrie o projeto.

## Etapas da implementação — 35 minutos

Abra `app/index.tsx` e localize os comentários `TODO`.

### 1. Restrinja as situações válidas — 5 min

Troque o tipo amplo `string` por uma união que aceite somente:

```ts
"adequado" | "atencao"
```

Teste temporariamente um terceiro valor e observe a indicação do editor. Depois, desfaça o erro.

### 2. Melhore a função de formatação — 7 min

A função `formatarValor` deve:

- unir diretamente números e os símbolos `%` ou `p.p.`;
- inserir um espaço antes da palavra `estudantes`.

Mantenha os parâmetros e o retorno explicitamente tipados.

### 3. Implemente o filtro da coleção — 8 min

Quando `somenteAtencao` for `true`, use `.filter()` para manter apenas os registros cuja situação seja `"atencao"`. Quando for `false`, use todos os indicadores.

### 4. Faça o botão alternar — 8 min

A função `alternarFiltro` atualmente só ativa o filtro. Use a forma baseada no valor anterior para alternar entre `true` e `false`.

Dica:

```ts
setSomenteAtencao((valorAtual) => !valorAtual);
```

### 5. Atualize a quantidade — 7 min

No cabeçalho, troque a quantidade fixa pelo tamanho da coleção que está realmente visível.

## Teste e entrega — 15 minutos

Verifique:

- [ ] existem somente as duas situações permitidas;
- [ ] cada objeto segue a interface `IndicadorEDA`;
- [ ] `formatarValor` possui parâmetros e retorno tipados;
- [ ] os cartões recebem um indicador por `props`;
- [ ] o botão alterna o estado nos dois sentidos;
- [ ] a coleção usa `.filter()`, `.map()` e `key={indicador.id}`;
- [ ] a quantidade exibida acompanha o filtro;
- [ ] o aplicativo abre sem tela vermelha no navegador ou celular;
- [ ] você consegue apontar no código um exemplo de tipo, prop, estado e coleção.

Faça o commit:

```powershell
git status
git add app/index.tsx
git commit -m "feat(aula-04): criar painel EDA tipado"
```

Entregue o identificador do commit e duas capturas: uma com todos os indicadores e outra com o filtro ativado.

## Desafio opcional

Adicione um quarto indicador fictício respeitando a interface. Não adicione gráficos, API, banco de dados nem biblioteca externa nesta aula.

