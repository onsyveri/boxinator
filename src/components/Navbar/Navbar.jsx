import './Navbar.css'
import { NavLink } from "react-router-dom";

import keycloak from '../../keycloak';

const Navbar = () => {



    return (
        <nav id="navBar">
          
            <img className= "logoImage" src='https://png.pngtree.com/png-clipart/20210311/original/pngtree-mystery-box-png-image_5986608.jpg' alt='box_image'/>
            <h3 id="navH1" >Boxinator</h3>
            <ul id="navUl" className="d-flex ms-auto order-5">
               
               

                {keycloak.authenticated && (
                    <>
                    
                    <li id="liProf"><NavLink to="/profile">Profile</NavLink></li>
                    <li id="liHome"><NavLink to="/home">Home</NavLink></li>
                    {keycloak.idTokenParsed.roles[0] === "admin" &&
                        <li id="liHome"><NavLink to="/debug">Debug</NavLink></li>
                    }
                    <li id="liLogout"><NavLink>
                    <button id="logoutBtn" onClick={() => keycloak.logout({redirectUri: process.env.REACT_APP_URL})}>Logout</button></NavLink></li>
                   
                    </>
                )}  

                

            </ul>

            
        </nav>
    )

}

export default Navbar