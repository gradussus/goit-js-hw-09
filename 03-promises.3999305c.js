function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");const u=document.querySelector(".form");function l(e,t){return new Promise(((r,n)=>{const o=Math.random()>.3;setTimeout((()=>{o&&r(`✅ Fulfilled promise ${e} in ${t}ms`),n(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}u.addEventListener("submit",(t=>{t.preventDefault();let r=Number(u.delay.value);for(let t=1;t<=Number(u.amount.value);t+=1)l(t,r).then((t=>e(i).Notify.success(t))).catch((t=>e(i).Notify.failure(t))),r+=Number(u.step.value)}));
//# sourceMappingURL=03-promises.3999305c.js.map