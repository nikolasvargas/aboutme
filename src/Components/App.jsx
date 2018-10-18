import React, { Component } from 'react';
import 'modules/bulma/css/bulma.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <section className="hero is-fullheight has-background-black">
          <div className="hero-body">
            <div className="container">
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
          </div>
        </section>
      </div>
    )
  }
}

export default App;
