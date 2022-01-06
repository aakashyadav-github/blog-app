import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {BrowserRouter, Route ,Routes } from 'react-router-dom'
import Blog from './Blog';
import CreateBlog from './components/CreateBlog';
import Main from './components/Main';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function App() {
  
  return (
    <div className="App">
      <div class="flex flex-col h-screen">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="/blog" element={<Blog/>}/>
      <Route exact path="/create" element={<CreateBlog/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
