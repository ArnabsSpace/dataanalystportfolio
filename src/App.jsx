import './styles/globals.css';

import { Routes, Route } from "react-router-dom";

import SingleWriting from "./pages/SingleWriting";
import { useEffect, useState } from "react";
import { getPageData } from "./services/api";
// Layout
import Navbar  from './components/layout/Navbar';
import Footer  from './components/layout/Footer';

import HomePage from "./pages/HomePage";
import WritingArchive from "./pages/WritingArchive";


/**
 * App
 * Root composition component. Assembles the full portfolio page
 * from independent section components. No logic lives here —
 * this file is purely structural.
 */
export default function App() {
 const [pageData, setPageData] = useState(null);

useEffect(() => {
  async function loadData() {
    const data = await getPageData();
    setPageData(data);
  }

  loadData();
}, []);

if (!pageData) {
  return <div>Loading...</div>;
}
  return (
  <Routes>

    <Route
      path="/"
      element={
        <>
          <Navbar resumeUrl={pageData.resume} />

          <main className="mainBoxWrap">
            <HomePage pageData={pageData} />
          </main>

          <Footer />
        </>
      }
    />

    <Route
      path="/writing/:slug"
      element={
        <>
          <Navbar />

          <main className="mainBoxWrap">
            <SingleWriting />
          </main>

          <Footer />
        </>
      }
    />
    <Route
      path="/writing"
      element={
        <>
          <Navbar />
          <main className="mainBoxWrap">
            <WritingArchive />
          </main>
          <Footer />
        </>
      }
    />
  </Routes>
);
}
