## Atualizar números da seção Sobre na homepage

Atualizar os placeholders `[XX]` na seção **Quem atende você** de `src/routes/index.tsx` pelos valores informados pelo cliente.

### Alterações

- **Linhas 306-309** do `src/routes/index.tsx`:
  - `[XX]` anos de atuação → `10`
  - `[XX]` fazendas regularizadas → `+ de 130`
  - `[XX]` hectares sob assessoria → `179 mil`
  - Manter `3` estados: GO, MT e DF

### Validação

- Verificar se o build passa sem erros de compilação.
- Confirmar visualmente na pré-visualização que os novos números aparecem na seção Sobre.

### Arquivos envolvidos

- `src/routes/index.tsx`
