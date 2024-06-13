import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 



import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Blog from './Pages/Blog/Blog';
import Author from './Pages/Author/Author';
import Contact from './Pages/Contact/Contact';
import {Header} from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import FetchAllData from "./Pages/TestDemo/GetAll";
import DeleteLibrary from "./Pages/TestDemo/Delete";
import CreateLibrary from "./Pages/TestDemo/Post";
import UpdateLibrary from "./Pages/TestDemo/Update";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/author" element={<Author />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/getall" element ={<FetchAllData/>} />
          <Route path="/delete" element ={<DeleteLibrary/>} />
          <Route path="/Post" element ={<CreateLibrary/>} />
          <Route path="/update" element ={<UpdateLibrary/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
