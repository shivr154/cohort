// Authentication 4 ways - 
// 1-> Hashing it is one way (if something is hashed it can never get back to its original)
// 2-> Encryption it is two way(can be encrypted and decrypted but require password)
// JWT(Jsonwebtoken)-> its neither encryption or hashing (its technically a digital signature)
// anyone can see the original output given the signature 
// but signature can be verified only using password
// when u signin into a website it gives u a jwt token ,and when u login u send back jwt to website to show its u
// User send back token in all authentication request


const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json())

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExists = false
  for(let i=0;i<ALL_USERS.length;i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
        userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({
        users: ALL_USERS.filter(function(value){
            if(value.username == username){
                return false
            }
            else{
                return true;
            }
        })
    })
    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(5000)
