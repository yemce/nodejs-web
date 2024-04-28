const express = require("express");
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")
const app = express();

app.set('view engine', 'ejs');

app.use((req,res,next)=>{
    //genel middleware
    //loglama yapılabilir
    next();
});


app.use("/admin",adminRouter);
app.use("/user",userRouter);


// error handling
app.use((err,req,res,next)=>{
    console.log(err);
    console.log(err.name);
    console.log(err.message);
    res.send("Bir hata oluştu...")
})

app.use("*",(req,res,next)=>{    //isteği yukarıdaki middleware'lerin hiçbiri karşılamıyorsa
    res.send("İstenilen kaynağa ulaşılamıyor.")
})

app.listen(3000,()=>{
    console.log("server running");
})