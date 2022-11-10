import React from 'react';
import './App.css';

import { Blog, Feactures, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => (
  <div className="App">
  <div className="gradient__bg">
    <Navbar />
    <Header />
  </div>
  <Brand />
  <WhatGPT3 />
  <Feactures />
  <Possibility />
  <CTA />
  <Blog />
  <Footer />
</div>
)

export default App;
