// src/utils/makeWebhook.js
export async function sendLeadToMake(payload) {
  const url = import.meta.env.VITE_MAKE_WEBHOOK_URL;
  const apiKey = import.meta.env.VITE_MAKE_API_KEY;

  if (!url || !apiKey) return false;

  try {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-make-apikey": apiKey, // Auth pelo header (Make)
      },
      body: JSON.stringify(payload),
      keepalive: true,
      mode: "cors",
    });
    return true;
  } catch {
    return false;
  }
}
