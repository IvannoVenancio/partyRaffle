const { createList, getList } = require("../services/ListService")



exports.view = async(req, res) => {    
    try {
        const list = await getList()      
        res.render("index", {list})  
    }catch(err){
        console.log("ola>>>>>>",err)
        res.redirect("index")
    }      
}
exports.create = async(req, res) => {    
    try {
        const data = req.body
        await createList(data)   
        const list = await getList()    
        res.render("index", {list})  
    }catch(err){
        res.redirect("index")
    }      
}


