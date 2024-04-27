const express = require("express");
const app = express();
const path = require("path");

const isAuthorize = true;
const authorize=(req,res,next)=>{
    if(!isAuthorize) res.send("Yetkisiz giriş");
    else next();
}

app.use("/static",express.static(path.join(__dirname,"public")));

app.use((req,res,next) => {
    // res.send("İstek gelen URL =" +req.url);
    console.log("İstek gelen URL =" +req.url);
    //loglama yapılabilir

    // if(!isAuthorize) res.send("Yetkisiz giriş");
    // else next();
    next();

});

app.get("/blog/list/:id",(req,res)=>{
    res.send(req.params.id + " Id'li Blog List");
})

app.get("/",(req,res)=>{
    res.send("Ana Sayfa");
})

app.get("/add/blog",(req,res)=>{
    console.log(__dirname);
    const path1 = path.join(__dirname,"views","index.html");
    // res.send("Add Blog Sayfası");
    res.sendFile(path1);
    
})

app.post("/add/blog",(req,res)=>{
    res.send("Post isteği yapılacak")
})

app.get("/admin/add/blog/:id",authorize,(req,res)=>{
    res.send(req.params.id + " Id'li blog eklenecek");
    
})

app.use((err,req,res,next)=>{
    res.send("Bilinmeyen bir hata oluştu " + err)
})

app.listen(3000,()=>{
    console.log("server running");
})

