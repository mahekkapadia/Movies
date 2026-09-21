import React from "react";

import './App.css'

import{
  BrowserRouter, 
  Routes,
  Route
} from 'react-router-dom';



import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import MovieSearch from './components/MovieSearch'
import Profile from './components/Profile'
import Form from './components/Form'
import pvtRoute from './components/PvtRoute'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          {/* Popular Movies */}
          <Route
              path="/"
              element={<MovieList />}
          />
          {/* Search Movies */}
          <Route
              path="/search"
              element={<MovieSearch />}
          />

          {/* Movie Details */}
          <Route
              path="/movie/:id"
              element={<MovieDetails />}
          />
          {/* Profile / Sign In */}
          <Route
              path="/profile"
              element={<Profile />}
          />

          {/* Manage Movies - Private Route */}
          <Route
              path="/manage"
              element={
                  <pvtRoute>
                      <Form />
                  </pvtRoute>
                }
          />

        </Routes>
    </BrowserRouter>
  );
}

export default App
