"use server";

import { Heading } from "@radix-ui/themes";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    redirect("/welcome");
  }

  return (
    <>
      <Heading>Welcome, {session.user.name}</Heading>
    </>
  );
}
