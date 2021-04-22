import React from 'react'
// import makeAssetsPath from 'utils/configHelper';

function Landing() {
  return (
    <div className="landing">
      {/* <img src={makeAssetsPath('/assets/landing-hero.jpg')} className="landing-hero" alt="hero" /> */}
      <div className="landing-nav">
        <button className="landing-btn">about</button>
        <button className="landing-btn">features</button>
        <button className="landing-btn">login</button>
        <button className="landing-btn">sign up</button>
      </div>
      <div className="landing-intro">
        <div className="landing-intro-title">
          
        </div>
        <div className="landing-intro-panel">
          <div className=""></div>
        </div>
      </div>
      <div className="landing-about">
        <div className="landing-about-title">
          
        </div>
        <div className="landing-about-panel">
          
        </div>
      </div>
      <div className="landing-features">
        <div className="landing-features-title">
          
          </div>
        <div className="landing-features-panel">
          
        </div>
      </div>
    </div>
  );
}

export default Landing;
