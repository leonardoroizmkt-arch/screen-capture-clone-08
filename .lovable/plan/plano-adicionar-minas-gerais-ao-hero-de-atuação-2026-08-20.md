# Plano: Adicionar Minas Gerais ao hero de atuação

## Objetivo
Atualizar a linha de atuação geográfica no hero da landing page para incluir Minas Gerais, refletindo a nova área de atuação do escritório.

## Alteração proposta
No arquivo `src/routes/index.tsx`, linha 192-194, alterar o texto estático do `<p>` do hero de:

```text
GOIÁS · MATO GROSSO · DISTRITO FEDERAL
```

para:

```text
GOIÁS · MATO GROSSO · DISTRITO FEDERAL · MINAS GERAIS
```

## Verificação
- Após a edição, executar `bun run build` para garantir que não há erros de compilação.
- Validar visualmente no preview que o texto aparece completo e sem quebras de layout.

## Fora de escopo
- Não alterar o texto de "estados: GO, MT, DF e MG" na seção de estatísticas (já atualizado anteriormente).
- Não alterar cores, fontes, espaçamentos ou outros elementos do design system.
