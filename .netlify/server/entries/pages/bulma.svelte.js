var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Bulma
});
module.exports = __toCommonJS(stdin_exports);
var import_index_88dff8a6 = require("../../chunks/index-88dff8a6.js");
const Bulma_nav = (0, import_index_88dff8a6.c)(($$result, $$props, $$bindings, slots) => {
  return `
<nav class="${"navbar"}" role="${"navigation"}" aria-label="${"main navigation"}"><div class="${"navbar-brand"}"><a class="${"navbar-item"}" href="${"/"}"><img src="${"https://bulma.io/images/bulma-logo.png"}" width="${"112"}" height="${"28"}"></a>

    <a role="${"button"}" class="${"navbar-burger"}" aria-label="${"menu"}" aria-expanded="${"false"}" data-target="${"navbarBasicExample"}"><span aria-hidden="${"true"}"></span>
      <span aria-hidden="${"true"}"></span>
      <span aria-hidden="${"true"}"></span></a></div>

  <div id="${"navbarBasicExample"}" class="${"navbar-menu"}"><div class="${"navbar-start"}"><a class="${"navbar-item"}">Home
      </a>

      <a class="${"navbar-item"}">Documentation
      </a>

      <div class="${"navbar-item has-dropdown is-hoverable"}"><a class="${"navbar-link"}">More
        </a>

        <div class="${"navbar-dropdown"}"><a class="${"navbar-item"}" href="${"about"}">About
          </a>
          <a class="${"navbar-item"}">Jobs
          </a>
          <a class="${"navbar-item"}">Contact
          </a>
          <hr class="${"navbar-divider"}">
          <a class="${"navbar-item"}">Report an issue
          </a></div></div></div>

    <div class="${"navbar-end"}"><div class="${"navbar-item"}"><div class="${"buttons"}"><a class="${"button is-primary"}"><strong>Sign up</strong></a>
          <a class="${"button is-light"}">Log in
          </a></div></div></div></div></nav>`;
});
const Bulma = (0, import_index_88dff8a6.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_88dff8a6.v)(Bulma_nav, "Nav").$$render($$result, {}, {}, {})}
<section class="${"section"}"><div class="${"container"}"><div class="${"box"}">I&#39;m in a box.
    </div></div></section>`;
});
