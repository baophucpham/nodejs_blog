const express = require("express");
const app = express();
const port = 3000;
// Đây là router
app.get("/trang-chu", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
