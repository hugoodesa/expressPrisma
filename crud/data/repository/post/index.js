import prisma from "../../client/index.js";

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

export async function getPost(id) {
  return await prisma.post.findFirst({
    where: { id: Number(id) },
  });
}

export async function updatePost(id, postUpdated) {
  const postToUpdate = await prisma.post.findFirst({
    where: { id: Number(id) },
  });

  const updatedPost = await prisma.post.update({
    where: { id: Number(id) },
    data: { ...postUpdated },
  });

  return updatedPost;
}
