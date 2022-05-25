import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const router = useRouter();
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      justifyContent="space-between"
      top="5"
    >
      <Heading as="h1" size="md">
        <Link href="/">Flowery</Link>
      </Heading>

      <Flex alignItems="center" justifyContent="space-between" width="25%">
        <Link href="/auth/sign-in" passHref>
          <Text fontWeight="medium" cursor="pointer">
            Sign in
          </Text>
        </Link>
        <Button
          onClick={() => router.push("/auth/sign-up")}
          colorScheme="green"
          color="white"
        >
          Join
        </Button>
        <Box>
          <ThemeToggle />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
