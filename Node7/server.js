var express = require('express')
var bodyParser = require('body-parser')
const db =require('./model');
var fs = require('fs');
const routItem=require('./routing/routerClient');
const NodeCache = require("node-cache");
const { addAbortSignal } = require('stream');
const mid=require('./midelaware')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
const cache = new NodeCache({ stdTTL: 80 })

app.use(bodyParser.json())

console.log(db.URL);
db.mongoose.connect("mongodb://localhost:27017/clients").
then(res=>console.log("connect"))
.catch(error=>{console.log(" not connect")
fs.exists('/etc/passwd', (exists) => {
    console.log(exists ? 'Found' : 'Not Found!');
  });});

app.listen(4000,function(){console.log("app start port 4000")});
app.use(verifyCache);
app.get("/",function(req,res){
    res.send("start seles process");
});

app.use("/clients",routItem)
function verifyCache (req, res, next) {
  try {
      if(!req.originalUrl.includes("/login"))
      {
        console.log(req.originalUrl.includes("/login"));
    const { id } = req.params.id;
    if (cache.has(id)) {
      return res.status(200).json(cache.get(id));
    }
    return next();
  }
  return next();
  } catch (err) {
    throw new Error(err);
  }
};