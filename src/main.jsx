import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DataProvider } from "./providers/DataProvider";
import { LanguageProvider } from "./providers/LanguageProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { GlobalStateProvider } from "./providers/GlobalStateProvider";
import { FeedbacksProvider } from "./providers/FeedbacksProvider";
import { WindowProvider } from "./providers/WindowProvider";
import App from "./components/App.jsx";
import Preloader from "./components/Preloader.jsx";

const AppProviders = ({ children }) => (
  <DataProvider>
    <LanguageProvider>
      <FeedbacksProvider>
        <WindowProvider>
          <ThemeProvider>
            <GlobalStateProvider>{children}</GlobalStateProvider>
          </ThemeProvider>
        </WindowProvider>
      </FeedbacksProvider>
    </LanguageProvider>
  </DataProvider>
);

let container = null;

document.addEventListener("DOMContentLoaded", function (event) {
  if (container) return;

  container = document.getElementById("root");
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <Preloader>
        <AppProviders>
          <App />
        </AppProviders>
      </Preloader>
    </StrictMode>
  );
});
