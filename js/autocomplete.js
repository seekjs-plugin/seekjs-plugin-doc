/**
 * Created by likaituan on 15/8/9.
 */

/*
var options = {
    display: false,
    data: req uire("/data/bank.json"),
    keys: ["sn", "name"],
    getLine: function (item) {
        return `${item.sn} - ${item.name}`;
    }
};
*/

var options = {
    display: false,
    data: require("util.city.json"),
    keys: ["No", "jc", "name", "jp"],
    getLine: function (item) {
        return `${item.No} - ${item.name}(${item.jc})`;
    }
};

exports.usePlugin("seekjs-plugin-autocomplete", options);

exports.chkInput = function(){
    this.plugin.autocomplete.chkMatch(this.element);
};