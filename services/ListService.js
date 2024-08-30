const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Lists = prisma.list;



const createList = async (data) => {
  const result = await Lists.create({ data: { ...data } })
  return result;
};

const getList = async() =>{
  const result = await Lists.findMany()
  return result
}


module.exports = {
    createList,
    getList
};

