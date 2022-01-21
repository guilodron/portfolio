import CoisasThree from "./components/CoisasThree";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import { CursorProvider } from "./providers/useCursor";
import { ThemeProviderReact } from "./providers/useTheme";
import { GlobalStyles } from "./globalStyles";
import Journey from "./pages/Journey";

function App() {
  return (
    <ThemeProviderReact>
      <CursorProvider>
        <GlobalStyles />
        <Header />
        <Landing />
        <Journey />
        <CoisasThree />
      </CursorProvider>
    </ThemeProviderReact>
  );
}

export default App;
