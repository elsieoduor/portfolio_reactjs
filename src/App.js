import './App.css';
import React from 'react';
import { Brand, CTA, NavBar} from './Components'
import {Footer, Header, Blog, Possibility, What, Features} from './Containers'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  )
}

export default App;
