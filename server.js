var express = require('express');
var app = express();

var port = 2015;
app.use(express.static('./'));
app.use('/node_modules/seekjs', express.static('/github/seekjs/sk2'));
['mask', 'dialog'].forEach(x => {
	app.use(`/node_modules/sk2-plugin-${x}`, express.static(`/github/seekjs/sk2-plugin-${x}`));
});
app.listen(port);

console.log(`Node Is Running At http://localhost:${port}`);