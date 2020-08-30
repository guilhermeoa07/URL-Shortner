const express = require("express");
const normalizePort = require('normalize-port');

const app = express();
const PORT = normalizePort(process.env.PORT || '3300');

app.listen(PORT, () => {
 console.log(`Server started on port`, PORT);
});