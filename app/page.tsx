import { Suspense } from "react";
import AddBlog from "./components/blogs/addblog";
import BlogList from "./components/blogs/blogList";
import { getAllBlogs } from "./pages/api";
import Link from "next/link";
export default async function Home() {

  const blogs = await getAllBlogs();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div >
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          BLOG
        </h1>
      </div>
        <AddBlog />
        <Suspense fallback={<div>Loading</div>}>
        <BlogList blogs={blogs} />
        </Suspense>
      <Link href="/#top" >
        Top
      </Link>
    </main>
  );
}
