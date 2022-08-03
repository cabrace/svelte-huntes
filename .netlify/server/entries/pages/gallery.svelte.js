var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Gallery
});
module.exports = __toCommonJS(stdin_exports);
var import_index_88dff8a6 = require("../../chunks/index-88dff8a6.js");
var import_jquery = require("jquery");
var import_lightgallery = require("lightgallery");
const Banner_gallery = (0, import_index_88dff8a6.c)(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var lightgallery = /* @__PURE__ */ (() => `@font-face {
  font-family: 'lg';
  src: url("data:font/woff2;base64,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") format("woff2"), url("/_app/immutable/assets/lg-22b72ba5.ttf?io9a6k") format("truetype"), url("/_app/immutable/assets/lg-fefc5c0d.woff?io9a6k") format("woff"), url("/_app/immutable/assets/lg-f2fe1c00.svg?io9a6k#lg") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

.lg-icon {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'lg' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.lg-container {
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

.lg-next,
.lg-prev {
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 2px;
  color: #999;
  cursor: pointer;
  display: block;
  font-size: 22px;
  margin-top: -10px;
  padding: 8px 10px 9px;
  position: absolute;
  top: 50%;
  z-index: 1080;
  outline: none;
  border: none;
}

.lg-next.disabled,
.lg-prev.disabled {
  opacity: 0 !important;
  cursor: default;
}

.lg-next:hover:not(.disabled),
.lg-prev:hover:not(.disabled) {
  color: #fff;
}

.lg-single-item .lg-next, .lg-single-item
.lg-prev {
  display: none;
}

.lg-next {
  right: 20px;
}

.lg-next:before {
  content: '\\e095';
}

.lg-prev {
  left: 20px;
}

.lg-prev:after {
  content: '\\e094';
}

@-webkit-keyframes lg-right-end {
  0% {
    left: 0;
  }
  50% {
    left: -30px;
  }
  100% {
    left: 0;
  }
}

@-moz-keyframes lg-right-end {
  0% {
    left: 0;
  }
  50% {
    left: -30px;
  }
  100% {
    left: 0;
  }
}

@-ms-keyframes lg-right-end {
  0% {
    left: 0;
  }
  50% {
    left: -30px;
  }
  100% {
    left: 0;
  }
}

@keyframes lg-right-end {
  0% {
    left: 0;
  }
  50% {
    left: -30px;
  }
  100% {
    left: 0;
  }
}

@-webkit-keyframes lg-left-end {
  0% {
    left: 0;
  }
  50% {
    left: 30px;
  }
  100% {
    left: 0;
  }
}

@-moz-keyframes lg-left-end {
  0% {
    left: 0;
  }
  50% {
    left: 30px;
  }
  100% {
    left: 0;
  }
}

@-ms-keyframes lg-left-end {
  0% {
    left: 0;
  }
  50% {
    left: 30px;
  }
  100% {
    left: 0;
  }
}

@keyframes lg-left-end {
  0% {
    left: 0;
  }
  50% {
    left: 30px;
  }
  100% {
    left: 0;
  }
}

.lg-outer.lg-right-end .lg-object {
  -webkit-animation: lg-right-end 0.3s;
  -o-animation: lg-right-end 0.3s;
  animation: lg-right-end 0.3s;
  position: relative;
}

.lg-outer.lg-left-end .lg-object {
  -webkit-animation: lg-left-end 0.3s;
  -o-animation: lg-left-end 0.3s;
  animation: lg-left-end 0.3s;
  position: relative;
}

.lg-toolbar {
  z-index: 1082;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.lg-media-overlap .lg-toolbar {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
}

.lg-toolbar .lg-icon {
  color: #999;
  cursor: pointer;
  float: right;
  font-size: 24px;
  height: 47px;
  line-height: 27px;
  padding: 10px 0;
  text-align: center;
  width: 50px;
  text-decoration: none !important;
  outline: medium none;
  will-change: color;
  -webkit-transition: color 0.2s linear;
  -o-transition: color 0.2s linear;
  transition: color 0.2s linear;
  background: none;
  border: none;
  box-shadow: none;
}

.lg-toolbar .lg-icon.lg-icon-18 {
  font-size: 18px;
}

.lg-toolbar .lg-icon:hover {
  color: #fff;
}

.lg-toolbar .lg-close:after {
  content: '\\e070';
}

.lg-toolbar .lg-maximize {
  font-size: 22px;
}

.lg-toolbar .lg-maximize:after {
  content: '\\e90a';
}

.lg-toolbar .lg-download:after {
  content: '\\e0f2';
}

.lg-sub-html {
  color: #eee;
  font-size: 16px;
  padding: 10px 40px;
  text-align: center;
  z-index: 1080;
  opacity: 0;
  -webkit-transition: opacity 0.2s ease-out 0s;
  -o-transition: opacity 0.2s ease-out 0s;
  transition: opacity 0.2s ease-out 0s;
}

.lg-sub-html h4 {
  margin: 0;
  font-size: 13px;
  font-weight: bold;
}

.lg-sub-html p {
  font-size: 12px;
  margin: 5px 0 0;
}

.lg-sub-html a {
  color: inherit;
}

.lg-sub-html a:hover {
  text-decoration: underline;
}

.lg-media-overlap .lg-sub-html {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}

.lg-item .lg-sub-html {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}

.lg-error-msg {
  font-size: 14px;
  color: #999;
}

.lg-counter {
  color: #999;
  display: inline-block;
  font-size: 16px;
  padding-left: 20px;
  padding-top: 12px;
  height: 47px;
  vertical-align: middle;
}

.lg-closing .lg-toolbar,
.lg-closing .lg-prev,
.lg-closing .lg-next,
.lg-closing .lg-sub-html {
  opacity: 0;
  -webkit-transition: -webkit-transform 0.08 cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.08 cubic-bezier(0, 0, 0.25, 1) 0s, color 0.08 linear;
  -moz-transition: -moz-transform 0.08 cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.08 cubic-bezier(0, 0, 0.25, 1) 0s, color 0.08 linear;
  -o-transition: -o-transform 0.08 cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.08 cubic-bezier(0, 0, 0.25, 1) 0s, color 0.08 linear;
  transition: transform 0.08 cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.08 cubic-bezier(0, 0, 0.25, 1) 0s, color 0.08 linear;
}

body:not(.lg-from-hash) .lg-outer.lg-start-zoom .lg-item:not(.lg-zoomable) .lg-img-wrap,
body:not(.lg-from-hash) .lg-outer.lg-start-zoom .lg-item:not(.lg-zoomable) .lg-video-cont {
  opacity: 0;
  -moz-transform: scale3d(0.5, 0.5, 0.5);
  -o-transform: scale3d(0.5, 0.5, 0.5);
  -ms-transform: scale3d(0.5, 0.5, 0.5);
  -webkit-transform: scale3d(0.5, 0.5, 0.5);
  transform: scale3d(0.5, 0.5, 0.5);
  will-change: transform, opacity;
  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.25, 1) 0s, opacity 250ms cubic-bezier(0, 0, 0.25, 1) !important;
  -moz-transition: -moz-transform 250ms cubic-bezier(0, 0, 0.25, 1) 0s, opacity 250ms cubic-bezier(0, 0, 0.25, 1) !important;
  -o-transition: -o-transform 250ms cubic-bezier(0, 0, 0.25, 1) 0s, opacity 250ms cubic-bezier(0, 0, 0.25, 1) !important;
  transition: transform 250ms cubic-bezier(0, 0, 0.25, 1) 0s, opacity 250ms cubic-bezier(0, 0, 0.25, 1) !important;
}

body:not(.lg-from-hash) .lg-outer.lg-start-zoom .lg-item:not(.lg-zoomable).lg-complete .lg-img-wrap,
body:not(.lg-from-hash) .lg-outer.lg-start-zoom .lg-item:not(.lg-zoomable).lg-complete .lg-video-cont {
  opacity: 1;
  -moz-transform: scale3d(1, 1, 1);
  -o-transform: scale3d(1, 1, 1);
  -ms-transform: scale3d(1, 1, 1);
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}

.lg-icon:focus-visible {
  color: #fff;
  border-radius: 3px;
  outline: 1px dashed rgba(255, 255, 255, 0.6);
}

.lg-toolbar .lg-icon:focus-visible {
  border-radius: 8px;
  outline-offset: -5px;
}

.lg-group:after {
  content: '';
  display: table;
  clear: both;
}

.lg-container {
  display: none;
  outline: none;
}

.lg-container.lg-show {
  display: block;
}

.lg-on {
  scroll-behavior: unset;
}

.lg-overlay-open {
  overflow: hidden;
}

.lg-toolbar,
.lg-prev,
.lg-next,
.lg-pager-outer,
.lg-hide-sub-html .lg-sub-html {
  opacity: 0;
  will-change: transform, opacity;
  -webkit-transition: -webkit-transform 0.25s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.25s cubic-bezier(0, 0, 0.25, 1) 0s;
  -moz-transition: -moz-transform 0.25s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.25s cubic-bezier(0, 0, 0.25, 1) 0s;
  -o-transition: -o-transform 0.25s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.25s cubic-bezier(0, 0, 0.25, 1) 0s;
  transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.25s cubic-bezier(0, 0, 0.25, 1) 0s;
}

.lg-show-in .lg-toolbar,
.lg-show-in .lg-prev,
.lg-show-in .lg-next,
.lg-show-in .lg-pager-outer {
  opacity: 1;
}

.lg-show-in.lg-hide-sub-html .lg-sub-html {
  opacity: 1;
}

.lg-show-in .lg-hide-items .lg-prev {
  opacity: 0;
  -webkit-transform: translate3d(-10px, 0, 0);
  transform: translate3d(-10px, 0, 0);
}

.lg-show-in .lg-hide-items .lg-next {
  opacity: 0;
  -webkit-transform: translate3d(10px, 0, 0);
  transform: translate3d(10px, 0, 0);
}

.lg-show-in .lg-hide-items .lg-toolbar {
  opacity: 0;
  -webkit-transform: translate3d(0, -10px, 0);
  transform: translate3d(0, -10px, 0);
}

.lg-show-in .lg-hide-items.lg-hide-sub-html .lg-sub-html {
  opacity: 0;
  -webkit-transform: translate3d(0, 20px, 0);
  transform: translate3d(0, 20px, 0);
}

.lg-outer {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  text-align: left;
  opacity: 0.001;
  outline: none;
  will-change: auto;
  overflow: hidden;
  -webkit-transition: opacity 0.15s ease 0s;
  -o-transition: opacity 0.15s ease 0s;
  transition: opacity 0.15s ease 0s;
}

.lg-outer * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.lg-outer.lg-zoom-from-image {
  opacity: 1;
}

.lg-outer.lg-visible {
  opacity: 1;
}

.lg-outer.lg-css3 .lg-item:not(.lg-start-end-progress).lg-prev-slide, .lg-outer.lg-css3 .lg-item:not(.lg-start-end-progress).lg-next-slide, .lg-outer.lg-css3 .lg-item:not(.lg-start-end-progress).lg-current {
  -webkit-transition-duration: inherit !important;
  transition-duration: inherit !important;
  -webkit-transition-timing-function: inherit !important;
  transition-timing-function: inherit !important;
}

.lg-outer.lg-css3.lg-dragging .lg-item.lg-prev-slide, .lg-outer.lg-css3.lg-dragging .lg-item.lg-next-slide, .lg-outer.lg-css3.lg-dragging .lg-item.lg-current {
  -webkit-transition-duration: 0s !important;
  transition-duration: 0s !important;
  opacity: 1;
}

.lg-outer.lg-grab img.lg-object {
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: -o-grab;
  cursor: -ms-grab;
  cursor: grab;
}

.lg-outer.lg-grabbing img.lg-object {
  cursor: move;
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: -o-grabbing;
  cursor: -ms-grabbing;
  cursor: grabbing;
}

.lg-outer .lg-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.lg-outer .lg-inner {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  -webkit-transition: opacity 0s;
  -o-transition: opacity 0s;
  transition: opacity 0s;
  white-space: nowrap;
}

.lg-outer .lg-item {
  display: none !important;
}

.lg-outer .lg-item:not(.lg-start-end-progress) {
  background: url("/_app/immutable/assets/loading-298ad3ff.gif") no-repeat scroll center center transparent;
}

.lg-outer.lg-css3 .lg-prev-slide,
.lg-outer.lg-css3 .lg-current,
.lg-outer.lg-css3 .lg-next-slide {
  display: inline-block !important;
}

.lg-outer.lg-css .lg-current {
  display: inline-block !important;
}

.lg-outer .lg-item,
.lg-outer .lg-img-wrap {
  display: inline-block;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
}

.lg-outer .lg-item:before,
.lg-outer .lg-img-wrap:before {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.lg-outer .lg-img-wrap {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  white-space: nowrap;
  font-size: 0;
}

.lg-outer .lg-item.lg-complete {
  background-image: none;
}

.lg-outer .lg-item.lg-current {
  z-index: 1060;
}

.lg-outer .lg-object {
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  position: relative;
}

.lg-outer .lg-empty-html.lg-sub-html,
.lg-outer .lg-empty-html .lg-sub-html {
  display: none;
}

.lg-outer.lg-hide-download .lg-download {
  opacity: 0.75;
  pointer-events: none;
}

.lg-outer .lg-first-slide .lg-dummy-img {
  position: absolute;
  top: 50%;
  left: 50%;
}

.lg-outer.lg-components-open:not(.lg-zoomed) .lg-components {
  -webkit-transform: translate3d(0, 0%, 0);
  transform: translate3d(0, 0%, 0);
  opacity: 1;
}

.lg-outer.lg-components-open:not(.lg-zoomed) .lg-sub-html {
  opacity: 1;
  transition: opacity 0.2s ease-out 0.15s;
}

.lg-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1040;
  background-color: #000;
  opacity: 0;
  will-change: auto;
  -webkit-transition: opacity 333ms ease-in 0s;
  -o-transition: opacity 333ms ease-in 0s;
  transition: opacity 333ms ease-in 0s;
}

.lg-backdrop.in {
  opacity: 1;
}

.lg-css3.lg-no-trans .lg-prev-slide,
.lg-css3.lg-no-trans .lg-next-slide,
.lg-css3.lg-no-trans .lg-current {
  -webkit-transition: none 0s ease 0s !important;
  -moz-transition: none 0s ease 0s !important;
  -o-transition: none 0s ease 0s !important;
  transition: none 0s ease 0s !important;
}

.lg-css3.lg-use-css3 .lg-item {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}

.lg-css3.lg-fade .lg-item {
  opacity: 0;
}

.lg-css3.lg-fade .lg-item.lg-current {
  opacity: 1;
}

.lg-css3.lg-fade .lg-item.lg-prev-slide, .lg-css3.lg-fade .lg-item.lg-next-slide, .lg-css3.lg-fade .lg-item.lg-current {
  -webkit-transition: opacity 0.1s ease 0s;
  -moz-transition: opacity 0.1s ease 0s;
  -o-transition: opacity 0.1s ease 0s;
  transition: opacity 0.1s ease 0s;
}

.lg-css3.lg-use-css3 .lg-item.lg-start-progress {
  -webkit-transition: -webkit-transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  -moz-transition: -moz-transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  -o-transition: -o-transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
}

.lg-css3.lg-use-css3 .lg-item.lg-start-end-progress {
  -webkit-transition: -webkit-transform 1s cubic-bezier(0, 0, 0.25, 1) 0s;
  -moz-transition: -moz-transform 1s cubic-bezier(0, 0, 0.25, 1) 0s;
  -o-transition: -o-transform 1s cubic-bezier(0, 0, 0.25, 1) 0s;
  transition: transform 1s cubic-bezier(0, 0, 0.25, 1) 0s;
}

.lg-css3.lg-slide.lg-use-css3 .lg-item {
  opacity: 0;
}

.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-prev-slide {
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}

.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-next-slide {
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}

.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-current {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  opacity: 1;
}

.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-prev-slide, .lg-css3.lg-slide.lg-use-css3 .lg-item.lg-next-slide, .lg-css3.lg-slide.lg-use-css3 .lg-item.lg-current {
  -webkit-transition: -webkit-transform 1s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.1s ease 0s;
  -moz-transition: -moz-transform 1s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.1s ease 0s;
  -o-transition: -o-transform 1s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.1s ease 0s;
  transition: transform 1s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.1s ease 0s;
}

.lg-container {
  display: none;
}

.lg-container.lg-show {
  display: block;
}

.lg-container.lg-dragging-vertical .lg-backdrop {
  -webkit-transition-duration: 0s !important;
  transition-duration: 0s !important;
}

.lg-container.lg-dragging-vertical .lg-css3 .lg-item.lg-current {
  -webkit-transition-duration: 0s !important;
  transition-duration: 0s !important;
  opacity: 1;
}

.lg-inline .lg-backdrop,
.lg-inline .lg-outer {
  position: absolute;
}

.lg-inline .lg-backdrop {
  z-index: 1;
}

.lg-inline .lg-outer {
  z-index: 2;
}

.lg-inline .lg-maximize:after {
  content: '\\e909';
}

.lg-components {
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  will-change: transform;
  -webkit-transition: -webkit-transform 0.35s ease-out 0s;
  -moz-transition: -moz-transform 0.35s ease-out 0s;
  -o-transition: -o-transform 0.35s ease-out 0s;
  transition: transform 0.35s ease-out 0s;
  z-index: 1080;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
`)();
var lgThumbnail = /* @__PURE__ */ (() => ".lg-outer .lg-thumb-outer {\n  background-color: #0d0a0a;\n  width: 100%;\n  max-height: 350px;\n  overflow: hidden;\n  float: left;\n}\n\n.lg-outer .lg-thumb-outer.lg-grab .lg-thumb-item {\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: -o-grab;\n  cursor: -ms-grab;\n  cursor: grab;\n}\n\n.lg-outer .lg-thumb-outer.lg-grabbing .lg-thumb-item {\n  cursor: move;\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: -o-grabbing;\n  cursor: -ms-grabbing;\n  cursor: grabbing;\n}\n\n.lg-outer .lg-thumb-outer.lg-dragging .lg-thumb {\n  -webkit-transition-duration: 0s !important;\n  transition-duration: 0s !important;\n}\n\n.lg-outer .lg-thumb-outer.lg-rebuilding-thumbnails .lg-thumb {\n  -webkit-transition-duration: 0s !important;\n  transition-duration: 0s !important;\n}\n\n.lg-outer .lg-thumb-outer.lg-thumb-align-middle {\n  text-align: center;\n}\n\n.lg-outer .lg-thumb-outer.lg-thumb-align-left {\n  text-align: left;\n}\n\n.lg-outer .lg-thumb-outer.lg-thumb-align-right {\n  text-align: right;\n}\n\n.lg-outer.lg-single-item .lg-thumb-outer {\n  display: none;\n}\n\n.lg-outer .lg-thumb {\n  padding: 5px 0;\n  height: 100%;\n  margin-bottom: -5px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n@media (min-width: 768px) {\n  .lg-outer .lg-thumb {\n    padding: 10px 0;\n  }\n}\n\n.lg-outer .lg-thumb-item {\n  cursor: pointer;\n  float: left;\n  overflow: hidden;\n  height: 100%;\n  border-radius: 2px;\n  margin-bottom: 5px;\n  will-change: border-color;\n}\n\n@media (min-width: 768px) {\n  .lg-outer .lg-thumb-item {\n    border-radius: 4px;\n    border: 2px solid #fff;\n    -webkit-transition: border-color 0.25s ease;\n    -o-transition: border-color 0.25s ease;\n    transition: border-color 0.25s ease;\n  }\n}\n\n.lg-outer .lg-thumb-item.active, .lg-outer .lg-thumb-item:hover {\n  border-color: #a90707;\n}\n\n.lg-outer .lg-thumb-item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.lg-outer.lg-can-toggle .lg-item {\n  padding-bottom: 0;\n}\n\n.lg-outer .lg-toggle-thumb:after {\n  content: '\\e1ff';\n}\n\n.lg-outer.lg-animate-thumb .lg-thumb {\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n")();
var lgZoom = /* @__PURE__ */ (() => ".lg-outer.lg-css3.lg-zoom-dragging .lg-item.lg-complete.lg-zoomable .lg-img-wrap,\n.lg-outer.lg-css3.lg-zoom-dragging .lg-item.lg-complete.lg-zoomable .lg-image {\n  -webkit-transition-duration: 0ms !important;\n  transition-duration: 0ms !important;\n}\n\n.lg-outer.lg-use-transition-for-zoom .lg-item.lg-complete.lg-zoomable .lg-img-wrap {\n  will-change: transform;\n  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.12, 0.415, 0.01, 1.19) 0s;\n  -moz-transition: -moz-transform 0.5s cubic-bezier(0.12, 0.415, 0.01, 1.19) 0s;\n  -o-transition: -o-transform 0.5s cubic-bezier(0.12, 0.415, 0.01, 1.19) 0s;\n  transition: transform 0.5s cubic-bezier(0.12, 0.415, 0.01, 1.19) 0s;\n}\n\n.lg-outer.lg-use-transition-for-zoom.lg-zoom-drag-transition .lg-item.lg-complete.lg-zoomable .lg-img-wrap {\n  will-change: transform;\n  -webkit-transition: -webkit-transform 0.8s cubic-bezier(0, 0, 0.25, 1) 0s;\n  -moz-transition: -moz-transform 0.8s cubic-bezier(0, 0, 0.25, 1) 0s;\n  -o-transition: -o-transform 0.8s cubic-bezier(0, 0, 0.25, 1) 0s;\n  transition: transform 0.8s cubic-bezier(0, 0, 0.25, 1) 0s;\n}\n\n.lg-outer .lg-item.lg-complete.lg-zoomable .lg-img-wrap {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.lg-outer .lg-item.lg-complete.lg-zoomable .lg-image,\n.lg-outer .lg-item.lg-complete.lg-zoomable .lg-dummy-img {\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1);\n  will-change: opacity, transform;\n  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.12, 0.415, 0.01, 1.19) 0s, opacity 0.15s !important;\n  -moz-transition: -moz-transform 0.5s cubic-bezier(0.12, 0.415, 0.01, 1.19) 0s, opacity 0.15s !important;\n  -o-transition: -o-transform 0.5s cubic-bezier(0.12, 0.415, 0.01, 1.19) 0s, opacity 0.15s !important;\n  transition: transform 0.5s cubic-bezier(0.12, 0.415, 0.01, 1.19) 0s, opacity 0.15s !important;\n  -webkit-transform-origin: 0 0;\n  -moz-transform-origin: 0 0;\n  -ms-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.lg-icon.lg-zoom-in:after {\n  content: '\\e311';\n}\n\n.lg-icon.lg-actual-size {\n  font-size: 20px;\n}\n\n.lg-icon.lg-actual-size:after {\n  content: '\\e033';\n}\n\n.lg-icon.lg-zoom-out {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.lg-icon.lg-zoom-out:after {\n  content: '\\e312';\n}\n\n.lg-zoomed .lg-icon.lg-zoom-out {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.lg-outer[data-lg-slide-type='video'] .lg-zoom-in,\n.lg-outer[data-lg-slide-type='video'] .lg-actual-size,\n.lg-outer[data-lg-slide-type='video'] .lg-zoom-out, .lg-outer[data-lg-slide-type='iframe'] .lg-zoom-in,\n.lg-outer[data-lg-slide-type='iframe'] .lg-actual-size,\n.lg-outer[data-lg-slide-type='iframe'] .lg-zoom-out, .lg-outer.lg-first-slide-loading .lg-zoom-in,\n.lg-outer.lg-first-slide-loading .lg-actual-size,\n.lg-outer.lg-first-slide-loading .lg-zoom-out {\n  opacity: 0.75;\n  pointer-events: none;\n}\n")();
var justifiedGallery = /* @__PURE__ */ (() => '/*!\n * justifiedGallery - v3.8.1\n * http://miromannino.github.io/Justified-Gallery/\n * Copyright (c) 2020 Miro Mannino\n * Licensed under the MIT license.\n */\n.justified-gallery {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.justified-gallery > a,\n.justified-gallery > div,\n.justified-gallery > figure {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  /* background: #888888; To have gray placeholders while the gallery is loading with waitThumbnailsLoad = false */\n  filter: "alpha(opacity=10)";\n  opacity: 0.1;\n  margin: 0;\n  padding: 0;\n}\n.justified-gallery > a > img,\n.justified-gallery > div > img,\n.justified-gallery > figure > img,\n.justified-gallery > a > a > img,\n.justified-gallery > div > a > img,\n.justified-gallery > figure > a > img,\n.justified-gallery > a > svg,\n.justified-gallery > div > svg,\n.justified-gallery > figure > svg,\n.justified-gallery > a > a > svg,\n.justified-gallery > div > a > svg,\n.justified-gallery > figure > a > svg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  padding: 0;\n  border: none;\n  filter: "alpha(opacity=0)";\n  opacity: 0;\n}\n.justified-gallery > a > .jg-caption,\n.justified-gallery > div > .jg-caption,\n.justified-gallery > figure > .jg-caption {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  padding: 5px;\n  background-color: #000000;\n  left: 0;\n  right: 0;\n  margin: 0;\n  color: white;\n  font-size: 12px;\n  font-weight: 300;\n  font-family: sans-serif;\n}\n.justified-gallery > a > .jg-caption.jg-caption-visible,\n.justified-gallery > div > .jg-caption.jg-caption-visible,\n.justified-gallery > figure > .jg-caption.jg-caption-visible {\n  display: initial;\n  filter: "alpha(opacity=70)";\n  opacity: 0.7;\n  -webkit-transition: opacity 500ms ease-in;\n  -moz-transition: opacity 500ms ease-in;\n  -o-transition: opacity 500ms ease-in;\n  transition: opacity 500ms ease-in;\n}\n.justified-gallery > .jg-entry-visible {\n  filter: "alpha(opacity=100)";\n  opacity: 1;\n  background: none;\n}\n.justified-gallery > .jg-entry-visible > img,\n.justified-gallery > .jg-entry-visible > a > img,\n.justified-gallery > .jg-entry-visible > svg,\n.justified-gallery > .jg-entry-visible > a > svg {\n  filter: "alpha(opacity=100)";\n  opacity: 1;\n  -webkit-transition: opacity 500ms ease-in;\n  -moz-transition: opacity 500ms ease-in;\n  -o-transition: opacity 500ms ease-in;\n  transition: opacity 500ms ease-in;\n}\n.justified-gallery > .jg-filtered {\n  display: none;\n}\n.justified-gallery > .jg-spinner {\n  position: absolute;\n  bottom: 0;\n  margin-left: -24px;\n  padding: 10px 0 10px 0;\n  left: 50%;\n  filter: "alpha(opacity=100)";\n  opacity: 1;\n  overflow: initial;\n}\n.justified-gallery > .jg-spinner > span {\n  display: inline-block;\n  filter: "alpha(opacity=0)";\n  opacity: 0;\n  width: 8px;\n  height: 8px;\n  margin: 0 4px 0 4px;\n  background-color: #000;\n  border-radius: 6px;\n}\n')();
function basename(path) {
  return path.split("/").reverse()[0];
}
const Content = (0, import_index_88dff8a6.c)(($$result, $$props, $$bindings, slots) => {
  let imageList = { "../../../static/gallery/375/001.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/001-e49b5d28.js"))), "../../../static/gallery/375/002.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/002-f6063cb0.js"))), "../../../static/gallery/375/004.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/004-21ff4031.js"))), "../../../static/gallery/375/005.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/005-b9936005.js"))), "../../../static/gallery/375/007.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/007-cce76160.js"))), "../../../static/gallery/375/008.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/008-75a9364c.js"))), "../../../static/gallery/375/009.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/009-7bfac357.js"))), "../../../static/gallery/375/010.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/010-70295463.js"))), "../../../static/gallery/375/011.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/011-4bba4bec.js"))), "../../../static/gallery/375/012.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/012-cd630636.js"))), "../../../static/gallery/375/013.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/013-00343d9c.js"))), "../../../static/gallery/375/014.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/014-96d3e967.js"))), "../../../static/gallery/375/015.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/015-15d09903.js"))), "../../../static/gallery/375/016.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/016-a5343013.js"))), "../../../static/gallery/375/017.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/017-ca2557bf.js"))), "../../../static/gallery/375/018.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/018-2f712baa.js"))), "../../../static/gallery/375/019.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/019-174b0c70.js"))), "../../../static/gallery/375/020.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/020-7b0207f8.js"))), "../../../static/gallery/375/022.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/022-1a5f9242.js"))), "../../../static/gallery/375/023.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/023-0f9c9400.js"))), "../../../static/gallery/375/024.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/024-73883751.js"))), "../../../static/gallery/375/025.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/025-b60141c2.js"))), "../../../static/gallery/375/026.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/026-2642f6fe.js"))), "../../../static/gallery/375/027.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/027-ab0296a7.js"))), "../../../static/gallery/375/028.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/028-bbaccfbc.js"))), "../../../static/gallery/375/029.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/029-0914eac2.js"))), "../../../static/gallery/375/031.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/031-09b0b942.js"))), "../../../static/gallery/375/032.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/032-11561d22.js"))), "../../../static/gallery/375/033.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/033-0d6cfd84.js"))), "../../../static/gallery/375/034.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/034-47b2da6b.js"))), "../../../static/gallery/375/035.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/035-bc4963d3.js"))), "../../../static/gallery/375/036.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/036-6f721cd2.js"))), "../../../static/gallery/375/037.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/037-c0c16a50.js"))), "../../../static/gallery/375/038.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/038-86ae2849.js"))), "../../../static/gallery/375/039.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/039-0c83e7de.js"))), "../../../static/gallery/375/040.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/040-51fa2ef3.js"))), "../../../static/gallery/375/041.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/041-2ffeb62b.js"))), "../../../static/gallery/375/042.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/042-f6c2142e.js"))), "../../../static/gallery/375/043.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/043-1c363573.js"))), "../../../static/gallery/375/044.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/044-3b13cfa4.js"))), "../../../static/gallery/375/045.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/045-0b3fa607.js"))), "../../../static/gallery/375/046.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/046-9795ac97.js"))), "../../../static/gallery/375/047.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/047-0988ac67.js"))), "../../../static/gallery/375/049.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/049-10f8f2d2.js"))), "../../../static/gallery/375/050.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/050-de212bd0.js"))), "../../../static/gallery/375/051.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/051-0563544a.js"))), "../../../static/gallery/375/052.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/052-84bc12d0.js"))), "../../../static/gallery/375/053.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/053-a7f0ed6b.js"))), "../../../static/gallery/375/054.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/054-5c4e5e1f.js"))), "../../../static/gallery/375/055.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/055-10f5c949.js"))), "../../../static/gallery/375/056.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/056-4bd8e113.js"))), "../../../static/gallery/375/057.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/057-a8fec713.js"))), "../../../static/gallery/375/058.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/058-e38ec79c.js"))), "../../../static/gallery/375/059.jpg": () => Promise.resolve().then(() => __toESM(require("../../chunks/059-1216cf5b.js"))) };
  let images = [];
  for (let image in imageList) {
    images.push(basename(image));
    console.log(basename(image));
  }
  return `<div class="${"banner"}"><header><div class="${"nav navigation animateIn"}"><div class="${"menu"}"><div class="${"header__nav-link"}"><a href="${"/"}">Home</a></div>
        
        <div class="${"header__nav-link"}"><a href="${"/gallery"}">Gallery</a></div>
        <div class="${"header__nav-link"}"><a href="${"/directions"}">Directions</a></div></div>

      
      <div id="${"menuToggle"}"><label for="${"toggle"}"><input id="${"toggle"}" type="${"checkbox"}">
          <div class="${"burger"}"><span class="${"burger__text"}">Menu</span>
            <div class="${"burger-icon"}"><span class="${"stripe"}"></span>
              <span class="${"stripe"}"></span>
              <span class="${"stripe"}"></span></div></div>
          <div class="${"menu"}"><div class="${"header__nav-link"}"><a href="${"/"}">Home</a></div>
            <div class="${"header__nav-link"}"><a href="${"/gallery"}">Gallery</a></div>
            <div class="${"header__nav-link"}"><a href="${"/directions"}">Directions</a></div></div></label></div></div></header>

  <div class="${"flexbox column"}"><h1 class="${"logo"}">Gallery</h1></div></div>

<section class="${"content"}"><div class="${"below-banner"}"><div class="${"below-banner__text__intro"}"><div class="${"below-banner__text__intro__inner"}">Here are a few selected photographs from Hunte&#39;s Gardens. Please remember - no photo can give justice to this fine place - as the best way is to experience it personally is by visiting!</div></div></div>

  <div class="${"gallery"}"><div class="${"gallery__outer"}"><div id="${"lightgallery"}" class="${"demo list-unstyled row"}" style="${"border:5px solid #000; border-radius:0px;"}">${(0, import_index_88dff8a6.a)(images, (image) => {
    return `<div data-responsive="${"/gallery/375/" + (0, import_index_88dff8a6.e)(image, true) + " 375,/gallery/800/" + (0, import_index_88dff8a6.e)(image, true) + " 800"}" data-src="${"/gallery/800/" + (0, import_index_88dff8a6.e)(image, true)}" data-sub-html="${" "}"><a href="${"/gallery/800/" + (0, import_index_88dff8a6.e)(image, true)}" data-download-url="${"false"}"><img class="${"img-responsive"}" src="${"/gallery/375/" + (0, import_index_88dff8a6.e)(image, true)}"${(0, import_index_88dff8a6.b)("alt", image, 0)}></a>
            </div>`;
  })}</div></div></div></section>`;
});
const Gallery = (0, import_index_88dff8a6.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Hunte&#39;s Gardens Barbados | Gallery</title>`, ""}`, ""}

${(0, import_index_88dff8a6.v)(Banner_gallery, "Banner").$$render($$result, {}, {}, {})}
${(0, import_index_88dff8a6.v)(Content, "Content").$$render($$result, {}, {}, {})}
  
  
`;
});
