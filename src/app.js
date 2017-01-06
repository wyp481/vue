require("./style/usage/app.scss");

var common = require("./script/utils/utils.common.js");
var html = require("./script/tpls/index.string");
//common.render("<div>abc</div>");

common.render(html);

require("./script/views/index.js");

