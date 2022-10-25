import styled from '@emotion/styled';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { Provider as ReduxProvider } from 'react-redux';
import './App.css';
import MarketplaceContent from './components/main/MarketplaceContent';
import configureStore from './redux/store';
import theme from './marketplace-theme';

const MainContainer = styled.div`
  @media (max-width: 768px) {
    position: absolute;
  }
`;

const store = configureStore();

function App() {
  console.log(
    '%cWelcome to \n%cSSC %cEverywhere %cMarketplace',
    'font-size:36px;color:#000;background-color:#f7f6e8',
    'font-size:36px;color:#273a96;background-color:#f7f6e8',
    'font-size:36px;color:#5aff5a;background-color:#f7f6e8',
    'font-size:36px;color:#f36c44;background-color:#f7f6e8',
  );

  return (
    <ReduxProvider {...{ store }}>
      <ThemeProvider {...{ theme }}>
        <CssBaseline />
        <SnackbarProvider dense preventDuplicate>
          <MainContainer>
            <MarketplaceContent />
          </MainContainer>
        </SnackbarProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
