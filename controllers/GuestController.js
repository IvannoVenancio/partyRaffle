const { createGuest,getGuests, createSorteio, getSorteio, getSorteioById } = require('../services/GuestService')
const { getList } = require('../services/ListService')


exports.viewSorteados = async(req, res) => {    
    try {
        const sorteados = await getSorteio()
        sorteados.map(item =>{
            const link = `http://37.27.34.142:3000/raffle/${item.id}` 
            item.link = link
        })
             
        res.render("sorteio", {sorteados})  
    }catch(err){
        console.log(err)
        res.redirect("sorteio")
    }      
}
exports.linkSorteado = async(req, res) => {    
    try {
        const sorteados = await getSorteio()      
        res.render("sorteio", {sorteados})  
    }catch(err){
        console.log(err)
        res.redirect("sorteio")
    }      
}
exports.landingSorteio = async(req, res) => {    
    try {
        const sorteado = await getSorteioById(req.params.id)      
        res.render("landing", {layout:'landing',sorteado})  
    }catch(err){
        console.log(err)
        res.redirect("sorteio")
    }      
}
exports.view = async(req, res) => {    
    try {
        const guests = await getGuests()      
        res.render("guest", {guests})  
    }catch(err){
        console.log(err)
        res.redirect("/guest")
    }      
}
exports.create = async(req, res) => {    
    try {
        const data = req.body
        await createGuest(data)  
        const guests = await getGuests()       
        res.render("guest", {guests})  
    }catch(err){
        res.redirect("/guest")
    }      
}
exports.sorteadoById = async(req, res) => {    
    try {
        const sorteado = await getSorteioById(req.params.id)
        res.render("sorteado", {layout:'sorteio',sorteado})  
    }catch(err){
        console.log(err)
    }      
}
 
exports.realizarSorteio = async (req, res) => {
    try {
        // Obtém os convidados e itens da lista do banco de dados
        const guests = await getGuests();
        const items = await getList();

        console.log("Items:>>>>>>", items);
        console.log("Guests:>>>>>>", guests);

        // Embaralha os itens usando uma semente baseada no tempo
        shuffleArray(items);

        // Distribui os itens embaralhados entre os convidados
        const resultado = guests.map((guest, index) => ({
            list_id: items[index % items.length].id,
            guest_id: guest.id
            
        }));

        await resultado.map(async element =>{
            await createSorteio(element);
        })

        const sorteados = await getSorteio()
        sorteados.map(item =>{
            const link = `http://37.27.34.142:3000/raffle/${item.id}` 
            item.link = link
        })

        res.render("sorteio", {sorteados});

    } catch (error) {
        console.error("Erro ao realizar o sorteio:", error);
        res.status(500).json({ success: false, message: "Erro ao realizar o sorteio" });
    }
};

// Função de embaralhamento
function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // Enquanto ainda houver elementos para embaralhar
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Troca o elemento atual com o elemento aleatório
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}