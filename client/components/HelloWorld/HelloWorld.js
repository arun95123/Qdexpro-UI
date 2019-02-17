import React from 'react';
import './HelloWorld.Style.scss'

class helloWorld extends React.Component {
  render() {
  return (
    <div className="container">
      <div className="row1">
        <h1>Welcome To Qdex Pro</h1>
      </div>
      <div className="row2">
        <button type="button">Create New Project</button>
        <button type="button">Open Existing Project</button>
      </div>
      <div className="row3">
        <div className="footer-left">
          <h1>CopyRights</h1>
          <h3>Sample Text for Copyrights</h3>
        </div>
        <div className="footer-right">
          <h1>About</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</h3>
        </div>
      </div>
    </div>
  );
  }
}

export default helloWorld;
