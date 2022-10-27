import './Navbar.css'
import { NavLink } from "react-router-dom";
import { useUser } from '../../context/UserContext';
import keycloak from '../../keycloak';

const baseURL = process.env.REACT_APP_API_URL + "account/"; // Api connection
let userId = "";

const Navbar = () => {

    userId = keycloak.subject;

    const {user, setUser} = useUser();

    return (
        <nav id="navBar">
          
            <h3 id="navH1" >Boxinator</h3>
            <ul id="navUl" className="d-flex ms-auto order-5">
               
               

                {keycloak.authenticated && (
                    <>
                    <li id="liProf"><NavLink to="/profile">{keycloak.tokenParsed.given_name + "'s profile" }</NavLink></li>
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