var express = require('express');
var app = express();

var port = 2015;
app.use('/node_modules/seekjs', express.static('/github/seekjs/sk2'));
app.use('/node_modules/sk2-plugin-mark', express.static('/github/seekjs/sk2-plugin-mark'));
app.use(express.static('./'));
app.listen(port);

console.log(`Node Is Running At http://localhost:${port}`);