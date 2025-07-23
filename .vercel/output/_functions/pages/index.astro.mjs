import { c as createComponent, b as createAstro, e as addAttribute, r as renderHead, f as renderSlot, g as renderTemplate, h as renderScript, m as maybeRenderHead, i as renderComponent } from '../chunks/astro/server_B8KTH3Dt.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/proyectos/wuwa_char_countdown/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Countdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Countdown;
  const { date, newVersion } = Astro2.props;
  return renderTemplate`${renderScript($$result, "D:/proyectos/wuwa_char_countdown/src/components/Countdown.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<h2 id="version" hidden class="text-center text-md font-bold opacity-80">Version ${"2.4"} <span>Phase ${newVersion ? 2 : 1}</span></h2> <div id="countdown" hidden${addAttribute(newVersion, "data-new-version")}${addAttribute(date.getTime(), "data-time")} class="grid auto-cols-max grid-flow-col gap-5 text-center"> <div class="flex flex-col"> <span class="countdown font-mono text-5xl"> <span style="--value:00;" aria-live="polite" id="days" aria-label="00">00</span> </span>
days
</div> <div class="flex flex-col"> <span class="countdown font-mono text-5xl"> <span style="--value:00;" aria-live="polite" id="hours" aria-label="00">00</span> </span>
hours
</div> <div class="flex flex-col"> <span class="countdown font-mono text-5xl"> <span style="--value:00;" aria-live="polite" id="min" aria-label="00">00</span> </span>
min
</div> <div class="flex flex-col"> <span class="countdown font-mono text-5xl"> <span style="--value:00;" aria-live="polite" id="sec" aria-label="00">00</span> </span>
sec
</div> </div> <h2 id="version-release" hidden class="text-center text-2xl font-bold">
Version ${"2.4"} <span> is out</span> </h2>`;
}, "D:/proyectos/wuwa_char_countdown/src/components/Countdown.astro", void 0);

const servers = [{
  name: "Asia",
  zone: "Asia/Shanghai"
}, {
  name: "SEA",
  zone: "Asia/Singapore"
}, {
  name: "HMT",
  zone: "Asia/Hong_Kong"
}, {
  name: "America",
  zone: "America/Bogota"
}, {
  name: "Europe",
  zone: "Europe/Berlin"
}];

const $$SelectServer = createComponent(($$result, $$props, $$slots) => {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timezone = userTimezone.split("/")[0];
  return renderTemplate`${maybeRenderHead()}<div class="custom-select-wrapper" data-astro-cid-nujh35b5> <button id="dropdown-btn" class="custom-select-btn" data-astro-cid-nujh35b5> <span id="selected-option" data-astro-cid-nujh35b5></span> </button> <ul id="dropdown-menu" class="custom-select-menu hidden" data-astro-cid-nujh35b5> ${servers.map((opt) => renderTemplate`<li class="custom-select-option"${addAttribute(opt.name, "data-value")} data-astro-cid-nujh35b5> ${opt.name} </li>`)} </ul> <input type="hidden" name="server" id="server-input"${addAttribute(servers.find(({ zone }) => zone.split("/")[0] == timezone)?.zone.split("/")[0], "value")} data-astro-cid-nujh35b5> </div>  ${renderScript($$result, "D:/proyectos/wuwa_char_countdown/src/components/SelectServer.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/proyectos/wuwa_char_countdown/src/components/SelectServer.astro", void 0);

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const v_d = /* @__PURE__ */ new Date("06/12/2025 00:00:00.000");
  const now = /* @__PURE__ */ new Date();
  const diffMs = now.getTime() - v_d.getTime();
  const diffDays = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
  const versionIndex = Math.floor(diffDays / 42);
  const currentVersionDate = new Date(v_d.getTime() + versionIndex * 42 * 24 * 60 * 60 * 1e3);
  const daysInCurrentVersion = Math.floor((now.getTime() - currentVersionDate.getTime()) / (1e3 * 24 * 60 * 60));
  const phase = daysInCurrentVersion < 21 ? 1 : 2;
  const phaseEndDate = new Date(currentVersionDate.getTime() + 21 * phase * 24 * 60 * 60 * 1e3);
  if (phase == 1) {
    phaseEndDate.setHours(0, 0, 0, 0);
  } else {
    phaseEndDate.setUTCHours(10, 0, 0, 0);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<video src="assets/bg-video.mp4" autoplay loop poster="assets/bg-poster.webp" data-astro-cid-j7pv25f6></video> ${renderComponent($$result2, "SelectServer", $$SelectServer, { "data-astro-cid-j7pv25f6": true })} <main class="countdown-container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Countdown", $$Countdown, { "newVersion": phase === 2, "date": phaseEndDate, "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "D:/proyectos/wuwa_char_countdown/src/pages/index.astro", void 0);
const $$file = "D:/proyectos/wuwa_char_countdown/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
