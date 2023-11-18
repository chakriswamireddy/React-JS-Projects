import { useEffect, useState } from 'react';
import Romi from '../images/Romi.png'
import Ethereum from '../images/ethereum.png'
import wallet from '../images/wallet.png'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function Navbar() {

    const [displayMenuIcon,setDisplayMenuIcon] = useState(true)

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      
    };
    console.log(screenWidth)

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const navbarClick = () => {
        setDisplayMenuIcon(!displayMenuIcon);

    }

  return (

    <div className='navbar py-2'>
        
        <div className={`${screenWidth<800 && !displayMenuIcon ?'fixed left-0  z-10':''} ml-2 `}>

            <img src={Romi} alt="" height="45px"  width="45px"/>
            <span className='text-xl'>Romi Finance </span>
        </div>
        
        <nav>

        <i className={`fa fa-${displayMenuIcon ?'bars top-7 ':'times translate-x-52 z-10 '} text-white absolute left-2 top-6 cursor-pointer   menu-icon`} aria-hidden="true" onClick={navbarClick} ></i>
        <ul className={`${displayMenuIcon ? 'hidden':'nav-list'} ${screenWidth>800?'nav-list':'' }  gray-text  font-semibold cursor-pointer mx-16`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li>NFT</li>    
            <li>Earn</li>
            <li>Buy</li>
            <li>Referrals</li>
            <li>Ecosystem</li>
            <li>About</li>

        </ul>

        </nav>
        

        <button className='green-btn'>Trade</button>
        <div className='hover:bg-slate-800 cursor-pointer text-sm'>
        <img src={wallet} alt="wallet" height="20px" width="20px" />
            
            <span>Connect <span className={`${screenWidth<1000 ? 'hidden':''} `} >Wallet</span> </span>
        </div>
        <div className='hover:bg-slate-800 ' >
        <img src={Ethereum} alt="" height='22px' width='22px'  />
            <span></span>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            
        </div>
        
    </div>

  )
}

export default Navbar