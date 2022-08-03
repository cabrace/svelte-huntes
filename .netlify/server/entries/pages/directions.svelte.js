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
  default: () => Directions
});
module.exports = __toCommonJS(stdin_exports);
var import_index_88dff8a6 = require("../../chunks/index-88dff8a6.js");
var import_jquery = require("jquery");
const Banner_directions = (0, import_index_88dff8a6.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"banner__home"}"><header><div class="${"nav navigation"}"><div class="${"menu"}"><div class="${"header__nav-link"}"><a href="${"/"}">Home</a></div>
        
        <div class="${"header__nav-link"}"><a href="${"/gallery"}">Gallery</a></div>
        <div class="${"header__nav-link"}"><a href="${"/directions"}">Directions</a></div></div>

      
      <div id="${"menuToggle"}"><label for="${"toggle"}"><input id="${"toggle"}" type="${"checkbox"}">
          <div class="${"burger"}"><span class="${"burger__text"}">Menu</span>
            <div class="${"burger-icon"}"><span class="${"stripe"}"></span>
              <span class="${"stripe"}"></span>
              <span class="${"stripe"}"></span></div></div>
          <div class="${"menu"}"><div class="${"header__nav-link"}"><a href="${"/"}">Home</a></div>
            <div class="${"header__nav-link"}"><a href="${"/gallery"}">Gallery</a></div>
            <div class="${"header__nav-link"}"><a href="${"/directions"}">Directions</a></div></div></label></div></div>
    </header>

  <div class="${"banner__home"}"><h1 class="${"h1 logo"}">Hunte&#39;s Gardens</h1>
    <div class="${"slogan"}"><q>The most enchanting place on Earth</q></div></div></div>`;
});
var responsiveTabs = /* @__PURE__ */ (() => ".r-tabs .r-tabs-nav {\n    margin: 0;\n    padding: 0;\n}\n\n.r-tabs .r-tabs-tab {\n    display: inline-block;\n    margin: 0;\n    list-style: none;\n}\n\n.r-tabs .r-tabs-panel {\n    padding: 15px;\n    display: none;\n}\n\n.r-tabs .r-tabs-accordion-title {\n    display: none;\n}\n\n.r-tabs .r-tabs-panel.r-tabs-state-active {\n    display: block;\n}\n\n/* Accordion responsive breakpoint */\n@media only screen and (max-width: 768px) {\n    .r-tabs .r-tabs-nav {\n        display: none;\n    }\n\n    .r-tabs .r-tabs-accordion-title {\n        display: block;\n    }\n}")();
const Content = (0, import_index_88dff8a6.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<script type="${"text/javascript"}" async defer src="${"https://maps.googleapis.com/maps/api/js?key=AIzaSyAsVMUiCe8am-w83iXrXJMniVvhFk9ioxc&callback=initMap"}" data-svelte="svelte-kqbm1o"><\/script>`, ""}
<section class="${"content"}">
		
		
	
	

	
	<div id="${"responsiveTabsDemo"}" class="${"info__well--noshadow tabs"}"><section class="${"map"}"><div id="${"map"}" style="${""}"></div>
    </section>


		<ul class="${"tab-links"}"><li class="${"active"}"><a href="${"directions.html#tab-1"}">Public Transport</a></li>
			<li><a href="${"directions.html#tab-2"}">Taxi</a></li>
			<li><a href="${"directions.html#tab-3"}">Private/Rented Vehicle</a></li></ul>

		
		<div class="${"tab-content info_banner"}"><div id="${"tab-1"}" class="${"tab active"}"><img width="${"250px"}" class="${"info__directions__image"}" src="${"/transport-bus.jpg"}" alt="${"Transport bus"}">
				<div class="${"info__well info__directions__text flexbox row"}"><div class="${""}">
						<div class="${"tab__info__heading"}">Directions by Bus</div>
						<p class="${"tab__info__text"}" style="${"border: 1px dashed #c8db1c; background:#3d4e0554;"}">The easiest way to get there for a first timer by bus from any location would be to firstly get to Bridgetown. From Bridgetown get to the <span class="${"accent--yellow"}">Fairchild Street Bus Terminal</span> (the main one in town) and from there catch the <span class="${"accent--yellow"}">Sugar Hill bus</span>, asking the driver to put you off at the correct spot.</p></div></div></div>
			<div id="${"tab-2"}" class="${"tab"}"><img width="${"250px"}" class="${"info__directions__image"}" src="${"/transport-taxi.png"}" alt="${"Transport taxi"}">
				<div class="${"info__well flexbox row"}"><div class="${"tab__info"}">
						<div class="${"tab__info__heading"}">Directions by Taxi</div>
						<p class="${"tab__info__text"}" style="${"border: 1px dashed #c8db1c; background:#3d4e0554;"}">All Taxies will know how to get there; however it is best advised to try and negotiate a reasonable price.</p></div></div></div>
			<div id="${"tab-3"}" class="${"tab"}"><img width="${"250px"}" class="${"info__directions__image"}" src="${"/transport-rented.jpg"}" alt="${"Transport rented"}">
				<div class="${"info__well info__directions__text flexbox row"}"><div class="${"tab__info"}">
						<div class="${"tab__info__heading"}">Directions by Private vehicle.</div>
						<p class="${"tab__info__text"}" style="${"border: 1px dashed #c8db1c; background:#3d4e0554;"}">The easiest way to get there for a first-timer is to follow <span class="${"accent--yellow"}">Highway 3A</span> all the way until you see the large Huntes Gardens sign. Be sure to look out for the smaller red and white signposts saying &quot;Huntes Gardens&quot; along the way.</p></div></div></div>
			</div>
		</div></section>`;
});
const Directions = (0, import_index_88dff8a6.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Hunte&#39;s Gardens Barbados | Directions</title>`, ""}`, ""}

${(0, import_index_88dff8a6.v)(Banner_directions, "Banner").$$render($$result, {}, {}, {})}
${(0, import_index_88dff8a6.v)(Content, "Content").$$render($$result, {}, {}, {})}
  
  
`;
});
