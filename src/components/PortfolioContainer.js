import React, { useState } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects'
// import About from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';
import Header from './Header'
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="portfolio-container">
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderPage()}
    </div>
    
    <Footer/>
    </div>
  );
}
