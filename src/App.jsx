import { useContext, useState } from 'react';
import './App.css';
import { AppConText } from './context/contextProvider';
import Home from './pages/home/home'
import FilmPage from './pages/filmInfo/FilmPage'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './pages/search/Search';
import ProfilePage from './pages/profile/ProfilePage';


function App() {

  const appValue = useContext(AppConText)

  return (
    

    <div className={appValue.isDark? "App dark" : "App light"}>

    <BrowserRouter>
          <Routes>
              <Route path="/" element={ appValue.status.page==="home"&& <Home />} />
              <Route path="/film" element={ appValue.status.page==="filmInfo"&& <FilmPage />} />
              <Route path="/search" element={ appValue.status.page==="search"&& <Search />} />
              <Route path="/profile" element={ appValue.status.page==="profile"&& <ProfilePage />} />
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
