const express=require('express')
const app=express();
//是主页
app.get('/u',function(req,res){
    console.log(1)
    //告诉数据类型  语言
    res.set('Content-Type','text/html;charset=utf-8;');
    res.status(200)
    res.sendFile(__dirname+'jingtai/shouye.html');
})

//监听一个端口
app.listen(9000,function(){
    console.log("执行")
})
