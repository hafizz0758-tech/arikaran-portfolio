import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Skills = lazy(() => import("./pages/Skills"));
const Articles = lazy(() => import("./pages/Articles"));
const CodingProfiles = lazy(() => import("./pages/CodingProfiles"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function RouteScene({ children }) {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      className="route-scene"
      initial={{ opacity: 0, y: 13, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Suspense fallback={<div className="page-loading"><span className="loading-orb" />Loading experience...</div>}>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<RouteScene><Home /></RouteScene>} />
              <Route path="/about" element={<RouteScene><About /></RouteScene>} />
              <Route path="/projects" element={<RouteScene><Projects /></RouteScene>} />
              <Route path="/projects/:projectId" element={<RouteScene><ProjectDetails /></RouteScene>} />
              <Route path="/skills" element={<RouteScene><Skills /></RouteScene>} />
              <Route path="/articles" element={<RouteScene><Articles /></RouteScene>} />
              <Route path="/coding-profiles" element={<RouteScene><CodingProfiles /></RouteScene>} />
              <Route path="/contact" element={<RouteScene><Contact /></RouteScene>} />
              <Route path="*" element={<RouteScene><NotFound /></RouteScene>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
