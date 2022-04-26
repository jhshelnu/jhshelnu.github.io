import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import Header from './components/Header';
import ThreeScene from './components/ThreeScene';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <ThreeScene />
    </ThemeProvider>
  );
}

export default App;
