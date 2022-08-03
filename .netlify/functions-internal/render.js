const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["DejaVuSana-ExtraLight.ttf","application-cf4a95db4977929a7ec92523d4185c131dbe6591956f6723ed7934514771a41f.js","application.css","application.js","bg-green-seamless-3.jpg","bg-greenseamless.jpg","bg.jpg","cover-photo-4-cropped.jpg","favicon.png","fonts/DejaVuSans-ExtraLight.ttf","fonts/futuracon.ttf","fonts/futuralt.ttf","fonts/huxtable.ttf","fonts/lg.eot","fonts/lg.svg","fonts/lg.ttf","fonts/lg.woff","fonts/ptsansregular.ttf","futuracon.ttf","futuralt.ttf","gallery/375/001.jpg","gallery/375/002.jpg","gallery/375/004.jpg","gallery/375/005.jpg","gallery/375/007.jpg","gallery/375/008.jpg","gallery/375/009.jpg","gallery/375/010.jpg","gallery/375/011.jpg","gallery/375/012.jpg","gallery/375/013.jpg","gallery/375/014.jpg","gallery/375/015.jpg","gallery/375/016.jpg","gallery/375/017.jpg","gallery/375/018.jpg","gallery/375/019.jpg","gallery/375/020.jpg","gallery/375/022.jpg","gallery/375/023.jpg","gallery/375/024.jpg","gallery/375/025.jpg","gallery/375/026.jpg","gallery/375/027.jpg","gallery/375/028.jpg","gallery/375/029.jpg","gallery/375/031.jpg","gallery/375/032.jpg","gallery/375/033.jpg","gallery/375/034.jpg","gallery/375/035.jpg","gallery/375/036.jpg","gallery/375/037.jpg","gallery/375/038.jpg","gallery/375/039.jpg","gallery/375/040.jpg","gallery/375/041.jpg","gallery/375/042.jpg","gallery/375/043.jpg","gallery/375/044.jpg","gallery/375/045.jpg","gallery/375/046.jpg","gallery/375/047.jpg","gallery/375/049.jpg","gallery/375/050.jpg","gallery/375/051.jpg","gallery/375/052.jpg","gallery/375/053.jpg","gallery/375/054.jpg","gallery/375/055.jpg","gallery/375/056.jpg","gallery/375/057.jpg","gallery/375/058.jpg","gallery/375/059.jpg","gallery/800/001.jpg","gallery/800/002.jpg","gallery/800/004.jpg","gallery/800/005.jpg","gallery/800/007.jpg","gallery/800/008.jpg","gallery/800/009.jpg","gallery/800/010.jpg","gallery/800/011.jpg","gallery/800/012.jpg","gallery/800/013.jpg","gallery/800/014.jpg","gallery/800/015.jpg","gallery/800/016.jpg","gallery/800/017.jpg","gallery/800/018.jpg","gallery/800/019.jpg","gallery/800/020.jpg","gallery/800/022.jpg","gallery/800/023.jpg","gallery/800/024.jpg","gallery/800/025.jpg","gallery/800/026.jpg","gallery/800/027.jpg","gallery/800/028.jpg","gallery/800/029.jpg","gallery/800/031.jpg","gallery/800/032.jpg","gallery/800/033.jpg","gallery/800/034.jpg","gallery/800/035.jpg","gallery/800/036.jpg","gallery/800/037.jpg","gallery/800/038.jpg","gallery/800/039.jpg","gallery/800/040.jpg","gallery/800/041.jpg","gallery/800/042.jpg","gallery/800/043.jpg","gallery/800/044.jpg","gallery/800/045.jpg","gallery/800/046.jpg","gallery/800/047.jpg","gallery/800/049.jpg","gallery/800/050.jpg","gallery/800/051.jpg","gallery/800/052.jpg","gallery/800/053.jpg","gallery/800/054.jpg","gallery/800/055.jpg","gallery/800/056.jpg","gallery/800/057.jpg","gallery/800/058.jpg","gallery/800/059.jpg","gallery/img/loading.gif","highlight-1.jpg","highlight-2.jpg","highlight-4.jpg","highlights-relax-3.jpg","huxtable.ttf","icomoon.eot\\?yx87n4","icomoon.svg\\?yx87n4","icomoon.ttf\\?yx87n4","icomoon.woff?yx87n4","lg.eot","lg.svg","lg.woff","orchid.ico","ptsansregular.ttf","signpost-red-white.svg","slogan.png","transport-bus.jpg","transport-rented.jpg","transport-taxi.png"]),
	mimeTypes: {".ttf":"font/ttf",".js":"application/javascript",".css":"text/css",".jpg":"image/jpeg",".png":"image/png",".eot":"application/vnd.ms-fontobject",".svg":"image/svg+xml",".woff":"font/woff",".gif":"image/gif",".ico":"image/vnd.microsoft.icon"},
	_: {
		entry: {"file":"start-89ed7e68.js","js":["start-89ed7e68.js","chunks/index-738dee1a.js","chunks/preload-helper-60cab3ee.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "bulma",
				pattern: /^\/bulma\/?$/,
				names: [],
				types: [],
				path: "/bulma",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "directions",
				pattern: /^\/directions\/?$/,
				names: [],
				types: [],
				path: "/directions",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "gallery-css",
				pattern: /^\/gallery-css\/?$/,
				names: [],
				types: [],
				path: "/gallery-css",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "gallery",
				pattern: /^\/gallery\/?$/,
				names: [],
				types: [],
				path: "/gallery",
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
