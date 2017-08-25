/**
 * Created by likaituan on 15/8/9.
 */

seekjs.config({
	ns: {
		util: "/utils/",
		css: {
			path: "/css/",
			type: ".css"
		}
	}
});

require("css.main");
require("css.ui");

var app = require("sys.app");

app.config({
	//page: "/pages/",
	js: "/js/",
	tp: "/templates/",
	css: "/css/",
	useAnimate: true
});

var langPack = {
	currentLang: "en",
	message: "your message is"
};

app.usePlugin("sk2-plugin-mask", {display: false});
app.usePlugin("sk2-plugin-dialog", {id: "dialog", lang: "en", langPack, display: false});

app.init("home");