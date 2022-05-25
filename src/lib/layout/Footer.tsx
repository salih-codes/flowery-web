import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" justifyContent="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="/" isExternal rel="noopener noreferrer">
          flowery.com
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
