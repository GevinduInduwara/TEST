import React from 'react'
import './fixednav.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from '../fixednavbar/assets/NewLogoPng.png';
import { Link } from 'react-router-dom';

export default function FixedNav({selectedPage}) {
  return (
    <nav className='navbar_con'>
        <Link to={"/"} href="#" className='Logo'>
            <img className='logoImage' src={logo} alt="Logo Image" />
        </Link>
        <ul className="navPages">
            <li className={`navPage ${selectedPage == 'Home' ? 'active' : null}`}><Link to={"/"} href="">HOME</Link></li>
            <li className={`navPage ${selectedPage == 'packages' ? 'active' : null}`}><Link to={"/cusPackage"} href="">Packages</Link></li>
            <li className={`navPage ${selectedPage == 'offers' ? 'active' : null}`}><Link to={"/Grid"}>Offers</Link></li>
            <li className={`navPage ${selectedPage == 'dayTour' ? 'active' : null}`}><Link>Day Tours</Link></li>
            <li className={`navPage ${selectedPage == 'more' ? 'active' : null}`}><Link>More</Link></li>
            {/* <li className="navPage shopping"><a href=""><ShoppingCartRoundedIcon sx={{ fontSize: 20 }}/></a></li> */}
            <li className="navPage shopping"><a href=""><AccountCircleOutlinedIcon sx={{ fontSize: 30 }}/></a></li>
        </ul>
      </nav>
  )
}


