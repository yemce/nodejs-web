exports.viewAnc = (req,res,next)=>{
    res.send(req.params.id + " id'li duyuru gösteriliyor...")
}

exports.homePage = (req,res,next)=>{
    res.send("User Home Page");
}