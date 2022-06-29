import 'styled-components';

declare module 'styled-components' {
export interface DefaultTheme{
      title: string;
        colors: {
          background: string,
          backgroundContainer: string,
          button: string,
          buttonText: string,
          borderButton: string,
          inputBackground: string,
          inputBorder: string,
        }
  }
}
