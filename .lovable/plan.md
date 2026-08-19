Atualizar os dados de contato (WhatsApp e e-mail) no site do Caldas & Beghini.

### Alterações

- `src/routes/index.tsx`:
  - Substituir `WHATSAPP` de `https://wa.me/55DDDNUMERO` para `https://wa.me/5562982184938`.
  - Substituir o placeholder `[inserir número]` na seção **Contato** pelo número `62 98218-4938` (formato legível).
  - Substituir o placeholder `[inserir e-mail]` na seção **Contato** por `caldasebeghini@gmail.com`.

### Validação

- Verificar se o build passa sem erros de compilação.
- Confirmar visualmente na pré-visualização que os novos dados aparecem na seção de Contato e que o botão/link do WhatsApp aponta corretamente para `https://wa.me/5562982184938`.

### Arquivos envolvidos

- `src/routes/index.tsx`
