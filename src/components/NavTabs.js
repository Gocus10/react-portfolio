import React from 'react';

function NavTabs(props) {
  const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];
  return (
      <header className="nav-wrapper">
        <div className="nav-title">
          <h1>Lewis Culbert</h1>
        </div>
        <div>
          <ul className="nav-items">
            {tabs.map(tab => (
              <li className="nav-item" key={tab}>
                <a
                  href={'#' + tab.toLowerCase()}
                  onClick={() => props.handlePageChange(tab)}
                  className={
                    props.currentPage === tab ? 'nav-link active' : 'nav-link'
                  }
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>   
  );
}

export default NavTabs;
