const express = require("express");
const app = express();
const PORT = process.env.port || 3000;
const promotion = require("./function");

app.get("/", (req, res) => {
  res.send("good");
});

app.listen(PORT, () => {
  //   console.log(`app is running on port ${PORT}`);
  promotion([
    { proID: "01", amount: 5, price: 8000, total: 40000 },
    { proID: "02", amount: 3, price: 8000, total: 24000 },
    { proID: "03", amount: 2, price: 9000, total: 18000 }
  ]);
});
