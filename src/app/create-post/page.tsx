import { createPost } from "@/actions/actions";

export default function CreatePost() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">Create post</h1>{" "}
      <form action={createPost} className="h-10 space-x-2 mt-10">
        <input
          className="border rounded px-3 h-full"
          type="text"
          name="title"
          placeholder="New Post Title"
          required
        />
        <button className="h-full bg-blue-500 px-5 rounded text-white">
          Submit
        </button>
      </form>
    </main>
  );
}
