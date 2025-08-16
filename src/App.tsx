import { Route, Routes } from "react-router";
import { PATHS } from "./lib/consts";
import MainSlidePage from "./pages/main-slide-page/main-slide-page";
import Header from "./widgets/header/header";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <Routes>
        <Route path={PATHS.MAIN_SLIDE} element={<MainSlidePage />} />
      </Routes>
    </div>
  );
}

export default App;
