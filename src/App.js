import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavarComponent from "./components/navbar";
import FooterComponet from "./components/footer";
import LandingPage from "./views/landingPage";
function App() {
  return (
    <>
      <NavarComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <FooterComponet />
    </>
  );
}

export default App;
