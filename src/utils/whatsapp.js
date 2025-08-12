export const WHATSAPP_PHONE = "5512988081002"; // +55 12 98808-1002

export function waUrlFromMessage(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function formatLeadMessage(payload) {
  return [
    "Olá, equipe VOIA! Quero agendar meu *Diagnóstico Gratuito*. Seguem meus dados:",
    "",
    `*Nome:* ${payload.nome}`,
    `*Empresa:* ${payload.empresa || "-"}`,
    `*E-mail:* ${payload.email}`,
    `*WhatsApp:* ${payload.whatsapp}`,
    `*Segmento:* ${payload.segmento || "-"}`,
    `*Faturamento:* ${payload.faturamento || "-"}`,
    `*Website:* ${payload.website || "-"}`,
    `*Desafio:* ${payload.desafio || "-"}`,
    "",
    `*UTM Source:* ${payload.utm_source || "-"} | *Medium:* ${payload.utm_medium || "-"} | *Campaign:* ${payload.utm_campaign || "-"}`,
    `*Term:* ${payload.utm_term || "-"} | *Content:* ${payload.utm_content || "-"}`,
    "",
    `*Origem:* ${payload.origem || "LP Vire o Jogo"}`,
    `*Quando:* ${new Date().toLocaleString("pt-BR")}`,
  ].join("\n");
}

export function formatQuickMessage(origin, utm = {}) {
  return [
    "Olá, equipe VOIA! Quero meu *Diagnóstico Gratuito*.",
    "",
    `*Origem do clique:* ${origin}`,
    `*UTM Source:* ${utm.utm_source || "-"} | *Medium:* ${utm.utm_medium || "-"} | *Campaign:* ${utm.utm_campaign || "-"}`,
  ].join("\n");
}
