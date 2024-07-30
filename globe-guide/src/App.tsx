import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/Common.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar } from './common/Navbar';
import { Crousel } from './components/Crousel';
import { YouTubeVideo } from './components/YouTubeVideo';


function App() {
  return (
<>
<Navbar/>
<Crousel/>
<YouTubeVideo/>
</>
  );
}

export default App;
