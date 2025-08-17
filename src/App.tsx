import { Route, Routes } from "react-router";
import { SidebarProvider } from "./components/ui/sidebar";
import { PATHS } from "./lib/consts";
import MainSlidePage from "./pages/main-slide-page/main-slide-page";
import Header from "./widgets/header-navigation/header-navigation";

function App() {
  return (
    <div className="min-h-screen space-y-6 bg-gray-100 text-gray-800">
      <Header />
      <Routes>
        <Route
          path={PATHS.MAIN_SLIDE}
          element={
            <SidebarProvider>
              <MainSlidePage />
            </SidebarProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
