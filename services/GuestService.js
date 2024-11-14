const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Guest = prisma.guest;
const Sorteio = prisma.sorteio;



const createGuest = async (data) => {
  const result = await Guest.create({ data: { ...data } })
  return result;
};
const createSorteio = async (data) => {
  const result = await Sorteio.create({ data: { ...data } })
  return result;
};
const getSorteio = async () => {
  const result = await prisma.$queryRaw`select s.id, g.name, l.items from sorteio s 
  inner join guest g on g.id = guest_id
  inner join list l on l.id = list_id`;
  return result;
};
const getSorteioById = async (id) => {
  const result = await prisma.$queryRaw`select s.id, g.name, l.items from sorteio s 
  inner join guest g on g.id = guest_id
  inner join list l on l.id = list_id
  where s.id = ${id}`;
  return result;
};
const getSorteioByGuestId = async (guestId) => {
  const result = await Sorteio.findFirst({where:{guest_id:Number(guestId)}})
  return result
};

const getGuests = async() =>{
  const result = await Guest.findMany()
  return result
}
const getGuestById = async(id) =>{
  const result = await Guest.findFirst({where:{id}})
  return result
}
const deleteGuest = async(id) =>{
  const result = await Guest.delete({where:{id}})
  return result
}


module.exports = { 
    createGuest,
    getGuests,
    createSorteio,
    getSorteio,
    getSorteioById,
    getGuestById,
    getSorteioByGuestId,
    deleteGuest
};

