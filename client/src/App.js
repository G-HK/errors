import React, { Component, useEffect } from "react";
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './components/Home';
import ListPage from './components/ListPage';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import Page from './components/Page';

import * as Pages from './components/Pages';

// test
import Page1 from './components/Pages/Page1';



function App() {



  useEffect(() => {

    let test = Object.values(Pages).map((page, index) =>

      // <Route key={index} path={"/" + page.name} element={page.name} />
      console.log(":" + page.name)

    )

    // Pages.Array.forEach((page, index) => {
    //   console.log(page);
    // })

    console.log(test);



  });

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Listpage" exact element={<ListPage />} />


          <Route path="/Page" element={<Page />} >
            {/* <Route path=":Page1" exact element={<Page1 />} />  this one works */}
            {
              Object.values(Pages).map((page, index) =>
                <Route key={index} path={`:${page.name}`} exact element={<page.name />} />
              )
            }
          </Route>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
