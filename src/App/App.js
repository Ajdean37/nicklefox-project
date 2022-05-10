import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import Home from '../views/Home/Home';
import About from '../views/About/About';
import Services from '../views/Services/Services';
import SuccessStories from '../views/SuccessStories/SuccessStories';
import Careers from '../views/Careers/Careers';
import Blog from '../views/Blog/Blog';
import Search from '../views/Search/Search';
import NoMatch from '../views/NoMatch/NoMatch';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Services' element={<Services />} />
        <Route path='SuccessStories' element={<SuccessStories />} />
        <Route path='Careers' element={<Careers />} />
        <Route path='Blog' element={<Blog />} />
        <Route path='Search' element={<Search />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
