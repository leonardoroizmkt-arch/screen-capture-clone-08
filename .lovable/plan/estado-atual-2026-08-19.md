Verificar e garantir que o botão flutuante do WhatsApp aponte para o link correto.

## Estado atual
- A constante `WHATSAPP` em `src/routes/index.tsx` (linha 5) já está configurada como `https://wa.me/+5562982184938`.
- O botão flutuante de WhatsApp (linha 487) usa essa constante via `href={WHATSAPP}`, portanto já está apontando para o endereço solicitado.

## Ação
- Confirmar que o link `href` do botão flutuante está vinculado à constante `WHATSAPP`.
- Não é necessária alteração de código, pois a mudança anterior já atualizou todos os links do site.