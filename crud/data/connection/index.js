import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function handleConnection(dataProsmise) {
  return dataProsmise
    .then(async (result) => {
      await prisma.$disconnect();
      return result;
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}

export async function executeSQL(dataProsmise) {
  const result = await handleConnection(dataProsmise);
  console.log("result", result);
  return result;
}
