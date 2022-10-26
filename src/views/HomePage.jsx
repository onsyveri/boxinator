import { useState } from "react"
import HomePackages from "../pages/HomePage/HomePackages";
import PackageModal from "../components/Modal/PackageModal";

import AdminForm from "../components/Admin/AdminForm";
import keycloak from "../keycloak";
import CountryMultiplier from "../components/Admin/CountryMultiplier";


const HomePage = () => {

console.log(keycloak.idTokenParsed.roles);

const [isOpen, setIsOpen] = useState(false)
    console.log(keycloak.idTokenParsed.roles[1]);
    return(
        <div id="homeBody">

            {keycloak.idTokenParsed.roles[0] === "admin" &&
                <>
                    <h1 id="multiH1">Update country multiplier</h1>
                    <CountryMultiplier />
                </>
            }

           
            <div id="center">
                <button id="btnHome" type="button" className="btn btn-info" onClick={() => setIsOpen(true)}>New Package</button>
            </div>
            {isOpen && <PackageModal setIsOpen={setIsOpen} />}

            {keycloak.idTokenParsed.roles[1] === "user" && keycloak.idTokenParsed.roles[0] !== "admin" &&
                <> 
                    <h1 id="homeH1">Your Packages</h1>
                    <HomePackages />
                </>
            }
            
            {keycloak.idTokenParsed.roles[0] === "admin" &&
                <>
                    <h2>All Packages</h2>
                    <AdminForm />
                </>
            }
              
        
        </div>
    )
}
export default HomePage;
