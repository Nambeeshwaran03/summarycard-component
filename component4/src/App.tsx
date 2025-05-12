import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from './themes/theme';
import SummaryCard from './components/organisms/SummaryCard';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ mt: 8 }}>
        <SummaryCard />
      </Container>
    </ThemeProvider>
  );
};

export default App;
