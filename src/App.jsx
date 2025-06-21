import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./MainSite/Home";
import About from "./MainSite/About";
import Work from "./MainSite/Work";
import Contact from "./MainSite/Contact";
import Documentation from "./Docs/Docs";
import MarkdownPage from "./Docs/MarkdownPage";
const App = () => {
  const location = useLocation();
  const isDocs = location.pathname.startsWith("/docs");

  return (
    <div className="bg-bg-100 text-text-primary scroll-smooth overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/docs" element={<Documentation />}>
          <Route index element={<MarkdownPage slug="Overview" />} />
          <Route path="md/:slug" element={<MarkdownPage />} />
          <Route path=":slug" element={<MarkdownPage />} />{" "}
        </Route>

        {/* Main single-page layout */}
        <Route
          path="/"
          element={
            <main>
              <section id="home">
                <Home />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="work">
                <Work />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </main>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
