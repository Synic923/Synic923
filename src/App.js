import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <SkillsSection />
        <Footer />
      </main>
      <Analytics />
    </ChakraProvider>
  );
}

export default App;
