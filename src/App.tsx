import { ThemeProvider } from 'styled-components';
import SignupPage from './pages/SignupPage';
import Routes from './routes/routes';


import GlobalStyles from './styles/GlobalStyles';
import light from './styles/themes/light';

 const App = () => {
   //  const [ theme, setTheme ] = useState<DefaultTheme>('theme', light);
   //  const toggleTheme = () => {
   //    setTheme(theme.title === 'light' ? dark : light);
   //  }
  return (
    <ThemeProvider theme={light}>
       <SignupPage/>
       <GlobalStyles/>
    </ThemeProvider>
    );
}

export default App;
