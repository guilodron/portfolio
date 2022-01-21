import CoisasThree from "./components/CoisasThree";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import { CursorProvider } from "./providers/useCursor";
import { ThemeProviderReact } from "./providers/useTheme";
import { GlobalStyles } from "./globalStyles";
import Journey from "./pages/Journey";
import Work from "./pages/Work";
import Transition from "./components/Transition";

function App() {
  return (
    <ThemeProviderReact>
      <CursorProvider>
        <GlobalStyles />
        <CoisasThree />
        <Header />
        <Landing />
        <Journey />
        <Transition />
        <Work />
        <Transition />

      </CursorProvider>
    </ThemeProviderReact>
  );
}

export default App;
