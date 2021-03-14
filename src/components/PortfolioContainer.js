import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import projects from './projects.json'
import './style.css'

function App() {
  const [projectList] = useState(projects);
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio projectList={projectList}/>
      case 'Resume':
        return <Resume/>
      case 'Contact':
        return <Contact/>
      default:
        return <About/>
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          <body className="main">
            {renderPage(currentPage)}
          </body>
        }
      </div>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
