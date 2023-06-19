import Link from "next/link";
import React from "react";
import { prisma } from "../db";
import { redirect } from "next/navigation";

function Page() {
  async function creaeTodo(data: FormData) {
    "use server";
    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length == 0) {
      throw new Error("Invalid Title");
    }
    await prisma.todo.create({ data: { title, complete: false } });
    redirect("/");
  }

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={creaeTodo} className="flex gap-2 flex-col">
        <input
          className="border border-slate-500 bg-transparent rounded px-2 outline-none"
          type="text"
          name="title"
        ></input>
      </form>
      <div className="flex gap-1 justify-end ">
        <Link
          className="border border-slate-500 bg-transparent rounded px-2 outline-none"
          href=".."
        >
          Cancel
        </Link>
      </div>
    </>
  );
}

export default Page;
