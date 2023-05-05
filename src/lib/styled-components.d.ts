import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      blue: {
        900: string;
        800: string;
        700: string;
        600: string;
        400: string;
        200: string;
      };
      slate: {
        900: string;
        800: string;
        600: string;
        400: string;
      };
      green: string;
      gray: string;
      stone: {
        400: string;
        300: string;
        200: string;
      };
      cyan: string;
    };
  }
}
