import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(post) {
  // ... you will write your Prisma Client queries here
  console.log(post);
  const resp = await prisma.post.create({
    data: {
      ...post,
    },
  });
  console.log("resp", resp);
}

const executeQuery = async (data) => {
  main(data)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

export default executeQuery;
