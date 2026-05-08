"use client";

import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { signIn } from "next-auth/react";

export default function LandingPage() {
  return (
    <>
      <Flex p="3" width="100%" justify="end">
        <Button onClick={() => signIn("github", { redirectTo: "/" })}>
          Sign In
        </Button>
      </Flex>
      <Flex direction="column" align="center">
        <Heading>Welcome to your Garden Journal</Heading>
        <Text>Keep track of the plants in your garden</Text>
        <Text>Track flowering times</Text>
        <Text>Blah blah blah</Text>
      </Flex>
    </>
  );
}
