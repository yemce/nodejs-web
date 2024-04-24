const http=require("http");

const httpserver= http.createServer((req,res)=>{

    if(req.url=="/"){
        
        res.write("Home Page");
    }
    else if(req.url=="/blog/list"){
        res.write("Blog List");
    }
    else{
        res.write("Undefined Request");

    }
    console.log(req.url);
    res.end();
});

httpserver.listen(3000);
console.log("Running Server");

