import { ThemeProvider } from "styled-components";
import { useState, useEffect, Fragment } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import Feedback from "./components/Feedback";
import styled from "styled-components";
import ScrollButton from "./components/ButtonScroll/ButtonScroll";
import { DNA } from "react-loader-spinner";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {loading ? (
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          wrapperClass="dna-wrapper"
        />
      ) : (
        <div className="fade-in">
          <Router>
            <Navbar />
            <Body>
              <HeroSection />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                <Education />
                <Feedback />
              </Wrapper>
              <Wrapper>
                <Contact />
              </Wrapper>
              <Footer />
              {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
              <ScrollButton />
            </Body>
          </Router>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
