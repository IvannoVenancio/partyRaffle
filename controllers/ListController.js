const { createList, getList } = require("../services/ListService")



exports.view = async(req, res) => { 
    console.log("ola")   
    try {
        const list = await getList()      
        res.render("list", {layout:'listBase',list})  
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
        res.render("list", {list})  
    }catch(err){
        res.redirect("index")
    }      
}


