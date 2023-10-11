export default function Browse() {
  const data = await prisma.posts.findAll();
  console.log(await data.json());
  return;
}
