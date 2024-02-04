// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const port = 3000;

// const directoryPath = "./files"

// app.get("/files",(req,res)=>{
//   fs.readdir(directoryPath,(err,files)=>{
//     if(err){
//       res.status(500).send(`Error lisiting in directory : ${directoryPath}`)
//     }else{
//       res.status(200).json({"files": files})
//     }
//   })
// })

// app.get("/files/:filename",(req,res)=>{
//   const filename = req.params.filename;
//   console.log(`File Name: ${filename}`);
//   const filePath = path.join(directoryPath,filename)
//   fs.readFile(filePath,"utf-8",(err,data)=>{
//     if(err){
//       res.status(404).send(data);
//     }
//   })
// })

// app.all("*",(req,res)=>{
//   res.status(404).send("Route not found")
// })

// app.listen(port);






const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 4000;

app.get('/files', function (req, res) {
  fs.readdir(path.join(__dirname, './files/'), (err, files) => {
  if (err) {
      return res.status(500).json({ error: 'Failed to retrieve files' });
  }
  res.json(files);
  });
});

app.get('/file/:filename', function (req, res) {
  const filepath = path.join(__dirname, './files/', req.params.filename);
  console.log(`filepath: ${filepath}`);
  fs.readFile(filepath, 'utf8', (err, data) => {
  if (err) {
      return res.status(404).send('File not found');
  }
  res.send(data);
  });
});

app.all('*', (req, res) => {
  res.status(404).send('Route not found');
});



app.listen(port)

// module.exports = app;




