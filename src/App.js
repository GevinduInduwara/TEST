import 'bootstrap/dist/css/bootstrap.min.css'; // Corrected import path for Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Corrected import path for Bootstrap JS
import './App.css';
import Addoffer from './pages/adminAddPackages/Addoffer'
import AllOffer from './pages/adminAllPackages/AllOffers'
import UpdateOffer from './pages/adminPackageUpdate/UpdateOffer'
import Home from '../src/pages/Homepage/Home'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Aboutus from '../src/pages/AboutusPage/Aboutus';
import Grid from '../src/pages/ClientGridView/ClientGridView';


export default function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
             <Route path='/view' element={<AllOffer/>}/>
            <Route path='/add' element={<Addoffer/>}/>
            <Route path='/UpdateOffer' element={<UpdateOffer/>}/>
            <Route path='/Aboutus' element={<Aboutus/>}/>
            <Route path='/Grid' element={<Grid/>}/>

            {/* <Route path='/sidenav' element={<SideNavBar/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}
