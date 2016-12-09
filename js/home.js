/**
 * Created by likaituan on 15/8/9.
 */

var {plugin} = require("sys.app");

exports.title = "首页";

exports.showMask = function(){
	plugin.mask.showMask({
		loading:true
	});
	setTimeout(function(){
		plugin.mask.hide();
	},3000);
};

exports.showText = function(){
	plugin.dialog.alert("Hello Wolrd!");
};