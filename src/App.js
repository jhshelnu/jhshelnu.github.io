import ColorContext from './contexts/ColorContext';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ThreeScene from './components/ThreeScene';
import theme from './theme';

const colors = ['dodgerblue', 'orchid', 'forestgreen', 'orangered'];

function App() {
  const [colorIndex, setColorIndex] = useState(0);

  function changeColor() {
    setColorIndex((colorIndex + 1) % colors.length);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ColorContext.Provider value={colors[colorIndex]}>
        <Header />
        <ThreeScene onPointerDown={changeColor} />
      </ColorContext.Provider>
    </ThemeProvider>
  );
}

export default App;
