const express = require('express');
const app = express();

const mainRouter = require("./routers/main")

app.use(express.static('public'));
app.set('view engine', 'ejs');

const PORT = 3000;

app.listen(PORT, () => console.log(`Server up:  PORT:${PORT}`));

app.use("/", mainRouter)
