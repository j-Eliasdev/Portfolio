import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavarComponent from "./components/navbar";
import FooterComponent from "./components/footer";
import LandingPage from "./views/landingPage";
import AboutMe from "./views/aboutView";
import SkillsView from "./views/skillsView";
import ProjectView from "./views/projectView";
import ContactView from "./views/contactView";

function App() {
  return (
    <>
      <NavarComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<SkillsView />} />
        <Route path="/projects" element={<ProjectView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
