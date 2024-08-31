import './App.css'
import { ThemeProvider } from "@mui/material";
import Router from "./components/Router.tsx";
import { theme } from "./types/customTheme.ts";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
