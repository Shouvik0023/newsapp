
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// import About from './components/About';
import LoadingBar from 'react-top-loading-bar';
import Home from './components/Home';


export default class App extends Component {

         pagesize= 6;
         country= "us";
         apiKey = process.env.REACT_APP_NEWS_API

         state = {
          progress:0
        }
      
        setProgress = (progress)=>{
          this.setState({progress: progress})
        }
 
  render() {
    return (
      <div>
        <Router>
            <Navbar category="Categories"/>
            <LoadingBar
             height={4}
             color='#f11946'
             progress={this.state.progress} />
                   <div className="container">
                <Routes>
                      <Route exact path="/about" element={<About/>}/>
                      <Route exact path='/home' element={<Home/>}/>
                      <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" category="general" pagesize={this.pagesize} country={this.country}/>}/>
                      <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" category="business" pagesize={this.pagesize} country={this.country}/>}/>
                      <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" category="entertainment" pagesize={this.pagesize} country={this.country}/>}/>
                      <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" category="science" pagesize={this.pagesize} country={this.country}/>}/>
                      <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" category="health" pagesize={this.pagesize} country={this.country}/>}/>
                      <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" category="sports" pagesize={this.pagesize} country={this.country}/>}/>
                      <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" category="technology" pagesize={this.pagesize} country={this.country}/>}/>
                     
                      
                 </Routes>
                 </div>
        </Router>
      </div>
    )
  }
}

