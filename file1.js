var express = require('express');
var app = express();

var OrderController=function(req,res){
console.log("list is following");

var orders=[
{id:1,name:"namrata",amount:45000,status:"completed"},
{id:2,name:"jaya",amount:25000,status:"completed"},
{id:3,name:"neha",amount:35000,status:"not completed"}
];
res.send(orders);
};

app.get('/orders',OrderController);

var server = app.listen(8089,function(){
	var host = server.address().address
	var port = server.address().port
	console.log("listening at ",host,port);
})