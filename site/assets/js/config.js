/* ============================================================
   PULSAR — Configuração central
   Preço, checkout e textos sensíveis ficam aqui — não espalhados
   pelo HTML. Altere num só lugar.
   ============================================================ */
window.PULSAR_CONFIG = {
  // Link do checkout (centralizado). Se ficar vazio, os botões viram
  // placeholder explícito.
  checkoutUrl: "https://ggcheckout.app/checkout/v5/UmZbV0Tk2OlB508sgw1Gh4",

  price: {
    reference: "R$ 49,90", // preço de referência (riscado)
    promo: "R$ 9,90", // preço promocional
    promoNumber: "9,90",
  },
};

// Aplica o link do checkout em todos os CTAs de compra marcados com
// data-checkout e injeta o preço onde houver data-price.
document.addEventListener("DOMContentLoaded", function () {
  var cfg = window.PULSAR_CONFIG || {};
  var url = (cfg.checkoutUrl || "").trim();

  document.querySelectorAll("[data-checkout]").forEach(function (el) {
    if (url) {
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    } else {
      el.setAttribute("href", "#checkout-indisponivel");
      el.setAttribute("aria-disabled", "true");
      el.setAttribute("title", "Link de checkout ainda não configurado");
    }
  });

  if (cfg.price) {
    document.querySelectorAll("[data-price=ref]").forEach(function (el) {
      el.textContent = cfg.price.reference;
    });
    document.querySelectorAll("[data-price=promo]").forEach(function (el) {
      el.textContent = cfg.price.promo;
    });
  }
});
