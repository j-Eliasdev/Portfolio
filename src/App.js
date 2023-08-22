import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavarComponent from "./components/navbar";
import FooterComponet from "./components/footer";
import HomeView from "./views/homeView";
function App() {
  return (
    <>
      <NavarComponent />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <FooterComponet />
    </>
  );
}

export default App;
