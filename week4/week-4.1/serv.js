// Handling CORS (Cross-Origin Resource Sharing):

// If your frontend and backend are on different ports or domains, you may encounter CORS issues. You can use the cors middleware in Express to handle this:
// bash
// Copy code
// npm install cors

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

app.get("/interest",function(req,res){
  const principal=parseInt(req.query.principal);
  const rate=parseInt(req.query.rate);
  const time=parseInt(req.query.time);
  const interest=principal*rate*time/100;
  res.send(interest.toString());
});


app.listen(port);
