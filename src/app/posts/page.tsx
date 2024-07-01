import PostsList from "@/components/posts-list";
import Link from "next/link";
import { Suspense } from "react";

export default async function Posts() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">
        All Posts
      </h1>
      <Suspense fallback="loading...">
        <PostsList />
      </Suspense>
    </main>
  );
}
