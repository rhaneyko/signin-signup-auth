import 'styled-components';

declare module 'styled-components' {
export interface DefaultTheme{
      title: string;
        colors: {
          title: string,
          text: string,
          background: string,
          backgroundContainer: string,
          button: string,
          buttonText: string,
          borderButton: string,
          inputBackground: string,
        }
  }
}
