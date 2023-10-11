import prisma from "@/lib/prisma";
import Post from "@/app/Components/Post";
import BottomBar from "@/app/Components/BottomBar";
import TopBar from "@/app/Components/TopBar";

export default async function Home() {
  const data = await prisma.post.findMany();
  return (
    <main className="main bg-zinc-800/30 h-screen overflow-auto snap-mandatory snap-y">
      <TopBar />
      {data.map((post: any) => {
        return (
          <Post key={post.id} user_id={post.user_id} gif_url={post.gif_url} />
        );
      })}

      <BottomBar />
    </main>
  );
}
