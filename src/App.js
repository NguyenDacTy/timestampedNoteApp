import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/mainlayout";
import DetailPage from "./DetailPage";
import { ROUTES } from "./const/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainLayout />} />
          <Route path={ROUTES.DETAIL_PAGE} element={<DetailPage />} />
          <Route path={ROUTES.HOME_PAGE} element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
