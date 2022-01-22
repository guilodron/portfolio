import { useState } from 'react'
import { CursorProvider } from "./providers/useCursor";
import { ThemeProviderReact } from "./providers/useTheme";
import { GlobalStyles } from "./globalStyles";
import Loading from './pages/Loading';
import Layout from './pages/Layout';


function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <ThemeProviderReact>
      <CursorProvider>
        <GlobalStyles />
          {!loaded ?
          <Loading setLoaded={setLoaded} /> :
          <Layout />
        }
      </CursorProvider>
    </ThemeProviderReact>
  );
}

export default App;
