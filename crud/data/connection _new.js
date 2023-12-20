import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function handleConnection(query, data) {
  return query(data)
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

export async function executeSQL(query, data) {
  const result = await handleConnection(query, data);
  console.log("result", result);
  return result;
}

export async function create(post) {
  return await prisma.post.create({
    data: {
      ...post,
    },
  });
}

export async function remove(id) {
  return await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });
}

export async function getAll() {
  const allPosts = await prisma.post.findMany();
  return allPosts;
}
