/**
 * Created by lipeishang on 17-7-28.
 */
const express = require('express');
const app = express();

app.use(express.static('./'));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});