const express = require('express')
const app = express();
const path = require('path')
const port = 3003;


console.log(".....", path.join(__dirname, "build"))
app.use(express.static(path.join(__dirname, "build")));

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})