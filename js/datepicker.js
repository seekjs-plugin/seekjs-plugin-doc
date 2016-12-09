/**
 * Created by likaituan on 15/8/9.
 */

var $ = require("jquery");

exports.title = "日期选择器";
exports.usePlugin("seekjs-plugin-datepicker", {display:false});

exports.showDatePicker = function(){
    this.plugin.datepicker.select($(exports.element));
};




//    exports.usePlugin("seekjs-plugin-datepicker", {id:"dataPicker", display:false});
//    exports.showDatePicker = function(){
//      exports.plugin.datePicker.show();
//    };
//
//    /*日期部分*/
//    //选择日期
//    exports.selectTime = function(){
//        exports.plugin.datePicker.select(exports.element, exports.controlDate);
//    };
//
//    /*开始和结束时间的控制*/
//    exports.controlDate = function(type,val){
//        if(type=="start"){
//            exports.args.startTime = val;
//        }else if(type=="end"){
//            exports.args.endTime = val;
//        }
//        exports.queryView.render();
//    };