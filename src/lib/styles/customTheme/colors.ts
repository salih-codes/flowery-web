import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    100: "",
    200: "#EEFED7",
    300: "#E5FEC2",
    400: "#DDFEAE",
    500: "#D4FE9A",
    600: "#CCFE85",
    700: "#C3FE72",
    800: "#BBFD5E",
    900: "#AFFC41",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
