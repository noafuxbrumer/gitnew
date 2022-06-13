const clientsData=require('../model/clientsData');
const db=require('../model/index')
const express = require('express');
var bodyParser = require('body-parser')
const NodeCache = require("node-cache");
async function  add(req,res)
{

   let data= req.body
   const client=await db.clients.find({id:data.id})
   console.log(client)

   if(client.length!=0)
{
    res.status(500).send("client not exist");
    return;
}
const titemModel=new db.clients(data);

try
{
 var itemAfterSave = await titemModel.save(titemModel);

console.log(itemAfterSave);
}catch(ex)
{
    console.log(ex);
    res.status(500).send(ex);
}

res.send("succsed add client");

}

function update(req,res)
{
    let id=req.query.id||req.params.id
    let itemtraget=req.query.item;
let item =Items.filter(i=>i.id==id);   
item=itemtraget;
}
async function Get(req,res)
{
var items=await db.items.find({})
res.send(items);
}
async function login(req,res)
{
    let id=req.query.id||req.params.id
    let password=req.query.password||req.params.password
    var client=await db.clients.find({id:id,password:password})
    NodeCache.add(id, client);
    res.send(client);

}
function GetByPrice(req,res)
{let id=req.query.id||req.params.id
    var item=Items.filter(i=>i.id==id)
    res.send(item.price);
   

}

module.exports={Get,add,update,login,GetByPrice};
