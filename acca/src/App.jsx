import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  // Drag start handler
  const handleDragStart = (e, page) => {
    e.dataTransfer.setData('text/plain', page);
  };

  // Drag over handler
  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop
  };

  // Drop handler
  const handleDrop = (e) => {
    e.preventDefault();
    const page = e.dataTransfer.getData('text/plain');
    if (page) {
      navigate(`/${page}`);
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* Left Text Section */}
          <section className="text-section">
            <div className="text-content">
              <p>Seeing beyond the obvious.</p>
              <p>Removing all blinders.</p>
              <p>Going to places you didn't think you would.</p>
              <p>Solving problems you didn't think you could.</p>
              <p>Just a few things that happen</p>
              <p>when you get a bunch of multi-disciplinary</p>
              <p>sideways thinkers working together.</p>
              <p className="highlight">Magic, explosions of creativity</p>
              <p>and unlocking opportunities are some others.</p>
              <p>Because when technologists, product designers,</p>
              <p>writers, behavioural architects, digital strategists,</p>
              <p>art directors, retail experts, design thinkers</p>
              <p>and developers sit in one room,</p>
              <p>you won't expect anything else.</p>
              <p className="brand-intro">Welcome to Sideways.</p>
              <p>Because more often than not,</p>
              <p>that's the only way to go forward.</p>
            </div>
          </section>

          {/* Right Visual Section */}
          <section className="visual-section">
            <div className="circles-container">
              <div
                className="circle circle-1"
                draggable
                onDragStart={(e) => handleDragStart(e, 'page-one')}
              >
                <span>How do we design a differentiated logo ourselves?</span>
              </div>
              <div
                className="circle circle-2"
                draggable
                onDragStart={(e) => handleDragStart(e, 'page-two')}
              >
                <span>How do we get two cities to adopt an amusement park?</span>
              </div>
              <div
                className="circle circle-3"
                draggable
                onDragStart={(e) => handleDragStart(e, 'page-one')}
              >
                <span>How do we introduce India to a new way of banking?</span>
              </div>
              <div
                className="circle circle-4"
                draggable
                onDragStart={(e) => handleDragStart(e, 'page-two')}
              >
                <span>How do we move a spice brand from Pune to kitchens across India?</span>
              </div>
              <div
                className="circle circle-5"
                draggable
                onDragStart={(e) => handleDragStart(e, 'page-one')}
              >
                <span>How do we drive consumer brand preference in a category dominated by trade push & deep margins?</span>
              </div>
              <div
                className="circle circle-6"
                draggable
                onDragStart={(e) => handleDragStart(e, 'page-two')}
              >
                <span>How do we imagine India shops today?</span>
              </div>
            </div>

            {/* Drag Target Element */}
            <div
              className="drag-element"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div className="drag-circle">
                <span>Drag a problem to</span>
                <div className="sideways-logo">Sideways</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
