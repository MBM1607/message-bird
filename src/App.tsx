import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Copyright from './components/Copyright';
import Message from './components/Message';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <Message />
      </Container>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </ThemeProvider>
  );
};

export default App;
