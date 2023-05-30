import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Posted from './components/Posted';
import Home from './components/Home';
import Profile from './components/Profile';
import Premium from './components/Premium';
import Welcome from './components/Welcome';
import LeftSelection from './components/Leftsection';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Produce from './components/Produce ';
import UserPostPage from './components/UserPostPage';
import Appfull from './components/fullversion';
import Applite from './components/drumLite';

// import Fix from './components/Fix';

function App() {
  return (
    <div className='app'>
    <Router>
        <Routes>
          <Route exact path="/" element={<Welcome/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/posted" element={<Posted/>} />
          <Route exact path="/premium" element={<Premium/>} />
          <Route exact path="/posted" element={<Posted/>} />
          <Route exact path ="/produce" element = {<Produce/>}/>
          <Route exact path ="/user-post-page" element = {<UserPostPage/>}/>
          <Route exact path ="/music-lite" element = {<Applite/>}/>
          <Route exact path ="/music-premium" element = {<Appfull/>}/>
        </Routes>
      </Router>
      {/* <Produce></Produce> */}
      </div>  
    // <Login></Login>
    // <Signup></Signup>
    // <Posted></Posted>
    // <Home></Home>
    // <Fix></Fix>
    // <Profile></Profile>
    // <Premium></Premium>
  );
}

export default App;
