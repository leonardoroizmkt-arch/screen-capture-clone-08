Atualizar o link do WhatsApp para usar o formato com `+` antes do código do país.

## Mudança
- Arquivo: `src/routes/index.tsx`, linha 5
- De: `const WHATSAPP = "https://wa.me/5562982184938";`
- Para: `const WHATSAPP = "https://wa.me/+5562982184938";`

## Como aplicar
A constante `WHATSAPP` é usada em todos os botões e links de WhatsApp do site. Alterar apenas ela atualiza automaticamente o CTA do header, o botão do hero, o menu mobile e o botão flutuante.