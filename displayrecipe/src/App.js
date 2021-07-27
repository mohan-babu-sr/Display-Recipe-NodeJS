import React from 'react';
import PostRecipes from './components/PostRecipes';
import { Provider } from 'react-redux';
import { store } from './actions/store';
import NavBar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <PostRecipes />
    </Provider>
  );
}

export default App;
