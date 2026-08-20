# Corrigir o bloco de estatísticas

O grid "Quem atende você" tem um quadro vazio (sobra do item removido), deixando um buraco no layout.

## O que fazer
- Remover o item vazio da lista de estatísticas, deixando três: `10 anos de atuação`, `50 mil hectares sob assessoria`, `3 estados: GO, MT e DF`.
- Ajustar o grid para acomodar três blocos sem espaço vazio: uma coluna no mobile e três colunas a partir de `md`, mantendo as divisórias finas e o fundo escuro atuais.
- Usar o índice como `key` (os rótulos deixam de ter valor vazio duplicado).

## Detalhes técnicos
Arquivo: `src/routes/index.tsx`, linhas 304-316. Trocar `grid-cols-2` por `grid-cols-1 md:grid-cols-3` e apagar a entrada `["", ""]`.
