const itemsData=require('../model/itemsData');
const db=require('../model/index')
const express = require('express');
async function  add(req,res)
{
    //console.log(req);
   let data= req.query.item;
   
   //console.log(req.query.item)
   if(data==undefined)
{
    res.status(500).send("item not exist");
    retutn;
}
let item=JSON.parse(data);


const titemModel=new db.items
(
    {
        code:item.code,
        name:item.name
    }
    );
try
{
 var itemAfterSave = await    titemModel.save(titemModel);

console.log(itemAfterSave);
}catch(ex)
{
    console.log(ex);
}

res.send("succsed add item");

}

function update(req,res)
{
    let id=req.query.id||req.params.id
    let itemtraget=req.query.item;
let item =Items.filter(i=>i.id==id);   
item=itemtraget;
}

function deleteitem(req,res)
{

}

async function Get(req,res)
{
var items=await db.items.find({})
res.send(items);
}
function GetById(req,res)
{
    let id=req.query.id||req.params.id
    var item=Items.filter(i=>i.id==id)
    res.send(item);

}
function GetByPrice(req,res)
{let id=req.query.id||req.params.id
    var item=Items.filter(i=>i.id==id)
    res.send(item.price);
   

}

module.exports={Get,add,deleteitem,update,GetById,GetByPrice};
