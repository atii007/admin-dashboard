import Dashboard from "Pages/dashboard";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "Pages/global/Sidebar";
import Topbar from "Pages/global/Topbar";
import { Routes, Route } from "react-router-dom";
import Team from "Pages/team";
import Contacts from "Pages/contacts";
import Invoices from "Pages/invoice";
import Form from "Pages/form";
import Bar from "Pages/bar";
import Pie from "Pages/pie";
import Line from "Pages/line";
import FAQ from "Pages/faq";
import Geo from "Pages/geography";

function App() {
  const { theme, colorMode } = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geo />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
