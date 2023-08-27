import React, { useState } from "react";
import './styles/App.css';
import './assets/fonts/Fonts.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Overview from "./pages/Overview";
import Favorite from "./pages/Favorite";
import Community from "./pages/Community";
import Setting from "./pages/Setting";
import { IngsContext } from "./context";


function App() {

  const ings = []

  return (
    <IngsContext.Provider value={{
      ings
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Overview/>}/>
          <Route path='/recipes' element={<Recipes/>}/>
          <Route path='/favorite' element={<Favorite/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/setting' element={<Setting/>}/>
        </Routes>
      </BrowserRouter>
    </IngsContext.Provider>
  );
}

export default App;
