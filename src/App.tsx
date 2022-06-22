import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/auth';
import RoutesApp from './routes/routes';


import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme/theme';

 const App = () => {
   //  const [ theme, setTheme ] = useState<DefaultTheme>('theme', light);
   //  const toggleTheme = () => {
   //    setTheme(theme.title === 'light' ? dark : light);
   //  }
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
       <RoutesApp/>
       <GlobalStyles/>
      </AuthProvider>
    </ThemeProvider>
    );
}

export default App;
