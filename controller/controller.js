const con = require('../connection')


exports.getusers = (req,res)=>{
    try{
        con.query("select * from users",(err,result)=>{
            res.status(200).json(result)
        })
    }catch(err){
        res.status(400).json({message:err.message})
    }   
}
exports.getuser = (req,res)=>{
    try{
        con.query("select * from users where id = ?",[req.params.id],(err,result)=>{
            res.status(200).json(result)
        })
    }catch(err){
        res.status(400).json({message:err.message})
    }

}

exports.deleteuser =  (req,res)=>{
    try{
        con.query("delete from users where id = ?",[req.params.id],(err,result)=>{
            res.status(200).json(result)
        })

    }catch(err){
        res.status(400).json({message:err.message})
    }
}


exports.adduser = (req,res)=>{
    try{
        const user = req.body;
        const userData = [user.name,user.role,user.department]
        con.query('insert into users (name,role,department) values(?)',[userData],(err,result)=>{
            res.status(200).json(result)
        })
    }catch(err){
        res.status(400).json({message:err.message})
    }
}
