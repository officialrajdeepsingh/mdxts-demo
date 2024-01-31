import { notFound } from "next/navigation";
import { createSource } from "mdxts";
import { allDocs } from "../data";


export default async function Home() {

   const doc = allDocs

  // if (doc === undefined) {
  //   return notFound();
  // }


 console.log(" All the posts : ", allDocs);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> All Posts</h1>
    </main>
  );

}
